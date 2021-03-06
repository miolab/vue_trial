import Vue from 'vue'
import App from './App.vue'
import Counter from './components/Counter.vue'
import AxiosSample from './components/axios_sample/AxiosSample.vue'
import Forms from './components/Forms.vue'

Vue.config.productionTip = false

Vue.component('Forms', Forms);

Vue.filter("myFilterUpperCase", function (val) {
  return val.toUpperCase();
})

new Vue({
  render: h => h(App),
}).$mount('#app')

new Vue({
  el: '#counter',
  render: h => h(Counter),
})

new Vue({
  render: h => h(AxiosSample),
}).$mount('#axios-sample')
