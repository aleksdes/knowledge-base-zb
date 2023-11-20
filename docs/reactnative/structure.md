# Структура проекта

```sh
└── src/
    ├── @types # Общие типы для переиспользования
    ├── app
        ├── navigation # Навигация приложения
        ├── providers # Провайдеры для приложения
        ├── App.tsx # Связывание провайдеров и навигации
        └── index.ts #  Точка входа приложения
    ├── features # Ключевой функционал приложения
    ├── entities # Сущности приложения
    ├── screens # Экраны приложения
    └── shared # Переиспользуемые модули
        ├── ui # UI модули
        ├── lib # Вспомогательные библиотеки
        ├── assets # Медиа файлы (картинки, иконки)
        └── config # Различные статические данные
└── fastlane # Автоматизация сборок IOS/Android приложений
```

## fastlane

```sh
└── fastlane/
    ├── .env # Ключи для сборок
    ├── Appfile
    ├── Fastfile # Файл с логикой сборок
    ├── Pluginfile # Плагины
    └── Readme.md
```

## navigation

```sh
└── navigation
    ├── navigators/
        ├── {StackName/} # Навигационный стек с экранами
        └── index.ts # Общий экспорт стеков
    ├── options/ # Конфигурации навигаций
    └── index.tsx # Точка входа и иницилизцаия навигации
```

## providers

```sh
└── providers
    ├── with{NameProvider}.tsx # Файл провайдера
    └── index.tsx # Точка входа через compose(Provider1, Provider2, Provider3)
```

## entities

```sh
└── entities
    ├── {entityName/} # Сущность
        ├── model.ts # Логика сущности
        ├── ui/ # Представлени сущности
            └── {Component/}
                ├── {Component}.tsx # Представление
                └── index.ts # Точка входа компонента
            └── index.ts # Точка входа компонентов
        └── index.ts # Точка входа сущности
```

## shared

```sh
└── shared
    ├── config
        ├── {name}.ts # Статичская сущность
        └── index.ts # Общий импорт
    └── ui # Переиспользуемые UI компорненты
        ├── {component/} # Папка компонента
            ├── Component.tsx # Компонент
            ├── Componen.spec.tsx # Unit тест
            └── index.ts # Точка входа компонента
        └── index.ts # Общий импорт
```

## Дополнительные материалы

- [Шаблон для React Native проектов](https://gitlab.zebrains.team/frontend/idp/shirmanov-react-native-fsd-example)
- [Хранилище](https://effector.dev/)
- [Feature-sliced-design](https://feature-sliced.design/)
