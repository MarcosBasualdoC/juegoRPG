class Persona {
    constructor(vida, ataque, defensa, arma) {
      this.vida = vida;
      this.ataque = ataque;
      this.defensa = defensa;
      this.arma = arma;
    }
  
    estado() {
      console.log("Mi vida es " + this.vida + " y mi ataque es " + this.ataque);
    }
  
    atacar(objetivo) {
      objetivo.vida -= ((this.ataque ^ 2 / (this.ataque + objetivo.defensa) - (objetivo.vida / 100)) + this.arma.danio)
      actualizarValoresHTML();
    }
  }
  
  
  const persona1 = new Persona(10, 10, 20, hacha);
  const persona2 = new Persona(12, 2, 2, hacha);
  
  
  const vidaPersona1Element = document.getElementById("vidaPersona1");
  const ataquePersona1Element = document.getElementById("ataquePersona1");
  const defensaPersona1Element = document.getElementById("defensaPersona1");
  

  vidaPersona1Element.textContent = persona1.vida;
  ataquePersona1Element.textContent = persona1.ataque;
  defensaPersona1Element.textContent = persona1.defensa;

  ///// 
  setTimeout(function () {
    let seguirJugando = true;
  
    while (seguirJugando) {
      let queHacer = prompt("¿Quieres atacar? (s/n)");
  
      if (queHacer == "s") {
        persona1.atacar(persona2);
        alert("ATACASTE!! Lo dejaste en " + persona2.vida + " de vida!!");
        if (persona2.vida <= 0) {
          alert("¡VICTORIA!");
          seguirJugando = false;
        }
      } else if (queHacer == "n") {
        persona2.atacar(persona1);
        alert("TE ATACARON!! Estás en " + persona1.vida + " de vida.");
        if (persona1.vida <= 0) {
          alert("DERROTA");
          seguirJugando = false;
        }
      } else {
        alert("Selecciona una opción correcta.");
        continue;
      }
  
      /////
      let seguir = prompt("¿Quieres seguir jugando? (s/n)");
      if (seguir.toLowerCase() !== "s") {
        seguirJugando = false;
      }
    }
  }, 2000); 
  
  function actualizarValoresHTML() {
    vidaPersona1Element.textContent = persona1.vida;
    ataquePersona1Element.textContent = persona1.ataque;
    defensaPersona1Element.textContent = persona1.defensa;
  }