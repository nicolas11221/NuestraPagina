$(function() {
    $('#WAButton').floatingWhatsApp({
      phone: '+56999235598', //WhatsApp Business phone number International format-
      //Get it with Toky at https://toky.co/en/features/whatsapp.
      headerTitle: 'Chatea con nostros por Whatsapp!', //Popup Title
      popupMessage: 'Hola, como puedo DINOayudarte? 🦖', //Popup Message
      showPopup: true, //Enables popup display
      // buttonImage: '<img src="https://rawcdn.githack.com/rafaelbotazini/floating-whatsapp/3d18b26d5c7d430a1ab0b664f8ca6b69014aed68/whatsapp.svg" />', //Button Image
      buttonImage:'<img src="https://i.pinimg.com/originals/d1/99/3c/d1993c0350f374d78af656a89988507e.jpg"/>',
      headerColor: '#F02828', //Custom header color
      //backgroundColor: 'crimson', //Custom background button color
      position: "right"    
    });
  });
  