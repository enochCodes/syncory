from django.contrib.auth.base_user import AbstractBaseUser
from django.db import models
from django.utils import timezone


class TimestampMixin(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class BaseUser(TimestampMixin, AbstractBaseUser):
    user_id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField(max_length=100, unique=True)
    phone = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=128)  # AbstractBaseUser will handle this securely

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'phone']

    def __str__(self):
        return self.username

    class Meta:
        abstract = True


class Organizer(BaseUser):
    brand_name = models.CharField(max_length=100)
    description = models.TextField(max_length=500)
    website = models.URLField(max_length=200, null=True, blank=True)  # Slightly increased length

    class Meta:
        verbose_name = 'Organizer'
        verbose_name_plural = 'Organizers'


class Attendee(BaseUser):
    # No additional fields for now, but can be extended later
    class Meta:
        verbose_name = 'Attendee'
        verbose_name_plural = 'Attendees'
