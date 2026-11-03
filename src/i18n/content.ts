export type Locale = "bs" | "en";

export const locales: Locale[] = ["bs", "en"];

export const company = {
  name: "ESU Agency d.o.o.",
  short: "ESU Agency",
  email: "info@esuagency.ba",
  phones: [
    { display: "+387 61 273 222", href: "tel:+38761273222" },
    { display: "+387 63 802 424", href: "tel:+38763802424" },
  ],
  locality: "Vogošća",
  city: "Sarajevo",
  country: "Bosna i Hercegovina",
  countryEn: "Bosnia and Herzegovina",
};

type Card = { title: string; text: string; image: string; alt: string; cta: string };
type OfferItem = { title: string; text: string; image: string; alt: string; tags: string[] };
type Article = {
  category: string;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
  readTime: string;
  body: string[];
};

export type Dictionary = {
  meta: { title: string; description: string; keywords: string[]; ogAlt: string };
  skip: string;
  nav: {
    links: { label: string; href: string }[];
    cta: string;
    menu: string;
    close: string;
    langLabel: string;
  };
  hero: { title: string; text: string; primary: string; secondary: string; imageAlt: string };
  trust: { label: string; title: string; items: string[] };
  expertise: { eyebrow: string; title: string; text: string; cards: Card[] };
  offer: {
    eyebrow: string;
    title: string;
    text: string;
    primary: string;
    secondary: string;
    tabs: { id: string; label: string; items: OfferItem[] }[];
    cardCta: string;
    note: string;
    prev: string;
    next: string;
  };
  approach: {
    eyebrow: string;
    title: string;
    text: string;
    primary: string;
    secondary: string;
    items: { title: string; text: string; points: string[]; image: string; alt: string }[];
  };
  steps: {
    eyebrow: string;
    title: string;
    text: string;
    primary: string;
    secondary: string;
    items: { title: string; text: string; image: string; alt: string }[];
    note: string;
  };
  audience: {
    eyebrow: string;
    title: string;
    text: string;
    cta: string;
    quote: string;
    quoteBy: string;
    quoteRole: string;
    items: { label: string; title: string; text: string; image: string; alt: string }[];
  };
  knowledge: {
    eyebrow: string;
    title: string;
    text: string;
    all: string;
    read: string;
    close: string;
    disclaimer: string;
    articles: Article[];
  };
  faq: { eyebrow: string; title: string; text: string; cta: string; items: { q: string; a: string }[] };
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    form: {
      name: string;
      namePh: string;
      phone: string;
      phonePh: string;
      email: string;
      emailPh: string;
      interest: string;
      interestOptions: string[];
      message: string;
      messagePh: string;
      consent: string;
      submit: string;
      sending: string;
      success: string;
      fallback: string;
      fallbackLink: string;
      error: string;
      required: string;
      invalidEmail: string;
      subject: string;
    };
    side: {
      writeTitle: string;
      writeText: string;
      callTitle: string;
      callText: string;
      visitTitle: string;
      visitText: string;
    };
  };
  footer: {
    tagline: string;
    text: string;
    cta: string;
    columns: { title: string; links: { label: string; href: string }[] }[];
    rights: string;
    top: string;
  };
};

const IMG = "/images";

const bs: Dictionary = {
  meta: {
    title: "ESU Agency — Ulažemo u potencijal. Stvaramo vrijednost.",
    description:
      "ESU Agency d.o.o. je kompanija za investicije u nekretnine iz Vogošće, Sarajevo. Ulaganje, prodaja i saradnja — novi dom, prostor za posao i prilika za ulaganje.",
    keywords: [
      "nekretnine Sarajevo",
      "ulaganje u nekretnine",
      "investicije nekretnine BiH",
      "prodaja nekretnina",
      "poslovni prostor Sarajevo",
      "Vogošća nekretnine",
      "ESU Agency",
    ],
    ogAlt: "ESU Agency — investicije u nekretnine, Sarajevo",
  },
  skip: "Preskoči na sadržaj",
  nav: {
    links: [
      { label: "Usluge", href: "#usluge" },
      { label: "Ponuda", href: "#ponuda" },
      { label: "Pristup", href: "#pristup" },
      { label: "Proces", href: "#proces" },
      { label: "Znanje", href: "#znanje" },
    ],
    cta: "Kontakt",
    menu: "Otvori meni",
    close: "Zatvori meni",
    langLabel: "Jezik",
  },
  hero: {
    title: "Ulažemo u potencijal. Stvaramo vrijednost.",
    text: "ESU Agency je kompanija za investicije u nekretnine iz Sarajeva. Prepoznajemo potencijal prostora, ulažemo dugoročno i otvoreno sarađujemo s kupcima, investitorima i partnerima.",
    primary: "Započnite razgovor",
    secondary: "Kako radimo",
    imageAlt: "Moderna zgrada s fasadom od vertikalnih lamela pod plavim nebom",
  },
  trust: {
    label: "Build your world with us.",
    title: "Novi dom. Prostor za posao. Prilika za ulaganje.",
    items: ["Ulaganje", "Prodaja", "Saradnja", "Sarajevo, BiH"],
  },
  expertise: {
    eyebrow: "Čime se bavimo",
    title: "Stručnost koja stvara vrijednost",
    text: "Tri oblasti rada, jedan pristup: pažljiva procjena, otvorena komunikacija i dugoročno razmišljanje.",
    cards: [
      {
        title: "Ulaganje",
        text: "Prepoznajemo potencijal nekretnina i stvaramo dugoročnu vrijednost — od izbora lokacije do namjene prostora.",
        image: `${IMG}/exp-investment.jpg`,
        alt: "Zakrivljena fasada zgrade s bakarnim lamelama",
        cta: "Razgovarajmo o ulaganju",
      },
      {
        title: "Prodaja",
        text: "Jasne informacije, transparentna komunikacija i razumijevanje potreba kupaca u svakom koraku.",
        image: `${IMG}/exp-sales.jpg`,
        alt: "Moderna kuća s velikim staklenim površinama u sumrak",
        cta: "Kupujete ili prodajete?",
      },
      {
        title: "Saradnja",
        text: "Otvoreni smo za nove investicijske prilike i partnerstva zasnovana na povjerenju i zajedničkim ciljevima.",
        image: `${IMG}/exp-partnership.jpg`,
        alt: "Dvije visoke zgrade s ritmičnim fasadama",
        cta: "Predložite saradnju",
      },
    ],
  },
  offer: {
    eyebrow: "Šta tražite",
    title: "Prostor za svaku sljedeću odluku",
    text: "Nekretnine posmatramo kroz ono što mogu postati. Recite nam šta tražite — aktuelne prilike predstavljamo direktno, uz sve provjerene informacije.",
    primary: "Pošaljite upit",
    secondary: "Pozovite nas",
    tabs: [
      {
        id: "dom",
        label: "Novi dom",
        items: [
          {
            title: "Stanovi",
            text: "Funkcionalni stanovi u urbanim i mirnijim dijelovima grada.",
            image: `${IMG}/home-apartments.jpg`,
            alt: "Stambena zgrada s balkonima",
            tags: ["Stanovanje", "Urbano"],
          },
          {
            title: "Kuće",
            text: "Prostor za porodicu, s dvorištem i mirom koji grad ne nudi.",
            image: `${IMG}/home-houses.jpg`,
            alt: "Moderna porodična kuća s osvijetljenim prozorima",
            tags: ["Porodica", "Dvorište"],
          },
          {
            title: "Novogradnja",
            text: "Savremeni enterijeri, nova instalacija i energetska efikasnost.",
            image: `${IMG}/home-interiors.jpg`,
            alt: "Svijetao moderan dnevni boravak",
            tags: ["Novo", "Useljivo"],
          },
          {
            title: "Vile",
            text: "Nekretnine posebnog karaktera za zahtjevnije kupce.",
            image: `${IMG}/home-villas.jpg`,
            alt: "Bijela moderna vila pod plavim nebom",
            tags: ["Premium", "Privatnost"],
          },
        ],
      },
      {
        id: "posao",
        label: "Prostor za posao",
        items: [
          {
            title: "Uredi",
            text: "Prostori za timove koji trebaju svjetlo, mir i dobru dostupnost.",
            image: `${IMG}/biz-offices.jpg`,
            alt: "Otvoreni uredski prostor s velikim prozorima",
            tags: ["Ured", "Tim"],
          },
          {
            title: "Sale i reprezentativni prostori",
            text: "Prostori koji klijentima govore o vašem poslu prije prvog sastanka.",
            image: `${IMG}/biz-workspace.jpg`,
            alt: "Konferencijska sala s dugim stolom",
            tags: ["Sastanci", "Reprezentativno"],
          },
          {
            title: "Poslovni lokali",
            text: "Vidljivost, pristup i fleksibilna organizacija prostora.",
            image: `${IMG}/biz-retail.jpg`,
            alt: "Hodnik sa staklenim pregradama u poslovnom objektu",
            tags: ["Lokal", "Vidljivost"],
          },
          {
            title: "Poslovni objekti",
            text: "Cijeli objekti za kompanije koje planiraju rast.",
            image: `${IMG}/biz-towers.jpg`,
            alt: "Staklene poslovne zgrade gledane odozdo",
            tags: ["Objekt", "Rast"],
          },
        ],
      },
      {
        id: "ulaganje",
        label: "Prilika za ulaganje",
        items: [
          {
            title: "Stambeni objekti",
            text: "Nekretnine sa stabilnom potražnjom i dugoročnom vrijednošću.",
            image: `${IMG}/inv-residential.jpg`,
            alt: "Stambeni objekt s drvenim balkonima i zelenilom",
            tags: ["Prinos", "Dugoročno"],
          },
          {
            title: "Zemljišta",
            text: "Lokacije čiji potencijal tek treba prepoznati i razviti.",
            image: `${IMG}/inv-land.jpg`,
            alt: "Pogled na Sarajevo i okolna brda",
            tags: ["Lokacija", "Razvoj"],
          },
          {
            title: "Objekti za rekonstrukciju",
            text: "Prostori kojima nova namjena donosi novu vrijednost.",
            image: `${IMG}/inv-renovation.jpg`,
            alt: "Fasada zgrade s drvenim oblogama",
            tags: ["Adaptacija", "Nova namjena"],
          },
          {
            title: "Projekti u razvoju",
            text: "Zajednička ulaganja od ideje do završenog objekta.",
            image: `${IMG}/inv-development.jpg`,
            alt: "Gradilište s ekipom na terenu, snimak iz zraka",
            tags: ["Partnerstvo", "Izgradnja"],
          },
        ],
      },
    ],
    cardCta: "Upit za ovu kategoriju",
    note: "Kategorije prikazuju vrste nekretnina kojima se bavimo. Aktuelnu ponudu dobijate direktno, na upit.",
    prev: "Prethodno",
    next: "Sljedeće",
  },
  approach: {
    eyebrow: "Naš pristup",
    title: "Svaka nekretnina ima svoju priču",
    text: "Naša počinje prepoznavanjem onoga što može postati. Prije svake odluke nekretninu sagledavamo iz osam uglova.",
    primary: "Razgovarajte s nama",
    secondary: "Pogledajte proces",
    items: [
      {
        title: "Lokacija",
        text: "Okruženje, pristup i razvoj područja.",
        points: ["Infrastruktura", "Saobraćaj"],
        image: `${IMG}/ap-location.jpg`,
        alt: "Bijela moderna zgrada pod plavim nebom",
      },
      {
        title: "Stanje objekta",
        text: "Konstrukcija, instalacije i stvarni troškovi uređenja.",
        points: ["Konstrukcija", "Instalacije"],
        image: `${IMG}/ap-structure.jpg`,
        alt: "Visoka zgrada s mnoštvom balkona",
      },
      {
        title: "Namjena",
        text: "Šta prostor jeste danas i šta može postati sutra.",
        points: ["Stanovanje", "Posao"],
        image: `${IMG}/ap-purpose.jpg`,
        alt: "Sivo-crna apstraktna arhitektonska forma",
      },
      {
        title: "Dokumentacija",
        text: "Vlasništvo, tereti, katastar i dozvole.",
        points: ["Zemljišna knjiga", "Dozvole"],
        image: `${IMG}/ap-documents.jpg`,
        alt: "Smeđa arhitektonska struktura",
      },
      {
        title: "Tržišna vrijednost",
        text: "Realna procjena u odnosu na uporedive nekretnine.",
        points: ["Procjena", "Uporedivo"],
        image: `${IMG}/ap-value.jpg`,
        alt: "Zakrivljena metalna fasada",
      },
      {
        title: "Potencijal rasta",
        text: "Prilike koje nisu vidljive na prvi pogled.",
        points: ["Razvoj", "Potražnja"],
        image: `${IMG}/ap-growth.jpg`,
        alt: "Bijela zgrada sa zaobljenim formama",
      },
      {
        title: "Ukupni troškovi",
        text: "Cijena, porezi, naknade i ulaganja nakon kupovine.",
        points: ["Porezi", "Adaptacija"],
        image: `${IMG}/ap-costs.jpg`,
        alt: "Betonska zgrada fotografisana odozdo",
      },
      {
        title: "Vremenski okvir",
        text: "Realan plan od prve odluke do rezultata.",
        points: ["Plan", "Rokovi"],
        image: `${IMG}/ap-timeline.jpg`,
        alt: "Fasada s horizontalnim drvenim lamelama",
      },
    ],
  },
  steps: {
    eyebrow: "Proces rada",
    title: "Šest koraka od prvog razgovora do ključeva",
    text: "Jasan proces bez iznenađenja — u svakom trenutku znate šta slijedi, ko je odgovoran i kakvi su sljedeći koraci.",
    primary: "Zakažite razgovor",
    secondary: "Pišite nam",
    items: [
      {
        title: "Razgovor o potrebama",
        text: "Upoznajemo vaše ciljeve, budžet i vremenski okvir.",
        image: "/images/steps/01-share-your-requirement.webp",
        alt: "Savjetnica razgovara s porodicom u svijetlom dnevnom boravku",
      },
      {
        title: "Odabir prilika",
        text: "Predlažemo samo nekretnine koje zaista odgovaraju vašim kriterijima.",
        image: "/images/steps/02-review-verified-shortlist.webp",
        alt: "Klijenti i savjetnik zajedno pregledaju dokumente za stolom",
      },
      {
        title: "Obilazak nekretnine",
        text: "Zajedno obilazimo prostor i otvoreno razgovaramo o detaljima.",
        image: "/images/steps/03-guided-site-visits.webp",
        alt: "Obilazak nekretnine s klijentima",
      },
      {
        title: "Pregovori i dogovor",
        text: "Usklađujemo cijenu i uslove na jasan i fer način.",
        image: "/images/steps/04-price-contract-negotiation.webp",
        alt: "Nasmijani klijent tokom razgovora o uslovima",
      },
      {
        title: "Pravna i finansijska provjera",
        text: "Provjeravamo dokumentaciju i pripremamo sigurnu transakciju.",
        image: "/images/steps/05-financial-legal-review.webp",
        alt: "Potpisivanje dokumentacije za stolom",
      },
      {
        title: "Ugovor i primopredaja",
        text: "Pratimo vas do potpisa ugovora i predaje ključeva.",
        image: "/images/steps/06-registry-final-handover.webp",
        alt: "Novi vlasnici ispred kuće nakon primopredaje",
      },
    ],
    note: "Svaki korak prilagođavamo vrsti nekretnine i vašim ciljevima — bilo da kupujete, prodajete ili ulažete.",
  },
  audience: {
    eyebrow: "Za koga radimo",
    title: "Jasan put za kupce, investitore i partnere",
    text: "Različiti ciljevi traže različit pristup. Zajedničko im je jedno: odluke zasnovane na činjenicama i otvorenoj komunikaciji.",
    cta: "Upoznajmo se",
    quote: "Svaka nekretnina ima svoju priču. Naša počinje prepoznavanjem onoga što može postati.",
    quoteBy: "ESU Agency",
    quoteRole: "Vogošća, Sarajevo",
    items: [
      {
        label: "Kupci",
        title: "Za kupce",
        text: "Bilo da tražite prvi dom ili prostor za posao, dobijate jasne informacije, realna očekivanja i podršku do same primopredaje.",
        image: `${IMG}/bw-1.jpg`,
        alt: "Crno-bijela fotografija visoke zgrade",
      },
      {
        label: "Investitori",
        title: "Za investitore",
        text: "Analiziramo potencijal, troškove i rizike, kako biste odluke donosili na osnovu činjenica, a ne pretpostavki.",
        image: `${IMG}/bw-2.jpg`,
        alt: "Crno-bijela fotografija stepeništa uz zgradu",
      },
      {
        label: "Partneri",
        title: "Za partnere",
        text: "Otvoreni smo za zajedničke projekte i dugoročnu saradnju s vlasnicima nekretnina, graditeljima i investitorima.",
        image: `${IMG}/bw-3.jpg`,
        alt: "Crno-bijela fotografija nebodera",
      },
    ],
  },
  knowledge: {
    eyebrow: "Korisno znati",
    title: "Praktično znanje prije ulaganja",
    text: "Kratki vodiči kroz pitanja koja je dobro postaviti prije svake ozbiljne odluke o nekretnini.",
    all: "Sve",
    read: "Pročitajte",
    close: "Zatvori",
    disclaimer:
      "Tekst je opšteg, informativnog karaktera i ne predstavlja pravni ni finansijski savjet. Za konkretnu nekretninu obratite se nama ili ovlaštenom stručnjaku.",
    articles: [
      {
        category: "Kupovina",
        title: "Šta provjeriti prije kupovine nekretnine",
        excerpt: "Vlasništvo, tereti, dozvole i režije — osnovna provjera koja štiti vaš novac.",
        image: `${IMG}/art-registry.jpg`,
        alt: "Ruke nad arhitektonskim nacrtima",
        readTime: "4 min",
        body: [
          "Prvi korak je zemljišnoknjižni izvadak. Iz njega vidite ko je upisani vlasnik, da li postoje hipoteke, zabilježbe ili drugi tereti, te da li je nekretnina predmet spora.",
          "Podaci u zemljišnoj knjizi i katastru trebaju biti usklađeni. Razlike u površini, broju parcele ili opisu objekta nisu rijetkost i bolje ih je razjasniti prije potpisa.",
          "Za objekte je važno postojanje građevinske i upotrebne dozvole. Bez njih se mogu otvoriti pitanja legalizacije, kreditiranja i kasnije prodaje.",
          "Na kraju, provjerite da li postoje neizmirene režije i obaveze prema upravitelju zgrade. Jasna primopredaja počinje čistim računima.",
        ],
      },
      {
        category: "Ulaganje",
        title: "Kako prepoznati potencijal lokacije",
        excerpt: "Infrastruktura, planovi razvoja i stvarna potražnja govore više od trenutne cijene.",
        image: `${IMG}/art-location.jpg`,
        alt: "Most preko rijeke s gradom u pozadini",
        readTime: "3 min",
        body: [
          "Vrijednost nekretnine u velikoj mjeri određuje njeno okruženje. Saobraćajna povezanost, škole, trgovine i javni sadržaji direktno utiču na potražnju.",
          "Prostorni i regulacioni planovi otkrivaju kako bi se područje moglo razvijati. Nova saobraćajnica ili promjena namjene susjednih parcela mogu značajno promijeniti sliku.",
          "Potražnju je najbolje procijeniti na terenu: koliko se brzo slične nekretnine prodaju ili iznajmljuju i ko su tipični kupci i zakupci.",
          "Dobra lokacija nije uvijek najskuplja lokacija. Potencijal je često tamo gdje se razvoj tek naslućuje.",
        ],
      },
      {
        category: "Poslovni prostor",
        title: "Poslovni prostor: pitanja prije odluke",
        excerpt: "Namjena, pristup, vidljivost i troškovi održavanja — šta znači dobar poslovni prostor.",
        image: `${IMG}/art-business.jpg`,
        alt: "Svijetao stakleni interijer poslovnog objekta",
        readTime: "3 min",
        body: [
          "Provjerite da li je prostor u dokumentaciji vođen kao poslovni. Promjena namjene može zahtijevati dodatne dozvole i vrijeme.",
          "Pristup za klijente i dostavu, parking i vidljivost s ulice često su jednako važni kao i sama kvadratura.",
          "Instalacije — električna snaga, ventilacija, grijanje i hlađenje — trebaju odgovarati djelatnosti koju planirate.",
          "Računajte i na stalne troškove: održavanje, zajedničke prostore i režije. Oni određuju stvarnu cijenu prostora kroz godine.",
        ],
      },
      {
        category: "Ulaganje",
        title: "Dugoročno ulaganje: realna računica",
        excerpt: "Ukupni trošak ulaganja je više od kupoprodajne cijene. Evo šta uključiti u plan.",
        image: `${IMG}/art-longterm.jpg`,
        alt: "Stambena zgrada s nizom balkona",
        readTime: "4 min",
        body: [
          "Uz kupoprodajnu cijenu, u plan uključite porez na promet nekretnina, troškove notara, uknjižbe i eventualne agencijske naknade.",
          "Ako nekretnina zahtijeva adaptaciju, procjenu troškova pripremite prije kupovine, uz rezervu za nepredviđene radove.",
          "Kod nekretnina za izdavanje, realno procijenite prihod, period bez zakupca i troškove održavanja. Prinos se računa na ukupno uloženo, ne samo na cijenu.",
          "Na kraju, odredite vremenski horizont. Nekretnine su dugoročna imovina — strpljenje je često dio strategije.",
        ],
      },
    ],
  },
  faq: {
    eyebrow: "Česta pitanja",
    title: "Jasni odgovori na vaša pitanja",
    text: "Ako ne pronađete odgovor, javite nam se — rado ćemo pojasniti.",
    cta: "Postavite pitanje",
    items: [
      {
        q: "Čime se bavi ESU Agency?",
        a: "ESU Agency d.o.o. je kompanija za investicije u nekretnine. Bavimo se ulaganjem u nekretnine, njihovom prodajom i saradnjom na novim investicijskim prilikama i partnerstvima.",
      },
      {
        q: "Gdje se nalazite?",
        a: "Sjedište kompanije je u Vogošći, Sarajevo. Sastanke organizujemo po prethodnom dogovoru — pozovite nas ili pošaljite email.",
      },
      {
        q: "Mogu li vam ponuditi svoju nekretninu?",
        a: "Da. Pošaljite nam osnovne informacije o nekretnini, a mi ćemo vas kontaktirati kako bismo zajedno sagledali njen potencijal i sljedeće korake.",
      },
      {
        q: "Da li ste otvoreni za investicijska partnerstva?",
        a: "Jesmo. Otvoreni smo za nove investicijske prilike i partnerstva s vlasnicima nekretnina, graditeljima i investitorima. Predstavite nam svoju ideju kroz kontakt formu.",
      },
      {
        q: "Kako izgleda prvi razgovor?",
        a: "Prvi razgovor je neobavezan. Upoznajemo vaše ciljeve, budžet i vremenski okvir, a zatim predlažemo konkretne sljedeće korake.",
      },
      {
        q: "Na kojim jezicima komunicirate?",
        a: "Komuniciramo na bosanskom i engleskom jeziku.",
      },
    ],
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Spremni za sljedeći korak?",
    text: "Pišite nam ili nas pozovite. Odgovaramo lično i u najkraćem mogućem roku.",
    form: {
      name: "Ime i prezime",
      namePh: "Vaše ime",
      phone: "Telefon",
      phonePh: "+387 6x xxx xxx",
      email: "Email",
      emailPh: "vas@email.com",
      interest: "Zanima me",
      interestOptions: ["Kupovina nekretnine", "Prodaja nekretnine", "Ulaganje", "Saradnja i partnerstvo", "Nešto drugo"],
      message: "Poruka",
      messagePh: "Ukratko opišite šta tražite ili nudite",
      consent: "Saglasan/na sam da ESU Agency koristi ove podatke isključivo radi odgovora na moj upit.",
      submit: "Pošaljite poruku",
      sending: "Slanje…",
      success: "Hvala! Vaša poruka je poslana. Javit ćemo vam se uskoro.",
      fallback:
        "Direktno slanje s web stranice trenutno nije aktivno. Otvorili smo vaš email program s pripremljenom porukom — samo kliknite pošalji.",
      fallbackLink: "Ako se email program nije otvorio, kliknite ovdje.",
      error: "Poruka nije poslana. Pokušajte ponovo ili nas kontaktirajte direktno na info@esuagency.ba.",
      required: "Molimo popunite obavezna polja.",
      invalidEmail: "Unesite ispravnu email adresu.",
      subject: "Upit s web stranice",
    },
    side: {
      writeTitle: "Pišite nam",
      writeText: "Za upite, ponude i prijedloge saradnje.",
      callTitle: "Pozovite nas",
      callText: "Radnim danima, ili ostavite poruku.",
      visitTitle: "Posjetite nas",
      visitText: "Sastanci po prethodnom dogovoru.",
    },
  },
  footer: {
    tagline: "Build your world with us.",
    text: "Kompanija za investicije u nekretnine. Ulažemo u potencijal i stvaramo vrijednost — za kupce, investitore i partnere.",
    cta: "Kontaktirajte nas",
    columns: [
      {
        title: "Usluge",
        links: [
          { label: "Ulaganje", href: "#usluge" },
          { label: "Prodaja", href: "#usluge" },
          { label: "Saradnja", href: "#usluge" },
        ],
      },
      {
        title: "Ponuda",
        links: [
          { label: "Novi dom", href: "#ponuda" },
          { label: "Prostor za posao", href: "#ponuda" },
          { label: "Prilika za ulaganje", href: "#ponuda" },
        ],
      },
      {
        title: "Kompanija",
        links: [
          { label: "Naš pristup", href: "#pristup" },
          { label: "Proces rada", href: "#proces" },
          { label: "Korisno znati", href: "#znanje" },
          { label: "Česta pitanja", href: "#pitanja" },
        ],
      },
    ],
    rights: "Sva prava zadržana.",
    top: "Na vrh",
  },
};

const en: Dictionary = {
  meta: {
    title: "ESU Agency — We invest in potential. We create value.",
    description:
      "ESU Agency d.o.o. is a real estate investment company based in Vogošća, Sarajevo. Investment, sales and partnerships — a new home, a place for business and an investment opportunity.",
    keywords: [
      "real estate Sarajevo",
      "real estate investment Bosnia",
      "property investment Bosnia and Herzegovina",
      "property sales Sarajevo",
      "commercial property Sarajevo",
      "ESU Agency",
    ],
    ogAlt: "ESU Agency — real estate investment, Sarajevo",
  },
  skip: "Skip to content",
  nav: {
    links: [
      { label: "Services", href: "#services" },
      { label: "Spaces", href: "#spaces" },
      { label: "Approach", href: "#approach" },
      { label: "Process", href: "#process" },
      { label: "Insights", href: "#insights" },
    ],
    cta: "Contact",
    menu: "Open menu",
    close: "Close menu",
    langLabel: "Language",
  },
  hero: {
    title: "We invest in potential. We create value.",
    text: "ESU Agency is a real estate investment company based in Sarajevo. We recognise the potential of a place, invest for the long term and work openly with buyers, investors and partners.",
    primary: "Start a conversation",
    secondary: "How we work",
    imageAlt: "Modern building with a facade of vertical slats against a blue sky",
  },
  trust: {
    label: "Build your world with us.",
    title: "A new home. A place for business. An opportunity to invest.",
    items: ["Investment", "Sales", "Partnerships", "Sarajevo, BiH"],
  },
  expertise: {
    eyebrow: "What we do",
    title: "Expertise that creates value",
    text: "Three areas of work, one approach: careful assessment, open communication and long-term thinking.",
    cards: [
      {
        title: "Investment",
        text: "We recognise the potential of real estate and build long-term value — from choosing the location to defining how a space is used.",
        image: `${IMG}/exp-investment.jpg`,
        alt: "Curved building facade with copper slats",
        cta: "Discuss an investment",
      },
      {
        title: "Sales",
        text: "Clear information, transparent communication and a real understanding of what buyers need, at every step.",
        image: `${IMG}/exp-sales.jpg`,
        alt: "Modern house with large glazed surfaces at dusk",
        cta: "Buying or selling?",
      },
      {
        title: "Partnerships",
        text: "We are open to new investment opportunities and partnerships built on trust and shared goals.",
        image: `${IMG}/exp-partnership.jpg`,
        alt: "Two tall buildings with rhythmic facades",
        cta: "Propose a partnership",
      },
    ],
  },
  offer: {
    eyebrow: "What you are looking for",
    title: "Space for every next decision",
    text: "We look at property in terms of what it can become. Tell us what you need — we present current opportunities directly, with all the verified information.",
    primary: "Send an enquiry",
    secondary: "Call us",
    tabs: [
      {
        id: "home",
        label: "A new home",
        items: [
          {
            title: "Apartments",
            text: "Practical apartments in both central and quieter parts of the city.",
            image: `${IMG}/home-apartments.jpg`,
            alt: "Residential building with balconies",
            tags: ["Living", "Urban"],
          },
          {
            title: "Houses",
            text: "Room for a family, with a garden and a calm the city rarely offers.",
            image: `${IMG}/home-houses.jpg`,
            alt: "Modern family house with lit windows",
            tags: ["Family", "Garden"],
          },
          {
            title: "New builds",
            text: "Contemporary interiors, new installations and energy efficiency.",
            image: `${IMG}/home-interiors.jpg`,
            alt: "Bright modern living room",
            tags: ["New", "Move-in ready"],
          },
          {
            title: "Villas",
            text: "Properties of distinct character for discerning buyers.",
            image: `${IMG}/home-villas.jpg`,
            alt: "White modern villa under a blue sky",
            tags: ["Premium", "Privacy"],
          },
        ],
      },
      {
        id: "business",
        label: "A place for business",
        items: [
          {
            title: "Offices",
            text: "Spaces for teams that need light, calm and good access.",
            image: `${IMG}/biz-offices.jpg`,
            alt: "Open-plan office with large windows",
            tags: ["Office", "Team"],
          },
          {
            title: "Meeting & representative spaces",
            text: "Spaces that tell clients about your business before the first meeting.",
            image: `${IMG}/biz-workspace.jpg`,
            alt: "Conference room with a long table",
            tags: ["Meetings", "Representative"],
          },
          {
            title: "Retail units",
            text: "Visibility, access and a flexible layout.",
            image: `${IMG}/biz-retail.jpg`,
            alt: "Corridor with glass partitions in a commercial building",
            tags: ["Retail", "Visibility"],
          },
          {
            title: "Commercial buildings",
            text: "Whole buildings for companies planning to grow.",
            image: `${IMG}/biz-towers.jpg`,
            alt: "Glass office towers seen from below",
            tags: ["Building", "Growth"],
          },
        ],
      },
      {
        id: "invest",
        label: "An opportunity to invest",
        items: [
          {
            title: "Residential buildings",
            text: "Property with steady demand and long-term value.",
            image: `${IMG}/inv-residential.jpg`,
            alt: "Residential building with timber balconies and greenery",
            tags: ["Yield", "Long-term"],
          },
          {
            title: "Land",
            text: "Locations whose potential is yet to be recognised and developed.",
            image: `${IMG}/inv-land.jpg`,
            alt: "View over Sarajevo and the surrounding hills",
            tags: ["Location", "Development"],
          },
          {
            title: "Buildings to renovate",
            text: "Spaces that gain new value through a new purpose.",
            image: `${IMG}/inv-renovation.jpg`,
            alt: "Building facade with timber cladding",
            tags: ["Renovation", "New use"],
          },
          {
            title: "Development projects",
            text: "Joint investments from idea to completed building.",
            image: `${IMG}/inv-development.jpg`,
            alt: "Aerial view of a construction site with a crew on site",
            tags: ["Partnership", "Construction"],
          },
        ],
      },
    ],
    cardCta: "Enquire about this",
    note: "These categories show the types of property we work with. Current opportunities are shared directly, on request.",
    prev: "Previous",
    next: "Next",
  },
  approach: {
    eyebrow: "Our approach",
    title: "Every property has its own story",
    text: "Ours begins by recognising what it can become. Before any decision, we look at a property from eight angles.",
    primary: "Talk to us",
    secondary: "See the process",
    items: [
      {
        title: "Location",
        text: "Surroundings, access and how the area is developing.",
        points: ["Infrastructure", "Transport"],
        image: `${IMG}/ap-location.jpg`,
        alt: "White modern building under a blue sky",
      },
      {
        title: "Condition",
        text: "Structure, installations and the real cost of refurbishment.",
        points: ["Structure", "Installations"],
        image: `${IMG}/ap-structure.jpg`,
        alt: "Tall building with many balconies",
      },
      {
        title: "Purpose",
        text: "What a space is today and what it could become tomorrow.",
        points: ["Living", "Business"],
        image: `${IMG}/ap-purpose.jpg`,
        alt: "Grey and black abstract architectural form",
      },
      {
        title: "Documentation",
        text: "Ownership, encumbrances, cadastre and permits.",
        points: ["Land registry", "Permits"],
        image: `${IMG}/ap-documents.jpg`,
        alt: "Brown architectural structure",
      },
      {
        title: "Market value",
        text: "A realistic assessment against comparable properties.",
        points: ["Valuation", "Comparables"],
        image: `${IMG}/ap-value.jpg`,
        alt: "Curved metal facade",
      },
      {
        title: "Growth potential",
        text: "Opportunities that are not visible at first glance.",
        points: ["Development", "Demand"],
        image: `${IMG}/ap-growth.jpg`,
        alt: "White building with rounded forms",
      },
      {
        title: "Total cost",
        text: "Price, taxes, fees and investment after purchase.",
        points: ["Taxes", "Refurbishment"],
        image: `${IMG}/ap-costs.jpg`,
        alt: "Concrete building photographed from below",
      },
      {
        title: "Timeline",
        text: "A realistic plan from the first decision to the result.",
        points: ["Plan", "Milestones"],
        image: `${IMG}/ap-timeline.jpg`,
        alt: "Facade with horizontal timber slats",
      },
    ],
  },
  steps: {
    eyebrow: "How we work",
    title: "Six steps from first conversation to keys",
    text: "A clear process without surprises — at every moment you know what comes next, who is responsible and what the next steps are.",
    primary: "Book a conversation",
    secondary: "Write to us",
    items: [
      {
        title: "Understanding your needs",
        text: "We get to know your goals, budget and timeline.",
        image: "/images/steps/01-share-your-requirement.webp",
        alt: "An advisor talking with a family in a bright living room",
      },
      {
        title: "Selecting opportunities",
        text: "We only propose properties that genuinely match your criteria.",
        image: "/images/steps/02-review-verified-shortlist.webp",
        alt: "Clients and an advisor reviewing documents at a table",
      },
      {
        title: "Property viewings",
        text: "We visit the property together and talk openly about the details.",
        image: "/images/steps/03-guided-site-visits.webp",
        alt: "A property viewing with clients",
      },
      {
        title: "Negotiation & agreement",
        text: "We align price and terms in a clear and fair way.",
        image: "/images/steps/04-price-contract-negotiation.webp",
        alt: "A smiling client during a conversation about terms",
      },
      {
        title: "Legal & financial review",
        text: "We check the documentation and prepare a secure transaction.",
        image: "/images/steps/05-financial-legal-review.webp",
        alt: "Signing documents at a table",
      },
      {
        title: "Contract & handover",
        text: "We stay with you until the contract is signed and the keys are handed over.",
        image: "/images/steps/06-registry-final-handover.webp",
        alt: "New owners in front of a house after the handover",
      },
    ],
    note: "We adapt each step to the type of property and your goals — whether you are buying, selling or investing.",
  },
  audience: {
    eyebrow: "Who we work with",
    title: "A clear path for buyers, investors and partners",
    text: "Different goals call for different approaches. What they share: decisions based on facts and open communication.",
    cta: "Let's meet",
    quote: "Every property has its own story. Ours begins by recognising what it can become.",
    quoteBy: "ESU Agency",
    quoteRole: "Vogošća, Sarajevo",
    items: [
      {
        label: "Buyers",
        title: "For buyers",
        text: "Whether you are looking for your first home or a place for your business, you get clear information, realistic expectations and support all the way to handover.",
        image: `${IMG}/bw-1.jpg`,
        alt: "Black and white photograph of a tall building",
      },
      {
        label: "Investors",
        title: "For investors",
        text: "We analyse potential, costs and risks so that your decisions rest on facts, not assumptions.",
        image: `${IMG}/bw-2.jpg`,
        alt: "Black and white photograph of stairs beside a building",
      },
      {
        label: "Partners",
        title: "For partners",
        text: "We are open to joint projects and long-term cooperation with property owners, builders and investors.",
        image: `${IMG}/bw-3.jpg`,
        alt: "Black and white photograph of a high-rise",
      },
    ],
  },
  knowledge: {
    eyebrow: "Good to know",
    title: "Practical knowledge before you invest",
    text: "Short guides to the questions worth asking before any serious property decision.",
    all: "All",
    read: "Read",
    close: "Close",
    disclaimer:
      "This text is general and informative and does not constitute legal or financial advice. For a specific property, contact us or a licensed professional.",
    articles: [
      {
        category: "Buying",
        title: "What to check before buying a property",
        excerpt: "Ownership, encumbrances, permits and utilities — the basic checks that protect your money.",
        image: `${IMG}/art-registry.jpg`,
        alt: "Hands over architectural drawings",
        readTime: "4 min",
        body: [
          "Start with the land registry extract. It shows the registered owner, any mortgages, notes or other encumbrances, and whether the property is subject to a dispute.",
          "Land registry and cadastre records should match. Differences in area, plot number or building description are not unusual and are best resolved before signing.",
          "For buildings, building and occupancy permits matter. Without them, questions of legalisation, financing and later resale can arise.",
          "Finally, check for unpaid utility bills and obligations to the building manager. A clean handover starts with settled accounts.",
        ],
      },
      {
        category: "Investing",
        title: "How to recognise a location's potential",
        excerpt: "Infrastructure, development plans and real demand say more than today's price.",
        image: `${IMG}/art-location.jpg`,
        alt: "A bridge over a river with the city in the background",
        readTime: "3 min",
        body: [
          "A property's value is largely defined by its surroundings. Transport links, schools, shops and public amenities directly affect demand.",
          "Spatial and zoning plans reveal how an area may develop. A new road or a change of use on neighbouring plots can change the picture significantly.",
          "Demand is best assessed on the ground: how quickly similar properties sell or let, and who the typical buyers and tenants are.",
          "A good location is not always the most expensive one. Potential often lies where development is only beginning to show.",
        ],
      },
      {
        category: "Commercial",
        title: "Commercial space: questions before you decide",
        excerpt: "Permitted use, access, visibility and running costs — what makes a good business space.",
        image: `${IMG}/art-business.jpg`,
        alt: "Bright glass interior of a commercial building",
        readTime: "3 min",
        body: [
          "Check that the space is registered for commercial use. A change of use may require additional permits and time.",
          "Access for clients and deliveries, parking and street visibility are often as important as the floor area itself.",
          "Installations — electrical capacity, ventilation, heating and cooling — should suit the activity you plan.",
          "Factor in recurring costs: maintenance, shared areas and utilities. They define the real cost of a space over the years.",
        ],
      },
      {
        category: "Investing",
        title: "Long-term investment: a realistic calculation",
        excerpt: "The total cost of an investment is more than the purchase price. Here is what to include.",
        image: `${IMG}/art-longterm.jpg`,
        alt: "Residential building with a row of balconies",
        readTime: "4 min",
        body: [
          "Alongside the purchase price, plan for property transfer tax, notary and registration costs, and any agency fees.",
          "If the property needs refurbishment, prepare a cost estimate before buying, with a reserve for unforeseen works.",
          "For rental properties, estimate income, vacancy periods and maintenance realistically. Yield is calculated on the total invested, not just the price.",
          "Finally, set your time horizon. Real estate is a long-term asset — patience is often part of the strategy.",
        ],
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Straight answers to your questions",
    text: "If you don't find your answer here, get in touch — we're happy to explain.",
    cta: "Ask a question",
    items: [
      {
        q: "What does ESU Agency do?",
        a: "ESU Agency d.o.o. is a real estate investment company. We invest in property, sell property and work together with others on new investment opportunities and partnerships.",
      },
      {
        q: "Where are you based?",
        a: "The company is based in Vogošća, Sarajevo. Meetings are arranged in advance — call us or send an email.",
      },
      {
        q: "Can I offer you my property?",
        a: "Yes. Send us the basic information about the property and we will get in touch to look at its potential and the next steps together.",
      },
      {
        q: "Are you open to investment partnerships?",
        a: "We are. We are open to new investment opportunities and partnerships with property owners, builders and investors. Introduce your idea through the contact form.",
      },
      {
        q: "What does the first conversation look like?",
        a: "The first conversation is without obligation. We learn about your goals, budget and timeline, then suggest concrete next steps.",
      },
      {
        q: "Which languages do you work in?",
        a: "We work in Bosnian and English.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Ready for your next move?",
    text: "Write to us or give us a call. We reply personally and as soon as possible.",
    form: {
      name: "Full name",
      namePh: "Your name",
      phone: "Phone",
      phonePh: "+387 6x xxx xxx",
      email: "Email",
      emailPh: "you@email.com",
      interest: "I'm interested in",
      interestOptions: ["Buying a property", "Selling a property", "Investing", "Partnership", "Something else"],
      message: "Message",
      messagePh: "Briefly describe what you are looking for or offering",
      consent: "I agree that ESU Agency may use this information solely to respond to my enquiry.",
      submit: "Send message",
      sending: "Sending…",
      success: "Thank you! Your message has been sent. We'll be in touch soon.",
      fallback:
        "Direct sending from the website is not active at the moment. We've opened your email app with the message ready — just press send.",
      fallbackLink: "If your email app didn't open, click here.",
      error: "Your message wasn't sent. Please try again or contact us directly at info@esuagency.ba.",
      required: "Please fill in the required fields.",
      invalidEmail: "Please enter a valid email address.",
      subject: "Website enquiry",
    },
    side: {
      writeTitle: "Write to us",
      writeText: "For enquiries, offers and partnership proposals.",
      callTitle: "Call us",
      callText: "On working days, or leave a message.",
      visitTitle: "Visit us",
      visitText: "Meetings by appointment.",
    },
  },
  footer: {
    tagline: "Build your world with us.",
    text: "A real estate investment company. We invest in potential and create value — for buyers, investors and partners.",
    cta: "Contact us",
    columns: [
      {
        title: "Services",
        links: [
          { label: "Investment", href: "#services" },
          { label: "Sales", href: "#services" },
          { label: "Partnerships", href: "#services" },
        ],
      },
      {
        title: "Spaces",
        links: [
          { label: "A new home", href: "#spaces" },
          { label: "A place for business", href: "#spaces" },
          { label: "An opportunity to invest", href: "#spaces" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "Our approach", href: "#approach" },
          { label: "How we work", href: "#process" },
          { label: "Good to know", href: "#insights" },
          { label: "FAQ", href: "#faq" },
        ],
      },
    ],
    rights: "All rights reserved.",
    top: "Back to top",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { bs, en };

/** Section anchor ids per locale, so URLs read naturally in each language. */
export const sectionIds: Record<Locale, Record<string, string>> = {
  bs: {
    services: "usluge",
    spaces: "ponuda",
    approach: "pristup",
    process: "proces",
    insights: "znanje",
    faq: "pitanja",
    contact: "kontakt",
  },
  en: {
    services: "services",
    spaces: "spaces",
    approach: "approach",
    process: "process",
    insights: "insights",
    faq: "faq",
    contact: "contact",
  },
};
