<script setup>
import { withBase } from 'vitepress';
import { roadmap } from './roadmap/config';

const list = [{ text: roadmap.text, link: roadmap.link }];
</script>
# База знаний

<ul>
    <li v-for="li in list"><a :href="withBase(li.link)">{{ li.text }}</a></li>
</ul>
