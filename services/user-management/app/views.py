import http

from django.contrib.auth.models import User
from django.shortcuts import render
from django.http import HttpResponse
from .models import Organizer, Attendee


# Create your views here.
def register(request):
    if http.HTTPMethod == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        phone = request.POST['phone']
        address = request.POST['address']
        city = request.POST['city']
        state = request.POST['state']
        country = request.POST['country']
        zip = request.POST['zip']

        user = User.objects.create_user(username=username, email=email, password=password)
        user.save()

        if request.POST['organizer']:
            organizer_name = request.POST['organizer_name']
            organizer_description = request.POST['organizer_description']
            organizer_website = request.POST['organizer_website']

            organizer = Organizer(organizer_name=organizer_name, organizer_description=organizer_description,
                                  organizer_website=organizer_website)
            organizer.save()
        else:
            attendee_first_name = request.POST['attendee_first_name']
            attendee_last_name = request.POST['attendee_last_name']
            attendee_dob = request.POST['attendee_dob']

            attendee = Attendee(attendee_first_name=attendee_first_name, attendee_last_name=attendee_last_name,
                                attendee_dob=attendee_dob)
            attendee.save()


def login():
    pass


def logout():
    pass


def get_attendee():
    pass


def get_organizer():
    pass

def delete_account():
    pass