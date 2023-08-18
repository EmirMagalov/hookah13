from django.apps import AppConfig



class HookahConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'hookah'

    def ready(self):
        import hookah.signals








