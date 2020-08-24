# Generated by Django 3.0.7 on 2020-08-09 14:51

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('adminpanel', '0013_auto_20200729_2058'),
    ]

    operations = [
        migrations.AlterField(
            model_name='practice',
            name='slug',
            field=models.SlugField(default=uuid.UUID('0fbbb02e-8e22-49d0-98d5-b923718411dc'), max_length=250),
        ),
        migrations.AlterField(
            model_name='track',
            name='slug',
            field=models.SlugField(default=uuid.UUID('fda002d2-85e7-41f5-8ab0-3b0a62135dc9'), max_length=250),
        ),
    ]