<template>
  <div class="klaviyo-embed-form" v-html="snippet" />
</template>

<script>
export default {
  props: {
    embedCode: {
      type: String,
      default: ''
    }
  },
  computed: {
    snippet() {
      if (this.embedCode) {
        return this.embedCode
      }

      return this.$nacelle.klaviyo.defaultEmbedCode
    }
  }
}
</script>
