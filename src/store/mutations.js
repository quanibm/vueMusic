const CHANGEBANNER = "CHANGEBANNER"


const mutations = {
  changeNav(state) {

    if (state.tagNavValue) {
      state.tagNavValue = false;
    } else {
      state.tagNavValue = true;
    }

  },
  [CHANGEBANNER](state, data) {
    state.banner.push(data)
  }


}
















export default mutations
