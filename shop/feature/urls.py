from django.urls import path
from . views import ContactFormAPIView;

app_name="features"

urlpatterns = [
  path('contact/inquiry/',ContactFormAPIView.as_view())
  
]

