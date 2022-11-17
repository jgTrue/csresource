"use strict";

function showContent(idDiv){
    let selectedDiv;
    let unSelectedDiv;
    let options = ['playcs','cfg','tacticas','stream'];
    
    for (const iterator of options) {
        if(iterator !=  idDiv){ 
            //Asigna elemento no seleccionado y los deja invisible si están visibles
            unSelectedDiv = document.getElementById(iterator); 
            if(unSelectedDiv.classList.contains('visible')){
                unSelectedDiv.classList.remove('visible');
                unSelectedDiv.classList.add('no-visible');
            }
        }else{ //Asigana el elemento seleccionado
            selectedDiv = document.getElementById(iterator);
        }
    }
    // Hace visible el objeto seleccionado si estaba no visible.
    if(selectedDiv.classList.contains('no-visible')){
        selectedDiv.classList.remove('no-visible');
        selectedDiv.classList.add('visible');
    }
}