'use client' // Ważne, aby komponent był renderowany po stronie klienta

import { useState, useEffect } from 'react'

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

const Quiz = () => {
  const [score, setScore] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState([])

  const handleAnswerChange = (questionIndex, answer) => {
    const updatedAnswers = [...selectedAnswers]
    updatedAnswers[questionIndex] = answer
    setSelectedAnswers(updatedAnswers)
  }

  const checkQuiz = () => {
    let newScore = 0

    quizData.forEach((questionData, questionIndex) => {
      if (selectedAnswers[questionIndex] === questionData.correct) {
        newScore++
      }
    })

    setScore(newScore)
  }

  useEffect(() => {}, [])

  return (
    <section id="quiz">
      <p className="quiz__title">QUIZ</p>
      <p className="quiz__subtitle">SPRAWDŹ SWOJĄ WIEDZĘ!</p>
      <div className="quiz-container">
        {quizData.map((questionData, questionIndex) => (
          <div key={questionIndex} className="question">
            <p>
              {questionIndex + 1}. {questionData.question}
            </p>
            <div className="answers">
              {questionData.answers.map((answer, answerIndex) => (
                <label key={answerIndex}>
                  <input
                    type="radio"
                    name={`question${questionIndex}`}
                    value={answer}
                    onChange={() => handleAnswerChange(questionIndex, answer)}
                    checked={selectedAnswers[questionIndex] === answer}
                  />
                  {answer}
                </label>
              ))}
            </div>
          </div>
        ))}
        <button id="submit" onClick={checkQuiz}>
          Sprawdź Wynik
        </button>
        <div id="result">
          Twój wynik: {score} / {quizData.length}
        </div>
      </div>
    </section>
  )
}

export default Quiz
