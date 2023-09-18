<template>
  <keep-alive>
    <base-card>
      <base-button @click="setSelectedTab('bookmark-list')" :mode="BookmarkListButtonMode"
        >Bookmark List</base-button
      >
      <base-button @click="setSelectedTab('bookmark-create')" :mode="CreateBookmarkButtonMode"
        >Create Bookmark</base-button
      >
      <component :is="selectedTab" @create-bookmark="createBookmark"></component>
    </base-card>
  </keep-alive>
</template>

<script>
import BookmarkCreate from './BookmarkCreate.vue'
import BookmarkList from './BookmarkList.vue'

export default {
  components: {
    BookmarkList,
    BookmarkCreate
  },
  data() {
    return {
      selectedTab: 'bookmark-list',
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
  },

  provide() {
    return {
      bookmarks: this.storedBookmarks
    }
  },

  computed: {
    BookmarkListButtonMode() {
      return this.selectedTab === 'bookmark-list' ? null : 'flat'
    },
    CreateBookmarkButtonMode() {
      return this.selectedTab === 'bookmark-create' ? null : 'flat'
    }
  },

  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab
    },
    createBookmark(bookmark) {
      this.storedBookmarks.push(bookmark)
      this.selectedTab = 'bookmark-list'
    }
  }
}
</script>