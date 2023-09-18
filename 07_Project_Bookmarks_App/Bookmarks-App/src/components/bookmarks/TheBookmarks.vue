<template>
  <base-card>
    <base-button @click="setSelectedTab('bookmark-list')" :mode="BookmarkListButtonMode"
      >Bookmark List</base-button
    >
    <base-button @click="setSelectedTab('bookmark-create')" :mode="CreateBookmarkButtonMode"
      >Create Bookmark</base-button
    >
    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
  </base-card>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue'
import BaseCard from '../UI/BaseCard.vue'
import BookmarkCreate from './BookmarkCreate.vue'
import BookmarkList from './BookmarkList.vue'
export default {
  components: {
    BookmarkList,
    BookmarkCreate,
    BaseButton,
    BaseCard
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
      bookmarks: this.storedBookmarks,
      createBookmark: this.createBookmark // method
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