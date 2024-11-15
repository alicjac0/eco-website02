import React from 'react'
import Image from 'next/image' // Importowanie komponentu Image
import './style/footer.css' // Zakładając, że CSS jest w tym samym folderze

const Footer = () => {
  return (
    <footer>
      <div className="footer__sources">
        <p className="footer__sources--title">SOURCES</p>
        <p>
          <a href="https://www.flaticon.com" target="_blank" rel="noopener noreferrer">
            ICONS
          </a>
        </p>
        <p>
          <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">
            PICTURES
          </a>
        </p>
      </div>

      <a href="https://www.design.com/maker/logos/page1?text=&textChanged=&isFromRootPage=&searchText=tree&keywordChanged=true&colors=&filterByTags=">
        <Image src="/logo.png" alt="LOGO" width={100} height={80} />
      </a>

      <div className="footer__authors">
        <p className="footer__authors--title">AUTHORS</p>
        <p>Oliwia Ustrzyńska</p>
        <p>Alicja Cielecka</p>
        <p>Ewelina Szylar</p>
      </div>
    </footer>
  )
}

export default Footer
