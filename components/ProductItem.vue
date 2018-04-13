<template>
  <div class="max-w-sm mt-4 mx-2 rounded overflow-hidden shadow">
    <img class="w-full" :src="item.image">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ item.title }}</div>
      <p class="text-slate text-base">{{ item.subtitle }}</p>
    </div>
    <!-- <div class="px-6 py-4">
      <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-slate mr-2">#photography</span>
      <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-slate mr-2">#travel</span>
      <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-slate">#winter</span>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
    }
  }
}
</script>