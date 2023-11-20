const path = "/reactnative/";

const debuggingItems = [
  {
    text: "Инструменты отладки",
    link: `${path}debugging/instruments/`,
  },
];

const testsItems = [
  {
    text: "React native testing library",
    link: `${path}tests/library/`,
  },
];

const animationsItems = [
  {
    text: "React native Animations",
    link: `${path}tests/library/animations/animation`,
  },
  {
    text: "Reanimated2",
    link: `${path}tests/library/animations/reanimated2/`,
  },
  {
    text: "Reanimated3",
    link: `${path}tests/library/animations/reanimated3/`,
  },
];

const items = [
  {
    text: "Погружение в проект React Native",
    link: `${path}begin`,
    description: "Знакомство с React native",
  },
  {
    text: "Структура проекта",
    link: `${path}structure`,
    description: "Структура проекта React Native",
  },
  {
    text: "Отладка",
    link: `${path}debugging/`,
    description: "Структура проекта React Native",
    collapsed: true,
    items: debuggingItems,
  },
  {
    text: "Стили",
    link: `${path}styles/`,
    description: "Стилизация компонентов",
  },
  {
    text: "Навигация",
    link: `${path}navigation/`,
    description: "Навигация",
  },
  {
    text: "Анимация",
    link: `${path}animations/`,
    items: animationsItems,
  },
  {
    text: "Аутентификация",
    link: `${path}auth/`,
  },
  {
    text: "UI библиотеки",
    link: `${path}ui/`,
  },
  {
    text: "Публикация приложения в сторы",
    link: `${path}publication/`,
  },
  {
    text: "Оптимизация",
    link: `${path}optimization/`,
  },
  {
    text: "Тестирование",
    link: `${path}tests/`,
    items: testsItems,
  },
  {
    text: "Регламент безопасности",
    link: `${path}reglament`,
  },
  {
    text: "Полезные статьи",
    link: `${path}articles/`,
  },
];

export const reactnative = {
  text: "Дорожная карта React Native",
  link: path,
  collapsed: true,
  items,
};
