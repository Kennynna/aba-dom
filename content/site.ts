export const site = {
  brand: "ABA-DOM",
  tagline: "Яркое место поддержки для детей с СДВГ и их семей",
  city: "Город уточняется",
  format: "Очно и онлайн",
  ageRange: "4–12 лет",

  /** Когда появятся файлы — положите их в public/images и обновите пути */
  images: {
    logo: "/images/logo.svg",
    hero: "/images/hero.jpg",
  },

  nav: [
    { label: "Подход", href: "#approach" },
    { label: "Как работаем", href: "#process" },
    { label: "Запись", href: "#contact" },
  ],

  contacts: {
    phone: "+7 (000) 000-00-00",
    phoneHref: "tel:+70000000000",
    telegram: "@aba_dom",
    telegramHref: "https://t.me/aba_dom",
    email: "hello@aba-dom.ru",
    emailHref: "mailto:hello@aba-dom.ru",
    address: "Адрес появится позже",
  },

  hero: {
    brand: "ABA-DOM",
    headline: "Здесь ребёнку легче, а семье — понятнее",
    subtitle:
      "Помогаем детям с СДВГ собрать внимание, режим и уверенность — через игру, ясные шаги и тёплую поддержку родителей.",
    primaryCta: { label: "Записаться на консультацию", href: "#contact" },
    secondaryCta: { label: "Как мы работаем", href: "#process" },
  },

  approach: {
    id: "approach",
    eyebrow: "Кому помогаем",
    title: "Детям, которым сложно усидеть, и семьям, которым нужна опора",
    lead:
      "Мы рядом, когда концентрация «убегает», утро превращается в гонку, а родителям хочется понятного плана — без чувства вины.",
    points: [
      {
        title: "Смотрим на поведение, а не только на ярлык",
        text: "Замечаем, что помогает ребёнку включиться, что утомляет, и где семье нужна опора.",
        accent: "coral" as const,
        badge: "01",
      },
      {
        title: "Ставим живые цели",
        text: "Внимание к задаче, спокойнее переключения, утренний и вечерний ритм — то, что видно дома.",
        accent: "sun" as const,
        badge: "02",
      },
      {
        title: "Играем вместе с родителями",
        text: "Даём простые инструменты для дома, чтобы прогресс жил не только в кабинете.",
        accent: "sky" as const,
        badge: "03",
      },
    ],
  },

  process: {
    id: "process",
    eyebrow: "Как проходит работа",
    title: "Четыре шага — как маршрут на карте",
    lead: "Вы всегда понимаете, где сейчас находитесь и какой следующий ход.",
    steps: [
      {
        number: "01",
        title: "Заявка",
        text: "Коротко рассказываете о ребёнке и запросе. Мы связываемся и предлагаем удобное время.",
        accent: "coral" as const,
      },
      {
        number: "02",
        title: "Знакомство",
        text: "Встречаемся очно или онлайн: смотрим сильные стороны и зоны роста.",
        accent: "sun" as const,
      },
      {
        number: "03",
        title: "План",
        text: "Согласуем цели, формат занятий и роль родителей в повседневной практике.",
        accent: "mint" as const,
      },
      {
        number: "04",
        title: "Занятия",
        text: "Регулярная работа с ребёнком и понятная обратная связь семье.",
        accent: "berry" as const,
      },
    ],
  },

  contact: {
    id: "contact",
    eyebrow: "Контакты",
    title: "Давайте познакомимся",
    lead: "Оставьте контакты — ответим и подберём удобный формат первой встречи.",
    form: {
      nameLabel: "Имя",
      namePlaceholder: "Как к вам обращаться",
      phoneLabel: "Телефон",
      phonePlaceholder: "+7",
      timeLabel: "Удобное время",
      timePlaceholder: "Например: будни после 18:00",
      commentLabel: "Комментарий",
      commentPlaceholder: "Возраст ребёнка и краткий запрос",
      submitLabel: "Отправить заявку",
      successTitle: "Заявка готова к отправке",
      successText:
        "Откроется письмо в вашей почте. Если этого не произошло — напишите нам напрямую.",
    },
  },

  footer: {
    disclaimer:
      "Материалы сайта носят информационный характер и не заменяют консультацию врача или иного специалиста.",
    copyright: `© ${new Date().getFullYear()} ABA-DOM`,
  },
} as const;
