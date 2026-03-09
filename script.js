const quizData = [
    // --- FOUNDATIONS (CHAPTERS 1-6) ---
    { q: "What were the findings of the 1966 'White Paper'?", options: ["EMS was excellent", "Accidental death was a 'neglected disease'", "Paramedics were unnecessary", "Every car needed an AED"], answer: ["Accidental death was a 'neglected disease'"], type: "single", category: "Ch 1: EMS Systems", section: "Foundations", rationale: "The 1966 White Paper identified that prehospital care was inadequate and accidental death was a major public health crisis." },
    { q: "Which EMS level is trained to use an IV and limited advanced medications?", options: ["EMR", "EMT", "AEMT", "Paramedic"], answer: ["AEMT"], type: "single", category: "Ch 1: EMS Systems", section: "Foundations", rationale: "The AEMT level bridge EMT and Paramedic with skills like IV access and specific advanced meds." },
    { q: "Who is responsible for the daily oversight of an EMS system?", options: ["Fire Chief", "Mayor", "Medical Director", "Shift Supervisor"], answer: ["Medical Director"], type: "single", category: "Ch 1: EMS Systems", section: "Foundations", rationale: "The Medical Director provides the legal authority and oversight for clinical care." },
    { q: "What does CQI stand for?", options: ["Clinical Quality Insurance", "Continuous Quality Improvement", "Critical Quality Indicator", "Cardiac Quality Initiative"], answer: ["Continuous Quality Improvement"], type: "single", category: "Ch 1: EMS Systems", section: "Foundations", rationale: "CQI is a circular process used to improve patient care through internal/external reviews." },
    { q: "Online medical direction is defined as:", options: ["Protocols", "Standing orders", "Real-time radio/phone consultation", "Monthly meetings"], answer: ["Real-time radio/phone consultation"], type: "single", category: "Ch 1: EMS Systems", section: "Foundations", rationale: "Online direction is immediate/real-time; Offline is via protocols/standing orders." },
    { q: "The ADA (Americans with Disabilities Act) protects which group?", options: ["Only wheelchair users", "Patients only", "Qualified workers with disabilities", "Physicians only"], answer: ["Qualified workers with disabilities"], type: "single", category: "Ch 1: EMS Systems", section: "Foundations", rationale: "The ADA ensures equal opportunity for qualified individuals with disabilities in employment." },
    { q: "Which of the following is an example of 'Public Health'?", options: ["Doing a 12-lead ECG", "Vaccination programs", "Lifting a patient", "Giving ASA"], answer: ["Vaccination programs"], type: "single", category: "Ch 1: EMS Systems", section: "Foundations", rationale: "Public health focuses on prevention across a population." },
    { q: "The highest level of EMS training is:", options: ["EMT", "AEMT", "Paramedic", "Physician"], answer: ["Paramedic"], type: "single", category: "Ch 1: EMS Systems", section: "Foundations", rationale: "Paramedic is the highest prehospital licensure level." },
    { q: "What is the goal of EMS Research?", options: ["To prove EMS is the best", "Evidence-based medicine", "To justify higher pay", "To sell equipment"], answer: ["Evidence-based medicine"], type: "single", category: "Ch 1: EMS Systems", section: "Foundations", rationale: "Research ensures treatments are based on proven clinical outcomes." },
    { q: "NREMT serves what primary purpose?", options: ["Legal advocacy", "National standard for certification", "Employment agency", "Billing"], answer: ["National standard for certification"], type: "single", category: "Ch 1: EMS Systems", section: "Foundations", rationale: "NREMT provides a national standard of competency." },
    { q: "What is the single most important way to prevent disease spread?", options: ["Wearing a gown", "Handwashing", "N95 mask", "Avoiding patients"], answer: ["Handwashing"], type: "single", category: "Ch 2: Safety & Wellness", section: "Foundations", rationale: "Hand hygiene is the most effective way to prevent infection transmission." },
    { q: "When should an N95 or HEPA respirator be worn?", options: ["Vomiting", "Bleeding", "Suspected Tuberculosis (TB)", "Broken leg"], answer: ["Suspected Tuberculosis (TB)"], type: "single", category: "Ch 2: Safety & Wellness", section: "Foundations", rationale: "Airborne pathogens like TB require high-level filtration." },
    { q: "Standard Precautions are developed by which agency?", options: ["NASA", "OSHA/CDC", "FEMA", "NHTSA"], answer: ["OSHA/CDC"], type: "single", category: "Ch 2: Safety & Wellness", section: "Foundations", rationale: "OSHA mandates workplace safety; CDC provides clinical guidelines." },
    { q: "Which route of transmission involves a person touching a contaminated object?", options: ["Direct contact", "Indirect contact", "Airborne", "Vector-borne"], answer: ["Indirect contact"], type: "single", category: "Ch 2: Safety & Wellness", section: "Foundations", rationale: "Indirect contact uses a 'fomite' (contaminated object) to move the pathogen." },
    { q: "What is the first priority at every emergency scene?", options: ["Patient care", "Documentation", "Personal safety", "Family support"], answer: ["Personal safety"], type: "single", category: "Ch 2: Safety & Wellness", section: "Foundations", rationale: "You cannot help the patient if you become a victim yourself." },
    { q: "Which of these is a 'Vector' for disease?", options: ["Stethoscope", "Mosquito", "Air", "Water"], answer: ["Mosquito"], type: "single" , category: "Ch 2: Safety & Wellness", section: "Foundations", rationale: "A vector is a living organism that transmits disease." },
    { q: "The process of killing most, but not all, microorganisms is:", options: ["Cleaning", "Disinfecting", "Sterilizing", "Wiping"], answer: ["Disinfecting"], type: "single", category: "Ch 2: Safety & Wellness", section: "Foundations", rationale: "Disinfection kills many pathogens; sterilization kills all forms of life." },
    { q: "A state of physical/emotional exhaustion is known as:", options: ["Eustress", "Burnout", "Acute stress", "Delayed stress"], answer: ["Burnout"], type: "single", category: "Ch 2: Safety & Wellness", section: "Foundations", rationale: "Burnout is chronic stress leading to emotional exhaustion." },
    { q: "Which hepatitis strain is most commonly spread through blood?", options: ["Hep A", "Hep B", "Hep E", "None"], answer: ["Hep B"], type: "single", category: "Ch 2: Safety & Wellness", section: "Foundations", rationale: "Hepatitis B is a major bloodborne concern for EMS." },
    { q: "If you are exposed to blood, you should FIRST:", options: ["Call your supervisor", "Wash the area with soap/water", "Go to the ER", "Finish the call"], answer: ["Wash the area with soap/water"], type: "single", category: "Ch 2: Safety & Wellness", section: "Foundations", rationale: "Immediate decontamination is the first clinical step." },
    { q: "Which four factors are needed to prove negligence?", options: ["Duty to act", "Breach of duty", "Damages", "Proximate cause"], answer: ["Duty to act", "Breach of duty", "Damages", "Proximate cause"], type: "multiple", category: "Ch 3: Medical/Legal", section: "Foundations", rationale: "Negligence requires all 4 factors: Duty, Breach, Damages, and Proximate cause." },
    { q: "What type of consent is assumed when a patient is unconscious?", options: ["Expressed", "Informed", "Implied", "Involuntary"], answer: ["Implied"], type: "single", category: "Ch 3: Medical/Legal", section: "Foundations", rationale: "Implied consent assumes a reasonable person would want life-saving care." },
    { q: "If you leave a patient before a proper hand-off, you are guilty of:", options: ["Assault", "Abandonment", "Kidnapping", "Libel"], answer: ["Abandonment"], type: "single", category: "Ch 3: Medical/Legal", section: "Foundations", rationale: "Abandonment is the termination of care without transferring to equal/higher level." },
    { q: "Spoken defamation is called:", options: ["Libel", "Slander", "Tort", "Battery"], answer: ["Slander"], type: "single", category: "Ch 3: Medical/Legal", section: "Foundations", rationale: "Slander is spoken; Libel is written." },
    { q: "Touching a patient without consent is legally:", options: ["Assault", "Battery", "Slander", "Tort"], answer: ["Battery"], type: "single", category: "Ch 3: Medical/Legal", section: "Foundations", rationale: "Battery is unlawful touching; Assault is the threat of it." },
    { q: "Which law protects patient privacy?", options: ["FERPA", "HIPAA", "OSHA", "NREMT"], answer: ["HIPAA"], type: "single", category: "Ch 3: Medical/Legal", section: "Foundations", rationale: "HIPAA governs the protection of health information." },
    { q: "A 'DNR' order is a type of:", options: ["Refusal", "Involuntary consent", "Advance Directive", "Protocols"], answer: ["Advance Directive"], type: "single", category: "Ch 3: Medical/Legal", section: "Foundations", rationale: "Advance directives specify medical wishes before a crisis." },
    { q: "Which of the following must be reported in most states?", options: ["Common cold", "Abuse of a child/elder", "A minor cut", "Low blood pressure"], answer: ["Abuse of a child/elder"], type: "single", category: "Ch 3: Medical/Legal", section: "Foundations", rationale: "Mandatory reporting covers abuse, neglect, and some crimes." },
    { q: "The range of actions you are legally allowed to do is your:", options: ["Standard of Care", "Scope of Practice", "Licensure", "Certification"], answer: ["Scope of Practice"], type: "single", category: "Ch 3: Medical/Legal", section: "Foundations", rationale: "Scope of practice is defined by law (what you can do)." },
    { q: "A competent adult has the right to refuse care. (T/F)", options: ["True", "False"], answer: ["True"], type: "single", category: "Ch 3: Medical/Legal", section: "Foundations", rationale: "Autonomy allows competent adults to refuse any/all medical care." },
    { q: "In SBAR, the 'A' stands for:", options: ["Action", "Assessment", "Always", "Age"], answer: ["Assessment"], type: "single", category: "Ch 4: Communications", section: "Foundations", rationale: "Situation, Background, Assessment, Recommendation." },
    { q: "A device that receives a signal and re-broadcasts it at higher power is a:", options: ["Base station", "Mobile radio", "Repeater", "Pager"], answer: ["Repeater"], type: "single", category: "Ch 4: Communications", section: "Foundations", rationale: "Repeaters overcome distance and terrain obstacles." },
    { q: "Which type of question allows the patient to explain in their own words?", options: ["Closed-ended", "Open-ended", "Leading", "Biased"], answer: ["Open-ended"], type: "single", category: "Ch 4: Communications", section: "Foundations", rationale: "Open-ended questions (e.g. 'What happened?') yield better history." },
    { q: "If it wasn't written down in the PCR...", options: ["It still happened", "It didn't happen", "The nurse will know", "It's okay"], answer: ["It didn't happen"], type: "single", category: "Ch 4: Communications", section: "Foundations", rationale: "Legal documentation standard: No record = No action." },
    { q: "Which agency regulates radio communications?", options: ["FAA", "FCC", "FBI", "FDA"], answer: ["FCC"], type: "single", category: "Ch 4: Communications", section: "Foundations", rationale: "The Federal Communications Commission (FCC) manages radio airwaves." },
    { q: "What should you do if you make an error on a written PCR?", options: ["Scribble it out", "Use white-out", "Draw a single line, initial, and write the correction", "Throw it away"], answer: ["Draw a single line, initial, and write the correction"], type: "single", category: "Ch 4: Communications", section: "Foundations", rationale: "Proper correction preserves the legal integrity of the document." },
    { q: "What is 'Telemetry'?", options: ["Radio repair", "Transmission of ECG or data", "Map reading", "Measuring distance"], answer: ["Transmission of ECG or data"], type: "single", category: "Ch 4: Communications", section: "Foundations", rationale: "Telemetry allows hospital staff to see field data." },
    { q: "The 'Chief Complaint' is:", options: ["What the dispatcher says", "The patient's reason for calling", "Your final diagnosis", "A list of meds"], answer: ["The patient's reason for calling"], type: "single", category: "Ch 4: Communications", section: "Foundations", rationale: "Chief complaint is the primary symptom from the patient's perspective." },
    { q: "Which of these is a component of 'Therapeutic Communication'?", options: ["Eye contact", "Interrupting", "Judging", "Standing over them"], answer: ["Eye contact"], type: "single", category: "Ch 4: Communications", section: "Foundations", rationale: "Eye contact and listening are foundational to patient rapport." },
    { q: "The official transfer of care occurs when:", options: ["You arrive at the hospital", "You unload the patient", "You give a verbal report to an equal/higher provider", "You leave the hospital"], answer: ["You give a verbal report to an equal/higher provider"], type: "single", category: "Ch 4: Communications", section: "Foundations", rationale: "Verbal report ensures continuity and legal transfer of duty." },
    { q: "What does the prefix 'hypo-' mean?", options: ["Above", "Below", "Fast", "Slow"], answer: ["Below"], type: "single", category: "Ch 5: Terminology", section: "Foundations", rationale: "Hypo (below/low), Hyper (above/high)." },
    { q: "The term 'Supine' means lying:", options: ["Face down", "Face up", "On the side", "On the right side"], answer: ["Face up"], type: "single", category: "Ch 5: Terminology", section: "Foundations", rationale: "Supine = Face Up; Prone = Face Down." },
    { q: "Which plane divides the body into top and bottom?", options: ["Sagittal", "Frontal", "Transverse", "Midsagittal"], answer: ["Transverse"], type: "single", category: "Ch 5: Terminology", section: "Foundations", rationale: "Transverse is the horizontal plane." },
    { q: "Proximal means:", options: ["Closer to the trunk", "Farther from the trunk", "Closer to the skin", "The back of the body"], answer: ["Closer to the trunk"], type: "single", category: "Ch 5: Terminology", section: "Foundations", rationale: "Proximal is near the point of attachment." },
    { q: "The suffix '-ectomy' means:", options: ["Inflammation", "Surgical removal", "Hole", "Pain"], answer: ["Surgical removal"], type: "single", category: "Ch 5: Terminology", section: "Foundations", rationale: "Ectomy = removal (e.g. Appendectomy)." },
    { q: "Which quadrant contains the Liver?", options: ["LUQ", "RUQ", "LLQ", "RLQ"], answer: ["RUQ"], type: "single", category: "Ch 5: Terminology", section: "Foundations", rationale: "The Liver is primarily in the Right Upper Quadrant." },
    { q: "The 'Combining Form' of a word includes:", options: ["Prefix + Root", "Root + Vowel", "Suffix + Root", "Only Vowel"], answer: ["Root + Vowel"], type: "single", category: "Ch 5: Terminology", section: "Foundations", rationale: "Combining form is the root plus a connecting vowel (usually 'o')." },
    { q: "What is 'Adduction'?", options: ["Moving away from midline", "Moving toward midline", "Bending a joint", "Straightening a joint"], answer: ["Moving toward midline"], type: "single", category: "Ch 5: Terminology", section: "Foundations", rationale: "Add = toward midline; Abduct = away." },
    { q: "Distal means:", options: ["Closer to the trunk", "Farther from the trunk", "The front", "The back"], answer: ["Farther from the trunk"], type: "single", category: "Ch 5: Terminology", section: "Foundations", rationale: "Distal is distant from the attachment point." },
    { q: "Posterior refers to which part of the body?", options: ["Front", "Back", "Side", "Top"], answer: ["Back"], type: "single", category: "Ch 5: Terminology", section: "Foundations", rationale: "Posterior = Back (Dorsal); Anterior = Front (Ventral)." },
    { q: "The 'Power Lift' technique uses which muscles for the bulk of the work?", options: ["Back", "Arms", "Legs", "Abs"], answer: ["Legs"], type: "single", category: "Ch 6: Lifting/Moving", section: "Foundations", rationale: "Legs are the strongest muscles; the back should remain straight/upright." },
    { q: "When is a 'Rapid Extrication' technique used?", options: ["When the patient is heavy", "When the scene is unsafe or patient is unstable", "When you are in a hurry", "To practice skills"], answer: ["When the scene is unsafe or patient is unstable"], type: "single", category: "Ch 6: Lifting/Moving", section: "Foundations", rationale: "Rapid extrication moves a sitting patient to supine in <1 min." },
    { q: "Which device is used for moving a patient down stairs?", options: ["Scoop stretcher", "Wheeled stretcher", "Stair chair", "Basket stretcher"], answer: ["Stair chair"], type: "single", category: "Ch 6: Lifting/Moving", section: "Foundations", rationale: "Stair chairs are designed for tight navigation on stairs." },
    { q: "The 'Power Grip' involves having your palms:", options: ["Facing down", "Facing up", "Facing each other", "One up, one down"], answer: ["Facing up"], type: "single", category: "Ch 6: Lifting/Moving", section: "Foundations", rationale: "Palms up is the strongest grip position." },
    { q: "An 'Emergency Move' is used when:", options: ["The patient is in pain", "There is a fire or explosion risk", "You want to clear the scene", "The patient is stable"], answer: ["There is a fire or explosion risk"], type: "single", category: "Ch 6: Lifting/Moving", section: "Foundations", rationale: "Emergency moves prioritize speed over spinal restriction due to immediate danger." },
    { q: "The maximum recommended weight for a 2-person lift is:", options: ["150 lbs", "250 lbs", "400 lbs", "No limit"], answer: ["250 lbs"], type: "single", category: "Ch 6: Lifting/Moving", section: "Foundations", rationale: "250 lbs is the standard safety benchmark." },
    { q: "Which stretcher can be split to fit around a patient without rolling them?", options: ["Portable stretcher", "Basket stretcher", "Scoop stretcher", "Wheeled stretcher"], answer: ["Scoop stretcher"], type: "single", category: "Ch 6: Lifting/Moving", section: "Foundations", rationale: "Scoop stretchers 'scoop' the patient from both sides." },
    { q: "When pulling a patient, keep your back:", options: ["Bent", "Curved", "Locked and straight", "Twisted"], answer: ["Locked and straight"], type: "single", category: "Ch 6: Lifting/Moving", section: "Foundations", rationale: "Keeping the spine in line prevents disc injuries." },
    { q: "A 'Bariatric Stretcher' is designed for:", options: ["Pediatric patients", "Obese patients", "Trauma patients", "Cardiac patients"], answer: ["Obese patients"], type: "single", category: "Ch 6: Lifting/Moving", section: "Foundations", rationale: "Bariatric equipment has higher weight capacities and wider frames." },
    { q: "What should you do before every lift?", options: ["Run to the patient", "Estimate the weight", "Call for backup immediately", "Lift with your back"], answer: ["Estimate the weight"], type: "single", category: "Ch 6: Lifting/Moving", section: "Foundations", rationale: "Assessing the load prevents injuries before they happen." },

    // --- PATHOPHYSIOLOGY ---
    { q: "What is the primary product of anaerobic metabolism?", options: ["Lactic Acid", "ATP", "Glucose", "Oxygen"], answer: ["Lactic Acid"], type: "single", category: "Ch 7: Patho", section: "Pathophysiology", rationale: "Without oxygen, cells produce lactic acid and very little energy." },
    

[Image of aerobic vs anaerobic metabolism]

    { q: "Shock caused by widespread vasodilation is categorized as:", options: ["Hypovolemic", "Distributive", "Cardiogenic", "Obstructive"], answer: ["Distributive"], type: "single", category: "Ch 7: Patho", section: "Pathophysiology", rationale: "Anaphylaxis and Sepsis are types of distributive shock." },
    { q: "Perfusion is best defined as:", options: ["Breathing", "Adequate circulation to meet cell needs", "Heart beating", "Gas exchange"], answer: ["Adequate circulation to meet cell needs"], type: "single", category: "Ch 7: Patho", section: "Pathophysiology", rationale: "Perfusion is the delivery of O2/nutrients and removal of waste." },
    { q: "A pulmonary embolism causes which type of shock?", options: ["Hypovolemic", "Distributive", "Cardiogenic", "Obstructive"], answer: ["Obstructive"], type: "single", category: "Ch 7: Patho", section: "Pathophysiology", rationale: "A physical block to flow (embolism, tension pneumo) is obstructive." },
    { q: "What happens to the Sodium-Potassium pump during severe shock?", options: ["Speeds up", "Fails due to lack of ATP", "Switches to calcium", "Remains normal"], answer: ["Fails due to lack of ATP"], type: "single", category: "Ch 7: Patho", section: "Pathophysiology", rationale: "Without ATP (energy), cellular pumps fail, leading to cell death." },
    { q: "Which are signs of COMPENSATED shock?", options: ["Thirst", "Narrowing pulse pressure", "Tachycardia", "Hypotension"], answer: ["Thirst", "Narrowing pulse pressure", "Tachycardia"], type: "multiple", category: "Ch 7: Patho", section: "Pathophysiology", rationale: "Hypotension is the key sign of DECOMPENSATED shock." },
    { q: "The Fick Principle describes components necessary for:", options: ["Lifting", "Oxygen reaching cells", "Legal duty", "Radio use"], answer: ["Oxygen reaching cells"], type: "single", category: "Ch 7: Patho", section: "Pathophysiology", rationale: "Fick Principle: O2 in air, working pump, enough RBCs." },
    
    { q: "Which receptor causes vasoconstriction during the stress response?", options: ["Alpha-1", "Beta-1", "Beta-2", "Muscarinic"], answer: ["Alpha-1"], type: "single", category: "Ch 7: Patho", section: "Pathophysiology", rationale: "Alpha-1 constriction pushes blood to the core." },
    { q: "Stroke Volume is defined as:", options: ["HR x BP", "Blood ejected per contraction", "Total body volume", "Flow speed"], answer: ["Blood ejected per contraction"], type: "single", category: "Ch 7: Patho", section: "Pathophysiology", rationale: "Cardiac Output = Stroke Volume x Heart Rate." },
    { q: "In an adult, Decompensated Shock is often indicated by a systolic BP below:", options: ["120 mmHg", "100 mmHg", "90 mmHg", "60 mmHg"], answer: ["90 mmHg"], type: "single", category: "Ch 7: Patho", section: "Pathophysiology", rationale: "90 mmHg is the classic threshold for decompensation." },

    // --- MEDICAL EMERGENCIES ---
    { q: "A 68-year-old male with COPD presents with acute dyspnea and cyanosis. Which finding suggests hypoxic drive?", options: ["Elevated CO2", "Low SpO2 despite O2", "Respiration stimulated by low O2 rather than high CO2", "Sudden pulmonary edema"], answer: ["Respiration stimulated by low O2 rather than high CO2"], type: "single", category: "Ch 17: Respiratory", section: "Medical", rationale: "Hypoxic drive uses low O2 levels to stimulate breathing when CO2 sensitivity is lost." },
    { q: "Which signs indicate severe respiratory distress? (Select all that apply)", options: ["Tripod position", "Two-word dyspnea", "SpO2 of 96%", "Use of accessory muscles"], answer: ["Tripod position", "Two-word dyspnea", "Use of accessory muscles"], type: "multiple", category: "Ch 17: Respiratory", section: "Medical", rationale: "Severe distress is shown through position, speech limit, and muscle use." },
    

[Image of respiratory distress symptoms]

    { q: "What is the primary goal of aspirin in suspected ACS?", options: ["Pain relief", "Prevent platelet aggregation", "Dissolve existing thrombus", "Decrease heart rate"], answer: ["Prevent platelet aggregation"], type: "single", category: "Ch 18: Cardiovascular", section: "Medical", rationale: "Aspirin prevents further clotting by stopping platelets from clumping." },
    { q: "Sharp, tearing chest pain radiating to the back with unequal BPs in arms is likely:", options: ["MI", "Aortic Dissection", "CHF", "Pneumothorax"], answer: ["Aortic Dissection"], type: "single", category: "Ch 18: Cardiovascular", section: "Medical", rationale: "Aortic dissection is characterized by 'tearing' pain and pressure discrepancies." },
    { q: "A patient with Type 1 diabetes is found unresponsive with fruity breath. This pattern is:", options: ["Cheyne-Stokes", "Kussmaul", "Biot's", "Agonal"], answer: ["Kussmaul"], type: "single", category: "Ch 21: Endocrine", section: "Medical", rationale: "Kussmaul respirations attempt to blow off CO2 in DKA." },
    { q: "Signs of opioid overdose include: (Select all that apply)", options: ["Pinpoint pupils", "Respiratory depression", "Tachycardia", "Altered mental status"], answer: ["Pinpoint pupils", "Respiratory depression", "Altered mental status"], type: "multiple", category: "Ch 23: Toxicology", section: "Medical", rationale: "The opioid triad is CNS/Resp depression and pinpoint pupils." },
    
    { q: "The postictal state is best described as:", options: ["Return to baseline", "Airway narrowing", "Altered mental status with gradual improvement", "Muscle rigidity"], answer: ["Altered mental status with gradual improvement"], type: "single", category: "Ch 19: Neurologic", section: "Medical", rationale: "Postictal is the recovery period following a seizure." }
];

// --- QUIZ LOGIC ---
let sessionQuestions = [];
let currentIdx = 0;
let score = 0;
let mode = '';
let timerInterval;
let timeLeft = 0;
let categoryStats = {};

function adjustSliderRange() {
    const topic = document.getElementById('topic-select').value;
    const slider = document.getElementById('question-slider');
    
    // Check actual length of quizData based on filter
    const availableCount = topic === "All" ? quizData.length : quizData.filter(i => i.section === topic).length;
    
    slider.max = availableCount;
    if (parseInt(slider.value) > availableCount) slider.value = availableCount;
    updateSliderLabel(slider.value);
}

function updateSliderLabel(val) {
    document.getElementById('question-count-label').innerText = val;
    document.getElementById('time-estimate-label').innerText = val * 2;
}

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
    
    const correctCheck = (q.type === 'single') ? (selected[0] === q.answer[0]) : (selected.length === q.answer.length && selected.every(v => q.answer.includes(v)));
    
    let history = JSON.parse(localStorage.getItem('eric_field_notes_history') || "{}");
    if (!history[q.q]) history[q.q] = { pass: 0, fail: 0 };
    correctCheck ? history[q.q].pass++ : history[q.q].fail++;
    localStorage.setItem('eric_field_notes_history', JSON.stringify(history));

    if (!categoryStats[q.category]) categoryStats[q.category] = { correct: 0, total: 0 };
    categoryStats[q.category].total++;
    if (correctCheck) categoryStats[q.category].correct++;

    if (mode === 'review') {
        const fb = document.getElementById('feedback');
        fb.innerHTML = correctCheck ? `<b style="color:green">Correct!</b>` : `<b style="color:red">Incorrect.</b> Answer: ${q.answer.join(", ")}`;
        fb.innerHTML += `<br><small>${q.rationale}</small>`;
        if (correctCheck) score++;
        const btn = document.getElementById('action-btn');
        btn.innerText = "Next Question";
        btn.onclick = () => {
            currentIdx++;
            if (currentIdx < sessionQuestions.length) { showQuestion(); btn.innerText = "Submit Answer"; btn.onclick = handleAction; }
            else showResults();
        };
    } else {
        if (correctCheck) score++;
        currentIdx++;
        currentIdx < sessionQuestions.length ? showQuestion() : showResults();
    }
}

function showResults() {
    clearInterval(timerInterval);
    document.getElementById('quiz-area').style.display = 'none';
    document.getElementById('results-area').style.display = 'block';
    const percent = Math.round((score / sessionQuestions.length) * 100);
    document.getElementById('score-display').innerText = `Score: ${score} / ${sessionQuestions.length}`;
    document.getElementById('percentage-display').innerText = `${percent}%`;
    let breakdownHTML = "<strong>Mastery by Chapter:</strong><br>";
    for (const cat in categoryStats) {
        let catPercent = Math.round((categoryStats[cat].correct / categoryStats[cat].total) * 100);
        breakdownHTML += `${cat}: ${catPercent}%<br>`;
    }
    document.getElementById('category-breakdown').innerHTML = breakdownHTML;
    document.getElementById('pass-status').innerHTML = percent >= 70 ? "<b style='color:green'>PASSED</b>" : "<b style='color:red'>RE-STUDY REQUIRED</b>";
}

// THIS LINE IS THE FIX FOR THE SLIDER
window.onload = adjustSliderRange;
