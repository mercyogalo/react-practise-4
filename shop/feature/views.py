from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serialize import ContactSerializer
from django.core.mail import send_mail
from django.middleware.csrf import get_token
from django.http import JsonResponse




def get_csrf_token(request):
    csrf_token=get_token(request)
    return JsonResponse({'csrf_token': csrf_token})








class ContactFormAPIView(APIView):
    def post(self, request):
        serializer = ContactSerializer(data=request.data)

        if serializer.is_valid():
            name = serializer.validated_data['name']
            email = serializer.validated_data['email']
            subject = serializer.validated_data['subject']
            message = serializer.validated_data['message']

            serializer.save()

            try:
                send_mail(
                    f'New message received from {name}',
                    f'\n\n{email}\nSubject: {subject}\n\nMessage:\n{message}',
                    'ogalomercy8@gmail.com',
                    ['ogalomercy8@gmail.com'],  
                    fail_silently=False
                )

                send_mail(
                    'Message received successfully',
                    'Thank you for reaching out to me. I will get back to you shortly.\n\n— Ogalomercy.com',
                    'ogalomercy8@gmail.com',
                    [email],  
                    fail_silently=False
                )

                return Response({'message': 'Your message has been sent successfully'}, status=status.HTTP_201_CREATED)

            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
