let $form = document.querySelector("#form_contacto");
let alerta = document.querySelector("#mensaje");
$form.addEventListener('submit', handlerSubmit);

async function handlerSubmit(event){
    event.preventDefault();
    const formulario = new FormData(this);
    const response = await fetch(this.action, {
    method: this.method,
    body: formulario,
    headers: {
        'Accept': 'aplication/json'
    }
    });
    function mensaje() {
        alerta.innerHTML = "";
        
        }

    if (response.ok) {
        this.reset();
        console.log("Gracias por escribirme!!");
        alerta.innerHTML = `<div class="alert alert-success" role="alert">Su mensaje fue enviado con éxito!</div>`;
        setTimeout(mensaje,5000);
    }
}