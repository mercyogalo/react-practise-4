from . models import Contact
from rest_framework import serializers

class ContactSerializer(serializers.ModelSerializer):
    model=Contact
    fields='__all__'



