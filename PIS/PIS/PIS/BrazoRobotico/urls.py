from django.urls import path
from .views import *

urlpatterns = [path('', controles, name='controles')]