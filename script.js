    const quizData = [
    // CHAPTER 1: EMS SYSTEMS
    { q: "Which 1966 document is considered the 'birth' of modern EMS?", options: ["The ADA Act", "The White Paper", "The EMS Agenda for the Future", "The Orange Book"], answer: ["The White Paper"], type: "single", category: "Ch 1: EMS Systems", rationale: "Accidental Death and Disability: The Neglected Disease of Modern Society (The White Paper) exposed the inadequacy of prehospital care." },
    { q: "An AEMT's scope of practice includes which of the following?", options: ["Surgical airways", "IV therapy and limited advanced meds", "Open heart massage", "Prescribing antibiotics"], answer: ["IV therapy and limited advanced meds"], type: "single", category: "Ch 1: EMS Systems", rationale: "AEMTs are trained in foundational ALS skills like IV access and specific medications." },
    { q: "Online medical direction is best described as:", options: ["Following written protocols", "Real-time radio or phone consultation", "Monthly training sessions", "Reading a textbook"], answer: ["Real-time radio or phone consultation"], type: "single", category: "Ch 1: EMS Systems", rationale: "Online direction happens in real-time; offline direction is via standing orders/protocols." },
    { q: "What is the primary purpose of CQI?", options: ["Punishing clinical errors", "Improving patient care", "Reducing ambulance fuel costs", "Increasing call volume"], answer: ["Improving patient care"], type: "single", category: "Ch 1: EMS Systems", rationale: "Continuous Quality Improvement is a non-punitive process to improve clinical outcomes." },
    { q: "Which level of EMS provider is the foundation for all others?", options: ["EMR", "EMT", "AEMT", "Paramedic"], answer: ["EMT"], type: "single", category: "Ch 1: EMS Systems", rationale: "The EMT level provides the fundamental emergency care and assessment foundation." },
    { q: "The ADA (Americans with Disabilities Act) specifically protects:", options: ["Unqualified applicants", "Qualified individuals with disabilities", "Physicians only", "Patients only"], answer: ["Qualified individuals with disabilities"], type: "single", category: "Ch 1: EMS Systems", rationale: "The ADA ensures equal opportunity for qualified workers in the workplace." },
    { q: "Who has the ultimate legal authority for patient care in an EMS system?", options: ["The Fire Chief", "The Hospital CEO", "The Medical Director", "The Senior Paramedic"], answer: ["The Medical Director"], type: "single", category: "Ch 1: EMS Systems", rationale: "All EMS care is provided under the license and oversight of a Medical Director." },
    { q: "Public Health focuses on which of the following?", options: ["Treating a single cardiac arrest", "Population-wide injury prevention", "Billing patients", "Radio maintenance"], answer: ["Population-wide injury prevention"], type: "single", category: "Ch 1: EMS Systems", rationale: "Public health focuses on preventing disease and injury across communities." },
    { q: "EMS Research is vital because it leads to:", options: ["Higher pay", "Evidence-based medicine", "Fewer calls", "Better uniforms"], answer: ["Evidence-based medicine"], type: "single", category: "Ch 1: EMS Systems", rationale: "Research ensures our treatments are based on proven scientific outcomes." },
    { q: "The NREMT provides which of the following?", options: ["State licensure", "National competency certification", "Liability insurance", "Labor union representation"], answer: ["National competency certification"], type: "single", category: "Ch 1: EMS Systems", rationale: "NREMT is a certifying body that ensures a national standard of competency." },

    // CHAPTER 2: SAFETY & WELLNESS
    { q: "Which of the following is the most effective way to prevent infection?", options: ["Using a gown", "Handwashing", "N95 masks", "Avoiding the patient"], answer: ["Handwashing"], type: "single", category: "Ch 2: Safety & Wellness", rationale: "Hand hygiene is the single most important defense against pathogen spread." },
    { q: "A patient with suspected Tuberculosis (TB) requires which PPE?", options: ["Surgical mask", "N95 or HEPA respirator", "Gloves only", "Goggles only"], answer: ["N95 or HEPA respirator"], type: "single", category: "Ch 2: Safety & Wellness", rationale: "TB is an airborne pathogen requiring high-level filtration." },
    { q: "What is your FIRST priority at any emergency scene?", options: ["Patient assessment", "Personal safety", "Talking to bystanders", "Documentation"], answer: ["Personal safety"], type: "single", category: "Ch 2: Safety & Wellness", rationale: "If the provider becomes a victim, they cannot help the patient." },
    { q: "The process of killing most microorganisms on an object is:", options: ["Cleaning", "Disinfection", "Sterilization", "Boiling"], answer: ["Disinfection"], type: "single", category: "Ch 2: Safety & Wellness", rationale: "Disinfection kills many pathogens; sterilization kills all life forms." },
    { q: "Standard Precautions assume which of the following?", options: ["Only elderly patients are contagious", "All body fluids are potentially infectious", "Gloves are never required for IVs", "Patients will tell you if they have HIV"], answer: ["All body fluids are potentially infectious"], type: "single", category: "Ch 2: Safety & Wellness", rationale: "Standard precautions treat every fluid as a potential risk." },
    { q: "A state of chronic physical and emotional exhaustion is called:", options: ["Eustress", "Burnout", "Acute stress", "Delayed stress"], answer: ["Burnout"], type: "single", category: "Ch 2: Safety & Wellness", rationale: "Burnout is the long-term result of unresolved professional stress." },
    { q: "Which Hepatitis strain is primarily spread through blood-to-blood contact?", options: ["Hep A", "Hep B", "Hep E", "Hep G"], answer: ["Hep B"], type: "single", category: "Ch 2: Safety & Wellness", rationale: "Hepatitis B is a primary bloodborne concern for healthcare workers." },
    { q: "If you are exposed to blood, your first clinical step is to:", options: ["Call your supervisor", "Wash the area with soap and water", "Go to the ER", "Finish the call"], answer: ["Wash the area with soap and water"], type: "single", category: "Ch 2: Safety & Wellness", rationale: "Immediate decontamination is the priority after an exposure." },
    { q: "Which stress reaction occurs during or immediately after an incident?", options: ["Delayed", "Acute", "Cumulative", "Post-traumatic"], answer: ["Acute"], type: "single", category: "Ch 2: Safety & Wellness", rationale: "Acute stress happens in the moment or shortly thereafter." },
    { q: "The three stages of stress (Alarm, Resistance, Exhaustion) are part of:", options: ["The Grieving Process", "General Adaptation Syndrome", "Maslow's Hierarchy", "The EMS Agenda"], answer: ["General Adaptation Syndrome"], type: "single", category: "Ch 2: Safety & Wellness", rationale: "GAS describes how the body responds to prolonged stress." },

    // CHAPTER 3: MEDICAL/LEGAL
    { q: "Select the four factors required to prove Negligence:", options: ["Duty to act", "Breach of duty", "Damages", "Proximate cause", "Criminal intent"], answer: ["Duty to act", "Breach of duty", "Damages", "Proximate cause"], type: "multiple", category: "Ch 3: Medical/Legal", rationale: "Negligence requires all 4 factors: duty, breach, harm, and a link between them." },
    { q: "Which type of consent is assumed for an unconscious patient?", options: ["Informed", "Implied", "Expressed", "Involuntary"], answer: ["Implied"], type: "single", category: "Ch 3: Medical/Legal", rationale: "Implied consent assumes a reasonable person would want life-saving care." },
    { q: "Ending care without a proper handoff to equal/higher level providers is:", options: ["Assault", "Abandonment", "Kidnapping", "Battery"], answer: ["Abandonment"], type: "single", category: "Ch 3: Medical/Legal", rationale: "Abandonment is a legal failure to maintain the continuum of care." },
    { q: "Unlawfully touching a patient without their consent is legally:", options: ["Assault", "Battery", "Slander", "Libel"], answer: ["Battery"], type: "single", category: "Ch 3: Medical/Legal", rationale: "Battery is the physical act; assault is the threat or fear of it." },
    { q: "What law protects the confidentiality of patient information?", options: ["OSHA", "HIPAA", "FERPA", "FEMA"], answer: ["HIPAA"], type: "single", category: "Ch 3: Medical/Legal", rationale: "HIPAA governs the protection of private health data." },
    { q: "Spoken defamation is known as:", options: ["Libel", "Slander", "Tort", "Protocol"], answer: ["Slander"], type: "single", category: "Ch 3: Medical/Legal", rationale: "Slander is spoken; Libel is written." },
    { q: "An AEMT's scope of practice is defined by:", options: ["The Dispatcher", "State Law and the Medical Director", "The Hospital Nurse", "The Textbook"], answer: ["State Law and the Medical Director"], type: "single", category: "Ch 3: Medical/Legal", rationale: "Scope of practice defines the legal limits of your skills." },
    { q: "A 'DNR' order is a type of:", options: ["Refusal form", "Advance Directive", "Police report", "Clinical protocol"], answer: ["Advance Directive"], type: "single", category: "Ch 3: Medical/Legal", rationale: "Advance directives guide care when the patient cannot speak for themselves." },
    { q: "Who can legally refuse medical care?", options: ["Anyone", "Competent adults", "Minors", "Patients in police custody"], answer: ["Competent adults"], type: "single", category: "Ch 3: Medical/Legal", rationale: "Competency is the legal requirement for refusing life-saving treatment." },
    { q: "A wrongful act leading to civil legal liability is a:", options: ["Felony", "Misdemeanor", "Tort", "Protocol"], answer: ["Tort"], type: "single", category: "Ch 3: Medical/Legal", rationale: "Most EMS lawsuits fall under the umbrella of tort law." },

    // CHAPTER 4: COMMUNICATIONS
    { q: "In the SBAR format, what does 'B' stand for?", options: ["Basic Info", "Background", "Blood Pressure", "Body System"], answer: ["Background"], type: "single", category: "Ch 4: Communications", rationale: "SBAR = Situation, Background, Assessment, Recommendation." },
    { q: "Which device receives a signal and rebroadcasts it at a higher power?", options: ["Base station", "Mobile radio", "Repeater", "Pager"], answer: ["Repeater"], type: "single", category: "Ch 4: Communications", rationale: "Repeaters overcome distance and terrain barriers." },
    { q: "What type of question allows a patient to explain in their own words?", options: ["Closed-ended", "Leading", "Open-ended", "Biased"], answer: ["Open-ended"], type: "single", category: "Ch 4: Communications", rationale: "Open-ended questions yield a more complete history." },
    { q: "If a treatment is not written in the PCR, legally:", options: ["It still happened", "It didn't happen", "The doctor will know", "It's optional"], answer: ["It didn't happen"], type: "single", category: "Ch 4: Communications", rationale: "The legal standard is: If it isn't documented, it didn't happen." },
    { q: "Which agency regulates all radio communications in the US?", options: ["FAA", "FCC", "FBI", "FDA"], answer: ["FCC"], type: "single", category: "Ch 4: Communications", rationale: "The Federal Communications Commission (FCC) manages radio frequencies." },
    { q: "To correct an error on a written PCR, you should:", options: ["Use white-out", "Scribble it out", "Draw a single line, initial, and write the correction", "Throw it away"], answer: ["Draw a single line, initial, and write the correction"], type: "single", category: "Ch 4: Communications", rationale: "Proper correction preserves the legal integrity of the document." },
    { q: "What is 'Telemetry'?", options: ["Radio repair", "Transmission of data (like ECG) to the hospital", "A type of map", "Patient transport"], answer: ["Transmission of data (like ECG) to the hospital"], type: "single", category: "Ch 4: Communications", rationale: "Telemetry allows hospital staff to monitor field data." },
    { q: "The 'Chief Complaint' is:", options: ["Your final diagnosis", "The patient's reason for calling", "What the family says", "The dispatcher's notes"], answer: ["The patient's reason for calling"], type: "single", category: "Ch 4: Communications", rationale: "The chief complaint is the symptom that led to the 911 call." },
    { q: "Therapeutic communication includes which of the following?", options: ["Judging the patient", "Active listening and eye contact", "Interrupting", "Standing over the patient"], answer: ["Active listening and eye contact"], type: "single", category: "Ch 4: Communications", rationale: "Rapport is built through respect and active listening." },
    { q: "The official transfer of care occurs when you:", options: ["Unload the patient", "Give a verbal report to an equal/higher provider", "Leave the hospital", "Finish your PCR"], answer: ["Give a verbal report to an equal/higher provider"], type: "single", category: "Ch 4: Communications", rationale: "Duty remains with you until the handoff report is complete." },

    // CHAPTER 5: MEDICAL TERMINOLOGY
    { q: "What does the prefix 'hypo-' mean?", options: ["High/Above", "Low/Below", "Fast", "Slow"], answer: ["Low/Below"], type: "single", category: "Ch 5: Terminology", rationale: "Hypo (low/below) vs. Hyper (high/above)." },
    { q: "The term 'Supine' means lying:", options: ["Face down", "Face up", "On the side", "In a chair"], answer: ["Face up"], type: "single", category: "Ch 5: Terminology", rationale: "Supine = Face Up; Prone = Face Down." },
    { q: "Which plane divides the body into top and bottom?", options: ["Sagittal", "Frontal", "Transverse", "Coronal"], answer: ["Transverse"], type: "single", category: "Ch 5: Terminology", rationale: "Transverse is the horizontal plane." },
    { q: "Proximal means:", options: ["Farther from the trunk", "Closer to the trunk", "The front", "The back"], answer: ["Closer to the trunk"], type: "single", category: "Ch 5: Terminology", rationale: "Proximal is closer to the attachment point." },
    { q: "The suffix '-ectomy' means:", options: ["Inflammation", "Surgical removal", "Pain", "Hole"], answer: ["Surgical removal"], type: "single", category: "Ch 5: Terminology", rationale: "Ectomy = removal (e.g., Appendectomy)." },
    { q: "Which quadrant contains the Liver?", options: ["LUQ", "RUQ", "LLQ", "RLQ"], answer: ["RUQ"], type: "single", category: "Ch 5: Terminology", rationale: "The Liver is primarily in the Right Upper Quadrant." },
    { q: "Anterior refers to which part of the body?", options: ["Back", "Front", "Side", "Top"], answer: ["Front"], type: "single", category: "Ch 5: Terminology", rationale: "Anterior (ventral) is the front of the body." },
    { q: "What is 'Adduction'?", options: ["Moving away from midline", "Moving toward midline", "Bending a joint", "Straightening a joint"], answer: ["Moving toward midline"], type: "single", category: "Ch 5: Terminology", rationale: "Adduction = 'Add' to the midline." },
    { q: "Distal means:", options: ["Closer to the trunk", "Farther from the trunk", "The front", "The top"], answer: ["Farther from the trunk"], type: "single", category: "Ch 5: Terminology", rationale: "Distal is distant from the trunk." },
    { q: "The root 'Cardi/o' refers to:", options: ["Lungs", "Heart", "Brain", "Liver"], answer: ["Heart"], type: "single", category: "Ch 5: Terminology", rationale: "Cardio is the root for heart." },

    // CHAPTER 6: LIFTING & MOVING
    { q: "The 'Power Lift' technique uses which muscles for the work?", options: ["Back", "Legs", "Arms", "Abs"], answer: ["Legs"], type: "single", category: "Ch 6: Lifting/Moving", rationale: "Legs are the body's strongest muscles; the back should remain upright." },
    { q: "When is a 'Rapid Extrication' technique used?", options: ["When you are late", "When the scene is unsafe or patient is unstable", "For all vehicle accidents", "When the patient is heavy"], answer: ["When the scene is unsafe or patient is unstable"], type: "single", category: "Ch 6: Lifting/Moving", rationale: "Rapid extrication moves a patient in <1 min due to urgency." },
    { q: "Which device is best for moving a patient down stairs?", options: ["Scoop stretcher", "Wheeled stretcher", "Stair chair", "Basket stretcher"], answer: ["Stair chair"], type: "single", category: "Ch 6: Lifting/Moving", rationale: "Stair chairs are designed for vertical navigation in tight spots." },
    { q: "The 'Power Grip' involves having your palms:", options: ["Facing down", "Facing up", "Facing each other", "Overlapping"], answer: ["Facing up"], type: "single", category: "Ch 6: Lifting/Moving", rationale: "Palms up is the strongest and safest grip position." },
    { q: "An 'Emergency Move' is used when:", options: ["The patient is in pain", "There is a fire or explosion risk", "The patient is stable", "To clear the scene faster"], answer: ["There is a fire or explosion risk"], type: "single", category: "Ch 6: Lifting/Moving", rationale: "Emergency moves prioritize speed over spinal restriction due to hazards." },
    { q: "What is the weight limit for a standard 2-person lift?", options: ["150 lbs", "250 lbs", "400 lbs", "No limit"], answer: ["250 lbs"], type: "single", category: "Ch 6: Lifting/Moving", rationale: "250 lbs is the standard safety limit for two providers." },
    { q: "Which stretcher can be split in half to 'scoop' the patient?", options: ["Portable stretcher", "Basket stretcher", "Scoop stretcher", "Ambulance stretcher"], answer: ["Scoop stretcher"], type: "single", category: "Ch 6: Lifting/Moving", rationale: "Scoop stretchers minimize patient movement during pick-up." },
    { q: "Before every lift, you should first:", options: ["Run to the patient", "Estimate the weight of the load", "Call for a helicopter", "Lift with your back"], answer: ["Estimate the weight of the load"], type: "single", category: "Ch 6: Lifting/Moving", rationale: "Assessing the load prevents injuries before they occur." },
    { q: "A 'Bariatric Stretcher' is designed for:", options: ["Pediatric patients", "Obese patients", "Cardiac patients", "Trauma patients"], answer: ["Obese patients"], type: "single", category: "Ch 6: Lifting/Moving", rationale: "Bariatric equipment has higher weight capacities." },
    { q: "When pulling a patient, you should keep the line of pull:", options: ["Far away from you", "Through the center of your body", "Over your head", "Twisted"], answer: ["Through the center of your body"], type: "single", category: "Ch 6: Lifting/Moving", rationale: "Centralizing the load protects the provider's spine." }
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
    
    // Adaptive Sorting: Prioritize failed questions
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
    
    let breakdownHTML = "<strong>Performance by Chapter:</strong><br>";
    for (const cat in categoryStats) {
        let catPercent = Math.round((categoryStats[cat].correct / categoryStats[cat].total) * 100);
        breakdownHTML += `${cat}: ${catPercent}%<br>`;
    }
    document.getElementById('category-breakdown').innerHTML = breakdownHTML;

    const passStatus = document.getElementById('pass-status');
    passStatus.innerHTML = percent >= 70 ? "<b style='color:green; font-size: 1.5rem;'>PASSED</b>" : "<b style='color:red; font-size: 1.5rem;'>RE-STUDY RECOMMENDED</b>";
}
