# Предустановка авадом

Разбор фирстиля из `/Users/fun/Downloads/ABAHOME` и контента для лендинга. Код страницы пока не меняем.

## Кто мы

**авадом** — центр коррекции речи и поведения. Знак: дом, сросшийся с облачком речи.

Слоган: **«Ты не одна, мы рядом»**

Ценность: сопровождать семью в сложный период, снижать тревожность родителей, делать процесс понятным. Коррекция ребёнка есть, но она не единственный смысл центра.

## Палитра

Снято с карточки и PNG-знаков:

- cream `#FFF1D1` — холст
- orange `#F88640` — главный акцент
- salmon `#E76F51`
- red `#DD4B40`
- blue `#5A9CB5`
- ink `#1F1A17` — текст на cream (в гайде тёмного текста почти нет, для сайта нужен)

## Шрифты

| Файл | Роль |
|---|---|
| `brand/fonts/Lena.ttf` | лого, слоган, заголовки |
| `brand/fonts/Commissioner.ttf` | текст, меню, FAQ |

Lena — freeware (Behance). Commissioner — SIL OFL.

## Какие картинки берём

В папке десятки копий одного сюжета в разных цветах. Для сайта — **оранжевые**, синие как второй план.

| Файл в `brand/selected/` | Зачем |
|---|---|
| `house-orange.png` | знак в шапке, favicon |
| `wordmark-orange.png` | слово «авадом» в шапке |
| `tagline-orange.png` | «Центр коррекции речи и поведения» |
| `lockup-house-fill-orange.png` | hero, оффер |
| `lockup-outline-on-orange.jpg` | оранжевые секции |
| `lockup-square-orange.jpg` | OG, аватар |
| `wordmark-cream.png` / `house-cream.png` | текст и знак на цветном фоне |
| `house-blue.png` | спокойные карточки |
| `silhouette-orange-on-cream.jpg` | декор на светлом |
| `silhouette-orange.png` | тот же сюжет без фона |
| `silhouette-cream-on-orange.jpg` | декор на оранжевом |
| `silhouette-cream-on-blue.jpg` | декор на синем |
| `gradient-orange-salmon.jpg` | warm: свечение CTA / hero |
| `gradient-red-orange.jpg` | ember: одна акцентная плашка |
| `gradient-cream-blue.jpg` | calm: тихий низ страницы |
| `fade-to-blue/red/salmon/cream.png` | растяжки «прозрачный → цвет» для стыков секций и поверх фото |
| `pattern-houses-outline-on-cream.jpg` | фон светлых карточек |
| `pattern-houses-outline-on-red.jpg` | фон тёплых карточек |
| `pattern-houses-fill-on-red.jpg` | мелкий декоративный блок |
| `pattern-houses-fill-on-blue.jpg` | фон спокойных карточек |

Фоны — сетка домиков из `SMM KIT/ФОНЫ` (копии 9–11, плюс синяя 13). Класть на небольшие блоки, не на весь экран.

Исходники (не тащить в `public` оптом): `SMM KIT/ЛОГО ЭЛЕМЕНТЫ`, `ПРОФИЛЬ`, `СИЛУЕТ "Дети"`, `SMM KIT/ГРАДИЕНТ`, `SMM KIT/ФОНЫ`.

Не берём: красные квадраты как основные, мультяшных зверей из `public/svg/character-*.svg`, сток «дети в поле» из PDF — отдельных файлов нет.

## Контакты и FAQ

- Телефон: 8 (929) 893-88-21
- Адреса: Айдамирова 75в; Айдамирова 81, 3 этаж
- Прайс — `content/price.ts` (карточки Instagram @aba_dom95)
- 7 признаков диагностики — `content/diagnostics.ts`
- Ответы 1–9 — в `.cursor/rules/tone-and-content.mdc`

## Анимации

Framer Motion + Lenis уже в проекте. Нужны спокойные появления, дыхание дома, медленный оранжевый градиент, аккордеон FAQ. Не детские повороты кнопок.

## Переходы цвета

Страница — одна тёплая дорога: cream → warm → cream → ember → cream → calm. Между цветными блоками cream-пауза, стыки через `fade-to-*` или CSS-растяжку 120–200px. Подробно — `.cursor/rules/color-flow.mdc`.

## Мобильные

Mobile-first. Одна колонка, кнопки во всю ширину, липкая кнопка звонка, бургер до `md`, `clamp()` для Lena, `svh` вместо `vh`. Подробно — `.cursor/rules/responsive.mdc`.

## Что в репозитории

Лендинг переработан под этот бриф. Секции по порядку: Hero → Value → Services → Price → Diagnostics → Route → Faq → Contact → Footer, плюс липкая кнопка звонка.

- токены палитры и градиенты — `app/globals.css`, шрифты Lena / Commissioner через `next/font/local`
- тексты — `content/site.ts`, `content/price.ts`, `content/diagnostics.ts`
- анимации — `components/motion/` (`Reveal`, `Stagger`, `SplitText`, `HousePattern`, `Seam`)
- картинки бренда — `public/brand/`, отобранные исходники — `brand/selected/`

Старые секции (Friends / Audience / Team / Process), мультяшные `public/svg/*` и палитра coral/mint удалены.

## Ещё нет

- telegram / email
- подтверждение города
- живые фото центра и команды
