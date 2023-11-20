# Создание Push notification сертификата

Сначала переходим  и авторизируется на  https://developer.apple.com/account

Переходим в сертификаты

![Переходим в сертификаты](./images/push-notification-ios-legacy/1.png)

Дальше нажимаем на создание сертификата

![создание сертификата](./images/push-notification-ios-legacy/2.png)

В Service выбираем “****Apple Push Notification service SSL (Sandbox & Production)****”

![Apple Push Notification service SSL (Sandbox & Production)](./images/push-notification-ios-legacy/3.png)

Выбираем свой App ID

![Screenshot 2023-06-26 at 17.14.35.png](./images/push-notification-ios-legacy/4.png)

Следующим шагом на MacBook нужно открыть программу **Keychain Access**  и выбираем “**Request a Certificate From a Certificate Authority…**”

![Keychain Access](./images/push-notification-ios-legacy/5.png)

Заполняем все данные и выбираем куда сохранить на компьютере

![Заполняем и сохраняем на ПК](./images/push-notification-ios-legacy/6.png)

В папке куда сохранили появится файл “CertificateSigningRequest.certSigningRequest”

Его мы загружаем в developer apple

![developer apple](./images/push-notification-ios-legacy/7.png)

После чего у нас создается сертификат мы переходим в него и скачиваем

![Скачивание сертификата](./images/push-notification-ios-legacy/8.png)

После переходим в **Keychain Access** выбираем вкладку Login и после перекидываем файл, который скачали

![Keychain Access](./images/push-notification-ios-legacy/9.png)

Следующим шагом выбираем его в списке и нажимаем Export выбирая формат .p12

Прописываем пароль

![Прописываем пароль](./images/push-notification-ios-legacy/10.png)

У нас появится файл **Certificate.p12** в зависмости от того, как вы называли

Следующим шагом открываем **terminal** и вводим команду

```jsx
openssl pkcs12 -in Certificate.p12 -out prod.pem -nodes -clcerts
```

Подставляем ваши названия, которые нужны и получаем .pem файл