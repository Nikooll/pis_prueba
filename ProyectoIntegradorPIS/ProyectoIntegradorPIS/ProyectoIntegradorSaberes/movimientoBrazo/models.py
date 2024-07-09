from django.db import models

# Create your models here.

class StepperMotor(models.Model):
    nombre = models.CharField(max_length=25)
    descripcion = models.TextField()

    def __str__(self):
        return self.nombre

class ServoMotor(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()

class Encoder(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()

    def __str__(self):
        return self.nombre

class Boton(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()

    def __str__(self):
        return self.nombre

