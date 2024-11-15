import React from 'react'
import Image from 'next/image' // Importowanie komponentu Image
import './style/header.css' // Zakładając, że CSS jest w tym samym folderze

const Header = () => {
  return (
    <header>
      <div className="header__navbar">
        <div className="header__navbar--logo">
          <Image src="/logo.png" alt="logo" width={100} height={80} />
        </div>
        <div className="header__navbar--menu">
          <ul className="menu">
            <li className="menu__option">
              <a href="#recykling">RECYKLING</a>
            </li>
            <li className="menu__option">
              <a href="#ochrona">OCHRONA ŚRODOWISKA</a>
            </li>
            <li className="menu__option">
              <a href="#energia">OSZCZĘDZANIE ENERGII</a>
            </li>
            <li className="menu__option">
              <a href="#quiz">QUIZ</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="header__text">
        <p className="header__title">
          ZMIENIAJ ŚWIAT <br />
          <span className="header__subtitle">NIE KLIMAT</span>
        </p>
      </div>
      <div className="header__bglink">
        {/* Zmieniamy tag img na Image z Next.js */}
        <Image
          src="/link__icon.png"
          alt="link"
          className="header__bglink--img"
          width={100} // Zdefiniuj odpowiednie wymiary
          height={100} // Zdefiniuj odpowiednie wymiary
        />
        <p className="header__link">
          <a href="https://unsplash.com">background link</a>
        </p>
      </div>
    </header>
  )
}

export default Header
