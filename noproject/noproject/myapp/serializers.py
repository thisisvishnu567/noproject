from rest_framework import serializers
from myapp.models import User, Admin

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name', 'phone', 'operator', 'email', 'password')

class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = ('id', 'admin_name', 'admin_email', 'admin_password')
