import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Search from '@/components/Search'

Vue.use(Router)

const home = r => require.ensure([], () => r(require('../pages/home/home.vue')), 'home')
const localMusic = r => require.ensure([], () => r(require('../pages/localMusic/localMusic.vue')), 'localMusic')
const musicVideo = r => require.ensure([], () => r(require('../pages/musicVideo/musicVideo.vue')), 'moments')
const recommend = r => require.ensure([], () => r(require('../pages/home/recommend/recommend.vue')), "recommend")
const friend = r => require.ensure([], () => r(require('../pages/home/friend/friend.vue')), "friend")
const radio = r => require.ensure([], () => r(require('../pages/home/radio/radio.vue')), "radio")






export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [{
          path: '',
          redirect: '/home'
        }, {
          path: '/home',
          redirect: '/home/recommend',
          component: home,
          children: [{
              path: '/home/recommend',
              component: recommend
            },
            {
              path: '/home/friend',
              component: friend
            },
            {
              path: '/home/radio',
              component: radio
            },
          ]
        },
        {
          path: '/localMusic',
          component: localMusic
        },
        {
          path: '/musicVideo',

          component: musicVideo
        },
      ]
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
