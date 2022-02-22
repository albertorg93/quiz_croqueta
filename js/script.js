/*_____validacion______*/    


document.querySelector('form[name="formulario"]').addEventListener('submit', (event) => {
    event.preventDefault()
     
    //incicializamos la variable contador que acumulará las respuestas correctas
    let cont =0;
    
    console.log(event.target.elements.origen.value);
    
    //obtenemos el valor que introduce el usuario en el formulario
    let valor1=event.target.elements.origen.value;
    let valor2=event.target.elements.dia.value;
    let valor3=event.target.elements.significado.value;
    let valor4=event.target.elements.razon.value;
    let valor5=event.target.elements.contenido.value;    
    let valor6=event.target.elements.pastel.value;
    let valor7=event.target.elements.record.value;
    let valor8=event.target.elements.dicho.value;
    let valor9=event.target.elements.top.value;
    let valor10=event.target.elements.media.value;
 
    const respuestas = {
        origen: "Francia",
        dia: 16,
        significado: "crujiente",
        razon: "aprovechar",
        contenido: "patata",
        pastel: "cubano",
        record: "pais_vasco",
        dicho: "ramon",
        top1: "jamon",
        top2: "croquetas",
        media: 80
    }


//creamos la funcion general que va a pintar las respuestas correctas e incorrectas
    function verificar(buena, mala, resp, correcta, err1, err2, err3){
        let correct = document.body.getElementsByClassName(buena);
        let incorrect = document.body.getElementsByClassName(mala);
        if (resp == correcta){
            correct[0].classList.add("myStyle");
            cont+=1;
        } else {
            if(resp==err1){
                incorrect[0].classList.add("myStyle1");
                correct[0].classList.add("myStyle");
            } else if(resp==err2){
                incorrect[1].classList.add("myStyle1");
                correct[0].classList.add("myStyle");
            } else if(resp==err3){
                incorrect[2].classList.add("myStyle1");
                correct[0].classList.add("myStyle");
            } 
          } 
    }
    
//realizamos las llamadas a la funcion previamente creada

    //1era
    verificar('correcta1','incorrecta1',valor1,respuestas.origen,"Reino_Unido","Italia","España");

     //2a  
    verificar('correcta2','incorrecta2',valor2,respuestas.dia,"14","27","5");  

    //3a
    verificar('correcta3','incorrecta3',valor3,respuestas.significado,"crema",  "criatura","cromatismo"); 

    //4a
    verificar('correcta4','incorrecta4',valor4,respuestas.razon,"frio","corte", "economico"); 

    //5a
    verificar('correcta5','incorrecta5',valor5,respuestas.contenido,"maiz", "champiñones","sofrito"); 

    //6a
    verificar('correcta6','incorrecta6',valor6,respuestas.pastel,"croquelate",  "paraiso","croquet"); 

    //7a
    verificar('correcta7','incorrecta7',valor7,respuestas.record,"napoles","paris", "texas"); 

    //8a
    verificar('correcta8','incorrecta8',valor8,respuestas.dicho,"karlos","comidista",   "belen"); 

    //9a
     verificar('correcta9','incorrecta9',valor9,respuestas.top,"anchoas","chopitos",   "lado"); 

    //10a
    verificar('correcta10','incorrecta10',valor10,respuestas.media,"35","103","50"); 
 
    



//creamos clase al div vacío de html
      const containerFotos = document.getElementById("container-foto-resultado")
      containerFotos.setAttribute("class","container");
//texto num aciertos
      const para = document.createElement("p");
      para.setAttribute("class","claseparrafo");
      const node = document.createTextNode("Has tenido "+cont+" aciertos ");
      para.appendChild(node);
      document.querySelector('.container').appendChild(para);

//div-resultados clase a section
const divResultados = document.getElementById("div-resultados")
divResultados.setAttribute("class","div-resultados");


//foto final tipo de croqueta    
  function creaFoto(ruta){
      
      const image = document.createElement('img');
      image.setAttribute("class","clasefoto");
      image.src = ruta;
      document.querySelector('.container').appendChild(image)
}

//generador aleatorio de fotografías finales de que tipo de croqueta eres

   let numRandom = Math.floor(Math.random() * (6)) + 1;
     if(numRandom == 1){
       creaFoto('/media/Fotos-finales/abuela-final.jpg');
    } else if(numRandom == 2){
        creaFoto('/media/Fotos-finales/bacalao-final.jpg');
    } else if(numRandom == 3){
        creaFoto('/media/Fotos-finales/boletus-final.jpg');
    } else if(numRandom == 4){
        creaFoto('/media/Fotos-finales/cocido-final.jpg');
    } else if(numRandom == 5){
        creaFoto('/media/Fotos-finales/jamon-final.jpg');
    } else if(numRandom == 6){
        creaFoto('/media/Fotos-finales/pollo-final.jpg');
    } else{

    } 
     //ocultar boton submit al enviar el formulario
    let xboton = document.getElementsByClassName("submit-button");
    xboton[0].style.display = "none";


    // button close when foto final
    const closeButton = document.getElementById("close-button");
    closeButton.style.opacity = "1";
    
        closeButton.addEventListener("click", (event) => {
             divResultados.style.display = "none";
       });  
 
    }
)


    