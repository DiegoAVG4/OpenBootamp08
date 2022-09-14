// Una función sin parámetros que devuelva siempre "true".

var ved = true;
const fun = function(){
    fun = ved;
};
console.log(ved);

/* Una función asíncrona que utilice un setTimeout y 
pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado. */

setTimeout(() => {
    console.log("Hola soy una promesa")
},5000)

// Una función generadora de índices pares automáticos.

for(var i = 0; i <= 20; i++){
    if(i%2 == 0 ){
        console.log([i])
    }
};