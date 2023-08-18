from random import randint,choice

from django.shortcuts import render, HttpResponse, redirect
from django.views.generic import FormView
from django.urls import reverse
from paypal.standard.forms import PayPalPaymentsForm

from .models import *
# Create your views here.
def main(request):
    goods=Goods.objects.filter(categoria__slug="hookahs").order_by("-id")[0:6]
    chasha=Goods.objects.filter(categoria__slug="bowls").order_by("-id")[0:8]
    categ=Categoria.objects.all()

    add={"goods":goods,"chasha":chasha,"categ":categ}
    return render(request,"hookah/main.html",add)

def pk(request,slug):
    goods=Goods.objects.get(slug=slug)
    categ = Categoria.objects.all()
    print(goods)
    add={"goods":goods,"categ":categ }
    return render(request,"hookah/pk.html",add)

def category(request,slug):
    goods = Goods.objects.filter(categoria__slug=slug)
    categ = Categoria.objects.all()
    model=Model.objects.filter(categoria__slug=slug)
    add = {"goods": goods, "categ": categ,"model":model}
    return render(request, "hookah/categoria.html", add)

def model(request):
    if request.method=="GET":
        a=request.GET.getlist("model")
        b=request.GET.get("id")
        print(a)
        categ = Categoria.objects.all()
        model = Model.objects.filter(categoria__id=b)
        goods=Goods.objects.filter(model__slug__in=a)
        add={"goods":goods,"categ":categ,"model":model}
        if a==[]:
            return redirect(request.META.get('HTTP_REFERER'))
        else:
            return render(request, "hookah/model.html",add)

def basket(request):
    if request.method=="POST":
        add={
            "name":request.POST.get("name"),
            "image": request.POST.get("image"),
            "price": request.POST.get("price"),
            "descr": request.POST.get("descr"),
            "id": request.POST.get("id"),
            "quan": int(request.POST.get("quan")),
             }
        if not request.session.get("basket"):
            request.session["basket"]=list()
        else:
            request.session["basket"] =list(request.session["basket"])

        item=next((i for i in request.session["basket"] if i["name"]==add["name"]),False)

        if not item:
            request.session["basket"].append(add)
            request.session.modified=True
        elif item:
            for i in request.session["basket"]:
                if i["name"]==add["name"]:
                    qu=10-i["quan"]
                    if add["quan"]>qu:
                        i["quan"]+=qu
                    else:
                        i["quan"]+=add["quan"]
        return redirect(request.META.get('HTTP_REFERER'))

    else:
        categ = Categoria.objects.all()
        return render(request,"hookah/basket.html",{"categ":categ})


def delete(request):
    if request.method == "POST":
        for i in request.session["basket"]:
            if i["name"] == request.POST.get("delete"):
                i.clear()
        while {} in  request.session["basket"]:
            request.session["basket"].remove({})
        request.session.modified=True
    return redirect(request.META.get('HTTP_REFERER'))


def clera(request):
    del request.session["basket"]
    return redirect(request.META.get('HTTP_REFERER'))

def plus(request):
    if request.method=="POST":
        for i in request.session["basket"]:
            if i["name"]==request.POST.get("plus") and i["quan"]<10:
                i["quan"]+=1
                request.session.modified=True
    return redirect(request.META.get('HTTP_REFERER'))

def minus(request):
    if request.method == "POST":
        print(request.POST.get("minus"))
        for i in request.session["basket"]:
            if i["name"] == request.POST.get("minus") and i["quan"]>1:

                i["quan"] -= 1
                request.session.modified = True
    return redirect(request.META.get('HTTP_REFERER'))



def search(request):
    if request.method=="GET":
        search=Goods.objects.raw(f"SELECT * FROM hookah_goods WHERE name LIKE '{request.GET.get('search')}%' ")
        categ = Categoria.objects.all()
        return render(request,"hookah/search.html",{"search":search,"input":request.GET.get('search'),"categ":categ})


def pay(request):
    alp="A,B,C,D,E,F,G,H,I,K,L,M,N,O,P,Q,R,S,T,V,X,Y,Z"
    paypal_dict = {
        'business': 'sb-mo60v27045996@business.example.com',
        'amount':request.GET.get("price"),
        'currency_code': 'USD',
        'item_name': request.GET.get("goodsname"),
        'invoice': f"{choice(alp)}{randint(0,100)}{randint(100,500)}{choice(alp)}{choice(alp)}",
        'notify_url': request.build_absolute_uri(reverse('paypal-ipn')),
        'return_url': request.build_absolute_uri(reverse('main')),
        'cancel_return': request.build_absolute_uri(reverse('basket')),
        'lc': 'EN',
        'no_shipping': '1',


    }

    # Create the instance.
    form = PayPalPaymentsForm(initial=paypal_dict)
    context = {"form": form}
    return render(request, "hookah/payment.html", context)

