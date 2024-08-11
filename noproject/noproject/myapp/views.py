# # myapp/views.py

# from django.shortcuts import render
# from django.views.decorators.csrf import csrf_exempt
# from rest_framework.parsers import JSONParser
# from django.http.response import JsonResponse

# from myapp.models import User, Admin
# from myapp.serializers import UserSerializer, AdminSerializer

# @csrf_exempt
# def UserApi(request, id=0):
#     if request.method == "GET":
#         users = User.objects.all()
#         user_ser = UserSerializer(users, many=True)
#         return JsonResponse(user_ser.data, safe=False)
#     elif request.method == "POST":
#         user_data = JSONParser().parse(request)
#         user_ser = UserSerializer(data=user_data)
#         if user_ser.is_valid():
#             user_ser.save()
#             return JsonResponse("Added Successfully", safe=False)
#         return JsonResponse("Failed to Add", safe=False)
#     elif request.method == "PUT":
#         user_data = JSONParser().parse(request)
#         user = User.objects.get(id=user_data['id'])
#         user_ser = UserSerializer(user, data=user_data)
#         if user_ser.is_valid():
#             user_ser.save()
#             return JsonResponse("Updated Successfully", safe=False)
#         return JsonResponse("Update Failed")
#     elif request.method == "DELETE":
#         user = User.objects.get(id=id)
#         user.delete()
#         return JsonResponse('Deleted Successfully', safe=True)


from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from .models import User , Admin
from .serializers import UserSerializer , AdminSerializer
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def UserApi(request, id=None):
    if request.method == 'GET':
        if id:
            try:
                user = User.objects.get(id=id)
                serializer = UserSerializer(user)
                return Response(serializer.data)
            except User.DoesNotExist:
                return HttpResponse(status=404)
        else:
            users = User.objects.all()
            serializer = UserSerializer(users, many=True)
            return Response(serializer.data)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = UserSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    elif request.method == 'PUT':
        try:
            user = User.objects.get(id=id)
        except User.DoesNotExist:
            return HttpResponse(status=404)

        data = JSONParser().parse(request)
        serializer = UserSerializer(user, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    elif request.method == 'DELETE':
        try:
            user = User.objects.get(id=id)
        except User.DoesNotExist:
            return HttpResponse(status=404)

        user.delete()
        return HttpResponse(status=204)

@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def AdminApi(request, id=None):
    if request.method == 'GET':
        if id:
            try:
                admin = Admin.objects.get(id=id)
                serializer = AdminSerializer(admin)
                return Response(serializer.data)
            except Admin.DoesNotExist:
                return HttpResponse(status=404)
        else:
            admins = Admin.objects.all()
            serializer = AdminSerializer(admins, many=True)
            return Response(serializer.data)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = AdminSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    elif request.method == 'PUT':
        try:
            admin = Admin.objects.get(id=id)
        except Admin.DoesNotExist:
            return HttpResponse(status=404)

        data = JSONParser().parse(request)
        serializer = AdminSerializer(admin, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    elif request.method == 'DELETE':
        try:
            admin = Admin.objects.get(id=id)
        except Admin.DoesNotExist:
            return HttpResponse(status=404)

        admin.delete()
        return HttpResponse(status=204)