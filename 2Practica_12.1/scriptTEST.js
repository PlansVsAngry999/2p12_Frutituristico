//Receptor que se ejecuta en cuanto la página cargue.
document.addEventListener("DOMContentLoaded", function(){
    const datoCard = [
        { imagen: "img/fUvas.png", titulo: "Uvas1", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", inputID:"inputH1", sumaID:"sumaH1",restaID:"restaH1"},
        { imagen: "img/fPlatano.png", titulo: "Platano2", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", inputID:"inputH2", sumaID:"sumaH2",restaID:"restaH2"},
        { imagen: "img/fSandia.png", titulo: "Sandia3", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", inputID:"inputH3", sumaID:"sumaH3",restaID:"restaH3"},
        { imagen: "img/vBrocoli.png", titulo: "Brocoli4", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", inputID:"inputH4", sumaID:"sumaH4",restaID:"restaH4"},
        { imagen: "img/vRabano.png", titulo: "Rabano5", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", inputID:"inputH5", sumaID:"sumaH5",restaID:"restaH5"},
        
    ];
        //Divisor de caja.
    const cajaJS = document.getElementById("cajaDiv");
    datoCard.forEach(function(card){
        cajaJS.innerHTML +=
        `
        <!--Card ${card.titulo}-->
            <div class = 'card'>
                <img src='${card.imagen}' alt='${card.titulo}'>
                <h3>${card.titulo}</h3>
                <p>${card.descripcion}</p>

                <button id="${card.restaID}" class="res_btn">-</button>
                <input type="number" value="0" id="${card.inputID}" class="inputCard" readonly> <!--Agregar max y min-->
                <button id="${card.sumaID}" class="sum_btn">+</button>
            </div>
                `;
    });
//IDES 1
    //Declarar variables de uso en JavaScript.
    const carJS = document.getElementById("carH");
    const restaJS1 = document.getElementById("restaH1");
    const inputJS1 = document.getElementById("inputH1");
    const sumaJS1 = document.getElementById("sumaH1");
    
        //Disminuir.
    restaJS1.addEventListener("click",event =>{ //[event =>{}] es igual a [function(){}]
        event.preventDefault();
        const inputValor = Number(inputJS1.value) || 0; //Obtener valor del input incrementador.
        const carValor = Number(carJS.value) || 0; //Obtener valor del carrito de compras.
        if(inputValor<=0){
            alert("Uhm, parece que no tienes nada que retirar.");
        }else{
            inputJS1.value = inputValor - 1; //Decrementar el valor.
            carJS.value = carValor - 1; //Decrementar el valor del carro.
        }
    });
        //Aumentar.
    sumaJS1.addEventListener("click",function(event){
        event.preventDefault();
        const inputValor = Number(inputJS1.value) || 0; //Obtener valor del input incrementador.
        const carValor = Number(carJS.value) || 0; //Obtener valor del carrito de compras.
        if(inputValor>=20){
            alert("¡Hey! Deja algo para los demas visitantes.");
        }else{
            inputJS1.value = inputValor + 1; //Incrementar el valor.
            carJS.value = carValor + 1; //Incrementar el valor del carro.
        }
    }); 
//IDES 2        
    const restaJS2 = document.getElementById("restaH2");
    const inputJS2 = document.getElementById("inputH2");
    const sumaJS2 = document.getElementById("sumaH2");
    
        //Disminuir.
    restaJS2.addEventListener("click",event =>{ //[event =>{}] es igual a [function(){}]
        event.preventDefault();
        const inputValor = Number(inputJS2.value) || 0; //Obtener valor del input incrementador.
        const carValor = Number(carJS.value) || 0; //Obtener valor del carrito de compras.
        if(inputValor<=0){
            alert("Uhm, parece que no tienes nada que retirar.");
        }else{
            inputJS2.value = inputValor - 1; //Decrementar el valor.
            carJS.value = carValor - 1; //Decrementar el valor del carro.
        }
    });
        //Aumentar.
    sumaJS2.addEventListener("click",function(event){
        event.preventDefault();
        const inputValor = Number(inputJS2.value) || 0; //Obtener valor del input incrementador.
        const carValor = Number(carJS.value) || 0; //Obtener valor del carrito de compras.
        if(inputValor>=20){
            alert("¡Hey! Deja algo para los demas visitantes.");
        }else{
            inputJS2.value = inputValor + 1; //Incrementar el valor.
            carJS.value = carValor + 1; //Incrementar el valor del carro.
        }
    });
});