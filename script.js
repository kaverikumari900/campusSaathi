// Tab Switching System
function switchTab(tabId) {
    // Hide all view panels
    const panels = document.querySelectorAll('.view-panel');
    panels.forEach(panel => panel.classList.remove('active-panel'));

    // Show selected panel
    const target = document.getElementById(tabId + '-view');
    if (target) {
        target.classList.add('active-panel');
    }

    // Update active state in sidebar menu
    const menuItems = document.querySelectorAll('.nav-menu li');
    menuItems.forEach(item => item.classList.remove('active'));
    
    event && event.currentTarget && event.currentTarget.classList.add('active');
}

// Search Filter Logic for Cards
function filterCards() {
    let query = document.getElementById('global-search').value.toLowerCase();
    let cards = document.querySelectorAll('.feature-card');
    
    cards.forEach(card => {
        let title = card.querySelector('h3').innerText.toLowerCase();
        let desc = card.querySelector('p').innerText.toLowerCase();
        if (title.includes(query) || desc.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Voice Assistant Interactive Simulation
let isListening = false;
function toggleVoiceListening() {
    const statusText = document.getElementById('voice-status-text');
    const transcript = document.getElementById('voice-transcript');
    const micIcon = document.getElementById('mic-icon');

    if (!isListening) {
        isListening = true;
        statusText.innerText = "Listening... Speak now!";
        micIcon.className = "fa-solid fa-spinner fa-spin";
        setTimeout(() => {
            transcript.innerText = '"Bhai, mera agla exam kab hai?"';
            statusText.innerText = "Processing voice query...";
            micIcon.className = "fa-solid fa-microphone";
            isListening = false;
        }, 3000);
    }
}

// Scholarship Eligibility Checker
function checkScholarship() {
    let cgpa = parseFloat(document.getElementById('cgpa-input').value);
    let resultBox = document.getElementById('scholarship-result');
    if (cgpa >= 8.0) {
        resultBox.innerHTML = "<strong style='color:green;'>Congratulations! You are eligible for Merit-Cum-Means Scholarship 2026.</strong>";
    } else {
        resultBox.innerHTML = "<strong style='color:red;'>Sorry, minimum 8.0 CGPA required for this scholarship.</strong>";
    }
}

// Attendance Calculator
function calculateAttendance() {
    let attended = parseFloat(document.getElementById('attended-classes').value);
    let total = parseFloat(document.getElementById('total-classes').value);
    let resultBox = document.getElementById('attendance-result');
    
    if (total > 0) {
        let percent = ((attended / total) * 100).toFixed(2);
        let color = percent >= 75 ? 'green' : 'red';
        resultBox.innerHTML = `Your Attendance is <strong style='color:${color};'>${percent}%</strong>. ${percent >= 75 ? 'Safe zone!' : 'Warning: Attendance is below 75%!'}`;
    }
}

// Add Assignment
function addAssignment() {
    let input = document.getElementById('new-assignment');
    let list = document.getElementById('assignment-list');
    if (input.value.trim() !== "") {
        let li = document.createElement('li');
        li.innerText = input.value + " (New)";
        list.appendChild(li);
        input.value = "";
    }
}

// AI Study Planner Generator
function generatePlan() {
    let goal = document.getElementById('exam-goal').value;
    let result = document.getElementById('plan-result');
    result.innerHTML = `<strong>Generated Plan for ${goal}:</strong><br>• Day 1-3: Core Subject Revision<br>• Day 4-5: Sample Papers & PYQs<br>• Day 6: Mock Test & Formula Review`;
}

// Quick Ask AI from Bottom Bar
function quickAsk(question) {
    document.getElementById('ai-main-input').value = question;
}

function sendAIChatQuery() {
    let val = document.getElementById('ai-main-input').value;
    if (val.trim() !== "") {
        alert("CampusSaathi AI Response: " + val + " ke liye aapka data update kar diya gaya hai!");
        document.getElementById('ai-main-input').value = "";
    }
}

// Chatbot Interactive Message Send
function sendChatMessage() {
    let input = document.getElementById('chat-user-input');
    let container = document.getElementById('chat-messages');
    
    if (input.value.trim() !== "") {
        let userDiv = document.createElement('div');
        userDiv.className = 'user-msg';
        userDiv.innerText = input.value;
        container.appendChild(userDiv);

        let query = input.value;
        input.value = "";

        setTimeout(() => {
            let botDiv = document.createElement('div');
            botDiv.className = 'bot-msg';
            botDiv.innerText = "Aapke sawal '" + query + "' ka jawab: Sabhi details dashboard par updated hain.";
            container.appendChild(botDiv);
            container.scrollTop = container.scrollHeight;
        }, 1000);
    }
}
document.getElementById('menu-toggle').addEventListener('click', function() {
  document.querySelector('.sidebar').classList.toggle('active');
});