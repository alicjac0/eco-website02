const quizData = [
  {
    question: 'Jakie znaczenie ma recykling?',
    answers: ['Zmniejsza odpady', 'Zwiększa odpady', 'Nie ma znaczenia'],
    correct: 'Zmniejsza odpady',
  },
  {
    question: 'Które z poniższych jest odnawialnym źródłem energii?',
    answers: ['Węgiel', 'Energia słoneczna', 'Gaz ziemny'],
    correct: 'Energia słoneczna',
  },
  {
    question: 'Jakie materiały nadają się najlepiej do recyklingu?',
    answers: ['Plastik i metal', 'Papier i szkło', 'Wszystkie z wyżej wymienionych'],
    correct: 'Wszystkie z wyżej wymienionych',
  },
  {
    question: "Co oznacza termin 'bioróżnorodność'?",
    answers: ['Różnorodność gatunków', 'Brak różnorodności', 'Jednolitość gatunków'],
    correct: 'Różnorodność gatunków',
  },
  {
    question: 'Jakie zwierzę jest symbolem ochrony przyrody?',
    answers: ['Lis', 'Panda', 'Żółw'],
    correct: 'Panda',
  },
  {
    question: 'Która praktyka pomaga w oszczędzaniu wody?',
    answers: ['Mycie auta codziennie', 'Skrócenie prysznica', 'Nie wyłączanie kranu'],
    correct: 'Skrócenie prysznica',
  },
  {
    question: 'Co najlepiej zrobić z pustą butelką plastikową?',
    answers: ['Wyrzucić do śmieci', 'Oddać do recyklingu', 'Spalić'],
    correct: 'Oddać do recyklingu',
  },
  {
    question: 'Co oznacza skrót CO2?',
    answers: ['Dwutlenek węgla', 'Tlen', 'Dwutlenek siarki'],
    correct: 'Dwutlenek węgla',
  },
  {
    question: 'Które tworzywo można łatwo kompostować?',
    answers: ['Plastik', 'Szkło', 'Papier'],
    correct: 'Papier',
  },
  {
    question: 'Jaki wpływ ma zanieczyszczenie powietrza na zdrowie?',
    answers: ['Poprawia zdrowie', 'Nie ma wpływu', 'Szkodzi zdrowiu'],
    correct: 'Szkodzi zdrowiu',
  },
  {
    question: 'Co najlepiej zrobić z odpadami organicznymi?',
    answers: ['Spalić', 'Kompostować', 'Wyrzucić do śmieci'],
    correct: 'Kompostować',
  },
  {
    question: 'Jak można oszczędzać wodę w domu?',
    answers: [
      'Zakręcać wodę podczas mycia zębów',
      'Brać długie kąpiele',
      'Myć samochód codziennie',
    ],
    correct: 'Zakręcać wodę podczas mycia zębów',
  },
  {
    question: 'Która z poniższych praktyk zmniejsza zużycie energii elektrycznej?',
    answers: [
      'Wyłączanie światła w pustych pomieszczeniach',
      'Trzymanie lodówki otwartej',
      'Zostawianie włączonej ładowarki w gniazdku',
    ],
    correct: 'Wyłączanie światła w pustych pomieszczeniach',
  },
  {
    question: 'Które działanie pomaga chronić bioróżnorodność?',
    answers: [
      'Sadzenie rodzimych roślin',
      'Wprowadzanie obcych gatunków',
      'Wycinanie lasów',
    ],
    correct: 'Sadzenie rodzimych roślin',
  },
  {
    question: 'Jaki wpływ mają wycieki ropy na środowisko?',
    answers: ['Nie mają wpływu', 'Zanieczyszczają oceany', 'Zwiększają populację ryb'],
    correct: 'Zanieczyszczają oceany',
  },
  {
    question: 'Które z poniższych zachowań jest bardziej ekologiczne?',
    answers: [
      'Kupowanie wody butelkowanej',
      'Korzystanie z bidonu wielorazowego',
      'Używanie plastikowych kubków',
    ],
    correct: 'Korzystanie z bidonu wielorazowego',
  },
  {
    question: 'Jakie znaczenie ma sadzenie drzew dla środowiska?',
    answers: [
      'Zwiększa poziom dwutlenku węgla',
      'Poprawia jakość powietrza',
      'Zmniejsza bioróżnorodność',
    ],
    correct: 'Poprawia jakość powietrza',
  },
]

const quizContainer = document.getElementById('quiz')
const submitButton = document.getElementById('submit')
const resultContainer = document.getElementById('result')

function loadQuiz() {
  quizData.forEach((questionData, questionIndex) => {
    const questionElement = document.createElement('div')
    questionElement.classList.add('question')
    questionElement.innerText = `${questionIndex + 1}. ${questionData.question}`
    quizContainer.appendChild(questionElement)

    const answersContainer = document.createElement('div')
    answersContainer.classList.add('answers')

    questionData.answers.forEach((answer) => {
      const label = document.createElement('label')
      const input = document.createElement('input')
      input.type = 'radio'
      input.name = `question${questionIndex}`
      input.value = answer
      label.appendChild(input)
      label.appendChild(document.createTextNode(answer))
      answersContainer.appendChild(label)
    })

    quizContainer.appendChild(answersContainer)
  })
}

function checkQuiz() {
  let score = 0

  quizData.forEach((questionData, questionIndex) => {
    const selectedAnswer = document.querySelector(
      `input[name="question${questionIndex}"]:checked`
    )
    if (selectedAnswer && selectedAnswer.value === questionData.correct) {
      score++
    }
  })

  resultContainer.innerText = `Twój wynik: ${score} / ${quizData.length}`
}

submitButton.addEventListener('click', checkQuiz)

loadQuiz()
