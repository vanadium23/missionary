import Vue from 'vue';
import Router from 'vue-router';
import Quiz from '@/components/Quiz';
import Hello from '@/components/Hello';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/quiz',
      name: 'Quiz',
      component: Quiz,
    },
  ],
});
