# Декларируем типы из graphql файлов (graphql-codegen)

Graphql удобно использовать в связке с TypeScript. Что бы не переписывать типы из схемы в ручную был создан инструмент генерации typescript.

```bash
yarn add graphql @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/near-operation-file-preset @graphql-codegen/typescript-operations
```

```yml
generates:
  # адрес сервера с graphql
  schema: "${ENV_GRAPHQL_ENDPOINT}"
  # путь генерируемого файла с типами из схемы
  src/types/graphql.schema.ts:
    plugins:
      - typescript # плагин "@graphql-codegen/typescript"

  #папка где искать наши *.graphql файлы
  src/:
    # плагин "@graphql-codegen/near-operation-file-preset" положит файл с типами рядом с graphql файлами
    preset: near-operation-file
    # шаблон поиска graphql файлов
    documents: "src/**/*.graphql"
    presetConfig:
      # расширения для генерируемых файлов, ".graphql" - расширение документов graphql
      # ".d" - обозначает что этот файл декларирует типы для одноимённых файлов
      extension: .graphql.d.ts
      # относительный путь до файла со всеми типами
      baseTypesPath: types/graphql.schema.ts
      # Пространство имён для типов из файла указанного 'baseTypesPath'
      importTypesNamespace: SchemaTypes
    plugins:
      - typescript-operations # плагин "@graphql-codegen/typescript-operations" добавит типизацию самих документов
    config:
      nonOptionalTypename : true # добавит __typename в типы
      avoidOptionals: true # уберёт рациональность у свойств (?), заменить на Maybe
      addOperationExport: true # добавит именованный экспорт операций
```

```bash
graphql-codegen --config codegen.yml
```

В результате получаем возможность импорта типов из graphql

```js
import {
  // Graphql Document описывающие запросы
  productSubcategory,
  productSubcategoryUpdated,

  // Типы сгенерированные из описания запросов
  ProductSubcategoryQuery, // ответ запроса
  ProductSubcategoryQueryVariables, // переменные для запроса
  ProductSubcategoryUpdatedSubscription, // ответ подписки
  ProductSubcategoryUpdatedSubscriptionVariables, // переменные подписки
  SubcategoryFragment // тип из фрагмента
} from '@/graphql/default/category.graphql'
```

<aside>
❌ Не забудьте генерируемые файлы добавить в игнор списки, что бы избежать конфликтов. Обязательно добавьте их в игнор линтера, сгенерированные файлы могут быть очень большие, линтер может зависнуть во время обработки.
</aside>

## Ресурсы

- [GraphQL Code Generator - инструмент генерации](https://www.graphql-code-generator.com/)
