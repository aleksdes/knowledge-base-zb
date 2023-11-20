# Настройка сборщика для проектов на React

Ценность правильной настройки системы сборки сложно переоценить. Если не уделить этой части развертывания проекта достаточно внимания, в процессе разработки может возникнуть множество различных проблем, включая проблемы с кешированием в браузере, использованием typescript, подключением шрифтов и ассетов.

Для настройки проекта на react в первую очередь следует задуматься над необходимостью построения кастомной конфигурации сборщика. В большинстве случаев для успешной работы достаточно использовать утилиту create-react-app. Случаи, в которых стоит задуматься насчет использования кастомного конфига:

- На проекте планируется к использованию lerna/NX
- На проекте планируются к использованию [микрофронтенды](/roadmap/middle/architecture/microfrontend)
- Тривиальный проект, не требующий сложной конфигурации. В таком случае использование CRA будет избыточным
- На проекте требуется гибкость при работе с конфигурацией. Здесь также стоит рассмотреть использование customize-cra/craco
- Отсутствие у специалиста, проводящего развертывание, опыта в построении кастомной конфигурации сборщиков

В случае, если проект требует кастомной конфигурации, рекомендуется отказаться от использования автоконфигов, так как они ограничивают гибкость настройки, и, зачастую, имеют вшитые детали конфигурации, с которыми, в лучшем случае, просто очень сложно работать.

## Кастомная конфигурация webpack

В данном примере будет построен минимальный конфиг вебпака. Любые кастомизации и расширения не гарантируют стабильность работы приложения.

Для построения кастомной конфигурации вебпака сперва нужно добавить в проект вебпак, CLI утилиту для запуска команд из консоли, дев-сервер, а также некоторые необходимые для конфигурации плагины и лоадеры. Список плагинов и лоадеров:

- style-loader
- css-loader
- terser-webpack-plugin
- css-minimizer-webpack-plugin
- babel-preset-react-app
- babel-loader
- @svgr/webpack
- @babel/core
- dotenv
- file-loader
- mini-css-extract-plugin
- postcss
- postcss-loader
- postcss-normalize
- postcss-flexbugs-fixes

Так как эти зависимости нужны нам только на этапе разработки, необходимо добавить их в dev dependencies.

Примечание: для удобства заполнения конфига можно воспользоваться утилитой init, встроенной в webpack-cli
Команда для запуска:

```bash
npx webpack init
```

Команда для добавления через NPM:

```bash
npm i --save-dev webpack webpack-cli webpack-dev-server style-loader css-loader terser-webpack-plugin css-minimizer-webpack-plugin babel-preset-react-app babel-loader @svgr/webpack @babel/core dotenv file-loader mini-css-extract-plugin postcss postcss-loader postcss-normalize postcss-flexbugs-fixes
```

После этого необходимо создать файл `webpack.config.js` . В этом файле будет находиться конфигурация проекта.

> Примечание: Если для режимов разработки и продакшна требуются разные конфигурации, рекомендуется использовать несколько конфигурационных файлов. Примеры нейминга файлов:
> 
> - `dev.config.js`
> - `prod.config.js`
> 
> *Для указания файла конфигурации в скрипте сборки используется флаг `--config`*
> 

В файл добавляем следующее содержимое:

```js
module.exports = {}
```

Здесь будут содержаться основные поля конфигурации сборщика.

Создадим поле entry, которое будет отвечать за входную точку сборки. Значение должно являться путем к входному js файлу проекта.

Далее сконфигурируем точку выхода сборки. Для этого в конфигурации webpack существует поле output. Оно должно содержать путь до папки со сборкой и паттерн для нейминга файлов. При конфигурации нейминга файлов сразу стоит позаботиться о добавлении в название хеша файла. В дальнейшем это избавит от проблем с кешированием бандлов браузером. Для указания пути к файлам и папкам воспользуемся встроеным в node.js модулем path. Также добавим поле chunkFilename, оно понадобится в случае, если придется использовать разделение сборки (react lasy/suspect). Для хранения статичных файлов (шрифты, картинки, иконки) добавим поле assetModuleFilename.

Состояние конфигурации после добавления входной и выходной точек:

```js
const path = require('path'); // Встроенный модуль node.js

module.exports = {
  entry: './src/index.js', // Условная точка входа
  output: {
    path: path.resolve(__dirname, 'dist'), // Директория для сборки
    filename: 'static/js/[name].[contenthash:8].js', // Паттерн для нейминга скриптов
		chunkFilename: 'static/js/[name].[contenthash:8].chunk.js', // Паттерн для нейминга чанков
	  	assetModuleFilename: 'static/media/[name].[hash][ext]', // Паттерн для нейминга ассетов
	},
};
```

Далее укажем окружение, с которым будет взаимодействовать приложение. Для этого сконфигурируем поле target. В случае react экосистемы лучше указать значение ['browserslist']. Предварительно следует установить в проект зависимость browserlist и указать в package.json конфигурацию для нее.

После этого необходимо описать правила работы с модулями. Для этого используется поле module.rules.

Сперва добавим конфигурацию для обработки ассетов.

Итоговая конфигурация:

```js
module: {
	rules: {
		{
		    test: [/\\.avif$/],
        	type: 'asset',
        	mimetype: 'image/avif',
        	parser: {
	        	dataUrlCondition: {
	          		maxSize: imageInlineSizeLimit,
          		},
        	},
      	},
		{
	    	test: [/\\.bmp$/, /\\.gif$/, /\\.jpe?g$/, /\\.png$/],
        	type: 'asset',
        	parser: {
				dataUrlCondition: {
	          		maxSize: imageInlineSizeLimit,
          		},
        	},
      	},
		{
	     	test: /\\.svg$/,
        	use: [
				{
	          		loader: require.resolve('@svgr/webpack'),
            		options: {
	            		prettier: false,
              			svgo: false,
              			svgoConfig: {
	              			plugins: [{ removeViewBox: false }],
	            		},
	            		titleProp: true,
	            		ref: true,
	          		},
	        	},
		      	{
		        	loader: require.resolve('file-loader'),
	          		options: {
		          		name: 'static/media/[name].[hash].[ext]',
	          		},
	        	},
        	],
        	issuer: {
	        	and: [/\\.(ts|tsx|js|jsx|md|mdx)$/],
        	},
      	},
		{
	    	test: /\\.(js|mjs|jsx|ts|tsx)$/,
        	include: '{path_to_src}',
        	loader: require.resolve('babel-loader'),
			options: {
				presets: [
					[
	            		require.resolve('babel-preset-react-app'),
              			{ runtime: 'classic' },
					],
				],
				cacheDirectory: true,
				cacheCompression: false,
				// Только для продакшн сборки!
				compact: true
			},
		},
		{
			test: /\\.css$/,
			exclude: /\\.module\\.css$/,
			use: [
				// Только для дев сборки!
				require.resolve('style-loader'),
				// Только для продакшн сборки!
				loader: MiniCssExtractPlugin.loader,
				{
					loader: require.resolve('css-loader'),
					options: {
						importLoaders: 1,
						modules: {
							mode: 'icss',
						}
					},
				},
				{
					loader: require.resolve('postcss-loader'),
					options: {
						postcssOptions: {
							ident: 'postcss',
							config: false,
							plugins: [
								'postcss-flexbugs-fixes',
								'postcss-preset-env',
								'postcss-normalize',
							],
						},
					},
				},
			],
			sideEffects: true,
		},
		{
			test: /\\.module\\.css$/,
			use: [
				// Только для дев сборки!
				require.resolve('style-loader'),
				// Только для продакшн сборки!
				loader: MiniCssExtractPlugin.loader,
				{
					loader: require.resolve('css-loader'),
					options: {
						importLoaders: 1,
						modules: {
							mode: 'local',
						}
					},
				},
				{
					loader: require.resolve('postcss-loader'),
					options: {
						postcssOptions: {
							ident: 'postcss',
							config: false,
							plugins: [
								'postcss-flexbugs-fixes',
								'postcss-preset-env',
								'postcss-normalize',
							],
						},
					},
				},
			],
		},
	},
```

Далее добавим плагины для постобработки файлов сборки. Для этого сконфигурируем поле plugins. Сперва добавим HtmlWebpackPlugin для добавления всех скриптов и стилей в html файл. Также в случае конфигурации для продакшна добавим некоторые оптимизации. Здесь необходимо указать ссылку на шаблон html, в который будут подключены все статичные файлы.

Для обработки css файлов добавим MiniCssExtractPlugin. Он необходим для того, чтобы при разделении сборки css файлы также разделялись на чанки.

Полученная конфигурация:

```js
plugins: {
	new HtmlWebpackPlugin(
		{
			inject: true
		    template: '{path_to_html_template}',
			// Опционально, для продакшн сборки
			minify: {
				removeComments: true,
		      	collapseWhitespace: true,
		      	removeRedundantAttributes: true,
		      	useShortDoctype: true,
		      	removeEmptyAttributes: true,
		      	removeStyleLinkTypeAttributes: true,
		      	keepClosingSlash: true,
		      	minifyJS: true,
		      	minifyCSS: true,
		      	minifyURLs: true,
			},
		},
	),
	new MiniCssExtractPlugin({
		// Здесь указываем те же опции, что и в секции output
		filename: 'static/css/[name].[contenthash:8].css',
		chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
	})
},
```

Теперь необходимо сконфигурировать оптимизацию сборки с помощью поля optimization, это нужно только для продакшн сборки. Сначала ставим параметр minimize в положение true, затем конфигурируем minimizer, добавив туда минификатор TerserPlugin (также можно использовать UglifyJS, однако на момент написания статьи разница в сжатии минимальна). Также воспользуемся CssMinimizerPlugin для сжатия css файлов.

Итоговая конфигурация:

```js
optimization: {
	minimize: true,
    minimizer: [
		new TerserPlugin({
			parse: {
				ecma: 8,
			},
			compress: {
	        	ecma: 5,
          		warnings: false,
				comparisons: false,
				inline: 2,
			},
			mangle: {
	        	safari10: true,
        	},
			output: {
	        	ecma: 5,
          		comments: false,
				ascii_only: true,
			},
		})
		new CssMinimizerPlugin(),
	],
},
```

После этого добавим конфигурации дев-сервера для использования HMR (hot module replacement). Для этого используем поле devServer с указанием параметров static и hot.

Конфигурация следующая:

```js
devServer: {
	static: './dist',
  	hot: true,
},
```

Для подключения в проект переменных окружения добавим в файл(не в конфигурацию) следующий код:

```js
require('dotenv').config()
```

После настройки всех параметров конфигурации, конфиг должен принять следующий вид:

```js
const path = require('path');
const resolve = require('resolve');

const webpack = require('webpack');

const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

require('dotenv').config()

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/js/[name].[contenthash:8].js',
		chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
	  assetModuleFilename: 'static/media/[name].[hash][ext]',
	},
	target: ['browserlist'],
	module: {
		rules: {
			{
		    test: [/\\.avif$/],
        type: 'asset',
        mimetype: 'image/avif',
        parser: {
	        dataUrlCondition: {
	          maxSize: imageInlineSizeLimit,
          },
        },
      },
			{
	      test: [/\\.bmp$/, /\\.gif$/, /\\.jpe?g$/, /\\.png$/],
        type: 'asset',
        parser: {
		      dataUrlCondition: {
	          maxSize: imageInlineSizeLimit,
          },
        },
      },
			{
	      test: /\\.svg$/,
        use: [
		      {
	          loader: require.resolve('@svgr/webpack'),
            options: {
	            prettier: false,
              svgo: false,
              svgoConfig: {
	              plugins: [{ removeViewBox: false }],
	            },
	            titleProp: true,
	            ref: true,
	          },
	        },
		      {
		        loader: require.resolve('file-loader'),
	          options: {
		          name: 'static/media/[name].[hash].[ext]',
	          },
	        },
        ],
        issuer: {
	        and: [/\\.(ts|tsx|js|jsx|md|mdx)$/],
        },
      },
			{
	      test: /\\.(js|mjs|jsx|ts|tsx)$/,
        include: paths.appSrc,
        loader: require.resolve('babel-loader'),
				options: {
					presets: [
						[
	            require.resolve('babel-preset-react-app'),
              {
	              runtime: 'classic',
              },
            ],
					],
					cacheDirectory: true,
					cacheCompression: false,
					// Только для продакшн сборки!
					compact: true
				},
			},
		},
		{
			test: /\\.css$/,
			exclude: /\\.module\\.css$/,
			use: [
				// Только для дев сборки!
				require.resolve('style-loader'),
				// Только для продакшн сборки!
				loader: MiniCssExtractPlugin.loader,
				{
					loader: require.resolve('css-loader'),
					options: {
						importLoaders: 1,
						modules: {
							mode: 'icss',
						}
					},
				},
				{
					loader: require.resolve('postcss-loader'),
					options: {
						postcssOptions: {
							ident: 'postcss',
							config: false,
							plugins: [
								'postcss-flexbugs-fixes',
								'postcss-preset-env',
								'postcss-normalize',
							],
						},
					},
				},
			],
			sideEffects: true,
		},
		{
			test: /\\.module\\.css$/,
			use: [
				// Только для дев сборки!
				require.resolve('style-loader'),
				// Только для продакшн сборки!
				loader: MiniCssExtractPlugin.loader,
				{
					loader: require.resolve('css-loader'),
					options: {
						importLoaders: 1,
						modules: {
							mode: 'local',
						}
					},
				},
				{
					loader: require.resolve('postcss-loader'),
					options: {
						postcssOptions: {
							ident: 'postcss',
							config: false,
							plugins: [
								'postcss-flexbugs-fixes',
								'postcss-preset-env',
								'postcss-normalize',
							],
						},
					},
				},
			],
		},
	},
	plugins: {
		new HtmlWebpackPlugin(
			{
			  inject: true
		    template: '{path_to_html_template}',
				// Опционально, для продакшн сборки
				minify: {
					removeComments: true,
		      collapseWhitespace: true,
		      removeRedundantAttributes: true,
		      useShortDoctype: true,
		      removeEmptyAttributes: true,
		      removeStyleLinkTypeAttributes: true,
		      keepClosingSlash: true,
		      minifyJS: true,
		      minifyCSS: true,
		      minifyURLs: true,
				},
			},
		),
		new MiniCssExtractPlugin({
			// Здесь указываем те же опции, что и в секции output
		  filename: 'static/css/[name].[contenthash:8].css',
		  chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
		})
	},
	optimization: {
		minimize: true,
    minimizer: [
			new TerserPlugin({
				parse: {
					ecma: 8,
				},
				compress: {
	        ecma: 5,
          warnings: false,
					comparisons: false,
					inline: 2,
				},
				mangle: {
	        safari10: true,
        },
				output: {
	        ecma: 5,
          comments: false,
					ascii_only: true,
				},
			})
			new CssMinimizerPlugin(),
		],
	},
		devServer: {
		static: './dist',
	  hot: true,
	},
};
```

После завершения конфигурации необходимо протестировать различные варианты сборки, чтобы удостовериться что ошибок нет.

Также стандартный конфиг может быть расширен за счет добавления:

- сброса сборки при ошибке с помощью поля bail(по умолчанию false)
- алиасов с помощью поля resolve.alias

Примерная конфигурация:

```js
resolve: {
	alias: {
		Utilities: path.resolve(__dirname, 'src/utilities/'),
		Templates: path.resolve(__dirname, 'src/templates/'),
	},
},
```
