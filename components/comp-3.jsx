import React from 'react'
import './style/comp-3.css' // Zakładam, że CSS jest w tym samym folderze

const OszczedzanieEnergii = () => {
  return (
    <section id="energia">
      <aside>
        <h2>OSZCZĘDZANIE ENERGII</h2>

        <p className="text-box">
          Oszczędzanie energii to prosty, ale skuteczny sposób na zmniejszenie naszego
          wpływu na środowisko. Nadmierne zużycie energii przyczynia się do emisji gazów
          cieplarnianych, które napędzają zmiany klimatyczne i zanieczyszczają atmosferę.
          Aby ograniczyć te negatywne skutki, warto zwrócić uwagę na swoje codzienne
          nawyki związane z zużyciem energii i starać się je optymalizować.
        </p>
      </aside>

      <article>
        <h4>JAK TO ROBIĆ?</h4>
        <div className="options">
          <div className="option-area">
            <p>WYŁĄCZ ŚWIATŁO PO WYJŚCIU Z POMIESZCZENIA</p>
          </div>
          <div className="option-area">
            <p>ODŁĄCZ URZĄDZENIA ELEKTRYCZNE Z GNIAZDEK</p>
          </div>
          <div className="option-area">
            <p>ZAINWESTUJ W ENERGOOSZCZĘDNY SPRZĘT</p>
          </div>
          <div className="option-area">
            <p>MODERNIZUJ OGRZEWANIE I IZOLUJ SWÓJ DOM</p>
          </div>
          <div className="option-area">
            <p>PANELE FOTOWOLTAICZNE LUB KOLEKTORY SŁONECZNE</p>
          </div>
        </div>
      </article>
    </section>
  )
}

export default OszczedzanieEnergii
