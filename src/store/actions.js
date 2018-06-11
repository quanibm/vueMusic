import axios from 'axios'

const actions = {
  getBanner({ //请求轮播图地址
    commit
  }) {
    axios.get('http://localhost:3000/banner').then(response => {
      commit('CHANGEBANNER', response)
    })
  },
  getPesonalized({ //请求轮播图地址
    commit
  }) {
    axios.get('http://localhost:3000/personalized').then(response => {
      commit('SAVEPESONALIZED', response.data)
      console.log( response.data);
      

    })
  }
}


export default actions
