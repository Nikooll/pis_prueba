from django.contrib import admin

from movimientoBrazo.models import StepperMotor, ServoMotor, Encoder, Boton

# Register your models here.
admin.site.register(StepperMotor)
admin.site.register(ServoMotor)
admin.site.register(Encoder)
admin.site.register(Boton)