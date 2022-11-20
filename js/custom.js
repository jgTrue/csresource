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

function swapLogRegister(idDiv){
    let log = 'loginPane';
    let reg = 'registerPane';
    if(idDiv === reg){ 
        reg = document.getElementById(reg);
        log = document.getElementById(log);
        if(!reg.classList.contains('show')){
            log.classList.remove('show');
            log.classList.remove('active');
            reg.classList.add('show');
            reg.classList.add('active');
            
        }
    }else{
        reg = document.getElementById(reg);
        log = document.getElementById(log);
        if(!log.classList.contains('show')) {
            reg.classList.remove('show');
            reg.classList.remove('active');
            log.classList.add('show');
            log.classList.add('active');
        }     
    }
    
}

function showLog(idDiv, option){
    let selectedDiv = idDiv;
    if(selectedDiv === 'singPane')
        selectedDiv = document.getElementById(idDiv);
        if(selectedDiv.classList.contains('no-visible')){
            selectedDiv.classList.remove('no-visible');
            selectedDiv.classList.add('visible');
            (option === 1) ? swapLogRegister('loginPane') :  swapLogRegister('registerPane');
           
        }
}

function closePane(idDiv){
    idDiv = document.getElementById(idDiv);
    if(idDiv.classList.contains('visible')){
        idDiv.classList.remove('visible');
        idDiv.classList.add('no-visible');
    }
}