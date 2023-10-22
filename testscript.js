const questions = [
    {
        question: "<strong>1.</strong> Do you feel anxious or stressed when you are without a phone or computer device for an extended period of time?",
        answer: "Somehow"
    },
    {
        question: "<strong>2.</strong> Does your use of a phone or computer device affect your social or love life?",
        answer: "Somehow"
    },
    {
        question: "<strong>3.</strong> Do you spend the majority of your time online?",
        answer: "Somehow"
    },
    {
        question: "<strong>4.</strong> Do you neglect your basic bodily needs, such as hygiene, sleep, or eating, in order to spend more time on your phone or computer device?",
        answer: "Somehow"
    },
    {
        question: "<strong>5.</strong> Do you primarily communicate through the internet?",
        answer: "Somehow"
    },
    {
        question: "<strong>6.</strong> Have you ever missed important real-life events or obligations because of excessive phone or computer usage?",
        answer: "Somehow"
    },
    {
        question: "<strong>7.</strong> Do you frequently lose track of time while using your phone or computer, leading to hours passing without your awareness?",
        answer: "Somehow"
    },
    {
        question: "<strong>8.</strong> Do you struggle with any addictions, such as alcohol abuse, drug abuse, or nicotine addiction?",
        answer: "Somehow"
    },
    {
        question: "<strong>9.</strong> Do you experience feelings of depression?",
        answer: "Somehow"
    },
    {
        question: "<strong>10.</strong> Are you not productive in any way?",
        answer: "Somehow"
    },
    {
        question: "<strong>11.</strong> Do you consume energy drinks or coffee solely to extend your time on your phone or computer device?",
        answer: "Somehow"
    },
    {
        question: "<strong>12.</strong> Do you hide the amount of time you spend online?",
        answer: "Somehow"
    },
    {
        question: "<strong>13.</strong> Have you ever considered seeking professional help or support to manage your phone or computer usage?",
        answer: "Somehow"
    }
];

const result = document.querySelector("#score-value")
result.style.display = "none";

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
                <p class = "green"> Agree </p>
            
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

                <p class = "red"> Disagree </p>

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
    if (score > 17) {
        textPsych.textContent = 'The score of your test implies that you are highly addicted to your phone/computer device & the internet.';
    } else if (score > 9) {
        textPsych.textContent = 'The score results reflect significant device usage, yet without signs of addiction.';
    } else {
        textPsych.textContent = 'The score results indicate a healthy and balanced approach to device usage, without any signs of addiction';
    }

    const resultButton = document.querySelector('button');
    const result = document.querySelector("#score-value")
    result.style.display = "inherit";
    resultButton.style.display = 'none';
    questionsElement.style.display = 'none';
}

        // Get all elements with the class "radio-container"
        const radioContainers = document.querySelectorAll(".answer-container > div.radio-label");

            // Add click event listeners to each radio container
            radioContainers.forEach(container => {
            container.addEventListener("click", function() {
                // Find the associated radio input element and check it
                const radioInput = this.querySelector('input[type="radio"]');
                radioInput.checked = true;
            });
        });

        function updateSelectedClass() {
            radioContainers.forEach(container => {
                const radioInput = container.querySelector('input[type="radio"]');
                if (radioInput.checked) {

                    const borderColor = window.getComputedStyle(container).borderColor;
                    container.style.backgroundColor = borderColor;                   
                } else {
                    container.style.backgroundColor = "transparent";
                }
            });
        }
        
        // Add click event listeners to each radio container
        radioContainers.forEach(container => {
            container.addEventListener("click", function(event) {
                event.stopPropagation(); // Stop event propagation
                const radioInput = this.querySelector('input[type="radio"]');
                if (radioInput) {
                    radioInput.checked = true;
                    calculateScore(); // Recalculate the score when a radio input is checked
                    updateSelectedClass(); // Update the "selected" class
                }
            });
        });