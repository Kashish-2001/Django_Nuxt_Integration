<script src="../../store/post.js"></script>
<template>
  <div>
    <article>
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
    </article>

    <aside>
      <h2>Posts you might enjoy!</h2>
      <ul>
        <li v-for="related in relatedPost" :key="related.id">
          <nuxt-link :to="{ name: 'post-id', params: {id:related.id}}">
            {{ related.title }}
          </nuxt-link>
        </li>
      </ul>
    </aside>

  </div>

</template>


<script>
export default {
  name: "id",
  data() {
    return {
      id: this.$route.params.id,
    }
  },
  head(){
    return{
      title: this.post.title,
      meta: [
        { name: 'twitter:title', content: this.post.title },
        { name: 'twitter:description', content: this.post.body },
      ]
    }
  },
  mounted() {
    this.$store.dispatch('post/getPosts')
  },
  computed: {
    post() {
      let pre_post = {};
      if(this.$store.state.post.posts.length !== 0){
        this.$store.state.post.posts.find(post => {
          if(post.id == this.id){
            pre_post = post
          }
        })
      }
      return pre_post
      },

    relatedPost() {
      let related_post = []
      if (this.$store.state.post.posts.length !== 0) {
          this.$store.state.post.posts.filter(post => {
            if(post.id != this.id){
              related_post.push(post)
            }
        })
      }
      return related_post
    }
  }
}
</script>


<style scoped>

article {
  margin: 20px;
  display: flex;
  min-width: 100vh;
  flex-direction: row;
  position: absolute;
  top: 200px;
  left: 215px;
}

article h1 {
  position: absolute;
  top: 0px;
  color: #d49d42;
}

article p {
  position: absolute;
  top: 30px;
  margin-top: 30px;
  color: #dddddd;
}

aside {
  position: absolute;
  top: 250px;
  right: 220px;
}

aside h2 {
  color: #d49d42;
}

aside li {
  margin-top: 10px;
  color: #ccc;
}

a {
  color: #387c6d;
}
</style>
