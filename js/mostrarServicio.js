
let title01 = "DECLARATORIA DE FÁBRICA - Corporación INGECON";
let title02 = "INDEPENDIZACIÓN - Corporación INGECON";
let title03 = "SANEAMIENTO FÍSICO LEGAL DE PREDIOS - Corporación INGECON";
let title04 = "SUBDIVISIÓN DE LOTES - Corporación INGECON";
let title05 = "LICENCIA DE EDIFICACIÓN - Corporación INGECON";
let title06 = "LICENCIA DE DEMOLICIÓN - Corporación INGECON";

let dato1 = "La declaratoria de fábrica es la inscripción de una construcción en el Registro de Predios correspondiente, donde se consignan las características y condiciones técnicas de una obra. Al inscribir una declaratoria de fábrica, reconocemos el carácter legal de una determinada construcción.";
let dato2 = "Mediante una independización un propietario puede vender parte de su propiedad o repartirla entre sus hijos. Para que ello sea posible debe dividir su bien en dos o más predios independientes de manera que cada inmueble cuente con su propia partida registral.";
let dato3 = "El saneamiento físico legal de predios es el trámite destinado a la regularización de la documentación de la propiedad del terreno en primer lugar, y luego de la construcción que se haya edificado sobre el predio (de ser el caso) con el objeto de obtener la titulación o acreditación idónea para su acceso a los Registros Públicos.";
let dato4 = "La subdivisión de terreno es el procedimiento mediante el cual se autoriza la subdivisión de un lote matriz en dos o más sublotes, los mismos que deben cumplir, entre otros, con los requisitos mínimos normativos de área y frente de lote.";
let dato5 = "La declaratoria de fábrica es la inscripción de una construcción en el Registro de Predios"+
" correspondiente, donde se consignan las características y condiciones técnicas de una obra. Al"+
" inscribir una declaratoria de fábrica, reconocemos el carácter legal de una determinada"+
" construcción.";
let dato6 = " Las licencias para demoliciones son permisos emitidos por las autoridades municipales del lugar donde se ubica el predio. – Cada municipio puede establecer requisitos diferentes para emitir un permiso para demoler.";

let parrafo = document.createElement("p");
let body = document.querySelector("#modalBody");
let titulo = document.querySelector("#cabecera");
body.style = "text-align: justify";

function abrirModal(numero) {
    console.log(numero);
    switch (numero) {
        case 1:
            parrafo = dato1;
            titulo.innerHTML = title01;
            body.innerHTML = parrafo;
            break;
        case 2:
            parrafo = dato2;
            titulo.innerHTML = title02;
            body.innerHTML = parrafo;
            break;
        case 3:
            parrafo = dato3;
            titulo.innerHTML = title03;
            body.innerHTML = parrafo;
            break;
        case 4:
            parrafo = dato4;
            titulo.innerHTML = title04;
            body.innerHTML = parrafo;
            break;
        case 5:
            parrafo = dato5;
            titulo.innerHTML = title05;
            body.innerHTML = parrafo;
            break;
        case 6:
            parrafo = dato5;
            titulo.innerHTML = title06;
            body.innerHTML = parrafo;
            break;
        default:
            break;
    }
        $('#servicioModal').modal({show:true});
}