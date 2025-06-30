function give() {
    let img = document.getElementById('ig');
    let qr = document.getElementById('qrcode');
    let text = document.getElementById('text');

    if (text.value.trim() === '') {
        alert("Invalid! Enter text or URL");
    } else {
        qr.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + text.value;
    }
}
function clears(){
    let qr = document.getElementById('qrcode');
    let text = document.getElementById('text');

   text.value = "";
    qr.src = "";
}