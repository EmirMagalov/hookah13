from django.db import models
class Categoria(models.Model):
    name=models.CharField(max_length=100)
    slug = models.SlugField(unique=True, db_index=True, verbose_name='URL', max_length=200)
    def __str__(self):
        return self.name
class Model(models.Model):
    name=models.CharField(max_length=100)
    slug = models.SlugField(unique=True, db_index=True, verbose_name='URL', max_length=200)
    categoria=models.ForeignKey(Categoria,on_delete=models.CASCADE)
    def __str__(self):
        return f'{self.name}({self.categoria})'
class Goods(models.Model):
    name=models.CharField(max_length=100)
    descr=models.TextField(max_length=500)
    slug=models.SlugField(unique=True,db_index=True,verbose_name='URL',max_length=200)
    price=models.IntegerField()
    image=models.ImageField(upload_to="image/")
    discounts=models.FloatField(blank=True,null=True)
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    model = models.ForeignKey(Model, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

