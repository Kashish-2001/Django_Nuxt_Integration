<template>
  <div class="container">
    <h1> Hey there. It's me again!! </h1>

  </div>
</template>

<script>
export default {
  head(){
    return{
      title: 'Hey there!',
      meta: [
        { name: 'twitter:title', content: "Hey, it's me again" },
        { name: 'twitter:description', content: "Let's Dance!" },
      ]
    }
  }
}
</script>

<style scoped>
.container{
  margin: 0 auto;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
h1{
  color: cornsilk;
}
</style>
