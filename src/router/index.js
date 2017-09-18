import Vue from 'vue'
import Router from 'vue-router'
import Inicio from '@/components/Inicio'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Cadastro from '@/components/Cadastro'
import PessoaNovo from '@/components/PessoaNovo'
import PessoaTodos from '@/components/PessoaTodos'
import LembreteAgendados from '@/components/LembreteAgendados'
import LembreteEnviados from '@/components/LembreteEnviados'
import LembreteNovo from '@/components/LembreteNovo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/cadastro',
      name: 'Cadastro',
      component: Cadastro
    }, {
      path: '/home',
      name: 'Home',
      component: Home
    }, {
      path: '/pessoa/novo',
      name: 'PessoaNovo',
      component: PessoaNovo
    }, {
      path: '/pessoa/todos',
      name: 'PessoaTodos',
      component: PessoaTodos
    }, {
      path: '/lembrete/agendados',
      name: 'LembreteAgendados',
      component: LembreteAgendados
    }, {
      path: '/lembrete/enviados',
      name: 'LembreteEnviados',
      component: LembreteEnviados
    }, {
      path: '/lembrete/novo',
      name: 'LembreteNovo',
      component: LembreteNovo
    }
  ]
})
