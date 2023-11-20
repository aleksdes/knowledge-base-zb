<script setup>
import { withBase } from 'vitepress';
import { roadmap } from './config';

const list = roadmap.items.filter((item) => item.link !== '/roadmap/how');
</script>
# Дорожная карта

Пошаговое руководство по навыкам и умениям, необходимым фронтенд разработчику в рамках нашей компании

## Как добавить статью?

[Инструкция](how)

## Темы по сложности

### {{ list[0].text }}

<ul>
    <li v-for="li in list[0].items">
        <a :href="withBase(li.link)">{{ li.text }}</a>
    </li>
</ul>

### {{ list[1].text }}

<ul>
    <li v-for="li in list[1].items">
        <a :href="withBase(li.link)">{{ li.text }}</a>
    </li>
</ul>

### {{ list[2].text }}

<ul>
    <li v-for="li in list[2].items">
        <a :href="withBase(li.link)">{{ li.text }}</a>
    </li>
</ul>
