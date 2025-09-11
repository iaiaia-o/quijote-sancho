// --- Iconos SVG para los retos ---
const iconsSVG = {
    molino: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><ellipse cx="20" cy="20" rx="16" ry="13" fill="#b79f68"/><rect x="18" y="9" width="4" height="22" rx="2" fill="#7c6738"/><path d="M20 10L27 7" stroke="#857c5a" stroke-width="2"/><path d="M20 10L13 7" stroke="#857c5a" stroke-width="2"/><circle cx="20" cy="10" r="2.5" fill="#e3c57d" stroke="#857c5a" stroke-width="1.5"/></svg>`,
    camino: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="8" y="18" width="24" height="6" rx="3" fill="#e8e2d2"/><path d="M20 24v9" stroke="#b79f68" stroke-width="2"/><ellipse cx="20" cy="33" rx="5" ry="2" fill="#c0b9a6"/></svg>`,
    estrella: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><polygon points="20,6 23,16 34,16 25,22 28,33 20,27 12,33 15,22 6,16 17,16" fill="#e3c57d" stroke="#b79f68" stroke-width="1.5"/></svg>`,
    libro: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="6" y="10" width="28" height="20" rx="4" fill="#e8e2d2" stroke="#b79f68" stroke-width="2"/><line x1="20" y1="10" x2="20" y2="30" stroke="#857c5a" stroke-width="2"/><ellipse cx="20" cy="30" rx="6" ry="2" fill="#c0b9a6"/></svg>`,
    sombrero: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><ellipse cx="20" cy="30" rx="12" ry="6" fill="#c0b9a6"/><ellipse cx="20" cy="24" rx="7" ry="3" fill="#857c5a"/><rect x="17" y="16" width="6" height="9" rx="2" fill="#e3c57d" stroke="#b79f68" stroke-width="1.5"/></svg>`,
    lanza: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="19" y="7" width="2" height="26" rx="1" fill="#b79f68"/><polygon points="20,6 23,12 17,12" fill="#e3c57d" stroke="#857c5a" stroke-width="1"/><ellipse cx="20" cy="33" rx="3" ry="1.5" fill="#c0b9a6"/></svg>`,
    escudo: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><ellipse cx="20" cy="22" rx="8" ry="12" fill="#e3c57d" stroke="#b79f68" stroke-width="2"/><ellipse cx="20" cy="24" rx="4" ry="6" fill="#f7f4ee" stroke="#857c5a" stroke-width="1.2"/></svg>`,
    idea: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><ellipse cx="20" cy="18" rx="8" ry="10" fill="#e3c57d"/><rect x="17" y="28" width="6" height="5" rx="2" fill="#b79f68"/><ellipse cx="20" cy="34" rx="3" ry="1.4" fill="#c0b9a6"/></svg>`,
    analisis: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="13" y="12" width="14" height="16" rx="5" fill="#e8e2d2" stroke="#b79f68" stroke-width="1.7"/><circle cx="20" cy="20" r="4.2" fill="#c0b9a6"/><rect x="18" y="26" width="4" height="4" rx="2" fill="#b79f68"/></svg>`,
    accion: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="15" y="11" width="10" height="18" rx="5" fill="#e3c57d"/><ellipse cx="20" cy="31" rx="6" ry="2" fill="#c0b9a6"/><polygon points="20,10 28,12 12,12" fill="#b79f68"/></svg>`,
    reflexion: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><ellipse cx="20" cy="22" rx="8" ry="10" fill="#e8e2d2"/><rect x="17" y="28" width="6" height="5" rx="2" fill="#b79f68"/><ellipse cx="20" cy="34" rx="3" ry="1.4" fill="#c0b9a6"/><ellipse cx="20" cy="18" rx="4" ry="2" fill="#c0b9a6"/></svg>`,
};
// --- Datos del Test ---
const quizData = [
  { 
    type: 'test',
    title: "En una reunión inesperada, ¿cómo actúas primero?",
    options: [
      { text: "Propongo una idea audaz y original", value: "quijote", icon: iconsSVG.idea },
      { text: "Escucho y analizo antes de decidir", value: "sancho", icon: iconsSVG.analisis },
      { text: "Busco una solución creativa en equipo", value: "mixto", icon: iconsSVG.accion }
    ]
  },
  { 
    type: 'test',
    title: "¿Qué símbolo te inspira más cuando afrontas el cambio?",
    options: [
      { text: "El molino: desafío y visión", value: "quijote", icon: iconsSVG.molino },
      { text: "El camino: prudencia y constancia", value: "sancho", icon: iconsSVG.camino },
      { text: "La estrella: guía en lo desconocido", value: "mixto", icon: iconsSVG.estrella }
    ]
  },
  { 
    type: 'open',
    title: "Imagina que tienes que convencer a tu equipo de embarcarse en una aventura arriesgada.<br>¿Qué les dirías?",
    placeholder: "Escribe tu mensaje inspirador aquí…"
  },
  { 
    type: 'story',
    title: "Mini historia: El equipo se encuentra ante un cruce de caminos en plena Mancha.",
    story: "Don Quijote propone seguir la senda desconocida, Sancho sugiere preguntar a los lugareños.<br>¿Cómo continúa la historia?",
    options: [
      { text: "Tomar el sendero desconocido", value: "quijote" },
      { text: "Consultar a los sabios del lugar", value: "sancho" },
      { text: "Esperar a que se despeje el camino", value: "mixto" }
    ]
  },
  { 
    type: 'icons',
    title: "Elige dos símbolos que representan tu liderazgo:",
    icons: [
      { name: "Molino", value: "quijote", svg: iconsSVG.molino },
      { name: "Libro", value: "sancho", svg: iconsSVG.libro },
      { name: "Sombrero", value: "mixto", svg: iconsSVG.sombrero },
      { name: "Lanza", value: "quijote", svg: iconsSVG.lanza },
      { name: "Escudo", value: "sancho", svg: iconsSVG.escudo }
    ],
    selectCount: 2
  },
  { 
    type: 'test',
    title: "¿Te lanzas sin conocer todos los detalles o planificas minuciosamente antes de avanzar?",
    options: [
      { text: "Me lanzo y confío en mi intuición", value: "quijote", icon: iconsSVG.lanza },
      { text: "Planifico cada paso", value: "sancho", icon: iconsSVG.libro },
      { text: "Busco equilibrio y flexibilidad", value: "mixto", icon: iconsSVG.sombrero }
    ]
  },
  { 
    type: 'order',
    title: "Arrastra los iconos para ordenar tu proceso de toma de decisiones:",
    steps: [
      { name: "Idea", value: "quijote", svg: iconsSVG.idea },
      { name: "Análisis", value: "sancho", svg: iconsSVG.analisis },
      { name: "Acción", value: "quijote", svg: iconsSVG.accion },
      { name: "Reflexión", value: "sancho", svg: iconsSVG.reflexion }
    ]
  },
  { 
    type: 'story',
    title: "Don Quijote y Sancho Panza debaten sobre arriesgarse en una nueva aventura empresarial.",
    story: "¿Qué aportas tú a la conversación?",
    options: [
      { text: "Animar a soñar y atreverse", value: "quijote" },
      { text: "Recordar la importancia de medir riesgos", value: "sancho" },
      { text: "Buscar una alternativa creativa", value: "mixto" }
    ]
  },
  { 
    type: 'icons',
    title: "Elige el símbolo que representa tu filosofía para afrontar cambios:",
    icons: [
      { name: "Molino", value: "quijote", svg: iconsSVG.molino },
      { name: "Libro", value: "sancho", svg: iconsSVG.libro },
      { name: "Estrella", value: "mixto", svg: iconsSVG.estrella }
    ],
    selectCount: 1
  },
  { 
    type: 'open',
    title: "Completa la frase: 'Para liderar en tiempos de incertidumbre, creo que lo más importante es...'",
    placeholder: "Escribe tu reflexión final aquí…"
  }
];

const resultProfiles = {
  quijote: {
    title: "Liderazgo Visionario: El Quijote",
    subtitle: "Tu fortaleza reside en tu capacidad para inspirar, ver más allá de lo evidente y movilizar a otros hacia un futuro audaz.",
    badge: "medalla-quijote-simbolica.svg",
    strengths: ["Visión Estratégica", "Pasión Contagiosa", "Coraje Innovador"],
    quote: {
      text: "Confía en el tiempo, que suele dar dulces salidas a muchas amargas dificultades.",
      author: "- Miguel de Cervantes"
    }
  },
  sancho: {
    title: "Liderazgo Prudente: El Sancho",
    subtitle: "Tu fortaleza es tu sabiduría práctica, tu enfoque en la realidad y tu habilidad para cuidar del equipo y los recursos.",
    badge: "medalla-sancho-simbolica.svg",
    strengths: ["Pragmatismo Eficaz", "Gestión de Riesgos", "Lealtad y Cohesión"],
    quote: {
      text: "Más vale un 'toma' que dos 'te daré'.",
      author: "- Miguel de Cervantes"
    }
  },
  mixto: {
    title: "Liderazgo Sabio: El Híbrido",
    subtitle: "Combinas lo mejor de ambos mundos: la audacia para soñar y la sensatez para construir. Eres un líder adaptable y completo.",
    badge: "medalla-mixto-simbolica.svg",
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
let currentOrderSteps = [];

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
    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = (opt.icon ? opt.icon : '') + `<span>${opt.text}</span>`;
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
  } else if (q.type === 'open') {
    const input = document.createElement('textarea');
    input.className = 'answer-input';
    input.placeholder = q.placeholder || "";
    input.rows = 4;
    input.oninput = () => {
      userAnswers[currentQuestion] = input.value.trim();
      continueBtn.style.display = input.value.trim().length > 5 ? 'block' : 'none';
    };
    questionContent.appendChild(input);
  } else if (q.type === 'story') {
    const storyText = document.createElement('div');
    storyText.className = 'story-text';
    storyText.innerHTML = q.story;
    questionContent.appendChild(storyText);
    const optionsGroup = document.createElement('div');
    optionsGroup.className = 'options-group';
    q.options.forEach(opt => {
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
  } else if (q.type === 'icons') {
    const iconsGroup = document.createElement('div');
    iconsGroup.className = 'draw-icons-group';
    let selected = [];
    q.icons.forEach((icon) => {
        const iconDiv = document.createElement('div');
        iconDiv.className = 'draw-icon';
        iconDiv.innerHTML = `${icon.svg}<div class="draw-icon-label">${icon.name}</div>`;
        iconDiv.onclick = function() {
            if (iconDiv.classList.contains('selected')) {
                iconDiv.classList.remove('selected');
                selected = selected.filter(v => v !== icon.value);
            } else {
                if (selected.length < q.selectCount) {
                    iconDiv.classList.add('selected');
                    selected.push(icon.value);
                }
            }
            userAnswers[currentQuestion] = selected.slice();
            continueBtn.style.display = selected.length === q.selectCount ? 'block' : 'none';
        };
        iconsGroup.appendChild(iconDiv);
    });
    questionContent.appendChild(iconsGroup);
  } else if (q.type === 'order') {
    const steps = q.steps.map(s => ({...s}));
    currentOrderSteps = steps;
    const container = document.createElement('div');
    container.className = 'draw-icons-group';
    
    function renderSteps() {
        container.innerHTML = '';
        currentOrderSteps.forEach((step, idx) => {
            const iconDiv = document.createElement('div');
            iconDiv.className = 'draw-icon';
            iconDiv.draggable = true;
            iconDiv.innerHTML = `${step.svg}<div class="draw-icon-label">${step.name}</div>`;
            iconDiv.dataset.idx = idx;
            iconDiv.ondragstart = (e) => e.dataTransfer.setData("text/plain", idx);
            iconDiv.ondragover = (e) => e.preventDefault();
            iconDiv.ondrop = (e) => {
                e.preventDefault();
                const from = Number(e.dataTransfer.getData("text/plain"));
                const to = Number(iconDiv.dataset.idx);
                [currentOrderSteps[from], currentOrderSteps[to]] = [currentOrderSteps[to], currentOrderSteps[from]];
                renderSteps();
            };
            container.appendChild(iconDiv);
        });
    }
    renderSteps();
    questionContent.appendChild(container);
    continueBtn.style.display = 'block';
  }
}

function nextQuestion() {
  const progress = ((currentQuestion + 1) / quizData.length) * 100;
  progressBar.style.width = `${progress}%`;

  const q = quizData[currentQuestion];
  const answer = userAnswers[currentQuestion];
  
  if (q.type === 'test' || q.type === 'story') {
    if (answer === 'quijote') scores.quijote++;
    else if (answer === 'sancho') scores.sancho++;
    else if (answer) scores.mixto++;
  } else if (q.type === 'icons') {
    if (Array.isArray(answer)) {
      answer.forEach(val => {
        if (val === 'quijote') scores.quijote++;
        else if (val === 'sancho') scores.sancho++;
        else scores.mixto++;
      });
    }
  } else if (q.type === 'order') {
    const finalOrder = currentOrderSteps.map(s => s.value);
    userAnswers[currentQuestion] = finalOrder;
    if (finalOrder[0] === 'quijote' && finalOrder[finalOrder.length-1] === 'sancho') scores.quijote++;
    else if (finalOrder[0] === 'sancho' && finalOrder[finalOrder.length-1] === 'quijote') scores.sancho++;
    else scores.mixto++;
  } else if (q.type === 'open') {
    if (answer && answer.length > 5) {
        // Lógica simple para puntuar respuestas abiertas
        const quijoteWords = ['sueño', 'visión', 'honor', 'aventura', 'grandeza', 'atreverse'];
        const sanchoWords = ['plan', 'prudencia', 'riesgo', 'seguridad', 'paso a paso', 'realidad'];
        let qScore = 0;
        let sScore = 0;
        const lowerCaseAnswer = answer.toLowerCase();
        quijoteWords.forEach(word => { if(lowerCaseAnswer.includes(word)) qScore++; });
        sanchoWords.forEach(word => { if(lowerCaseAnswer.includes(word)) sScore++; });
        
        if (qScore > sScore) scores.quijote++;
        else if (sScore > qScore) scores.sancho++;
        else scores.mixto++;
    } else {
        scores.mixto++; // Puntaje por defecto si no hay respuesta
    }
  }

  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    setTimeout(showResult, 400); 
  }
}

function showResult() {
  questionSection.style.display = 'none';
  resultSection.style.display = 'block';

  let profile = "mixto";
  if (scores.quijote > scores.sancho && scores.quijote >= scores.mixto) {
    profile = "quijote";
  } else if (scores.sancho > scores.quijote && scores.sancho >= scores.mixto) {
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