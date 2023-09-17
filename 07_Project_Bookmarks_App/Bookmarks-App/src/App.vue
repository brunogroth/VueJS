<template>
  <div>
    <the-header title="BookmarksApp" />
    <the-bookmarks />
  </div>
</template>
<script>
import TheHeader from './components/layout/TheHeader.vue'
import TheBookmarks from './components/bookmarks/TheBookmarks.vue'

export default {
  components: { TheHeader, TheBookmarks }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>