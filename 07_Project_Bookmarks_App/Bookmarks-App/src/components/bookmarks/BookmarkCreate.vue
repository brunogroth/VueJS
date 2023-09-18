<template>
  <div>
    <h2>Create Bookmark</h2>
    <base-card>
      <form @submit.prevent="createBookmark">
        <div class="form-control">
          <label for="title">Title</label>
          <input type="text" name="title" id="title" v-model="bookmark.title" />
        </div>
        <div class="form-control">
          <label for="description">Description</label>
          <textarea rows="3" name="description" id="description" v-model="bookmark.description" />
        </div>
        <div class="form-control">
          <label for="link">Link</label>
          <input type="url" name="link" id="link" v-model="bookmark.link" />
          <!-- ref="" is also valid instead of v-model -->
        </div>
        <div>
          <base-button type="submit">Create Bookmark </base-button>
        </div>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  emits: ['create-bookmark'],
  data() {
    return {
      bookmark: {
        id: '',
        title: '',
        description: '',
        link: ''
      }
    }
  },

  methods: {
    createBookmark() {
      this.bookmark.id = new Date().toISOString()
      // if using ref="", const bookmarkTitle = this.$refs.title.value [...]
      console.log(this.bookmark)
      this.$emit('create-bookmark', this.bookmark)
    }
  }
}
</script>
<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>