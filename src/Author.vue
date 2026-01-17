<template>
  <div>
    <Nav />
    <AuthorHeader />
    <div class="container">
      <main>
        <AuthorInformation />
        <AuthorBasic />
       
      </main>
    </div>
     <allfooter />
  </div>
</template>

<script setup>
import Nav from './components/Nav.vue'
import AuthorHeader from './components/Author_com/author_header.vue'
import AuthorInformation from './components/Author_com/information.vue'
import AuthorBasic from './components/Author_com/basic.vue'
import './components/Author_com/Author.css'
import allfooter from './components/allfooter.vue'
</script>
<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
main {
  padding: 20px 0;
}
</style>