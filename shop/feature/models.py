from django.db import models

# Create your models here.
class Newsletter(models.Model):
    email=models.EmailField(max_length=254)
    isTrue=models.BooleanField(default=False)
    

    def __str__(self):
        return self.email

    