var resultado;

if (Math.round(Math.random()) === 1) {
    resultado = "Success!";
} else {
    resultado = "Fail!";
}

setTimeout(function () {
    if(resultado === "Success!"){
        console.log("Yes! " + resultado);
    }else{
        console.log("No! " + resultado);
    }
}, 100);


