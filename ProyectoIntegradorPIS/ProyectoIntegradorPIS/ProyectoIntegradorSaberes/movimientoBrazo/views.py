from django.shortcuts import render, redirect


# Create your views here.

def index(request):
    return render(request, 'index.html')

def componentes(request):
    return render(request, 'componentes.html')

def estructura(request):
    return render(request, 'estructura.html')

def RegistroForm(request):
    if request.method == 'POST':
        form = RegistroForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('index.html')
    else:
        form = RegistroForm()
    context = {
        'form': form
    }
    return render(request, 'registro.html', context)