<template>
  <base-card>
    <base-button
      @click="setSelectedTab('bookmark-list')"
      :mode="selectedTab === 'bookmark-list' ? null : 'flat'"
      >Bookmark List</base-button
    >
    <base-button
      @click="setSelectedTab('bookmark-create')"
      :mode="selectedTab === 'bookmark-create' ? null : 'flat'"
      >Create Bookmark</base-button
    >
    <component :is="selectedTab"></component>
  </base-card>
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

  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab
    }
  }
}
</script>