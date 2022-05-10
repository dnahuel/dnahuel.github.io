const btnEnc=document.getElementById('encriptar');
const btnDes=document.getElementById('desencriptar');
const btnCop=document.getElementById('copiar');

const entrada=document.getElementById('entrada')
const salida=document.getElementById('salida')






const codigo=[['e','enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat']]

btnEnc.addEventListener('click',function(){
    let dato=encriptar(entrada.value);
    salida.value=dato;
    entrada.value='';
    
});

btnDes.addEventListener('click',function(){
    let dato=desencriptar(entrada.value);
    salida.value=dato;
});

btnCop.addEventListener('click',function(){
    navigator.clipboard.writeText(salida.value)
    .then(() => {
    
})
    .catch(err => {
    
})
    
});


entrada.addEventListener('keyup',function(e){
    
    e.target.value=e.target.value.toLowerCase();

    
});

const encriptar=(dato)=>{
    
    dato=dato.toLowerCase();

    for(let l=0; l<codigo.length;l++){
        if(dato.includes(codigo[l][0])){
            dato=dato.replaceAll(codigo[l][0],codigo[l][1]);
        }
    }
    return(dato);
}



const desencriptar=(dato)=>{
    
    dato=dato.toLowerCase();

    for(let l=0; l<codigo.length;l++){
        if(dato.includes(codigo[l][1])){
            dato=dato.replaceAll(codigo[l][1],codigo[l][0]);
        }
    }
    return(dato);
}