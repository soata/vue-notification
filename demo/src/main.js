import Vue from 'vue'
import App from './App.vue'
import plugin from 'plugin'
import velocity from 'velocity-animate'

Vue.use(plugin, { velocity })

new Vue({
  el: '#app',
  render: h => h(App)
})
