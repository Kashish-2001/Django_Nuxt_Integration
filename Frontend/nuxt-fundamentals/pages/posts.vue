<template>
  <div class="container">
    <h1>Do you have same questions?</h1>

<div class="post" v-for="post in posts" :key="post.id">
      <article>
            <nuxt-link :to="{ name: 'post-id', params: {id:post.id}}">
              <h2>{{post.title}}</h2>
            </nuxt-link>
          <p>{{ post.body }}</p>
      </article>
</div>
  </div>

</template>

<script>
export default {
  name: "post",
  data(){
    return {
    }
  },
  head(){
    return{
      title: 'Random Questions',
      meta: [
        { name: 'twitter:title', content: 'Random Questions' },
        { name: 'twitter:description', content: 'SOME UNANSWERED QUESTIONS' },
      ]
    }
  },
  computed: {
    posts (){
      return this.$store.state.post.all
    }
  }
}
</script>

<style scoped>

.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  min-height: 80vh;
}
h1{;
  margin-top: 100px;
  margin-bottom: 100px;
  text-align: center;
  color: cornsilk;
}
div.post{
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin-right: 200px;
  margin-left: 200px;
}
article{
  padding: 20px;
  min-width: 1200px;
  max-width: 1200px;
  margin: 20px;
}
 a{
   color: #d49d42;
 }

 a h2:hover {
   opacity: 0.8;
 }

article p{
  margin-top: 30px;
  color: #dddddd;
}

</style>
