from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.


def contact_form(request):
    if request.method=="POST":
        name=request.POST['name']
        email=request.POST['email']
        message=request.POST['message']
        
        
        
        return HttpResponse
    return HttpResponse