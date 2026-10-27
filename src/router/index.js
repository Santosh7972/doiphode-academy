import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const routes = [
  { path: '/', component: HomeView, meta: { title: 'Doiphode Academy | Coaching in Ranisawargaon', desc: 'Coaching for Maharashtra State Board Classes 6–12 and competitive exams. Planned opening 1 November 2026.' } },
  { path: '/about', component: () => import('../views/AboutView.vue'), meta: { title: 'About Us | Doiphode Academy', desc: 'Learn about Doiphode Academy and teacher Dnyaneshwar Devidas Doiphode, B.Sc., B.A., with 5 years of teaching experience.' } },
  { path: '/courses', component: () => import('../views/CoursesView.vue'), meta: { title: 'Courses | Doiphode Academy', desc: 'School coaching for Classes 6–10, Science for Classes 11–12, and competitive exam preparation.' } },
  { path: '/contact', component: () => import('../views/ContactView.vue'), meta: { title: 'Contact Us | Doiphode Academy', desc: 'Contact Doiphode Academy by WhatsApp or phone. Shinde Complex, Gunjegaon Road, Ranisawargaon.' } },
  { path: '/:pathMatch(.*)*', component: () => import('../views/NotFoundView.vue'), meta: { title: 'Page not found | Doiphode Academy', desc: 'Page not found.' } }
]
const router = createRouter({ history: createWebHistory(), routes, scrollBehavior: () => ({ top: 0, behavior: 'auto' }) })
router.afterEach((to) => {
  document.title = to.meta.title
  document.querySelector('meta[name="description"]')?.setAttribute('content', to.meta.desc)
})
export default router
