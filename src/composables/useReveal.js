import { ref, onMounted, onBeforeUnmount } from 'vue'
// Reveals an element once when it nears the viewport. Content stays visible if anything fails.
export function useReveal(delay = 0) {
  const el = ref(null), armed = ref(false), shown = ref(false)
  let io = null, timer = null
  onMounted(() => {
    if (!el.value || !('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (el.value.getBoundingClientRect().top < window.innerHeight * 0.9) return
    armed.value = true
    io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { shown.value = true; io.disconnect() }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 })
    io.observe(el.value)
    timer = setTimeout(() => { shown.value = true }, 4000)
  })
  onBeforeUnmount(() => { io && io.disconnect(); clearTimeout(timer) })
  return { el, armed, shown, style: { '--d': delay + 'ms' } }
}
