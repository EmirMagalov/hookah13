from django.contrib import admin
from .models import *

class GoodsAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug":("name",)}

class CategoriaAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug":("name",)}

class ModelAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug":("name",)}


admin.site.register(Goods,GoodsAdmin)
admin.site.register(Categoria,CategoriaAdmin)
admin.site.register(Model,ModelAdmin)