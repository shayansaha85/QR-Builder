	/* JS comes here */
    var qr;
    (function() {
            qr = new QRious({
            element: document.getElementById('qr-code'),
            size: 350,
            value: 'I can generate QR code for you'
        });
    })();
    
    function generateQRCode() {
        var qrtext = document.getElementById("qr-text").value;
        document.getElementById("qr-result").innerHTML = "QR code generated";
      
        qr.set({
            foreground: 'black',
            size: 350,
            value: qrtext
        });
    }


var download = function(){
    var link = document.createElement('a');
    link.download = 'QR.png';
    link.href = document.getElementById('qr-code').toDataURL()
    link.click();
    }