function openWhatsApp() {
    var phoneNumber = '+234 814 864 9957'; 
    
    var whatsappUrl = 'whatsapp://send?phone=' + phoneNumber;
    
    var whatsappWindow = window.open(whatsappUrl, '_blank');

    setTimeout(function() {
        if (whatsappWindow && whatsappWindow.closed) {
            var webUrl = 'https://web.whatsapp.com/send?phone=' + phoneNumber;
            window.open(webUrl, '_blank');
        }
    }, 3000); 
}