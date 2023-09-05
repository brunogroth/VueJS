<template>
  <div>
    <ul v-for="bookmark in bookmarks" :key="bookmark.id">
      <BookmarkItem
        :title="bookmark.title"
        :description="bookmark.description"
        :link="bookmark.link"
      />
    </ul>
  </div>
</template>
<script>
import BookmarkItem from './BookmarkItem.vue'

export default {
  components: { BookmarkItem },
  props: ['bookmarks']
}
</script>
