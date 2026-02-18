const quizData = [
    {
        question: "Star Schema มีองค์ประกอบหลักอะไรบ้าง?",
        options: ["Fact Table และ Dimension Table", "Dataflow และ Dataset", "Measure และ Column", "API และ Web"],
        correct: 0
    },
    {
        question: "ข้อใดคือหลักการออกแบบ Data Model ที่ถูกต้อง?",
        options: ["ใช้ Relationship แบบ Many-to-Many เสมอ", "ลดจำนวนคอลัมน์ที่ไม่จำเป็น", "ใช้ Calculated Column แทน Measure ทุกครั้ง", "รวมทุกข้อมูลไว้ในตารางเดียว"],
        correct: 1
    },
    {
        question: "ฟังก์ชัน CALCULATE() ใช้เพื่ออะไร?",
        options: ["สร้างกราฟ", "เปลี่ยน Filter Context", "เชื่อม API", "สร้าง Bookmark"],
        correct: 1
    },
    {
        question: "Measure ต่างจาก Calculated Column อย่างไร?",
        options: ["Measure คำนวณตาม Filter Context", "Column เร็วกว่าเสมอ", "Measure ใช้ไม่ได้กับ Visual", "ไม่มีความแตกต่าง"],
        correct: 0
    },
    {
        question: "DAX Time Intelligence ต้องมีอะไรเป็นหลัก?",
        options: ["Date Table ที่สมบูรณ์", "API Key", "Bookmark", "Dataflow"],
        correct: 0
    },
    {
        question: "ฟังก์ชัน TOTALYTD ใช้เพื่อ?",
        options: ["คำนวณยอดสะสมตั้งแต่ต้นปี", "หาค่าเฉลี่ย", "เชื่อม Web", "ทำ Drillthrough"],
        correct: 0
    },
    {
        question: "Filter Context เกิดจากอะไร?",
        options: ["การคลิกเลือก Visual", "การ Refresh", "การ Publish", "การ Import Data"],
        correct: 0
    },
    {
        question: "Relationship แบบ One-to-Many ควรอยู่ระหว่าง?",
        options: ["Dimension → Fact", "Fact → Fact", "Measure → Column", "Dashboard → Report"],
        correct: 0
    },
    {
        question: "ข้อใดช่วยเพิ่ม Performance ของ Model?",
        options: ["ลด Cardinality", "เพิ่ม Column Text ยาว ๆ", "ใช้ Auto Date/Time", "ใช้ Many-to-Many ทุกจุด"],
        correct: 0
    },
    {
        question: "ALL() Function ใช้เพื่อ?",
        options: ["ลบ Filter Context", "ลบตาราง", "ลบ Dashboard", "ลบ Relationship"],
        correct: 0
    },
    {
        question: "Drillthrough ใช้เพื่อ?",
        options: ["ดูรายละเอียดเชิงลึก", "ลบข้อมูล", "Export Excel", "เชื่อม API"],
        correct: 0
    },
    {
        question: "Bookmark ใช้ทำอะไรได้?",
        options: ["สลับมุมมองหน้า Report", "เพิ่ม Performance Model", "เชื่อม Web", "สร้าง Dataflow"],
        correct: 0
    },
    {
        question: "Tooltip Page เหมาะสำหรับ?",
        options: ["แสดงข้อมูลเพิ่มเติมแบบ Hover", "ลบ Filter", "Publish App", "Refresh Data"],
        correct: 0
    },
    {
        question: "Dashboard ที่ดีควรมีลักษณะอย่างไร?",
        options: ["ข้อมูลเยอะที่สุด", "ชัดเจน อ่านง่าย ตอบโจทย์ธุรกิจ", "ใส่สีทุกสี", "ใส่กราฟให้มากที่สุด"],
        correct: 1
    },
    {
        question: "Slicer ทำหน้าที่อะไร?",
        options: ["กรองข้อมูล", "สร้าง DAX", "เชื่อม API", "ลบข้อมูล"],
        correct: 0
    },
    {
        question: "Dynamic Title มักสร้างด้วยอะไร?",
        options: ["Measure + SELECTEDVALUE()", "Bookmark", "API", "Dataflow"],
        correct: 0
    },
    {
        question: "Best Practice การออกแบบ Visual คือ?",
        options: ["ใช้สีไม่เกิน 3–5 สีหลัก", "ใส่ Effect เยอะ ๆ", "ใช้ 3D Chart เสมอ", "ใส่ Animation มากที่สุด"],
        correct: 0
    },
    {
        question: "Drill Down ต่างจาก Drillthrough อย่างไร?",
        options: ["Drill Down อยู่ใน Visual เดิม", "ไม่มีความต่าง", "Drillthrough อยู่ใน Visual เดิม", "ใช้แทนกันได้เสมอ"],
        correct: 0
    },
    {
        question: "การเชื่อมต่อ API ใน Power BI ใช้เครื่องมือใด?",
        options: ["Power Query", "Bookmark", "Drillthrough", "Slicer"],
        correct: 0
    },
    {
        question: "Incremental Refresh เหมาะกับ?",
        options: ["Dataset ขนาดใหญ่", "ข้อมูลเล็ก ๆ", "Dashboard", "Bookmark"],
        correct: 0
    },
    {
        question: "Power BI Service ใช้เพื่อ?",
        options: ["เผยแพร่และแชร์รายงาน", "เขียน DAX", "สร้าง Column", "แก้ไข Power Query"],
        correct: 0
    },
    {
        question: "Workspace ใช้ทำอะไร?",
        options: ["จัดการสิทธิ์และทีมงาน", "สร้างกราฟ", "เขียน API", "ทำ Data Model"],
        correct: 0
    },
    {
        question: "App ใน Power BI ใช้เพื่อ?",
        options: ["แจกจ่ายรายงานให้ผู้ใช้ปลายทาง", "สร้าง Measure", "Refresh Manual", "สร้าง Dataflow"],
        correct: 0
    },
    {
        question: "Dataflow ใช้เพื่อ?",
        options: ["เตรียมและแปลงข้อมูลบน Cloud", "ทำ Dashboard", "ทำ Bookmark", "ทำ Drill"],
        correct: 0
    },
    {
        question: "Scheduled Refresh ต้องตั้งค่าที่ใด?",
        options: ["Power BI Service", "Power BI Desktop", "Bookmark", "Drillthrough"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let userData = {
    fullname: '',
    email: ''
};

// DOM Elements
const regSection = document.getElementById('registration-section');
const quizSection = document.getElementById('quiz-section');
const regForm = document.getElementById('registration-form');
const questionContainer = document.getElementById('question-container');
const nextBtn = document.getElementById('next-btn');
const progressDisplay = document.getElementById('progress-bar');
const counterDisplay = document.getElementById('question-counter');
const resultModal = document.getElementById('result-modal');
const finalScoreDisplay = document.getElementById('final-score');
const resultMessage = document.getElementById('result-message');
const retryBtn = document.getElementById('retry-btn');
const acceptBtn = document.getElementById('accept-btn');
const loadingOverlay = document.getElementById('loading-overlay');

// Script URL for Google Apps Script (User needs to replace this)
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxQL5KSTQJRtW0vzXx4cdJtvkXEtM7jbhM8wFCkJWmwimXqFhUaxGpYG3fsC10fEuo/exec';

// Handle Registration
regForm.addEventListener('submit', (e) => {
    e.preventDefault();
    userData.fullname = document.getElementById('fullname').value;
    userData.email = document.getElementById('email').value;

    regSection.classList.add('hidden');
    quizSection.classList.remove('hidden');
    loadQuestion();
});

function loadQuestion() {
    const data = quizData[currentQuestion];
    questionContainer.innerHTML = `
        <div class="question fade-in">
            <h3>ข้อที่ ${currentQuestion + 1}: ${data.question}</h3>
            <div class="options-container">
                ${data.options.map((opt, index) => `
                    <div class="option" onclick="selectOption(${index})">
                        ${opt}
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // Update progress
    const progress = ((currentQuestion) / quizData.length) * 100;
    progressDisplay.style.width = `${progress}%`;
    counterDisplay.innerText = `ข้อที่ ${currentQuestion + 1}/${quizData.length}`;
    nextBtn.classList.add('hidden');
}

window.selectOption = function (index) {
    const options = document.querySelectorAll('.option');
    options.forEach(opt => opt.classList.remove('selected'));
    options[index].classList.add('selected');

    userAnswers[currentQuestion] = index;
    nextBtn.classList.remove('hidden');
};

nextBtn.addEventListener('click', () => {
    if (userAnswers[currentQuestion] === quizData[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    const passingScore = Math.ceil(quizData.length * 0.6);
    const passed = score >= passingScore;

    quizSection.classList.add('hidden');
    resultModal.classList.remove('hidden');
    finalScoreDisplay.innerText = score;

    if (passed) {
        resultMessage.innerHTML = "ยินดีด้วย! คุณสอบผ่านเกณฑ์ 60% <br>คุณสามารถยอมรับเพื่อส่งผลคะแนนหรือทำใหม่เพื่อสะสมคะแนนเพิ่ม";
        resultMessage.style.color = "var(--success)";
        retryBtn.classList.remove('hidden');
        acceptBtn.classList.remove('hidden');
    } else {
        resultMessage.innerHTML = "เสียใจด้วย! คุณยังไม่ผ่านเกณฑ์ 60% <br>กรุณาทำแบบทดสอบใหม่อีกครั้ง";
        resultMessage.style.color = "var(--error)";
        retryBtn.classList.remove('hidden');
        acceptBtn.classList.add('hidden');
    }
}

retryBtn.addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    resultModal.classList.add('hidden');
    quizSection.classList.remove('hidden');
    loadQuestion();
});

acceptBtn.addEventListener('click', () => {
    submitResults();
});

// DOM Elements for Evaluation
const evaluationSection = document.getElementById('evaluation-section');
const evaluationForm = document.getElementById('evaluation-form');
const successModal = document.getElementById('success-modal');

// Star Rating Interaction
document.querySelectorAll('.star-rating').forEach(container => {
    const stars = container.querySelectorAll('.star');
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const val = star.getAttribute('data-value');
            container.setAttribute('data-rating', val);

            // UI Update
            stars.forEach(s => {
                if (parseInt(s.getAttribute('data-value')) <= parseInt(val)) {
                    s.classList.add('selected');
                } else {
                    s.classList.remove('selected');
                }
            });
        });
    });
});

function submitResults() {
    loadingOverlay.classList.remove('hidden');

    const payload = {
        type: 'quiz',
        fullname: userData.fullname,
        email: userData.email,
        score: score,
        total: quizData.length,
        status: score >= (quizData.length * 0.6) ? 'Pass' : 'Fail',
        timestamp: new Date().toISOString()
    };

    fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
        .then(() => {
            loadingOverlay.classList.add('hidden');
            resultModal.classList.add('hidden');
            evaluationSection.classList.remove('hidden');
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        })
        .catch(err => {
            loadingOverlay.classList.add('hidden');
            console.error('Error:', err);
            alert('เกิดข้อผิดพลาดในการส่งข้อมูล แต่เราได้บันทึกคะแนนของคุณแล้ว กรุณาประเมินหลักสูตรต่อได้เลยครับ');
            resultModal.classList.add('hidden');
            evaluationSection.classList.remove('hidden');
        });
}

// Handle Evaluation Submission
evaluationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Check if all star ratings are filled
    const ratings = {};
    let allRated = true;
    document.querySelectorAll('.star-rating').forEach(container => {
        const name = container.getAttribute('data-name');
        const rating = container.getAttribute('data-rating');
        if (!rating) {
            allRated = false;
        }
        ratings[name] = rating;
    });

    if (!allRated) {
        alert('กรุณาให้คะแนนความพึงพอใจให้ครบทุกหัวข้อ (รูปดาว)');
        return;
    }

    // Get checked dates
    const dates = [];
    document.querySelectorAll('input[name="training_date"]:checked').forEach(cb => {
        dates.push(cb.value);
    });

    if (dates.length === 0) {
        alert('กรุณาเลือกวันที่อบรมอย่างน้อย 1 วัน');
        return;
    }

    loadingOverlay.classList.remove('hidden');

    const formData = new FormData(evaluationForm);
    const payload = {
        type: 'survey',
        fullname: userData.fullname,
        email: userData.email,
        training_dates: dates.join(', '),
        age: formData.get('age'),
        gender: formData.get('gender'),
        department: formData.get('department'),
        q1_1: ratings['q1_1'],
        q1_2: ratings['q1_2'],
        q1_3: ratings['q1_3'],
        q1_4: ratings['q1_4'],
        q2_1: ratings['q2_1'],
        q2_2: ratings['q2_2'],
        q2_3: ratings['q2_3'],
        q3_1: ratings['q3_1'],
        q3_2: ratings['q3_2'],
        q3_3: ratings['q3_3'],
        feedback_positive: formData.get('feedback_positive'),
        feedback_improve: formData.get('feedback_improve'),
        feedback_other: formData.get('feedback_other'),
        timestamp: new Date().toISOString()
    };

    fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
        .then(() => {
            loadingOverlay.classList.add('hidden');
            evaluationSection.classList.add('hidden');
            successModal.classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        })
        .catch(err => {
            loadingOverlay.classList.add('hidden');
            console.error('Error:', err);
            alert('เกิดข้อผิดพลาดในการส่งแบบสำรวจ แต่เราได้รับข้อมูลเบื้องต้นของคุณแล้ว ขอบคุณครับ');
            evaluationSection.classList.add('hidden');
            successModal.classList.remove('hidden');
        });
});
