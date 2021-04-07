import axios from 'axios'

const url = "http://127.0.0.1:8000/api/post"

export const state = () => (
  {
    posts: [],
  })

export const actions = ({
  async getPosts({commit}) {
    await axios.get(url)
      .then(res => {
        const data = res.data
        commit('GET_POSTS', data)
      }).catch(err => {
        console.log(err.message)

      })

    // try {
    //   const {data} = await axios.get(url);
    //   commit('GET_POSTS', data)
    // } catch (err) {
    //   console.log(err)
    // }

  }
});

export const mutations = ({
  GET_POSTS: (state, data) => {
    state.posts = data
  }
})





