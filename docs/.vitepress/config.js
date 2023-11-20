import { roadmap } from "../roadmap/config";
import { matrix } from "../matrix/config";
import { security } from "../security/config";
import { reactnative } from "../reactnative/config";

export default {
    lang: 'ru-RU',
    title: 'База знаний Frontend ZeBrains',
    titleTemplate: 'KB Frontend ZeBrains',
    description: 'База знаний Frontend ZeBrains',
    outDir: '../public',
    lastUpdated: true,
    themeConfig: {
        outline: [2, 3],
        sidebar: [roadmap, matrix, security, reactnative]
    }
}
