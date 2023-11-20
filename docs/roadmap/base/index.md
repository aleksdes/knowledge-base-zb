<script setup>
import { withBase } from 'vitepress';
import { roadmap } from '../config';

const title = 'Базовые концепции';

const list = roadmap.items.find((i) => i.text === title).items;
</script>
# Базовые концепции

<ul>
    <li v-for="li in list"><a :href="withBase(li.link)">{{ li.text }}</a></li>
</ul>
