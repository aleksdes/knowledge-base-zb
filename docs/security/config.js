export const security = {
  text: 'Безопасность Frontend',
  link: '/security/',
  collapsed: true,
  items: [
      {
          text: 'HTTPS',
          link: '/security/https',
          description: 'Важно убедиться, что приложение обслуживается по протоколу HTTPS для шифрования данных при передаче между клиентом и сервером.'
      },
      {
          text: 'Проверка входных данных (валидация)',
          link: '/security/validation',
          description: 'Проверять все входные данные от пользователей перед их обработкой нужно, чтобы предотвратить инъекционные атаки. Проверка должна проводиться как на стороне клиента, так и на стороне сервера. '
      },
      {
          text: 'Аутентификация и авторизация',
          link: '/security/auth',
          description: 'Внедрение безопасного механизма аутентификации и авторизации гарантирует, что только авторизованные пользователи могут получать доступ к конфиденциальным данным или выполнять действия, связанные с их ролью. '
      },
      {
          text: 'CSP',
          link: '/security/csp',
          description: 'Использования заголовков политики безопасности содержимого (CSP) для ограничения выполнения ненадежных сценариев. '
      },
      {
          text: 'Ограничения доступа к данным',
          link: '/security/limitation',
          description: 'Сведение к минимуму объема данных, которые предоставляются на стороне клиента, отправляя только те данные, которые необходимы для работы приложения. '
      },
      {
          text: 'Обновление зависимостей',
          link: '/security/dependencies',
          description: 'Все сторонние зависимости должны быть обновлены, а код подвергнут рефакторингу для поддержки новых версий, чтобы предотвратить использование известных уязвимостей.'
      },
  ]
}