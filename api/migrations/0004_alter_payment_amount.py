# Generated by Django 4.2.7 on 2024-01-25 16:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_orders_options_alter_payment_amount'),
    ]

    operations = [
        migrations.AlterField(
            model_name='payment',
            name='amount',
            field=models.DecimalField(decimal_places=2, default=0, editable=False, max_digits=8),
        ),
    ]
