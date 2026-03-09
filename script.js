// 1. ACCESS CONTROL & CONFIG
function adjustSliderRange() {
    const topic = document.getElementById('topic-select').value;
    const slider = document.getElementById('question-slider');
    const availableCount = topic === "All" ? quizData.length : quizData.filter(i => i.section === topic).length;
    slider.max = availableCount;
    if (parseInt(slider.value) > availableCount) slider.value = availableCount;
    updateSliderLabel(slider.value);
}

function updateSliderLabel(val) {
    document.getElementById('question-count-label').innerText = val;
    document.getElementById('time-estimate-label').innerText = val * 2;
}

// 2. QUESTION BANK
const quizData = [
    // --- FOUNDATIONS (Chapters 1-6) ---
    { q: "Accidental Death and Disability (1966) is famously known as:", options: ["The Orange Book", "The White Paper", "The EMS Charter", "The NHTSA Guide"], answer: ["The White Paper"], type: "single", category: "Ch 1: EMS Systems", section: "Foundations", rationale: "This paper identified accidental death as a 'neglected disease' and spurred EMS growth." },
    { q: "Which level of EMS is trained in IV therapy and limited advanced meds?", options: ["EMR", "EMT", "AEMT", "Paramedic"], answer: ["AEMT"], type: "single", category: "Ch 1: EMS Systems", section: "Foundations", rationale: "AEMTs bridge basic and advanced life support." },
    { q: "What is the primary way to prevent disease transmission?", options: ["Gloves", "Handwashing", "Gowns", "Masks"], answer: ["Handwashing"], type: "single", category: "Ch 2: Safety", section: "Foundations", rationale: "Hand hygiene is the #1 clinical defense." },
    { q: "What are the four elements of Negligence?", options: ["Duty to act", "Breach of duty", "Damages", "Proximate cause", "Malice"], answer: ["Duty to act", "Breach of duty", "Damages", "Proximate cause"], type: "multiple", category: "Ch 3: Legal", section: "Foundations", rationale: "Negligence requires all 4 components: Duty, Breach, Damages, and Proximate Cause." },
    { q: "In SBAR, what does 'B' stand for?", options: ["Basic Info", "Background", "Body System", "Blood Pressure"], answer: ["Background"], type: "single", category: "Ch 4: Communications", section: "Foundations", rationale: "SBAR = Situation, Background, Assessment, Recommendation." },
    { q: "What does the prefix 'hypo-' mean?", options: ["Above", "Below", "Fast", "Slow"], answer: ["Below"], type: "single", category: "Ch 5: Terminology", section: "Foundations", rationale: "Hypo (low/below) vs Hyper (high/above)." },
    { q: "Which lifting technique uses the legs and an upright back?", options: ["Power grip", "Power lift", "Deadlift", "Shoulder lift"], answer: ["Power lift"], type: "single", category: "Ch 6: Lifting", section: "Foundations", rationale: "Legs are strongest; back must remain straight." },

    // --- PATHOPHYSIOLOGY & ELECTROLYTES (Integrated New Questions) ---
    { 
        q: "A 72-year-old patient with chronic hypertension presents with left ventricular enlargement. Which cellular adaptation is most likely occurring?", 
        options: ["Atrophy", "Hypertrophy", "Hyperplasia", "Metaplasia"], 
        answer: ["Hypertrophy"], 
        type: "single", category: "Ch 7: Patho", section: "Pathophysiology",
        rationale: "Hypertrophy is an increase in the size of cells due to synthesis of more subcellular components, often seen in the left ventricle due to chronic high resistance from hypertension." 
    },
    
    { 
        q: "A patient with severe renal failure is most at risk for which of the following electrolyte imbalances? (Select all that apply)", 
        options: ["Hyperkalemia", "Hypermagnesemia", "Hypercalcemia", "Hyperphosphatemia"], 
        answer: ["Hyperkalemia", "Hypermagnesemia", "Hyperphosphatemia"], 
        type: "multiple", category: "Ch 7: Patho", section: "Pathophysiology",
        rationale: "Renal failure leads to decreased excretion of potassium, magnesium, and phosphate. Calcium levels often have an inverse relationship with phosphate." 
    },
    { 
        q: "A patient is hyperventilating due to a panic attack. Which acid-base disturbance and compensatory mechanism are expected?", 
        options: ["Respiratory acidosis; renal bicarbonate retention", "Respiratory alkalosis; renal hydrogen ion resorption", "Metabolic acidosis; respiratory CO2 blow-off", "Respiratory alkalosis; renal bicarbonate excretion"], 
        answer: ["Respiratory alkalosis; renal hydrogen ion resorption"], 
        type: "single", category: "Ch 7: Patho", section: "Pathophysiology",
        rationale: "Hyperventilation leads to respiratory alkalosis. In alkalosis, the kidneys respond by resorbing hydrogen ions and excreting potassium." 
    },
    { 
        q: "Which of the following are potential causes of obstructive shock? (Select all that apply)", 
        options: ["Pericardial tamponade", "Tension pneumothorax", "Sepsis", "Pulmonary embolus"], 
        answer: ["Pericardial tamponade", "Tension pneumothorax", "Pulmonary embolus"], 
        type: "multiple", category: "Ch 7: Patho", section: "Pathophysiology",
        rationale: "Obstructive shock occurs when blood flow is blocked in the heart or great vessels. Sepsis is distributive shock." 
    },
    
    { 
        q: "What is the primary intracellular cation responsible for maintaining intracellular osmolarity?", 
        options: ["Sodium", "Potassium", "Calcium", "Magnesium"], 
        answer: ["Potassium"], 
        type: "single", category: "Ch 7: Patho", section: "Pathophysiology",
        rationale: "Potassium (K+) is the major intracellular cation and is crucial for maintaining intracellular osmolarity and neuromuscular control." 
    },
    { 
        q: "A patient presents with a serum sodium level of 130 mEq/L. This condition is known as:", 
        options: ["Hypernatremia", "Hyponatremia", "Hypokalemia", "Hypercalcemia"], 
        answer: ["Hyponatremia"], 
        type: "single", category: "Ch 7: Patho", section: "Pathophysiology",
        rationale: "Hyponatremia is characterized by a serum sodium level of 135 mEq/L or less." 
    },
    { 
        q: "Which findings are associated with the 'Alarm' stage of the General Adaptation Syndrome? (Select all that apply)", 
        options: ["Release of catecholamines", "Decreased heart rate", "Increased blood glucose", "Exhaustion of resources"], 
        answer: ["Release of catecholamines", "Increased blood glucose"], 
        type: "multiple", category: "Ch 7: Patho", section: "Pathophysiology",
        rationale: "The alarm stage involves the release of catecholamines (epinephrine/norepinephrine), which increases HR and blood glucose." 
    },
    { 
        q: "A patient with a pH of 7.25 and a PCO2 of 55 mmHg is in which state?", 
        options: ["Respiratory alkalosis", "Metabolic acidosis", "Respiratory acidosis", "Metabolic alkalosis"], 
        answer: ["Respiratory acidosis"], 
        type: "single", category: "Ch 7: Patho", section: "Pathophysiology",
        rationale: "A pH below 7.35 is acidosis. High PCO2 (above 45 mmHg) indicates the cause is respiratory." 
    },
    
    { 
        q: "Identify the signs of hypocalcemia: (Select all that apply)", 
        options: ["Muscle cramps", "Laryngospasm", "Tetany", "Polyuria"], 
        answer: ["Muscle cramps", "Laryngospasm", "Tetany"], 
        type: "multiple", category: "Ch 7: Patho", section: "Pathophysiology",
        rationale: "Hypocalcemia causes increased neuromuscular excitation leading to cramps, tetany, and laryngospasm. Polyuria is associated with hypercalcemia." 
    },
    { 
        q: "What is the role of the Renin-Angiotensin-Aldosterone System (RAAS)?", 
        options: ["To decrease blood pressure", "To regulate fluid balance and increase blood pressure", "To excrete sodium", "To decrease serum osmolarity"], 
        answer: ["To regulate fluid balance and increase blood pressure"], 
        type: "single", category: "Ch 7: Patho", section: "Pathophysiology",
        rationale: "RAAS triggers salt/water retention and peripheral vasoconstriction to improve blood pressure." 
    },
    { 
        q: "Which of the following may cause a high anion gap metabolic acidosis (MUDPILES)? (Select all that apply)", 
        options: ["Diabetic ketoacidosis", "Salicylate poisoning", "Lactic acidosis", "Respiratory failure"], 
        answer: ["Diabetic ketoacidosis", "Salicylate poisoning", "Lactic acidosis"], 
        type: "multiple", category: "Ch 7: Patho", section: "Pathophysiology",
        rationale: "MUDPILES stands for Methanol, Uremia, DKA, Lactic acidosis, and Salicylates. Respiratory failure causes respiratory acidosis." 
    },
    { 
        q: "During anaerobic metabolism, what is the primary byproduct that leads to metabolic acidosis?", 
        options: ["Carbon dioxide", "Lactic acid", "Bicarbonate", "Ketones"], 
        answer: ["Lactic acid"], 
        type: "single", category: "Ch 7: Patho", section: "Pathophysiology",
        rationale: "Inadequate perfusion forces cells into anaerobic metabolism, causing increased lactic acid production." 
    },
    { 
        q: "A patient with a history of alcohol use disorder presents with tremors and tachycardia. Which imbalance is common in this population?", 
        options: ["Hypermagnesemia", "Hypomagnesemia", "Hypernatremia", "Hypercalcemia"], 
        answer: ["Hypomagnesemia"], 
        type: "single", category: "Ch 7: Patho", section: "Pathophysiology",
        rationale: "Chronic alcohol use often leads to hypomagnesemia due to poor diet and impaired nutrient absorption." 
    },
    { 
        q: "Which of the following are characteristics of Multiple Organ Dysfunction Syndrome (MODS)? (Select all that apply)", 
        options: ["Overactivation of the complement system", "Microvascular thrombus formation", "Massive systemic immune response", "Instantaneous recovery with fluids"], 
        answer: ["Overactivation of the complement system", "Microvascular thrombus formation", "Massive systemic immune response"], 
        type: "multiple", category: "Ch 7: Patho", section: "Pathophysiology",
        rationale: "MODS involves massive immune responses, complement overactivation, and microvascular thrombi." 
    },
    { 
        q: "A normal serum potassium level is between:", 
        options: ["135–145 mEq/L", "3.5–5.0 mEq/L", "8.6–10.2 mg/dL", "1.6–2.6 mEq/L"], 
        answer: ["3.5–5.0 mEq/L"], 
        type: "single", category: "Ch 7: Patho", section: "Pathophysiology",
        rationale: "The normal serum level of potassium (K+) ranges from 3.5 to 5.0 mEq/L." 
    },
    { 
        q: "Which hormone is released by the pituitary gland to cause the kidneys to reabsorb water?", 
        options: ["Aldosterone", "Renin", "Antidiuretic Hormone (ADH)", "Epinephrine"], 
        answer: ["Antidiuretic Hormone (ADH)"], 
        type: "single", category: "Ch 7: Patho", section: "Pathophysiology",
        rationale: "ADH causes the kidneys to reabsorb water, diluting the blood and normalizing serum osmolarity." 
    },
    { 
        q: "Identify the primary EKG finding associated with Hypercalcemia:", 
        options: ["Widened QRS", "Peaked T waves", "Shortened QT interval", "Prominent U waves"], 
        answer: ["Shortened QT interval"], 
        type: "single", category: "Ch 7: Patho", section: "Pathophysiology",
        rationale: "The most common EKG finding associated with hypercalcemia is the shortening of the QT interval." 
    },
    
    { 
        q: "Which of the following can lead to cardiogenic shock? (Select all that apply)", 
        options: ["Myocardial infarction", "Severe heart failure", "Cardiac dysrhythmias", "Hemorrhage"], 
        answer: ["Myocardial infarction", "Severe heart failure", "Cardiac dysrhythmias"], 
        type: "multiple", category: "Ch 7: Patho", section: "Pathophysiology",
        rationale: "Cardiogenic shock is caused by the heart's inability to pump. Hemorrhage causes hypovolemic shock." 
    },
    { 
        q: "Metaplasia is defined as:", 
        options: ["Decrease in cell size", "Increase in cell number", "Reversible replacement of one cell type with another", "Alteration in size and shape"], 
        answer: ["Reversible replacement of one cell type with another"], 
        type: "single", category: "Ch 7: Patho", section: "Pathophysiology",
        rationale: "Metaplasia is the reversible adaptation where one adult cell type is replaced by another (e.g., smokers' airways)." 
    },
    { 
        q: "What is the clinical definition of a hypertonic solution?", 
        options: ["Lower osmotic pressure", "Higher osmotic pressure", "Equal osmotic pressure", "No solutes"], 
        answer: ["Higher osmotic pressure"], 
        type: "single", category: "Ch 7: Patho", section: "Pathophysiology",
        rationale: "A hypertonic solution has a higher osmotic pressure (more solute) than the interstitial fluid." 
    }
];

// --- QUIZ LOGIC ---
let sessionQuestions = [];
let currentIdx = 0;
let score = 0;
let mode = '';
let timerInterval;
let timeLeft = 0;
let categoryStats = {};

function startQuiz(selectedMode) {
    mode = selectedMode;
    const selectedTopic = document.getElementById('topic-select').value;
    const numToPull = parseInt(document.getElementById('question-slider').value);
    
    let filteredBank = selectedTopic === "All" ? [...quizData] : quizData.filter(i => i.section === selectedTopic);
    const finalPull = Math.min(numToPull, filteredBank.length);

    document.getElementById('setup-area').style.display = 'none';
    document.getElementById('quiz-area').style.display = 'block';

    const history = JSON.parse(localStorage.getItem('eric_field_notes_history') || "{}");
    let sortedBank = filteredBank.sort((a, b) => {
        const failA = history[a.q] ? history[a.q].fail : 0;
        const failB = history[b.q] ? history[b.q].fail : 0;
        return failB - failA;
    });

    sessionQuestions = sortedBank.slice(0, finalPull);

    if (mode === 'exam') {
        sessionQuestions.sort(() => Math.random() - 0.5);
        timeLeft = sessionQuestions.length * 2 * 60; 
        document.getElementById('timer-container').style.display = 'block';
        startTimer();
    }
    showQuestion();
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        let mins = Math.floor(timeLeft / 60);
        let secs = timeLeft % 60;
        document.getElementById('timer-display').innerText = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
        if (timeLeft <= 0) { clearInterval(timerInterval); showResults(); }
    }, 1000);
}

function showQuestion() {
    const data = sessionQuestions[currentIdx];
    document.getElementById('progress').innerText = `Question ${currentIdx + 1} of ${sessionQuestions.length} | ${data.category}`;
    document.getElementById('question-text').innerText = data.q;
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    document.getElementById('feedback').innerText = '';

    data.options.forEach(opt => {
        const div = document.createElement('div');
        div.className = "option-item";
        const input = document.createElement('input');
        input.type = data.type === 'single' ? 'radio' : 'checkbox';
        input.name = "option";
        input.value = opt;
        input.id = opt;
        const label = document.createElement('label');
        label.htmlFor = opt;
        label.innerText = opt;
        div.appendChild(input);
        div.appendChild(label);
        div.onclick = () => input.click();
        container.appendChild(div);
    });
}

function handleAction() {
    const selected = Array.from(document.querySelectorAll('input[name="option"]:checked')).map(i => i.value);
    if (selected.length === 0) return alert("Select an answer.");

    const q = sessionQuestions[currentIdx];
    const isCorrect = selected.length === q.answer.length && selected.every(v => q.answer.includes(v));

    let history = JSON.parse(localStorage.getItem('eric_field_notes_history') || "{}");
    if (!history[q.q]) history[q.q] = { pass: 0, fail: 0 };
    isCorrect ? history[q.q].pass++ : history[q.q].fail++;
    localStorage.setItem('eric_field_notes_history', JSON.stringify(history));

    if (!categoryStats[q.category]) categoryStats[q.category] = { correct: 0, total: 0 };
    categoryStats[q.category].total++;
    if (isCorrect) categoryStats[q.category].correct++;

    if (mode === 'review') {
        const fb = document.getElementById('feedback');
        fb.innerHTML = isCorrect ? `<b style="color:green">Correct!</b>` : `<b style="color:red">Incorrect.</b> Answer: ${q.answer.join(", ")}`;
        fb.innerHTML += `<br><small>${q.rationale}</small>`;
        if (isCorrect) score++;
        const btn = document.getElementById('action-btn');
        btn.innerText = "Next Question";
        btn.onclick = () => {
            currentIdx++;
            if (currentIdx < sessionQuestions.length) { showQuestion(); btn.innerText = "Submit Answer"; btn.onclick = handleAction; }
            else showResults();
        };
    } else {
        if (isCorrect) score++;
        currentIdx++;
        currentIdx < sessionQuestions.length ? showQuestion() : showResults();
    }
}

function showResults() {
    clearInterval(timerInterval);
    document.getElementById('quiz-area').style.display = 'none';
    document.getElementById('results-area').style.display = 'block';
    const percent = Math.round((score / sessionQuestions.length) * 100);
    document.getElementById('score-display').innerText = `Total Score: ${score} / ${sessionQuestions.length}`;
    document.getElementById('percentage-display').innerText = `${percent}%`;
    
    let breakdownHTML = "<strong>Mastery by Chapter:</strong><br>";
    for (const cat in categoryStats) {
        let catPercent = Math.round((categoryStats[cat].correct / categoryStats[cat].total) * 100);
        breakdownHTML += `${cat}: ${catPercent}%<br>`;
    }
    document.getElementById('category-breakdown').innerHTML = breakdownHTML;
    document.getElementById('pass-status').innerHTML = percent >= 70 ? "<b style='color:green'>PASSED</b>" : "<b style='color:red'>RE-STUDY REQUIRED</b>";
}
