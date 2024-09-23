// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Caminé a través de una tierra vacía", time: 23 },
  { text: "Conocía el camino como la palma de mi mano", time: 28 },
  { text: "Sentí la tierra bajo mis pies", time: 34 },
  { text: "Me senté junto al río y me hizo completo", time: 40 },
  { text: "Oh, cosa simple, ¿a dónde te has ido?", time: 45 },
  { text: "Me estoy poniendo viejo y necesito algo en que confiar", time: 50 },
  { text: "Así que dime cuando me dejaras entrar", time: 56 },
  { text: "Me estoy cansando y necesito un lugar para empezar", time: 62 },
  { text: "Me topé con un árbol caído", time: 67 },
  { text: "Sentí sus ramas mirándome", time: 74 },
  { text: "¿Es este el lugar que solíamos amar?", time: 79 },
  { text: "¿Es este el lugar con que he estado soñando?", time: 84 },
  { text: "Oh, cosa simple, ¿a dónde te has ido?", time: 90 },
  { text: "Me estoy poniendo viejo y necesito algo en que confiar", time: 95 },
  { text: "Así que dime cuando me dejaras entrar", time: 101 },
  { text: "Me estoy cansando y necesito un lugar para comenzar", time: 106 },
  { text: "Y si tienes un minuto, ¿por qué no vamos", time: 113 },
  { text: "A hablar de eso a un lugar que solo nosotros conocemos?", time: 120 },
  { text: "Esto podría ser el final de todo", time: 124 },
  { text: "Así que por qué no nos vamos", time: 130 },
  { text: "A un lugar que solo nosotros conocemos", time: 132 },
  { text: "(Un lugar que solo nosotros conocemos)", time: 137 },
  { text: "Oh, cosa simple, ¿a dónde te has ido?", time: 145 },
  { text: "Me estoy poniendo viejo y necesito algo en que confiar", time: 151 },
  { text: "Así que dime cuando me vas a dejar entrar", time: 156 },
  { text: "Me estoy cansando y necesito un lugar para empezar", time: 162 },
  { text: "Te agradezco de todo corazon por llegar a mi vida.", time: 169 },
  { text: "Te agradezco de todo corazon por llegar a mi vida.", time: 170 },
  { text: "Te agradezco de todo corazon por llegar a mi vida.", time: 172 },
  { text: "Siempre estare para ti.", time: 176 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);