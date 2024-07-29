from django.shortcuts import render

def controles(request):
    return render(request, 'controlBrazo.html')

def index(request):
    return render(request, 'index.html')

def login(request):
    return render(request, 'login.html')

def registro(request):
    return render(request, 'registro.html')

def componentes(request):
    return render(request, 'componentes.html')

def mapa(request):
    return render(request, 'mapa.html') 

