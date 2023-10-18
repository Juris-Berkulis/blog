import { createRouter, createWebHistory } from 'vue-router';
import PostsView from '@/views/PostsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'posts',
      component: PostsView,
    },
    {
      path: '/posts/:postId',
      name: 'openedPost',
      component: () => import('@/views/OpenedPostView.vue'),
      props: true,
    },
  ]
});

export default router
