from django.db import models

class Customer(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
    
    
class Category(models.Model):
    name=models.CharField(max_length=50)

    class Meta:
        verbose_name_plural='Categories'

    def __str__(self):
        return self.name


class MenuItem(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=8, decimal_places=2)
    category= models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
    

class RestaurantTable(models.Model):
    name=models.CharField(max_length=50)

    def __str__(self):
        return self.name

#     def __str__(self):
#         return f"Order #{self.id} - {self.customer}"
    

class Orders(models.Model):

    ORDER_STATUS=(('In-House','In-House'),
                  ('Delivery','Delivery'))

    customer = models.ForeignKey(Customer, on_delete=models.CASCADE,default='Walking Customer')
    menu_item = models.ForeignKey(MenuItem, on_delete=models.CASCADE)
    table_number = models.ForeignKey(RestaurantTable,on_delete=models.CASCADE)
    status = models.CharField(max_length=20,choices=ORDER_STATUS, default='In-House')    
    quantity = models.IntegerField()
    sub_total = models.DecimalField(max_digits=8, decimal_places=2,default=0,editable=False)
    order_date=models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural='Orders'

    def __str__(self):
        return f"{self.quantity} x {self.menu_item.name} in Order #{self.id}"
    
    # multiply orders_price by order_quantity
    def get_sub_total(self):
        return round(float(self.menu_item.price)*float(self.quantity))

    def save(self,*args, **kwargs):
        self.sub_total=self.get_sub_total()
        super().save(*args, **kwargs)


class Payment(models.Model):

    PAYMENT_MODE=(('Cash','Cash'),('Mpesa','Mpesa'))

    order = models.OneToOneField(Orders, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=8, decimal_places=2,default=0)
    payment_date = models.DateTimeField(auto_now_add=True)
    payment_method = models.CharField(max_length=50,choices=PAYMENT_MODE)

    def __str__(self):
        return f"Payment for Order #{self.order.id}"


    def save(self,*args, **kwargs):
        self.amount=self.order.get_sub_total()
        super().save(*args, **kwargs)
