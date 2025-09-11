// --- Datos del Test (Preguntas, Puntos Fuertes y Citas) ---
const quizData = [
    {
        type: 'test',
        title: "En una reunión inesperada, ¿cómo actúas primero?",
        options: [
            { text: "Propongo una idea audaz y original", value: "quijote" },
            { text: "Escucho y analizo antes de decidir", value: "sancho" },
            { text: "Busco una solución creativa en equipo", value: "mixto" }
        ]
    },
    {
        type: 'test',
        title: "¿Qué símbolo te inspira más cuando afrontas el cambio?",
        options: [
            { text: "El molino: desafío y visión", value: "quijote" },
            { text: "El camino: prudencia y constancia", value: "sancho" },
            { text: "La estrella: guía en lo desconocido", value: "mixto" }
        ]
    },
    {
        type: 'test', // Simplificado de 'open' para que puntúe mejor en este formato
        title: "Imagina que tienes que convencer a tu equipo de embarcarse en una aventura arriesgada. ¿Cuál sería el núcleo de tu mensaje?",
        options: [
            { text: "Apelar a la grandeza del sueño y al honor de conseguirlo.", value: "quijote"},
            { text: "Presentar un plan detallado de los beneficios y riesgos controlados.", value: "sancho"},
            { text: "Mostrar cómo esta aventura nos hará crecer como equipo y profesionales.", value: "mixto"}
        ]
    },
    {
        type: 'test', // Simplificado de 'story'
        title: "El equipo se encuentra ante un cruce de caminos. Una senda es desconocida y prometedora; la otra, segura y predecible. ¿Qué haces?",
        options: [
            { text: "Tomar el sendero desconocido, la recompensa justifica el riesgo.", value: "quijote" },
            { text: "Investigar el camino seguro, es mejor avanzar sobre certezas.", value: "sancho" },
            { text: "Enviar una pequeña avanzadilla a explorar el nuevo camino antes de decidir.", value: "mixto" }
        ]
    },
    {
        type: 'test', // Simplificado de 'icons'
        title: "Elige la combinación de herramientas que mejor representa tu liderazgo:",
        options: [
            { text: "Una brújula y un mapa de estrellas (Visión y dirección).", value: "quijote"},
            { text: "Una balanza y un manual de procedimientos (Equilibrio y método).", value: "sancho"},
            { text: "Un lienzo en blanco y un equipo de herramientas (Creatividad y capacidad).", value: "mixto"}
        ]
    },
    {
        type: 'test',
        title: "¿Te lanzas sin conocer todos los detalles o planificas minuciosamente antes de avanzar?",
        options: [
            { text: "Me lanzo y confío en mi intuición para resolver sobre la marcha.", value: "quijote" },
            { text: "Planifico cada paso, prefiero no dejar nada al azar.", value: "sancho" },
            { text: "Diseño un plan flexible que pueda adaptarse a los imprevistos.", value: "mixto" }
        ]
    },
    {
        type: 'test', // Simplificado de 'order'
        title: "En tu proceso ideal de toma de decisiones, ¿qué va primero?",
        options: [
            { text: "La Idea: la chispa creativa que lo inicia todo.", value: "quijote"},
            { text: "El Análisis: entender el terreno antes de dar el primer paso.", value: "sancho"},
            { text: "La Acción: es mejor empezar y corregir que esperar a tenerlo todo perfecto.", value: "mixto"}
        ]
    },
    {
        type: 'test', // Simplificado de 'story'
        title: "Se debate sobre arriesgarse en una nueva aventura empresarial. ¿Qué aportas tú a la conversación?",
        options: [
            { text: "Animo al equipo a soñar en grande y visualizar el éxito.", value: "quijote" },
            { text: "Recuerdo la importancia de medir los riesgos y asegurar los recursos.", value: "sancho" },
            { text: "Busco una alternativa creativa que combine la ambición con la seguridad.", value: "mixto" }
        ]
    },
    {
        type: 'test', // Simplificado de 'icons'
        title: "Elige el símbolo que representa tu filosofía para afrontar cambios:",
        options: [
            { text: "El molino: un gigante al que retar para crecer.", value: "quijote"},
            { text: "El libro: la sabiduría acumulada para tomar mejores decisiones.", value: "sancho"},
            { text: "La estrella: una guía lejana que inspira pero no impone el camino.", value: "mixto"}
        ]
    },
    {
        type: 'test', // Simplificado de 'open'
        title: "Completa la frase: 'Para liderar en tiempos de incertidumbre, creo que lo más importante es...'",
        options: [
            { text: "...mantener una visión clara y audaz que inspire esperanza.", value: "quijote"},
            { text: "...tener los pies en la tierra y cuidar de tu gente.", value: "sancho"},
            { text: "...ser flexible, escuchar y adaptarse constantemente.", value: "mixto"}
        ]
    }
];

const resultProfiles = {
  quijote: {
    title: "Liderazgo Visionario: El Quijote",
    subtitle: "Tu fortaleza reside en tu capacidad para inspirar, ver más allá de lo evidente y movilizar a otros hacia un futuro audaz.",
    badge: "https://storage.googleapis.com/gweb-aip-static/gemini/mendel/11.png",
    strengths: ["Visión Estratégica", "Pasión Contagiosa", "Coraje Innovador"],
    quote: {
      text: "Confía en el tiempo, que suele dar dulces salidas a muchas amargas dificultades.",
      author: "- Miguel de Cervantes"
    }
  },
  sancho: {
    title: "Liderazgo Prudente: El Sancho",
    subtitle: "Tu fortaleza es tu sabiduría práctica, tu enfoque en la realidad y tu habilidad para cuidar del equipo y los recursos.",
    badge: "https://storage.googleapis.com/gweb-aip-static/gemini/mendel/12.png",
    strengths: ["Pragmatismo Eficaz", "Gestión de Riesgos", "Lealtad y Cohesión"],
    quote: {
      text: "Más vale un 'toma' que dos 'te daré'.",
      author: "- Miguel de Cervantes"
    }
  },
  mixto: {
    title: "Liderazgo Sabio: El Híbrido",
    subtitle: "Combinas lo mejor de ambos mundos: la audacia para soñar y la sensatez para construir. Eres un líder adaptable y completo.",
    badge: "https://storage.googleapis.com/gweb-aip-static/gemini/mendel/13.png",
    strengths: ["Equilibrio Estratégico", "Adaptabilidad", "Sabiduría Integradora"],
    quote: {
      text: "El que lee mucho y anda mucho, ve mucho y sabe mucho.",
      author: "- Miguel de Cervantes"
    }
  }
};


// --- Estado del Cuestionario ---
let currentQuestion = 0;
let scores = { quijote: 0, sancho: 0, mixto: 0 };
let userAnswers = [];

// --- Elementos del DOM ---
const welcomeSection = document.getElementById('welcome-section');
const questionSection = document.getElementById('question-section');
const resultSection = document.getElementById('result-section');
const progressBar = document.getElementById('progress-bar');
const questionCounter = document.getElementById('question-counter');
const questionTitle = document.getElementById('question-title');
const questionContent = document.getElementById('question-content');
const continueBtn = document.getElementById('continue-btn');

function startQuiz() {
  welcomeSection.style.display = "none";
  resultSection.style.display = "none";
  questionSection.style.display = "block";
  currentQuestion = 0;
  scores = { quijote: 0, sancho: 0, mixto: 0 };
  userAnswers = [];
  showQuestion();
}

function showQuestion() {
  const progress = ((currentQuestion) / quizData.length) * 100;
  progressBar.style.width = `${progress}%`;
  
  const q = quizData[currentQuestion];
  questionCounter.textContent = `Reto ${currentQuestion + 1} de ${quizData.length}`;
  questionTitle.innerHTML = q.title;
  questionContent.innerHTML = '';
  continueBtn.style.display = 'none';

  if (q.type === 'test') {
    const optionsGroup = document.createElement('div');
    optionsGroup.className = 'options-group';
    q.options.forEach((opt) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = opt.text;
      btn.onclick = () => {
        btn.classList.add('confirmed');
        setTimeout(() => btn.classList.remove('confirmed'), 200);

        optionsGroup.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        userAnswers[currentQuestion] = opt.value;
        continueBtn.style.display = 'block';
      };
      optionsGroup.appendChild(btn);
    });
    questionContent.appendChild(optionsGroup);
  }
}

function nextQuestion() {
  const progress = ((currentQuestion + 1) / quizData.length) * 100;
  progressBar.style.width = `${progress}%`;

  const answer = userAnswers[currentQuestion];
  if (answer) {
    scores[answer]++;
  }

  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    setTimeout(showResult, 400); // Pequeño retardo para que la barra de progreso llegue al 100%
  }
}

function showResult() {
  questionSection.style.display = 'none';
  resultSection.style.display = 'block';

  let profile = "mixto";
  if (scores.quijote > scores.sancho && scores.quijote > scores.mixto) {
    profile = "quijote";
  } else if (scores.sancho > scores.quijote && scores.sancho > scores.mixto) {
    profile = "sancho";
  }
  
  const resultData = resultProfiles[profile];

  document.getElementById('badge-img').src = resultData.badge;
  document.getElementById('result-text').textContent = resultData.title;
  document.getElementById('result-subtitle').textContent = resultData.subtitle;
  
  const strengthsList = document.getElementById('result-strengths');
  strengthsList.innerHTML = '';
  resultData.strengths.forEach(strength => {
    const li = document.createElement('li');
    li.textContent = strength;
    strengthsList.appendChild(li);
  });

  document.getElementById('result-quote-text').textContent = `"${resultData.quote.text}"`;
  document.getElementById('result-quote-author').textContent = resultData.quote.author;
}

function restartQuiz() {
  resultSection.style.display = "none";
  welcomeSection.style.display = "block";
}