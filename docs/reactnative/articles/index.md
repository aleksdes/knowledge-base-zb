<script setup>
import { withBase } from 'vitepress';
import { articles } from './config';

const list = articles.items;
</script>

# Полезные статьи в React Native

<ul>
    <li v-for="li in list">
        <a :href="withBase(li.link)">{{ li.text }}</a>
    </li>
</ul>
