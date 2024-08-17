# Generated by Django 5.1 on 2024-08-17 08:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='attendee',
            old_name='attendee_id',
            new_name='id',
        ),
        migrations.RenameField(
            model_name='organizer',
            old_name='address',
            new_name='brand_name',
        ),
        migrations.RenameField(
            model_name='organizer',
            old_name='organizer_description',
            new_name='description',
        ),
        migrations.RenameField(
            model_name='organizer',
            old_name='organizer_id',
            new_name='id',
        ),
        migrations.RemoveField(
            model_name='attendee',
            name='address',
        ),
        migrations.RemoveField(
            model_name='attendee',
            name='attendee_dob',
        ),
        migrations.RemoveField(
            model_name='attendee',
            name='attendee_first_name',
        ),
        migrations.RemoveField(
            model_name='attendee',
            name='attendee_last_name',
        ),
        migrations.RemoveField(
            model_name='attendee',
            name='city',
        ),
        migrations.RemoveField(
            model_name='attendee',
            name='country',
        ),
        migrations.RemoveField(
            model_name='attendee',
            name='state',
        ),
        migrations.RemoveField(
            model_name='attendee',
            name='zip',
        ),
        migrations.RemoveField(
            model_name='organizer',
            name='city',
        ),
        migrations.RemoveField(
            model_name='organizer',
            name='country',
        ),
        migrations.RemoveField(
            model_name='organizer',
            name='organizer_name',
        ),
        migrations.RemoveField(
            model_name='organizer',
            name='organizer_website',
        ),
        migrations.RemoveField(
            model_name='organizer',
            name='state',
        ),
        migrations.RemoveField(
            model_name='organizer',
            name='zip',
        ),
        migrations.AddField(
            model_name='attendee',
            name='last_login',
            field=models.DateTimeField(blank=True, null=True, verbose_name='last login'),
        ),
        migrations.AddField(
            model_name='organizer',
            name='last_login',
            field=models.DateTimeField(blank=True, null=True, verbose_name='last login'),
        ),
        migrations.AddField(
            model_name='organizer',
            name='website',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='attendee',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='attendee',
            name='password',
            field=models.CharField(max_length=128),
        ),
        migrations.AlterField(
            model_name='attendee',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='organizer',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='organizer',
            name='password',
            field=models.CharField(max_length=128),
        ),
        migrations.AlterField(
            model_name='organizer',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
