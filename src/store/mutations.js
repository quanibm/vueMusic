const CHANGEBANNER = "CHANGEBANNER"
const SAVEPESONALIZED = "SAVEPESONALIZED"

const mutations = {
  changeNav ( state )
  {

    if ( state.tagNavValue )
    {
      state.tagNavValue = false;
    } else
    {
      state.tagNavValue = true;
    }

  },
  [ CHANGEBANNER ] ( state, data )
  {
    state.banner.push( data )
  },
  [ SAVEPESONALIZED ] ( state, data )
  {
    state.Pesonalized.push( data )
  }


}
















export default mutations
