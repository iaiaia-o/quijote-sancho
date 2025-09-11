// --- Datos del Test (Preguntas, Puntos Fuertes y Citas) ---
const quizData = [
  {
    type: 'test',
    title: "Ante un proyecto que implica un riesgo significativo pero una alta recompensa, tu primer instinto es:",
    options: [
      { text: "Lanzarme, confiando en que la visión nos guiará en el camino.", value: "quijote" },
      { text: "Analizar los detalles, medir los posibles resultados y crear un plan sólido.", value: "sancho" },
      { text: "Buscar un punto intermedio: un plan audaz pero con hitos de control claros.", value: "mixto" }
    ]
  },
  {
    type: 'test',
    title: "Un miembro clave del equipo muestra dudas sobre la estrategia. ¿Cómo reaccionas?",
    options: [
      { text: "Le transmito mi pasión y la grandeza del objetivo para reavivar su entusiasmo.", value: "quijote" },
      { text: "Escucho atentamente sus preocupaciones para entender su perspectiva y ajustar el plan si es necesario.", value: "sancho" },
      { text: "Organizo una sesión para alinear la visión con la realidad del equipo, buscando un compromiso.", value: "mixto" }
    ]
  },
  {
    type: 'test',
    title: "¿Qué frase resuena más contigo como líder?",
    options: [
      { text: "'El que no se atreve a soñar, no tiene el combustible para actuar'.", value: "quijote" },
      { text: "'Paso a paso se llega lejos, pero solo si el primer paso es firme'.", value: "sancho" },
      { text: "'La mejor visión es la que se puede explicar con los pies en la tierra'.", value: "mixto" }
    ]
  },
  // ... (Las otras 7 preguntas del test original pueden ir aquí)
  // Para simplificar, continuo con 3 preguntas, pero el sistema está listo para las 10
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
  // Actualizar barra de progreso
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
        // Feedback visual inmediato
        btn.classList.add('confirmed');
        setTimeout(() => btn.classList.remove('confirmed'), 200);

        // Lógica de selección
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
  // Asegurarse de que el progreso de la pregunta actual se muestre antes de pasar a la siguiente
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
    showResult();
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
  
  // Rellenar puntos fuertes
  const strengthsList = document.getElementById('result-strengths');
  strengthsList.innerHTML = '';
  resultData.strengths.forEach(strength => {
    const li = document.createElement('li');
    li.textContent = strength;
    strengthsList.appendChild(li);
  });

  // Rellenar cita
  document.getElementById('result-quote-text').textContent = `"${resultData.quote.text}"`;
  document.getElementById('result-quote-author').textContent = resultData.quote.author;
}

function restartQuiz() {
  resultSection.style.display = "none";
  welcomeSection.style.display = "block";
}