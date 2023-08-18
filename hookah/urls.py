from django.urls import path,include
from . import views
urlpatterns = [
    path('',views.main,name="main"),
    path('tovar/<slug:slug>',views.pk,name="pk"),
    path("category/<slug:slug>",views.category,name="category"),
    path("model",views.model,name="model"),
    path("basket",views.basket,name="basket"),
    path("delete",views.delete,name="delete"),
    path("clear",views.clera,name="clear"),
    path("plus",views.plus,name="plus"),
    path("minus",views.minus,name="minus"),
    path("search",views.search,name="search"),
    path("pay",views.pay,name="pay"),



]