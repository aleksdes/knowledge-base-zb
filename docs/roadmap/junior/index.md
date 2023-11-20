<script setup>
import { withBase } from 'vitepress';
import { roadmap } from '../config';

const title = 'Темы начального уровня';

const list = roadmap.items.find((i) => i.text === title).items;
</script>
# Темы начального уровня

<ul>
    <li v-for="li in list"><a :href="withBase(li.link)">{{ li.text }}</a></li>
</ul>
