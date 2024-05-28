    //Receptor que se ejecuta en cuanto la página cargue.
    document.addEventListener("DOMContentLoaded", function(){
        const datoCard = [
            { imagen: "img/fPlatano.png", titulo: "Lol", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", cantidad:0},
            { imagen: "img/fUvas.png", titulo: "Lol", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", cantidad:0},
            { imagen: "img/fSandia.png", titulo: "Lol", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", cantidad:0},
            { imagen: "img/vBrocoli.png", titulo: "Lol", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", cantidad:0},
            { imagen: "img/vRabano.png", titulo: "Lol", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", cantidad:0},

            { imagen: "img/gato.png", titulo: "Lol", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", cantidad:0},
            { imagen: "img/gato.png", titulo: "Lol", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", cantidad:0},
            { imagen: "img/gato.png", titulo: "Lol", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", cantidad:0},
            { imagen: "img/gato.png", titulo: "Lol", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", cantidad:0},
            { imagen: "img/gato.png", titulo: "Lol", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", cantidad:0},
        ];
            //Divisor de caja.
        const cajaJS = document.getElementById("cajaDiv");
        datoCard.forEach(function(card, index){
            cajaJS.innerHTML +=
            `
                <div class = 'card'>
                    <img src='${card.imagen}' alt='${card.titulo}'>
                    <h3>${card.titulo}</h3>
                    <p>${card.descripcion}</p>
    
                    <button onclick="actCont(${index}, 1)" id="restaH" class="res_btn">-</button>
                    <!--<input type="number" value="0" id="inputH" class="inputCard" readonly> -->
                    <spam class="contadorSpam" id="quantity-${index}">${card.cantidad}</spam>
                    <button onclick="actCont(${index}, -1)" id="sumaH" class="sum_btn">+</button>
                </div>
            `;
        });
        window.actCont = function(index, value){
            const card = datoCard[index];
            card.cantidad += value;
            if(card.cantidad <0) card.cantidad=0;
            document.getElementById(`quantity-${index}`).textContent = `${card.cantidad}`;
        }
    });
    /*
    //Declarar variables de uso en JavaScript.
    const restaJS = document.getElementById("restaH");
    const inputJS = document.getElementById("inputH");
    const sumaJS = document.getElementById("sumaH");
        //Disminuir.
    restaJS.addEventListener("click",event =>{ //[event =>{}] es igual a [function(){}]
        event.preventDefault();
        const inputValor = Number(inputJS.value) || 0;
        inputJS.value = inputValor - 1;
    });
        //Aumentar.
    sumaJS.addEventListener("click",function(event){
        event.preventDefault();
        const inputValor = Number(inputJS.value) || 0;
        if(inputValor>=20){
            alert("¡Hey! Deja algo para los demas visitantes.");
        }else{
            inputJS.value = inputValor + 1; //Incrementar el valor.
        }
    });*/