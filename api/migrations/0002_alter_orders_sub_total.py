# Generated by Django 4.2.7 on 2024-01-25 15:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orders',
            name='sub_total',
            field=models.DecimalField(decimal_places=2, default=0, editable=False, max_digits=8),
        ),
    ]
