<template>
  <div>
    <the-header title="BookmarksApp" />
    <BookmarkList :bookmarks="storedBookmarks" />
  </div>
</template>
<script>
import TheHeader from './components/layout/TheHeader.vue'
import BookmarkList from './components/bookmarks/BookmarkList.vue'

export default {
  components: { BookmarkList, TheHeader },
  data() {
    return {
      storedBookmarks: [
        {
          id: 'official-vue-guide',
          title: 'Official Vue Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org'
        },
        {
          id: 'stack-over-flow',
          title: 'Stack Overflow',
          description:
            'A public platform building the definitive collection of coding questions & answers',
          link: 'https://stackoverflow.com/'
        }
      ]
    }
  }
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