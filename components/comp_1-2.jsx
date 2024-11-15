import Image from 'next/image'
import "./style/comp_1-2.scss"
export default function Article1() {
  return (
    <article className="recykling">
    <p className="tytul">RECYKLING</p>
    <p className="akapit">
      Recykling jest istotnym elementem zrównoważonego zarządzania odpadami, który
      pozwala zmniejszyć ilość śmieci trafiających na wysypiska oraz ogranicza
      eksploatację surowców naturalnych. Dzięki segregacji odpadów, takich jak plastik,
      papier, szkło i metal, możliwe jest ich ponowne przetworzenie i wykorzystanie do
      produkcji nowych produktów. Jest to nie tylko bardziej ekologiczne, ale również
      wspiera gospodarkę obiegu zamkniętego, w której minimalizowane są straty surowców.
    </p>
    <p className="akapit">
      Aby skutecznie wspierać recykling, warto znać lokalne zasady segregacji i pamiętać
      o codziennym oddzielaniu odpadów. Odpady niebezpieczne, takie jak baterie,
      chemikalia czy sprzęt elektroniczny, powinny być oddawane do specjalnych punktów
      zbiórki, aby zapobiec zanieczyszczeniu środowiska. Świadome podejście do
      recyklingu może znacząco przyczynić się do ochrony zasobów naturalnych i
      zmniejszenia zanieczyszczenia środowiska.
    </p>
    <p className="kosze">KOLORY KOSZY I ICH ZNACZENIE</p>
    <div className="zdjecia"> </div>
      <div className="container__bins">
        <div className="papier">
          <Image className="zdj-papier" src="./pictures/papier.png" alt="papier" height={} width={}/>
        </div>
        <div className="napis-odpadow">PAPIER</div>
      </div>

      <div className="container__bins">
        <div className="szklo">
          <Image className="zdj-szklo" src="./pictures/szklo.png" alt="szkło" height={} width={}/>
        </div>
        <div className="napis-odpadow">SZKŁO</div>
      </div>

      <div className="container__bins">
        <div className="metale">
          <Image
            className="zdj-metale"
            src="./pictures/sztuczne.png"
            alt="metale-i-tworzywa-sztuczne"
            height={} width={}
          />
        </div>
        <div className="napis-odpadow">METALE I <br/> TWORZYWA SZTUCZNE</div>
      </div>

      <div className="container__bins">
        <div className="bio">
          <Image className="zdj-bio" src="./pictures/bio.png" alt="bio" height={} width={}/>
        </div>
        <div className="napis-odpadow">BIO</div>
      </div>

      <div className="container__bins">
        <div className="zmieszane">
          <Image className="zdj-zmieszane" src="./pictures/zmieszane.png" alt="zmieszane" height={} width={}/>
        </div>
        <div className="napis-odpadow">ZMIESZANE</div>
      </div>
    </div>
  </article>

  <article className="ochrona">
    <p className="tytul-ochrona">OCHRONA ŚRODOWISKA</p>
    <div className="zdj-ochrona-srodowiska">
      <div><Image className="zdj-zwierze" src="./pictures/jelen.png" alt="jelen"height={} width={} /></div>
      <div>
        <Image className="zdj-las" src="./pictures/las.png" alt="las" height={} width={} />
      </div>
      <div>
        <Image className="zdj-fabryka" src="./pictures/fabryki.png" alt="fabryka" height={} width={}/>
      </div>
    </div>
    <div className="teksty">
      <div className="container-text">
        <div className="text">
          Odpowiednie wyrzucanie śmieci chroni zwierzęta przed zranieniami i zatruciami.
          Plastikowe odpady mogą zaplątać dzikie zwierzęta, a chemikalia zanieczyszczają
          ich siedliska. Segregowanie śmieci i sprzątanie środowiska sprawia, że
          zwierzęta mogą życ bezpiecznie.
        </div>
        <div className="arrow"></div>
      </div>
      <div className="container-text">
        <div className="text">
          Odpowiednie wyrzucanie śmieci chroni naturę, w tym lasy. Plastik i inne odpady
          zanieczyszczają gleby i wodę a ich obecność w lasach niszczy ekosystemy.
          Segregowanie odpadów, unikanie plastiku jednorazowego użytku oraz prawclassNamełowa
          utylizacja odpadów pomaga zachować czystość lasów i ich bioróżnorodność.
        </div>
        <div className="arrow"></div>
      </div>
      <div className="container-text">
        <div className="text">
          Dym z kominów fabryk zanieczyszcza powietrze, wpływajac negatywne na
          środowisko i zdrowie ludzi. Emisje szkodliwych gazów przyczyniają się do smogu
          i zmian klimatycznych. Ograniczenie emisji, instalacja filtrów na kominach
          oraz inwestowanie w odnawialne źródła energii pomagają zmniejszyć
          zanieczyszczenia i chronić atmosferę.
        </div>
        <div className="arrow"></div>
      </div>
    </div>
  </article>
  )
}
