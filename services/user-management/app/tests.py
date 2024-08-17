from django.test import TestCase
import os
import sys
import django

sys.path.append(os.path.dirname(os.path.abspath(__file__)))

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "services.user-management.user_management.settings")
django.setup()


# Create your tests here.
class test_user_management(TestCase):

    @classmethod
    def setUpTestData(cls):
        print("setUpTestData: Run once to set up non-modified data for all class methods.")

    def setUp(self):
        print("setUp: Run once for every test method to setup clean data.")

    def tearDown(self):
        print("tearDown: Run once for every test method to clean up.")

    def test_register(self):
        pass

    def test_login(self):
        pass

    def test_logout(self):
        pass

    def test_get_attendee(self):
        pass

    def test_get_organizer(self):
        pass

    def test_delete_account(self):
        pass
