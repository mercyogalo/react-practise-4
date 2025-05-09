# Generated by Django 5.0.6 on 2025-05-01 15:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("feature", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Contact",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=250)),
                ("email", models.EmailField(max_length=254)),
                ("subject", models.CharField(max_length=250)),
                ("message", models.CharField(max_length=1000)),
            ],
        ),
        migrations.DeleteModel(
            name="Newsletter",
        ),
    ]
