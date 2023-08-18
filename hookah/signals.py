from paypal.standard.models import ST_PP_COMPLETED
from paypal.standard.ipn.signals import valid_ipn_received
from django.views.decorators.csrf import csrf_exempt
from django.dispatch import receiver
# from django.db.models.signals import post_save
# from .models import
@csrf_exempt
@receiver(valid_ipn_received)
def webhook(sender,request,**kwargs):
    ipn_obj = sender
    if ipn_obj.payment_status == ST_PP_COMPLETED:
        del request.session["basket"]
        return







