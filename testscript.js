
    const questions = [
        {
            question: "1. Do you feel anxious or stressed when you are without a phone or computer device for an extended period of time?",
            answer: "Somehow"
        },
        {
            question: "2. Does your use of a phone or computer device affect your social or love life?",
            answer: "Somehow"
        },
        {
            question: "3. Do you spend the majority of your time online?",
            answer: "Somehow"
        },
        {
            question: "4. Do you neglect your basic bodily needs, such as hygiene, sleep, or eating, in order to spend more time on your phone or computer device?",
            answer: "Somehow"
        },
        {
            question: "5. Do you primarily communicate through the internet?",
            answer: "Somehow"
        },
        {
            question: "6. Have you ever missed important real-life events or obligations because of excessive phone or computer usage?",
            answer: "Somehow"
        },
        {
            question: "7. Do you frequently lose track of time while using your phone or computer, leading to hours passing without your awareness?",
            answer: "Somehow"
        },
        {
            question: "8. Do you struggle with any addictions, such as alcohol abuse, drug abuse, or nicotine addiction?",
            answer: "Somehow"
        },
        {
            question: "9. Do you experience feelings of depression?",
            answer: "Somehow"
        },
        {
            question: "10. Do you consider yourself productive in any way?",
            answer: "Somehow"
        },
        {
            question: "11. Do you consume energy drinks or coffee solely to extend your time on your phone or computer device?",
            answer: "Somehow"
        },
        {
            question: "12. Do you hide the amount of time you spend online?",
            answer: "Somehow"
        },
        {
            question: "13. Have you ever considered seeking professional help or support to manage your phone or computer usage?",
            answer: "Somehow"
        }
    ];
    
    let score = 0;
    
    const questionsElement = document.getElementById('questions');
    const textPsych = document.getElementById('textpsych');
    const scoreValueElement = document.getElementById('score-value');
    
    
    questionsElement.innerHTML = "";
    questions.forEach((q, index) => {
        questionsElement.innerHTML += `
            <div class="question-container">
                <div>${q.question}</div>
                <div class="answer-container">
                    <div class="radio-label">
                        <input type="radio" name="q${index}" value="Yes" id="q${index}_yes">
                        <label for="q${index}_yes">Yes</label>
                    </div>
                    <div class="radio-label">
                        <input type="radio" name="q${index}" value="Somehow" id="q${index}_somehow">
                        <label for="q${index}_somehow">Somehow</label>
                    </div>
                    <div class="radio-label">
                        <input type="radio" name="q${index}" value="No" id="q${index}_no">
                        <label for="q${index}_no">No</label>
                    </div>
                </div>
            </div>
        `;
    });
    
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach((radio) => {
        radio.addEventListener('change', () => {
            calculateScore();
        });
    });
    
    function calculateScore() {
        score = 0;
        radioButtons.forEach((radio) => {
            if (radio.checked) {
                if (radio.value === "Yes") {
                    score += 2;
                } else if (radio.value === "Somehow") {
                    score += 1;
                }
            }
        });
    }
    function showResult(){
    
        scoreValueElement.textContent = score;
        if (score > 16) {
            textPsych.textContent = 'The score of your test implies that you are highly addicted to your phone/computer device & the internet.';
        } else if (score > 8) {
            textPsych.textContent = 'The score results reflect significant device usage, yet without signs of addiction.';
        } else {
            textPsych.textContent = 'The score results indicate a healthy and balanced approach to device usage, without any signs of addiction';
        }
    }
