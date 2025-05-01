from django.urls import path
from . views import ContactFormAPIView, get_csrf_token;

app_name="features"

urlpatterns = [
  path('contact/inquiry/',ContactFormAPIView.as_view(), name='contactinquiry'),
  path('get_csrf/',get_csrf_token)
  
]

