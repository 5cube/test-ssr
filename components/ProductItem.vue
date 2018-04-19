<template>
  <div class="max-w-sm mt-2 mx-1 rounded overflow-hidden shadow">
    <img
      :class="['w-full', height]"
      :src="image">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ item.name }}</div>
      <p class="text-slate text-base">{{ item.subtitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    height: {
      type: String,
      default: 'h-64'
    }
  },
  data () {
    return {
    }
  },
  computed: {
    image () {
      return this.item.images ? this.item.images[0]: ''
    }
  },
  methods: {
  }
}
</script>