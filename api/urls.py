from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import (CustomerList,CustomerDetail,MenuItemList,MenuItemDetail,OrderList,OrderDetail,
                    PaymentList,PaymentDetail,CategoryList,CategoryDetail,RestaurantTableList,
                    RestaurantTableDetail,)

router = DefaultRouter()

urlpatterns = [
    path('', include(router.urls)),
    path('customers/',CustomerList.as_view(),name='customers'),
    path('customer/<int:pk>/',CustomerDetail.as_view(),name='customer-detail'),
    path('menu-items/',MenuItemList.as_view(),name='menu-items'),
    path('menu-item/<int:pk>/',MenuItemDetail.as_view(),name='menu-item-detail'),
    path('orders/',OrderList.as_view(),name='orders'),
    path('order/<int:pk>/',OrderDetail.as_view(),name='order-detail'),
    path('payments/',PaymentList.as_view(),name='payments'),
    path('payment/<int:pk>/',PaymentDetail.as_view(),name='payment-detail'),
    path('categories/',CategoryList.as_view(),name='categories'),
    path('category/<int:pk>/',CategoryDetail.as_view(),name='category-detail'),
    path('restaurant-tables/',RestaurantTableList.as_view(),name='restaurants'),
    path('restaurant-table/<int:pk>/',RestaurantTableDetail.as_view(),name='restaurant-table-detail'),
    

]
