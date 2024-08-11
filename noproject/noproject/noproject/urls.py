from django.urls import path
from myapp import views

urlpatterns = [
    path('user/', views.UserApi),
    path('user/<int:id>/', views.UserApi),
    path('admin/', views.AdminApi),
    path('admin/<str:id>/', views.AdminApi),
]