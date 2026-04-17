export const tl = {
  nav: {
    brandTitle: "Frontend Developer",
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
  },
  home: {
    subheader: "Web Developer student",
    descriptionBefore: "Hello! Ako si Valdemar, isang passionate na web developer student. Galing at naka-base ako sa Denmark!",
    descriptionAfter: "Welcome sa portfolio ko!",
    featured: {
      eyebrow: "Featured Project",
      title: "Headliner — News Website",
      description:
        "Isang news aggregator na gamit ang New York Times API. Ang main challenge dito ay ang tight na API rate limits (5 req/min, 500 req/day), kaya nag-implement ako ng smart caching at deduplication strategies gamit ang TanStack Query para manatiling mabilis ang UI nang hindi nauubos ang quota.",
      liveDemo: "Live Demo",
    },
    about: {
      header: "About Me",
      whoIAm: {
        title: "Sino Ako",
        text: "Uy, hello! Ako si Valdemar, 25 years old at kasalukuyang nag-aaral ng web development sa Roskilde Tekniske School sa Denmark. Sobrang hilig ko talagang mag-build ng mga apps na 'just works.' Ako 'yung tipong developer na kapag nakakita ng kahit maliit na bug, hindi titigil hangga't hindi ito nafi-fix—kahit abutin pa ng ilang araw. Siguro perfectionist lang talaga ako, pero mahalaga sa akin na de-kalidad ang gawa ko at proud ako rito. Siyempre, marami pa rin akong dapat matutunan at nagkakamali rin naman ako, pero bawat pagkakamali ay ginagawa akong mas mahusay na dev!",
      },
      howIWork: {
        title: "Paano Ako Magtrabaho",
        text: "Ang talagang nagmo-motivate sa akin ay ang pag-build ng mga modular at maintainable na systems. Iniiwasan ko hangga't maaari ang 'hardcoded' o 'hard-to-refactor' na code. Gustung-gusto kong himayin ang mga complex na problema sa maliliit at manageable na pieces—at nag-e-excel ako sa mga team na mas mahalaga ang open communication kaysa sa rigid na structure.",
      },
      whatImLearning: {
        title: "Ano ang mga Inaaral Ko",
        text: "Ngayon, naka-focus ako sa TanStack at TypeScript, na sakto talaga sa akin dahil modular at flexible ang TanStack. Paborito kong language ang C#—medyo ironic para sa isang web dev, alam ko, pero sobrang readable at linis kasi nito para sa akin.",
      },
      outsideOfCode: {
        title: "Sa Labas ng Coding",
        text: "Nagsisimula pa lang ako sa journey ko sa web dev, pero gutom ako sa kaalaman at excited sa mga darating pa. Sa free time ko, nag-ko-code pa rin naman ako, pero big fan din ako ng football. Umaasa ako na maka-akyat ang Wrexham sa Premier League! Salamat sa pagbabasa! Paki-check na lang din ang ilan sa mga projects ko sa ibaba!",
      },
    },
    projects: {
      header: "Aking mga Projects",
      description: "Narito ang ilan sa mga projects na ginawa ko habang nag-aaral:",
      portfolio: {
        title: "Portfolio website",
        description:
          "Ang site na tinitignan mo ngayon! Ginawa ko ito from scratch para ma-showcase ang work ko at makapag-experiment sa mga tech na trip ko. Meron itong physics-based interactive 3D cube, global click counter na may serverless API, dark/light themes, at fully responsive layout.",
      },
      toolbox: {
        title: "Useful tools website",
        description:
          "Isang collection ng mga tools at resources para sa mga web developers. Personal project ko ito na ginawa ko noong nakaraan dahil naisip ko na mas okay kung nasa iisang website na lang lahat ng maliliit na tools na madalas nating hinahanap sa kung saan-saan. Ang pangalan ng site ay galing sa online nickname kong 'Shido Setsuna', kaya ito tinawag na 'Shido's Toolbox'.",
      },
      hifi: {
        title: "Hi-Fi tech store website",
        description:
          "Isang demo e-commerce website para sa Hi-Fi audio equipment. Part ito ng aking web development studies at isa itong group project. Nakipagtulungan ako sa isang classmate para gumawa ng fully functional na online store. Ang focus ko rito ay ang pag-set up ng API para sa pag-load ng products, shop page, at ang chatbot sa product page. Ginawa ko rin ang contact, about us, at user profile pages.",
      },
      news: {
        title: "News website",
        description:
          "Isang simpleng demo news website na gamit ang New York Times API para kumuha ng mga articles. Sa project na ito, kailangan kong mag-adjust sa limited API requests (5 per minute, 500 per day), kaya gumamit ako ng TanStack Query para sa efficient data fetching at caching strategies para ma-optimize ang performance.",
      },
      cinema: {
        title: "Cinema website",
        description:
          "Isang demo cinema website na binuo gamit ang React TSX at Tailwind v4. Ginawa bilang part ng aking pag-aaral, feature nito ang modern design kung saan pwedeng mag-browse ng movies, tumingin ng movie details, at mag-book ng tickets.",
      },
    },
    contact: {
      header: "Contact Me",
      description: "Message ka lang kung gusto mong mag-connect!",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    toast: "Nandito ka na! 👋",
  },
  footer: {
    rights: "© 2026 Valdemar Andreas Larsen. All rights reserved.",
  },
  cube: {
    header: "Global Clicker",
    hint: "I-click ang cube!",
  },
};