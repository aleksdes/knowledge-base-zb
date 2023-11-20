# Обновление React Native Android до 33 SDK

## Добавление и обновление permissions

Нужно перейти в файл **AndroidManifest.xml** по пути **/android/app/src/main/AndroindManifest.xml**

И добавить следующие permission

```jsx
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" android:maxSdkVersion="32"/>
<uses-permission android:name="com.google.android.gms.permission.AD_ID" tools:node="remove"/>
<uses-permission android:name="android.permission.READ_MEDIA_IMAGES"/>
<uses-permission android:name="android.permission.READ_MEDIA_VIDEO"/>
<uses-permission android:name="android.permission.READ_MEDIA_AUDIO"/>
<uses-permission android:name="android.permission.POST_NOTIFICATIONS"/>
```

Дополнительно в meta нужно добавить

```jsx
<meta-data android:name="google_analytics_adid_collection_enabled" android:value="false" />
```

### **Что нового в обновлении**

1. **READ_EXTERNAL_STORAGE** - теперь доступен только до 32 версии SDK
2. Нужно указывать **gms.permission.AD_ID** (рекламный идентификатор) - если он не нужен, то мы указываем **tools:node=”remove”**
3. Теперь на 33 SDK не нужно запрашивать доступы к **READ_EXTERNAL_STORAGE**, если мы пытаемся обратиться к файлу, которое создало наше приложение, но вот к **WRITE_EXTERNAL_STORAGE** мы все еще обязаны обратиться
4. Для 33 SDK сделали новые запросы доступа: **READ_MEDIA_IMAGES, READ_MEDIA_VIDEO, READ_MEDIA_AUDIO** - мы должны указывать отдельно, что мы хотим прочитать с приложения
5. Так же добавилось новое **POST_NOTIFICATIONS** - теперь мы обязаны сами спрашивать хочет ли пользователь получать уведомления

### Пример кода, как можно запрашивать доступы:

```jsx
import { PermissionsAndroid, Platform } from 'react-native';

import { isAndroid } from './common';

export async function requestAndroidPermissions() {
  if (isAndroid && Number(Platform.Version) >= 33) {
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
      PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
    ]);

    return (
      granted['android.permission.WRITE_EXTERNAL_STORAGE'] ===
        PermissionsAndroid.RESULTS.GRANTED &&
      granted['android.permission.READ_MEDIA_IMAGES'] ===
        PermissionsAndroid.RESULTS.GRANTED
    );
  } else if (isAndroid && Number(Platform.Version) >= 23) {
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    ]);
    return (
      granted['android.permission.READ_EXTERNAL_STORAGE'] ===
        PermissionsAndroid.RESULTS.GRANTED &&
      granted['android.permission.WRITE_EXTERNAL_STORAGE'] ===
        PermissionsAndroid.RESULTS.GRANTED
    );
  }

	return false;
}
```

### Следующим шагом переходим в android/build.gradle

И устанавливаем нужные нам версии **SDK**