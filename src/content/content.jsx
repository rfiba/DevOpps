import React, { Component } from 'react';
import './contentStyle.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class Content extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalLicence: false,
      modalPolicy: false
    };

    this.toggleLicence = this.toggleLicence.bind(this);
    this.togglePolicy = this.togglePolicy.bind(this);
  }

  togglePolicy() {
    this.setState({
      modalPolicy: !this.state.modalPolicy
    });
  }

  toggleLicence() {
    this.setState({
      modalLicence: !this.state.modalLicence
    });
  }

  

  render() {
    
    const style = {
      backgroundColor: 'snow',
      borderRadius: '20px',
      border:"1px solid black",
      boxShadow:"2px 2px"
    }

    return (
      <main>
      <div className='margin container' style={style}>
      <br />
        <h2 className="text-center " >Repozytorium otwartych zasobów edukacyjnych</h2>
        <ol>
          <li> Przeglądaj materiały stworzone przez pracowników i najlepszych studentów AGH. </li>
          <li>	Z treści repozytorium możesz korzystać za darmo. Są opublikowane na otwartej licencji Creative Commons, która pozwala na kopiowanie, modyfikację i tworzenie na ich podstawie swojego własnego materiału. Szczegółowo o warunkach wykorzystania w <span onClick={this.toggleLicence} className="text-primary">„Zasadach licencjonowania”.</span>  </li>
          <li>	Pamiętaj, że korzystanie z serwisu oznacza akceptację <span onClick={this.togglePolicy} className="text-primary">regulaminu. </span> </li>
        </ol>
      

<Modal isOpen={this.state.modalLicence} toggle={this.toggleLicence} className={this.props.className}>
<ModalHeader toggle={this.toggleLicence}>Zasady licencjonowania</ModalHeader>
<ModalBody>
  Otwarte zasoby edukacyjne to materiały dydaktyczne oparte o wolne licencjonowanie, czyli system ochrony praw autorskich inny od klasycznego copyrightu. To podejście można określić terminem „Pewne prawa zastrzeżone”. O tym, które prawa zostają zastrzeżone decyduje autor dzieła.
  <hr />
  Zasoby zamieszczone w OPEN AGH opatrzone są licencją Creative Commons „Uznanie autorstwa – Użycie niekomercyjne – Na tych samych warunkach 3.0 Polska”. Co to oznacza?
  <hr />
  Utwór oznaczony tą licencją może być kopiowany, rozpowszechniany, odtwarzany i wykonywany, a także można na jego podstawie tworzyć utwory zależne (czyli przekształcać go). Osoba korzystająca z tych możliwości musi jednak spełnić 3 warunki:
  <br />
  <hr />
  <ol>
    <li>
      Musi podać, kto jest autorem oryginału oraz że materiał został pobrany z serwisu Open AGH.
          </li>
    <li>
      Może wykorzystywać utwór tylko do celów niekomercyjnych.
          </li>
    <li>
      Jeśli stworzy utwór zależny musi oznaczyć go tą samą licencją.
          </li>
  </ol>
  <hr />
  Powyższe warunki mogą zostać uchylone, jeśli zgodzi się na to właściciel praw autorskich. Może on np. podpisać dodatkową umowę, na wynegocjowanych przez siebie warunkach, pozwalającą na wykorzystanie jego dzieła w celach komercyjnych.
  <hr />
  Przygotowane na podstawie creativecommons.pl
</ModalBody>
<ModalFooter>
  <Button color="primary" onClick={this.toggleLicence}>OK</Button>{' '}
</ModalFooter>
</Modal>

<Modal isOpen={this.state.modalPolicy} toggle={this.togglePolicy} className={this.props.className}>
<ModalHeader toggle={this.togglePolicy}>REGULAMIN SERWISU "Open AGH - Otwarte Zasoby Edukacyjne"</ModalHeader>
<ModalBody className="text-center">
  § 1
Postanowienia ogólne <hr />
  Niniejszy Regulamin określa zasady korzystania oraz funkcjonowania serwisu "Open AGH - Otwarte Zasoby Edukacyjne", zwanego dalej Open AGH lub Serwisem.
  Regulamin określa prawa i obowiązki Użytkowników Serwisu oraz Autorów, a także prawa, obowiązki i zakres odpowiedzialności Administratora, jako podmiotu zarządzającego i prowadzącego Open AGH.
  Każdy potencjalny Użytkownik i Autor zobowiązany jest zapoznać się z treścią niniejszego Regulaminu. Podejmowanie przez Użytkownika lub Autora dalszych czynności oznacza akceptację wszystkich postanowień Regulaminu.
<hr />
  § 2
Definicje <hr />
  Serwis "Open AGH - Otwarte Zasoby Edukacyjne" to repozytorium otwartych zasobów edukacyjnych stworzonych w Akademii Górniczo-Hutniczej im. St. Staszica w Krakowie, opracowanych przez pracowników i studentów Akademii.
  Administrator – podmiot zarządzający i prowadzący Serwis, którym jest Centrum e-Learningu Akademii Górniczo-Hutniczej.
  Użytkownik - osoba korzystająca z Serwisu, uprawniona do przeglądania i pobierania materiałów zawartych w Serwisie.
  Autor – osoba zamieszczająca swoje materiały w Serwisie.
Zasób - tekst, grafika, nagrania audio i wideo, animacje, i inne materiały dydaktyczne zamieszczone w Serwisie. <hr />
  § 3
Zasady korzystania z Serwisu <hr />
  Korzystanie z Serwisu jest darmowe.
  Użytkownicy mają prawo przeglądać zasoby Open AGH oraz pobierać je i wykorzystywać zgodnie z zasadami określonymi przez licencję Creative Commons: Uznanie autorstwa – Użycie niekomercyjne – Na tych samych warunkach (CC BY-NC-SA). Użytkownicy Serwisu wykorzystując zasoby Open AGH na zasadach wskazanej licencji są zobowiązani podać imię i nazwisko Autora oraz informację, że pierwotnym miejscem publikacji jest serwis Open AGH. Szczegółowe zasady licencjonowania dostępne są na stronie open.agh.edu.pl/licencja.
<hr />§ 4
Zasady zamieszczania zasobów w Open AGH  <hr />
  Autorami treści zamieszczanych w Open AGH mogą być wyłącznie:
  1) pracownicy AGH,
  2) studenci i doktoranci AGH.
  Autorzy mogą przesyłać do Serwisu materiały dydaktyczne o dowolnej treści. Dowolność oznacza tu:
  - tematykę (niekoniecznie związaną z własną działalnością naukową lub zawodową)
  - rodzaj zasobów (teksty, grafiki, nagrania audio i wideo, animacje, itp.)
  - techniczne formaty plików, w jakich zapisane są te zasoby
  - wykorzystywane metody dydaktyczne (pełne kursy, sylabusy, wykłady, ćwiczenia, testy, itp.)
  Studenci i doktoranci AGH mogą zamieszczać materiały wyłącznie po akceptacji opiekunów naukowych, będących pracownikami AGH i biorących merytoryczną odpowiedzialność za pochodzące od studentów i doktorantów treści.
  Materiały mogą być nadsyłane na adres poczty elektronicznej Administratora wyłącznie z kont e-mailowych z domeną „agh.edu.pl”. Weryfikacja tożsamości tychże osób będzie również dokonywana przez Administratora poprzez kontakt telefoniczny.
  Nadesłane zasoby powinny być wolne od zagrożeń dla funkcjonowania Serwisu (wirusów, itp.) oraz spakowane w formacie zip.
  Osoby nadsyłające materiały w celu ich zamieszczenia w Serwisie oświadczają, z zastrzeżeniem ust. 3, iż są autorami nadesłanych prac, a dostarczane treści nie naruszają i nie będą naruszać obowiązujących przepisów prawa (w szczególności o charakterze pornograficznym, rasistowskich, nawołujących do nienawiści itp.) oraz praw autorskich, dóbr osobistych ani innych praw osób trzecich.
  Autorzy nadesłanych materiałów wyrażają zgodę na umieszczenie materiałów w Open AGH w celu ich udostępnienia Użytkownikom Serwisu na zasadach licencji Creative Commons: Uznanie autorstwa – Wykorzystanie niekomercyjne – Na tych samych warunkach (CC: BY–NC–SA).
  Zabronione jest umieszczanie tekstów/materiałów o charakterze komercyjnym (reklamowym).
  Autor zamieszczający materiały w Serwisie ponosi pełną odpowiedzialność prawną za zawarte w nich treści.
  Autor może w dowolnej chwili i bez podawania przyczyn zażądać usunięcia swojego zasobu z Serwisu na pisemny wniosek przesłany na adres Administratora albo wysyłając mail na adres: kontakt@open.agh.edu.pl. Administrator ma obowiązek usunąć dany zasób w przeciągu 5 dni roboczych.
<hr />§ 5
Administracja Serwisem <hr />
  Administrator:
  zapewnia stały dostęp i sprawne działanie Serwisu;
  zamieszcza w Serwisie przesłane przez Autorów materiały;
  ma prawo odmówić zamieszczenia lub usunąć materiały, jeśli stanowią one zagrożenie dla działania i bezpieczeństwa Serwisu;
  ma obowiązek odmówić zamieszczenia oraz usunąć materiały naruszające przepisy obowiązującego prawa, zasady współżycia społecznego, dobre obyczaje lub wobec których istnieją uzasadnione podejrzenia, iż naruszają prawa osób trzecich;
  ma obowiązek usunąć materiały, jeśli domaga się tego osoba trzecia, która uprawdopodobniła, iż przysługują jej w tym zakresie prawa;
  ma obowiązek usunięcia materiałów na żądanie Autora zgodnie z § 4 ust. 10;
  nie ponosi jakiejkolwiek odpowiedzialności za treści zawarte w materiałach zamieszczonych w Serwisie, za bezpośrednie lub pośrednie szkody spowodowane przez Użytkowników w wyniku działań związanych z dostępem, użyciem lub pobieraniem materiałów z tego Serwisu i ich dalszą eksploatacją oraz spowodowane nieprawidłowym zapisem lub odczytem materiałów;
nie odpowiada za inne okoliczności od niego niezależne. <hr />
  § 6
Tryb reklamacyjny <hr />
  Reklamacje dotyczące świadczonych usług należy przesyłać na adres poczty elektronicznej: reklamacja@open.agh.edu.pl w terminie 7 dni licząc od dnia wystąpienia zdarzenia uzasadniającego zgłoszenie reklamacji.
  Prawidłowo złożona reklamacja powinna zawierać co najmniej następujące dane:
  - imię i nazwisko zgłaszającego
  - opis sprawy, której dotyczy reklamacja
Reklamacje zostanie rozpatrzona w ciągu 14 dni od jej otrzymania. <hr />
  § 7
Postanowienia końcowe <hr />
  Korzystanie z zasobów Open AGH jest równoznaczne z zapoznaniem się i akceptacją warunków niniejszego Regulaminu.
  Administrator zastrzega sobie prawo do wprowadzenie jednostronnych zmian w Regulaminie.
  W sprawach nieuregulowanych niniejszym Regulaminem mają zastosowanie przepisy kodeksu cywilnego oraz innych obowiązujących ustaw.
  Wszelkie ewentualne spory wynikłe w związku z funkcjonowaniem Serwisu Open AGH będą w pierwszej kolejności załatwiane polubownie, a w razie konieczności rozstrzygane przez właściwe miejscowo Sądy w Krakowie.
  Niniejszy regulamin wchodzi w życie z dniem 08.01.2010.
  
</ModalBody>
<ModalFooter>
  <Button color="primary" onClick={this.togglePolicy}>OK</Button>{' '}
</ModalFooter>
</Modal>
</div>

</main>

    );
  }
}

export default Content;
