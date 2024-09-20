import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
// import funcPlugin from './plugins/func';
// import objPlugin from './plugins/obj';
// import person from './plugins/person';
import globalComponents from './plugins/global-components';
import globalDirectives from './plugins/global-directives';
import dayjs from './plugins/dayjs';
// import focus from '@/directives/focus';

const app = createApp(App);
// app.use(funcPlugin);
// app.use(objPlugin, { name: 'heeyeon' });
// app.use(person);
// app.directive('focus', focus);
app.use(router);
app.use(globalComponents);
app.use(globalDirectives);
app.use(dayjs);
app.mount('#app');
// app.use(router).mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
