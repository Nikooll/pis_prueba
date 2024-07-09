from django.db import models

# Create your models here.

class Base(models.Model):
    nombre = models.CharField(max_length=25)
    descripcion = models.TextField()

    def __str__(self):
        return self.nombre

class Forearm(models.Model):
    nombre = models.CharField(max_length=25)
    descripcion = models.TextField()

    def __str__(self):
        return self.nombre

class Gripper(models.Model):
    nombre = models.CharField(max_length=25)
    descripcion = models.TextField()

    def __str__(self):
        return self.nombre

