# Знакомство с React Native

- Что такое React Native?
- Что такое Expo?
- Как настроить среду разработки React Native с Expo
- Как создать приложение с помощью React Native CLI
- Что такое React Native

<b>React Native</b> - платформа для создания приложений для Android и iOS используя JavaScript и React.

## Что мы получаем используя React Native

- Кросс-платформенность - получаем iOS и Android приложения из одного кода;
- Высокая производительность - за счет многопоточности и асинхронности;
- Легкость в изучении;
- Активное сообщество - большое количество готовых решений;
- Быстрый перезапуск и поддержка горячей замены кода;
- Доступ к функциям устройства.

## Что такое Expo

<b>Expo</b> - платформа, которая помогает без головной боли и предварительной настройки (кроме установки node) создавать приложения React Native. Один из нюансов Expo, что для тестирования приложения на iOS потребуется iPhone или Макбук.

Также Expo поставляет большое API для работы с функциями устройства, это лишь малая часть:

- [Камера](https://docs.expo.io/versions/latest/sdk/camera)
- [Программа выбора изображений](https://docs.expo.io/versions/latest/sdk/imagepicker)
- [Facebook](https://docs.expo.io/versions/latest/sdk/facebook)
- [Дизайн в Google](https://docs.expo.io/versions/latest/sdk/google-sign-in)
- [Расположение](https://docs.expo.io/versions/latest/sdk/location)
- [Просмотр карты](https://docs.expo.io/versions/latest/sdk/map-view)
- [Разрешения](https://docs.expo.io/versions/latest/sdk/permissions)
- [Push-уведомления](https://docs.expo.io/push-notifications/sending-notifications/)
- [Видео](https://docs.expo.io/versions/latest/sdk/video/)

## Создание проекта с Expo

Первым делом нужно установить node через Homebrew или скачать с оф.сайта Node

```sh
brew install node
```

Дальше вам нужно установить Expo CLI

```sh
npm install -g expo-cli
```

А также менеджер пакетов Yarn для Expo

```sh
npm install -g yarn
```

Следующим этапом мы создадим новый проект

```sh
expo init RNExampleProject
```

Вам будет предложен выбор шаблона установки это уже на ваше усмотрение.

Следующим шагом вы запускаете проект

```sh
yarn start
```

Сканируете QR-code и спокойно разрабатываете свое приложение

## Создание проекта с React Native CLI

::: info
Советую самостоятельно устанавливать по гайду из оф.документации - ссылка
:::

Установка node и watchman

```sh
brew install node
brew install watchman
```

Следующим шагом устанавливаем Java Development Kit

```sh
brew tap homebrew/cask-versions
brew install --cask zulu11

# Get path to where cask was installed to double-click installer

brew info --cask zulu11
```

::: info
После успешно установки обновить JAVA_HOME переменную добавив путь
<b>/Library/Java/JavaVirtualMachines/zulu-11.jdk/Contents/Home</b>
:::

После качаем и устанавливаем Android Studio

Проставляем значения переменных окружения

```sh
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

Дальше создаем проект

```sh
npx react-native@latest init RNExampleProject
```

Запускаем проект

```sh
npx react-native start
```

## Дополнительные материалы

- https://docs.expo.dev/
- https://reactnative.dev/
- https://nodejs.org/en/download
- https://facebook.github.io/watchman/
- https://brew.sh/
