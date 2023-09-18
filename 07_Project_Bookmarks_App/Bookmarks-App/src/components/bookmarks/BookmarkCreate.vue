<template>
  <div>
    <base-dialog title="Invalid Input" v-if="inputIsInvalid" @close="confirmError">
      <!-- "@close" is a listener for the event close emitted in BaseDialog, the main component.-->
      <template #default>
        <p>Unfortunately, at least one input value is invalid.</p>
        <p>Please check the fields and try again.</p>
      </template>
      <template #actions> <base-button @click="confirmError">Okay</base-button> </template>
    </base-dialog>
    <base-card>
      <h2>Create Bookmark</h2>
      <form @submit.prevent="submitData">
        <div class="form-control">
          <label for="title">Title</label>
          <input type="text" name="title" id="title" ref="titleInput" />
        </div>
        <div class="form-control">
          <label for="description">Description</label>
          <textarea rows="3" name="description" id="description" ref="descriptionInput" />
        </div>
        <div class="form-control">
          <label for="link">Link</label>
          <input type="url" name="link" id="link" ref="linkInput" />
          <!-- v-model="" is also valid instead of ref -->
        </div>
        <div>
          <base-button type="submit">Create Bookmark</base-button>
        </div>
      </form>
    </base-card>
  </div>
</template>

<script>
import BaseDialog from '../UI/BaseDialog.vue'
export default {
  components: { BaseDialog },
  inject: ['createBookmark'], // injecting method
  data() {
    return {
      inputIsInvalid: false
    }
  },
  methods: {
    submitData() {
      const bookmark = {
        id: new Date().toISOString(),
        title: this.$refs.titleInput.value,
        description: this.$refs.descriptionInput.value,
        link: this.$refs.linkInput.value
      }
      if (
        bookmark.title.trim() === '' ||
        bookmark.description.trim() === '' ||
        bookmark.link.trim() === ''
      ) {
        this.inputIsInvalid = true
        return
      }
      this.createBookmark(bookmark) // using injected method
    },
    confirmError() {
      this.inputIsInvalid = false
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