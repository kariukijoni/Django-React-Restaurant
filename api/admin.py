from django.contrib import admin
from .models import *

# Register your models here.

model_list=[Customer,Category,MenuItem,RestaurantTable,Orders,Payment]

class PaymentAdmin(admin.ModelAdmin):
    readonly_fields=('amount')

admin.site.register(model_list)
