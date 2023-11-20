# JavaScript анимации

## Определения

**Анимация** — неотъемлемая часть современных веб-интерфейсов. Создавать анимации можно двумя основными способами: с помощью **JavaScript** и средствами **CSS**. С помощью JavaScript-анимаций можно делать вещи, которые нельзя реализовать на CSS. JS-анимации описывают в коде приложения.

Существует несколько способов использования JS в анимации:

- Использование setInterval(function, delay)
- Использование setTimeout(function, delay)
- Использование requestAnimationFrame(callback)
- Использование [API веб-анимации](https://developer.mozilla.org/ru/docs/Web/API/Web_Animations_API)

## Использование setInterval и setTimeout

Анимация реализуется через последовательность кадров, каждый из которых немного меняет HTML/CSS-свойства. Это самая базовая JS-анимация.

Пример простой анимации через setInterval можно найти здесь: [https://www.w3schools.com/howto/howto_js_animate.asp](https://www.w3schools.com/howto/howto_js_animate.asp)

## Использование requestAnimationFrame

Давайте представим, что у нас есть несколько анимаций, работающих одновременно.

Если мы запустим их независимо с помощью `setInterval(..., 20)`, тогда браузеру будет необходимо выполнять отрисовку гораздо чаще, чем раз в `20ms`.

Это происходит из-за того, что каждая анимация имеет своё собственное время старта и «каждые 20 миллисекунд» для разных анимаций – разные. Интервалы не выравнены и у нас будет несколько независимых срабатываний в течение `20ms`.

Спецификация [Animation timing](http://www.w3.org/TR/animation-timing/) описывает функцию `requestAnimationFrame`, которая решает эту проблему.

Подробнее можно узнать здесь: [https://learn.javascript.ru/js-animation#ispolzovanie-requestanimationframe](https://learn.javascript.ru/js-animation#ispolzovanie-requestanimationframe)

## Использование API веб-анимации

Web Animations API (WAAPI) позволяет разработчикам работать с CSS анимацией средствами JavaScript. Его синтаксис похож на синтаксис традиционной CSS анимации, но имеет некоторые особенности, которые облегчают разработчикам создание и изменение анимации.

Попробуем создать вращающийся квадрат, меняющий цвет.

Все начинается с создания объекта Keyframes, аналогичного директиве @keyframes в CSS.

```js
let cubeRotating = [
    {transform: 'rotate(0deg)', backgroundColor: 'pink'}, 
    {backgroundColor: 'purple', offset: 0.3}, 
    {transform: 'rotate(180deg)', backgroundColor: 'pink'}
]
```

WAAPI автоматически делит анимацию на равные части по количеству ключей, поэтому в нашем случае цвет фона будет меняться примерно на половине анимации. Однако мы хотим, чтобы это происходило на 30%, поэтому мы добавляем во второй шаг свойство offset со значением 0.3.
Необходимо запомнить одну важную вещь: в объекте Keyframes должно быть как минимум два ключа. В противном случае, будет выброшена ошибка NotSupportedError.
Далее создается объект, содержащий свойства анимации, отвечающие за продолжительность и количество повторов:

```js
let cubeTiming = {
    duration: 1000,
    iterations: Infinity
}
```

Наконец, для запуска анимации мы используем метод Element.animate:

```js
document.getElementById('cube').animate(
 cubeRotating,
 cubeTiming
)
```

Метод animate является самым быстрым и простым способом использования анимации. Он возвращает созданный экземпляр класса Animation. Элементы могут иметь несколько анимаций, прикреплённых к ним. Можно получить список анимаций, которые влияют на элемент, вызвав Element.getAnimations().

Вызов метода animate запускает анимацию немедленно. Чтобы отрегулировать воспроизведение можно вызывать методы pause и play для остановки и запуска анимации, соответственно.

Подробнее можно узнать в статье первоисточнике: [https://habr.com/ru/post/486454/](https://habr.com/ru/post/486454/)

Как еще один пример, чтобы сделать анимацию перемещения квадрата из одного угла в другой, можно использовать такой код:

```js
var target = document.querySelector('.box');
var player = target.animate([
    {transform: 'translate(0)'}, 
    {transform: 'translate(100px, 100px)'}
], 500);
player.addEventListener('finish', function() {
    target.style.transform = 'translate(100px, 100px)';
});
```

[Посмотреть результат](https://googlesamples.github.io/web-fundamentals/fundamentals/design-and-ux/animations/box-move-wa.html)

Подробно данный метод описан в документации: [https://developer.mozilla.org/ru/docs/Web/API/Element/animate](https://developer.mozilla.org/ru/docs/Web/API/Element/animate)

Одним важным преимуществом WAAPI по сравнению с другими способами создания анимации в JS является то, что он выполняется в отдельном потоке, что позволяет основному потоку «забыть» про анимацию и заниматься остальным кодом.

В настоящее время WAAPI находится в статусе черновика и частично поддерживается в последних версиях Firefox и Chrome, а также в основных мобильных браузерах. Частичная поддержка означает, что браузеры поддерживают такие методы как play, pause, reverse, finish и playbackRate, но не поддерживают getAnimations.

Более подробное руководство по Web API Animation можно найти по [ссылке](https://css-live.ru/articles/rukovodstvo-po-web-animations-api-chast-1-sozdanie-bazovoj-animacii.html).
