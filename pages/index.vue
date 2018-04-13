<template>
  <div>
    <div class="flex flex-wrap">
      <div
        v-for="n in 20" :key="n"
        class="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4"
      >
        <ProductItem :item="item"/>
      </div>
    </div>
    
  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem'

export default {
  // asyncData: () => ({
  //   mode: (process.server ? 'server' : 'client')
  // })
  name: 'Index',
  components: {
    ProductItem
  },
  data () {
    return {
      item: {
        image: 'https://tailwindcss.com/img/card-top.jpg',
        title: 'The Coldest Sunset',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.'
      }
    }
  }
}
</script>