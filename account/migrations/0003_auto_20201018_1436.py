# Generated by Django 3.0.7 on 2020-10-18 08:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0002_auto_20201013_0146'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='secondary_email',
            field=models.EmailField(blank=True, max_length=254, null=True, unique=True),
        ),
    ]