<script setup>
import { withBase } from 'vitepress';
import { reactnative } from './config';

const list = reactnative.items.filter((item) => item.link !== '/reactnative/');
</script>

# Дорожная карта React Native

Дорожная карта по всем важным темам в React Native разработке

## Список тем

<ul>
    <li v-for="li in list">
        <a :href="withBase(li.link)">{{ li.text }}</a>
    </li>
</ul>