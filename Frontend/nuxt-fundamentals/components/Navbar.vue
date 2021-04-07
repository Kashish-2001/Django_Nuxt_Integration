<template>
<nav>
  <nuxt-link :to="{ name: 'index' }">
    <h2>
        I'm Alive
    </h2>
  </nuxt-link>
    <h3>It's interesting!</h3>
</nav>
</template>

<script>
export default {
name: "Navbar"
}
</script>

<style scoped>

nav{
  color: #f2edd7;
  display: flex;
  position: absolute;
  top :40px ;
  left: 230px;
  align-items: start;
  flex-direction: column;
}
nav h2{
  color: #f2edd7;
  font-family: "Abyssinica SIL";
  opacity: 0.8;
}
nav h3{
  font-family: "Chandas";
  opacity: 0.5;
}

a{

}
</style>
