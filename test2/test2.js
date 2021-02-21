i = 0;

var intervalo = setInterval(function(){
    console.log(i);
    i++;
    if(i == 5)
        clearInterval(intervalo);
},1000);