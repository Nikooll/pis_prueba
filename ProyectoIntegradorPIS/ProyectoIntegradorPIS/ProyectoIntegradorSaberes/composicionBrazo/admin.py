from django.contrib import admin

from composicionBrazo.models import Base, Forearm, Gripper

# Register your models here.

admin.site.register(Base)
admin.site.register(Forearm)
admin.site.register(Gripper)