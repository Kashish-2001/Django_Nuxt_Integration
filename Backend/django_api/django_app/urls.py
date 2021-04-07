from django.urls import path
from .views import *


urlpatterns = [
    path('post/', post_list, name='post_list')
]
