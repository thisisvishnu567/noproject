from django.db import models

class User(models.Model):
    id = models.CharField(max_length=50, primary_key=True)
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=15)
    operator = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Admin(models.Model):
    id = models.CharField(max_length=50, primary_key=True)
    admin_name = models.CharField(max_length=255)
    admin_email = models.EmailField(unique=True)
    admin_password = models.CharField(max_length=255)

    def __str__(self):
        return self.admin_name
