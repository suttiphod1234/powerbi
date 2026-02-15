const questions = [
    {
        question: "ข้อใดคือหลักการสำคัญของการออกแบบ Data Model ที่ดีใน Power BI?",
        options: ["รวมทุกตารางให้เป็นตารางเดียว", "ใช้ Star Schema", "สร้างความสัมพันธ์แบบ Many-to-Many ให้มากที่สุด", "ไม่ต้องกำหนดความสัมพันธ์"],
        answer: 1,
        explanation: "Star Schema ช่วยให้ Query เร็วขึ้น, Model เข้าใจง่าย และลด Ambiguous Relationship"
    },
    {
        question: "หาก Sales เชื่อมกับ Product แบบ Many-to-One ทิศทาง Filter ปกติควรเป็นแบบใด?",
        options: ["Both Direction เสมอ", "Single Direction จาก Fact → Dimension", "Single Direction จาก Dimension → Fact", "ไม่ต้องมี Filter Direction"],
        answer: 2,
        explanation: "Filter ควรไหลจาก Dimension ไป Fact เช่น Product → Sales"
    },
    {
        question: "สูตรนี้ทำงานด้วย Context ใด?\nSUMX(Sales, Sales[Qty] * Sales[Price])",
        options: ["Filter Context เท่านั้น", "Row Context", "Query Context", "ไม่มี Context"],
        answer: 1,
        explanation: "SUMX เป็น Iterator จึงสร้าง Row Context ภายใน"
    },
    {
        question: "ข้อใดอธิบายหน้าที่ของ CALCULATE ได้ถูกต้องที่สุด?",
        options: ["รวมค่า", "เปลี่ยน Data Type", "เปลี่ยน Filter Context", "สร้าง Relationship"],
        answer: 2,
        explanation: "CALCULATE คือหัวใจของ DAX ทำหน้าที่ Modify Filter Context"
    },
    {
        question: "ข้อใดทำให้เกิด Context Transition?",
        options: ["SUM()", "COUNT()", "CALCULATE()", "VALUES()"],
        answer: 2,
        explanation: "CALCULATE ทำ Context Transition (เปลี่ยน Row Context → Filter Context)"
    },
    {
        question: "หากต้องการคำนวณยอดขายปีที่แล้ว ควรใช้ฟังก์ชันใด?",
        options: ["DATEADD", "SAMEPERIODLASTYEAR", "DATEDIFF", "YEAR"],
        answer: 1,
        explanation: "SAMEPERIODLASTYEAR ใช้คำนวณช่วงเวลาเดียวกันของปีที่แล้ว"
    },
    {
        question: "การใช้ฟังก์ชัน Time Intelligence ต้องมีสิ่งใดก่อน?",
        options: ["Calculated Column", "Date Table ที่ Mark as Date Table", "Relationship แบบ Many-to-Many", "Table ชื่อ Calendar เท่านั้น"],
        answer: 1,
        explanation: "ต้องมี Date Table, มี Relationship กับ Fact และ Mark as Date Table"
    },
    {
        question: "ต้องการหายอดขายเฉพาะสินค้าที่มียอดขายมากกว่า 100,000 ควรใช้ฟังก์ชันใด?",
        options: ["FILTER", "RELATED", "SUMX", "COUNTROWS"],
        answer: 0,
        explanation: "ใช้ FILTER ภายใน CALCULATE เพื่อกำหนดเงื่อนไขที่ซับซ้อน"
    },
    {
        question: "สูตรใดมีประสิทธิภาพดีกว่า?",
        options: ["SUMX(Sales, Sales[Amount])", "SUM(Sales[Amount])"],
        answer: 1,
        explanation: "SUM เร็วกว่า SUMX เพราะไม่ต้อง Iterate"
    },
    {
        question: "เขียน Measure คำนวณ % Growth YoY ข้อใดถูกต้องที่สุด?",
        options: [
            "DIVIDE([Total Sales], [Sales LY])",
            "SUM([Total Sales]) - SUM([Sales LY])",
            "DIVIDE([Total Sales] - [Sales LY], [Sales LY])",
            "CALCULATE([Total Sales], [Sales LY])"
        ],
        answer: 2,
        explanation: "YoY % = DIVIDE([Total Sales] - [Sales LY], [Sales LY])"
    }
];

let currentQuestion = 0;
let score = 0;
let selectedOption = null;
let userData = { name: '', email: '' };

const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultOverlay = document.getElementById('result-overlay');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');
const currentQuestionNum = document.getElementById('current-question-num');

// Start Quiz
document.getElementById('start-btn').addEventListener('click', () => {
    const nameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');

    if (!nameInput.value || !emailInput.value) {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน');
        return;
    }

    userData.name = nameInput.value;
    userData.email = emailInput.value;

    welcomeScreen.classList.remove('active');
    quizScreen.classList.add('active');
    loadQuestion();
});

function loadQuestion() {
    selectedOption = null;
    nextBtn.classList.add('disabled');
    nextBtn.disabled = true;

    const q = questions[currentQuestion];
    questionText.innerText = q.question;
    currentQuestionNum.innerText = `ข้อที่ ${currentQuestion + 1}/${questions.length}`;

    // Progress
    const progress = ((currentQuestion) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;

    optionsContainer.innerHTML = '';
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.innerText = opt;
        btn.addEventListener('click', () => selectOption(index, btn));
        optionsContainer.appendChild(btn);
    });
}

function selectOption(index, btn) {
    const allBtns = optionsContainer.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');

    selectedOption = index;
    nextBtn.classList.remove('disabled');
    nextBtn.disabled = false;
}

nextBtn.addEventListener('click', () => {
    if (selectedOption === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    progressBar.style.width = '100%';
    const total = questions.length;
    const passed = (score / total) >= 0.6;

    document.getElementById('result-name').innerText = `ชื่อ: ${userData.name}`;
    document.getElementById('score-value').innerText = score;

    const resultTitle = document.getElementById('result-title');
    const resultDesc = document.getElementById('result-desc');
    const resultIcon = document.getElementById('result-icon');
    const iconPath = document.getElementById('icon-path');
    const actionBtn = document.getElementById('result-action-btn');

    if (passed) {
        // Success State
        resultTitle.innerText = "ยินดีด้วย! คุณผ่านการทดสอบ";
        resultDesc.innerText = "เก่งมาก! เราได้ส่งคะแนนและคำอธิบายไปยังอีเมลของคุณแล้ว";
        resultIcon.style.color = "#22c55e";
        resultIcon.style.background = "rgba(34, 197, 94, 0.1)";
        iconPath.setAttribute('d', "M30 50L45 65L70 35"); // Checkmark
        actionBtn.innerText = "ทำใหม่อีกครั้ง";

        sendResultsToEmail();
    } else {
        // Fail State
        resultTitle.innerText = "เสียใจด้วย! คุณยังไม่ผ่านเกณฑ์";
        resultDesc.innerText = "คะแนนของคุณยังไม่ถึง 60% กรุณาทบทวนเนื้อหาและลองใหม่อีกครั้ง";
        resultIcon.style.color = "#ef4444";
        resultIcon.style.background = "rgba(239, 68, 68, 0.1)";
        iconPath.setAttribute('d', "M30 30L70 70M70 30L30 70"); // X icon
        actionBtn.innerText = "ลองใหม่อีกครั้ง";
    }

    resultOverlay.classList.add('active');
}

function sendResultsToEmail() {
    // Send data to GAS (Template URL - User needs to replace this)
    const scriptURL = 'YOUR_GAS_WEB_APP_URL';

    const payload = {
        name: userData.name,
        email: userData.email,
        score: score,
        total: questions.length,
        timestamp: new Date().toLocaleString('th-TH')
    };

    console.log('Quiz Passed - Sending Results:', payload);

    // Attempt to send (will fail if URL is not set)
    if (scriptURL !== 'YOUR_GAS_WEB_APP_URL') {
        fetch(scriptURL, {
            method: 'POST',
            mode: 'no-cors',
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }).catch(err => console.error('Error sending results:', err));
    }
}

