import Vue from 'vue'
import App from './App.vue'
import "@/assets/scss/index.scss";
import RouterServiceProvider from "@/providers/RouterServiceProvider";
import StorageServiceProvider from "@/providers/StorageServiceProvider";
import "@/providers/PackagesProviders";
import './filters'

Vue.config.productionTip = false

/*router.beforeEach(async ($to, $from, $next) => {
  if ( Object.keys( $to.meta ).length > 0){
    if (
      ($to.meta.perfil && hasPerfil($to.meta.perfil)) ||
      ($to.meta.permission && await can($to.meta.permission))
    ){
      $next()
    }else{
      if ($to.name !== 'Denied') {
        $next({name: 'Denied'})
      }
    }
  }
  $next()
})
*/

new Vue({
    // el: '#app',
    router: RouterServiceProvider,
    store: StorageServiceProvider,
    render: h => h(App),
}).$mount('#app')
