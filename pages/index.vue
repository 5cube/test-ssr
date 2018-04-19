<template>
  <div>
    <div class="flex flex-wrap">
      <template v-for="category in categories">
        <div
          class="w-full bg-orange-lightest px-1 py-3 text-lg"
          :key="category.id">{{ category.name }}</div>
        <div
          v-for="product in category.products"
          :key="product.id"
          class="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-2"
        >
          <ProductItem :item="product" :height="isMobile ? 'h-48' : 'h-64'"/>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem'
import { mapGetters, mapActions } from 'vuex'

export default {
  async fetch ({ store, params }) {
    await store.dispatch('products/fetchCategories')
  },
  name: 'Index',
  components: {
    ProductItem
  },
  data () {
    return {
      isMobile: false
    }
  },
  computed: {
    ...mapGetters({
      categories: 'products/categories'
    })
  },
  methods: {
    onResize () {
      this.isMobile = window.innerWidth < 600
    }
  },
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  beforeDestroy () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true })
    }
  }
}
</script>