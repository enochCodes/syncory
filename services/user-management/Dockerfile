# Use an official Python runtime as a parent image
FROM python:3.12-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container
COPY . /app

# Install any needed packages specified in Pipfile
RUN pip install pipenv
RUN pipenv install --system --deploy --ignore-pipfile

# Make port 8000 available to the world outside this container
EXPOSE 8000

# Define environment variable
ENV DJANGO_SETTINGS_MODULE=user_management.settings

# Run the application
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
