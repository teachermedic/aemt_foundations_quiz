      const quizData = [
    // CHAPTER 1: EMS SYSTEMS
    { q: "What were the findings of the 1966 'White Paper'?", options: ["EMS was excellent", "Accidental death was a 'neglected disease'", "Paramedics were unnecessary", "Every car needed an AED"], answer: ["Accidental death was a 'neglected disease'"], type: "single", category: "Ch 1: EMS Systems", rationale: "The 1966 White Paper identified that accidental death was a major public health crisis due to inadequate prehospital care." },
    { q: "Which EMS level is trained to use an IV and limited advanced medications?", options: ["EMR", "EMT", "AEMT", "Paramedic"], answer: ["AEMT"], type: "single", category: "Ch 1: EMS Systems", rationale: "AEMTs bridge the gap between EMTs and Paramedics with limited advanced life support skills." },
    { q: "Who provides the legal authority for an AEMT to practice?", options: ["The Fire Chief", "The Medical Director", "The State Governor", "The NREMT"], answer: ["The Medical Director"], type: "single", category: "Ch 1: EMS Systems", rationale: "All EMS providers practice under the license and oversight of a Medical Director." },
    { q: "What is the primary goal of Continuous Quality Improvement (CQI)?", options: ["To find and punish errors", "To improve patient care", "To reduce department costs", "To increase call volume"], answer: ["To improve patient care"], type: "single", category: "Ch 1: EMS Systems", rationale: "CQI is a non-punitive process designed to improve clinical outcomes." },
    { q: "Online medical direction is defined as:", options: ["Following written protocols", "Real-time consultation via radio/phone", "Attending monthly meetings", "Reading textbooks"], answer: ["Real-time consultation via radio/phone"], type: "single", category: "Ch 1: EMS Systems", rationale: "Online is real-time; Offline is via pre-written protocols." },
    { q: "Which level of training is the foundation for all EMS in the US?", options: ["First Aid", "EMT", "AEMT", "Public Safety"], answer: ["EMT"], type: "single", category: "Ch 1: EMS Systems", rationale: "The EMT level provides the fundamental emergency care foundation." },
    { q: "The ADA protects qualified EMS workers with disabilities from:", options: ["Scene hazards", "Employment discrimination", "Difficult patients", "Licensure exams"], answer: ["Employment discrimination"], type: "single", category: "Ch 1: EMS Systems", rationale: "The ADA ensures equal opportunity for qualified individuals with disabilities." },
    { q: "What is the focus of 'Public Health'?", options: ["Treating one patient", "Population-wide prevention", "Hospital billing", "Radio repair"], answer: ["Population-wide prevention"], type: "single", category: "Ch 1: EMS Systems", rationale: "Public health focuses on preventing disease/injury across entire communities." },
    { q: "Evidence-based medicine uses what to guide clinical decisions?", options: ["Tradition", "EMS Research", "Intuition", "Old protocols"], answer: ["EMS Research"], type: "single", category: "Ch 1: EMS Systems", rationale: "Research provides the evidence needed to change and improve clinical practice." },
    { q: "What is the primary role of the NREMT?", options: ["To provide legal defense", "To set national certification standards", "To act as a union", "To provide health insurance"], answer: ["To set national certification standards"], type: "single", category: "Ch 1: EMS Systems", rationale: "NREMT ensures a minimum standard of competency across the nation." },

    // CHAPTER 2: SAFETY & WELLNESS
    { q: "What is the most effective way to prevent the spread of disease?", options: ["Wearing a gown", "Handwashing", "Always wearing a mask", "Staying in the truck"], answer: ["Handwashing"], type: "single", category: "Ch 2: Safety & Wellness", rationale: "Hand hygiene is the #1 defense against pathogen transmission." },
    { q: "When should you wear an N95 or HEPA respirator?", options: ["Minor bleeding", "Suspected Tuberculosis (TB)", "Vomiting", "Childbirth"], answer: ["Suspected Tuberculosis (TB)"], type: "single", category: "Ch 2: Safety & Wellness", rationale: "Airborne pathogens like TB require specialized high-level filtration." },
    { q: "What is the first priority when arriving at any emergency scene?", options: ["Patient care", "Documentation", "Personal safety", "Gathering equipment"], answer: ["Personal safety"], type: "single", category: "Ch 2: Safety & Wellness", rationale: "If you become a victim, you cannot help the patient." },
    { q: "The process of killing most, but not all, microorganisms on an object is:", options: ["Sterilization", "Disinfection", "Cleaning", "Boiling"], answer: ["Disinfection"], type: "single", category: "Ch 2: Safety & Wellness", rationale: "Disinfection kills many pathogens; sterilization kills everything." },
    { q: "Standard Precautions are based on the assumption that:", options: ["Only sick people are contagious", "All body fluids are potentially infectious", "Patients will tell you if they are sick", "Gloves are never needed"], answer: ["All body fluids are potentially infectious"], type: "single", category: "Ch 2: Safety & Wellness", rationale: "Standard precautions protect you from unknown risks in every patient contact." },
    { q: "What is 'Burnout'?", options: ["A sudden injury", "Chronic physical and emotional exhaustion", "A type of chemical fire", "Getting a promotion"], answer: ["Chronic physical and emotional exhaustion"], type: "single", category: "Ch 2: Safety & Wellness", rationale: "Burnout results from long-term exposure to stress without proper coping." },
    { q: "Which strain of Hepatitis is primarily spread through blood-to-blood contact?", options: ["Hep A", "Hep B", "Hep E", "Hep F"], answer: ["Hep B"], type: "single", category: "Ch 2: Safety & Wellness", rationale: "Hepatitis B is a major bloodborne pathogen concern for EMS providers." },
    { q: "If you suffer an accidental needle stick, what is your FIRST step?", options: ["Report to supervisor", "Wash the area with soap and water", "Go to the hospital", "Call the patient's doctor"], answer: ["Wash the area with soap and water"], type: "single", category: "Ch 2: Safety & Wellness", rationale: "Immediate decontamination is the priority after an exposure." },
    { q: "What type of stress reaction occurs during a high-stress incident?", options: ["Delayed", "Acute", "Cumulative", "Eustress"], answer: ["Acute"], type: "single", category: "Ch 2: Safety & Wellness", rationale: "Acute stress occurs immediately during or after a specific event." },
    { q: "What are the stages of the General Adaptation Syndrome?", options: ["Panic, Calm, Sleep", "Alarm, Resistance, Exhaustion", "Fear, Anger, Sadness", "Arrival, Care, Transport"], answer: ["Alarm, Resistance, Exhaustion"], type: "single", category: "Ch 2: Safety & Wellness", rationale: "This is the body's three-stage response to stress." },

    // CHAPTER 3: MEDICAL/LEGAL
    { q: "Which of the following are the 4 factors of Negligence?", options: ["Duty to act", "Breach of duty", "Damages", "Proximate cause", "Malice"], answer: ["Duty to act", "Breach of duty", "Damages", "Proximate cause"], type: "multiple", category: "Ch 3: Medical/Legal", rationale: "All 4 must be proven: you had a duty, you failed it, injury occurred, and your failure caused it." },
    { q: "What type of consent is assumed when a patient is unconscious?", options: ["Informed", "Implied", "Expressed", "Involuntary"], answer: ["Implied"], type: "single", category: "Ch 3: Medical/Legal", rationale: "Implied consent allows care for those unable to speak for themselves in an emergency." },
    { q: "Leaving a patient before transferring care to a provider of equal or higher training is:", options: ["Assault", "Abandonment", "Battery", "Slander"], answer: ["Abandonment"], type: "single", category: "Ch 3: Medical/Legal", rationale: "Abandonment is a serious legal and ethical breach of duty." },
    { q: "Touching a patient without their consent is legally considered:", options: ["Assault", "Battery", "Libel", "Tort"], answer: ["Battery"], type: "single", category: "Ch 3: Medical/Legal", rationale: "Battery is unlawful touching; Assault is the threat of it." },
    { q: "What law protects the privacy of patient health information?", options: ["OSHA", "HIPAA", "FEMA", "NHTSA"], answer: ["HIPAA"], type: "single", category: "Ch 3: Medical/Legal", rationale: "HIPAA governs how patient data must be protected." },
    { q: "Spoken defamation is known as:", options: ["Libel", "Slander", "Negligence", "Abandonment"], answer: ["Slander"], type: "single", category: "Ch 3: Medical/Legal", rationale: "Slander is spoken; Libel is written." },
    { q: "The scope of practice for an AEMT is defined by:", options: ["The patient", "State law and Medical Direction", "The hospital nurse", "The textbook only"], answer: ["State law and Medical Direction"], type: "single", category: "Ch 3: Medical/Legal", rationale: "Scope of practice defines what you are legally allowed to do." },
    { q: "A 'DNR' order is a type of:", options: ["Refusal form", "Advance Directive", "Insurance policy", "Police report"], answer: ["Advance Directive"], type: "single", category: "Ch 3: Medical/Legal", rationale: "Advance directives outline a patient's wishes before a crisis occurs." },
    { q: "Who can legally refuse medical care?", options: ["Anyone", "Competent adults", "Only doctors", "Minors"], answer: ["Competent adults"], type: "single", category: "Ch 3: Medical/Legal", rationale: "Competency is required for a legal refusal of care." },
    { q: "What is a 'Tort'?", options: ["A type of medical tool", "A wrongful act leading to civil liability", "A criminal felony", "A legal contract"], answer: ["A wrongful act leading to civil liability"], type: "single", category: "Ch 3: Medical/Legal", rationale: "Most EMS lawsuits fall under tort law (civil wrongs)." },

    // CHAPTER 4: COMMUNICATIONS
    { q: "In the SBAR format, what does the 'B' stand for?", options: ["Basic Info", "Background", "Body System", "Blood Pressure"], answer: ["Background"], type: "single", category: "Ch 4: Communications", rationale: "SBAR = Situation, Background, Assessment, Recommendation." },
    { q: "What device receives a radio signal and rebroadcasts it at a higher power?", options: ["Base station", "Mobile radio", "Repeater", "Pager"], answer: ["Repeater"], type: "single", category: "Ch 4: Communications", rationale: "Repeaters are used to extend the range of EMS communications." },
    { q: "Which type of question allows a patient to explain things in their own words?", options: ["Closed-ended", "Leading", "Open-ended", "Binary"], answer: ["Open-ended"], type: "single", category: "Ch 4: Communications", rationale: "Open-ended questions (e.g., 'What happened?') provide more detail." },
    { q: "If a clinical action is not documented in the PCR:", options: ["It still happened", "It didn't happen (legally)", "The nurse will remember", "It's optional"], answer: ["It didn't happen (legally)"], type: "single", category: "Ch 4: Communications", rationale: "In a court of law, if it wasn't written down, it didn't happen." },
    { q: "The agency that regulates radio communication is the:", options: ["FAA", "FCC", "FDA", "FBI"], answer: ["FCC"], type: "single", category: "Ch 4: Communications", rationale: "The Federal Communications Commission (FCC) manages radio frequencies." },
    { q: "How should you correct an error on a written PCR?", options: ["Scribble it out", "Use white-out", "Draw a single line, initial, and date it", "Throw the page away"], answer: ["Draw a single line, initial, and date it"], type: "single", category: "Ch 4: Communications", rationale: "Proper corrections maintain the legal integrity of the record." },
    { q: "What is 'Telemetry'?", options: ["Radio repair", "Transmission of data (like ECG) to the hospital", "A type of map", "Patient transport"], answer: ["Transmission of data (like ECG) to the hospital"], type: "single", category: "Ch 4: Communications", rationale: "Telemetry allows the hospital to see vital data before the patient arrives." },
    { q: "The 'Chief Complaint' is defined as:", options: ["What you think is wrong", "The patient's reason for calling", "The dispatcher's notes", "The patient's medical history"], answer: ["The patient's reason for calling"], type: "single", category: "Ch 4: Communications", rationale: "The chief complaint is the symptom that bothered the patient enough to call." },
    { q: "Which of the following is a component of therapeutic communication?", options: ["Judging the patient", "Active listening", "Interrupting frequently", "Avoiding eye contact"], answer: ["Active listening"], type: "single", category: "Ch 4: Communications", rationale: "Therapeutic communication builds rapport and trust." },
    { q: "The official transfer of care happens when:", options: ["You pull into the bay", "You give a verbal report to a higher/equal provider", "You drop off the PCR", "The patient is in the hospital bed"], answer: ["You give a verbal report to a higher/equal provider"], type: "single", category: "Ch 4: Communications", rationale: "Duty is not transferred until a verbal handoff is complete." },

    // CHAPTER 5: MEDICAL TERMINOLOGY
    { q: "What does the prefix 'hypo-' mean?", options: ["Above/High", "Below/Low", "Fast", "Slow"], answer: ["Below/Low"], type: "single", category: "Ch 5: Terminology", rationale: "Hypo (low), Hyper (high)." },
    { q: "The term 'Supine' describes lying:", options: ["Face down", "Face up", "On the side", "Sitting up"], answer: ["Face up"], type: "single", category: "Ch 5: Terminology", rationale: "Supine (face up), Prone (face down)." },
    { q: "Which plane divides the body into top and bottom?", options: ["Sagittal", "Frontal", "Transverse", "Coronal"], answer: ["Transverse"], type: "single", category: "Ch 5: Terminology", rationale: "The transverse plane is horizontal." },
    { q: "Proximal means:", options: ["Farther from the trunk", "Closer to the trunk", "The front", "The back"], answer: ["Closer to the trunk"], type: "single", category: "Ch 5: Terminology", rationale: "Proximal is near the point of attachment; Distal is distant." },
    { q: "The suffix '-ectomy' indicates:", options: ["Inflammation", "Surgical removal", "Pain", "Hole"], answer: ["Surgical removal"], type: "single", category: "Ch 5: Terminology", rationale: "Ectomy = removal (e.g., Appendectomy)." },
    { q: "What quadrant is the Liver primarily in?", options: ["LUQ", "RUQ", "LLQ", "RLQ"], answer: ["RUQ"], type: "single", category: "Ch 5: Terminology", rationale: "The liver is in the Right Upper Quadrant." },
    { q: "The term 'Anterior' refers to the:", options: ["Back", "Front", "Side", "Top"], answer: ["Front"], type: "single", category: "Ch 5: Terminology", rationale: "Anterior (ventral) is the front of the body." },
    { q: "What does the root 'Cardi/o' refer to?", options: ["Lungs", "Brain", "Heart", "Stomach"], answer: ["Heart"], type: "single", category: "Ch 5: Terminology", rationale: "Cardio is the root for heart." },
    { q: "A 'Combining Vowel' is usually which letter?", options: ["A", "E", "O", "U"], answer: ["O"], type: "single", category: "Ch 5: Terminology", rationale: "The letter 'O' is the most common connecting vowel." },
    { q: "Abduction means moving a limb:", options: ["Toward the midline", "Away from the midline", "Up", "Down"], answer: ["Away from the midline"], type: "single", category: "Ch 5: Terminology", rationale: "Abduct = take away from midline; Adduct = add to midline." },

    // CHAPTER 6: LIFTING & MOVING
    { q: "Which lifting technique uses the legs and keeps the back straight?", options: ["Power grip", "Power lift", "Deadlift", "Shoulder lift"], answer: ["Power lift"], type: "single", category: "Ch 6: Lifting/Moving", rationale: "Legs are the strongest muscles; the back must stay upright to avoid injury." },
    { q: "When is a 'Rapid Extrication' used?", options: ["When you are late", "When the scene is unsafe or patient is unstable", "For all car crashes", "When the patient is heavy"], answer: ["When the scene is unsafe or patient is unstable"], type: "single", category: "Ch 6: Lifting/Moving", rationale: "Rapid extrication moves a patient to a board in less than 1 minute." },
    { q: "Which device is best for moving a patient down stairs?", options: ["Scoop stretcher", "Wheeled stretcher", "Stair chair", "Basket stretcher"], answer: ["Stair chair"], type: "single", category: "Ch 6: Lifting/Moving", rationale: "Stair chairs are designed for vertical navigation in tight spaces." },
    { q: "The 'Power Grip' involves palms facing:", options: ["Down", "Up", "Each other", "Sideways"], answer: ["Up"], type: "single", category: "Ch 6: Lifting/Moving", rationale: "Palms up is the strongest and safest grip for heavy loads." },
    { q: "What is an 'Emergency Move'?", options: ["Moving a patient who is in pain", "Moving a patient due to immediate environmental danger", "Moving a patient to the truck", "Moving a patient for a code"], answer: ["Moving a patient due to immediate environmental danger"], type: "single", category: "Ch 6: Lifting/Moving", rationale: "Emergency moves prioritize speed over spinal restriction due to hazards like fire." },
    { q: "What is the weight limit for a standard 2-person lift?", options: ["150 lbs", "250 lbs", "400 lbs", "No limit"], answer: ["250 lbs"], type: "single", category: "Ch 6: Lifting/Moving", rationale: "250 lbs is the standard safety limit for two providers." },
    { q: "Which stretcher can be split into halves to scoop the patient?", options: ["Portable stretcher", "Basket stretcher", "Scoop stretcher", "Ambulance stretcher"], answer: ["Scoop stretcher"], type: "single", category: "Ch 6: Lifting/Moving", rationale: "Scoop stretchers minimize patient movement during pick-up." },
    { q: "Before every lift, you should first:", options: ["Run to the patient", "Estimate the weight of the load", "Call for a helicopter", "Lift with your back"], answer: ["Estimate the weight of the load"], type: "single", category: "Ch 6: Lifting/Moving", rationale: "Weight assessment determines if you need more help." },
    { q: "A 'Bariatric Stretcher' is used for:", options: ["Pediatric patients", "Obese patients", "Cardiac patients", "Trauma patients"], answer: ["Obese patients"], type: "single", category: "Ch 6: Lifting/Moving", rationale: "Bariatric equipment handles high-weight capacities safely." },
    { q: "When pulling a patient, you should keep the line of pull:", options: ["Twisted", "Through the center of your body", "Far away from you", "Over your head"], answer: ["Through the center of your body"], type: "single", category: "Ch 6: Lifting/Moving", rationale: "Centralizing the load protects your spine." }
];

let sessionQuestions = [];
let currentIdx = 0;
let score = 0;
let mode = '';
let timerInterval;
let timeLeft = 3600; // 60 mins
let categoryStats = {};

function startQuiz(selectedMode) {
    mode = selectedMode;
    document.getElementById('setup-area').style.display = 'none';
    document.getElementById('quiz-area').style.display = 'block';

    const history = JSON.parse(localStorage.getItem('eric_field_notes_history') || "{}");
    
    // Adaptive Sorting: Show failed questions first
    sessionQuestions = [...quizData].sort((a, b) => {
        const failA = history[a.q] ? history[a.q].fail : 0;
        const failB = history[b.q] ? history[b.q].fail : 0;
        return failB - failA;
    });

    if (mode === 'exam') {
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
    document.getElementById('progress').innerText = `Question ${currentIdx + 1} of 60 | ${data.category}`;
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
            if (currentIdx < 60) { showQuestion(); btn.innerText = "Submit Answer"; btn.onclick = handleAction; }
            else showResults();
        };
    } else {
        if (isCorrect) score++;
        currentIdx++;
        currentIdx < 60 ? showQuestion() : showResults();
    }
}

function showResults() {
    clearInterval(timerInterval);
    document.getElementById('quiz-area').style.display = 'none';
    document.getElementById('results-area').style.display = 'block';
    const percent = Math.round((score / 60) * 100);
    document.getElementById('score-display').innerText = `Total Score: ${score} / 60`;
    document.getElementById('percentage-display').innerText = `${percent}%`;
    
    let breakdownHTML = "<strong>Mastery by Chapter:</strong><br>";
    for (const cat in categoryStats) {
        let catPercent = Math.round((categoryStats[cat].correct / categoryStats[cat].total) * 100);
        breakdownHTML += `${cat}: ${catPercent}%<br>`;
    }
    document.getElementById('category-breakdown').innerHTML = breakdownHTML;

    const passStatus = document.getElementById('pass-status');
    passStatus.innerHTML = percent >= 70 ? "<b style='color:green'>PASSING GRADE</b>" : "<b style='color:red'>RE-STUDY RECOMMENDED</b>";
}
