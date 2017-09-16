import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
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
      name: 'Hello',
      component: Hello
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
