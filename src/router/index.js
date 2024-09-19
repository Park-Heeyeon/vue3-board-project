import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import BoardCreateView from '@/views/boards/BoardCreateView.vue';
import BoardDetailView from '@/views/boards/BoardDetailView.vue';
import BoardEditView from '@/views/boards/BoardEditView.vue';
import BoardListView from '@/views/boards/BoardListView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import NestedView from '@/views/nested/NestedView.vue';
import NestedHome from '@/views/nested/NestedHome.vue';
import NestedOneView from '@/views/nested/NestedOneView.vue';
import NestedTwoView from '@/views/nested/NestedTwoView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/boards', name: 'BoardList', component: BoardListView },
  { path: '/boards/create', name: 'BoardCreate', component: BoardCreateView },
  {
    path: '/boards/:id',
    name: 'BoardDetail',
    component: BoardDetailView,
    props: true
    // props: (route) => ({
    //   id: parseInt(route.params.id)
    // })
  },
  { path: '/boards/:id/edit', name: 'BoardEdit', component: BoardEditView },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView },
  {
    path: '/nested',
    name: 'Nested',
    component: NestedView,
    children: [
      { path: '', name: 'NestedHome', component: NestedHome },
      { path: 'one', name: 'NestedOne', component: NestedOneView },
      { path: 'two', name: 'NestedTwo', component: NestedTwoView }
    ]
  }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes
});

export default router;
