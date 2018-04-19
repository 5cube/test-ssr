<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal p-6 pin-t" style="position: sticky;">
    <div class="flex items-center flex-no-shrink text-white mr-6">
      <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>
      </svg>
      <span class="font-semibold text-xl tracking-tight">{{ title }}</span>
    </div>
    <div class="block sm:hidden">
      <button @click="toggle" class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
        <font-awesome-icon v-if="open" icon="times" class="fill-current h-3 w-3"></font-awesome-icon>
        <font-awesome-icon v-else icon="bars" class="fill-current h-3 w-3"></font-awesome-icon>
      </button>
    </div>
    <div :class="open ? 'block': 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
      <div class="text-sm sm:flex-grow">
        <a
          v-for="item in items"
          :key="item.title"
          :href="item.href"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
          @click.prevent="onItemClick(item.href)"
        >
          {{ item.title }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      open: false,
      items: [
        {
          title: 'Товары',
          href: '/'
        },
        {
          title: 'О нас',
          href: '/about'
        },
        {
          title: 'Вопросы-ответы',
          href: '/faq'
        },
        {
          title: 'Контакты',
          href: '/contact'
        }
      ],
      title: 'Deliver'
    }
  },
  methods: {
    onItemClick (href) {
      this.$router.push({ path: href })
      this.open = false
    },
    toggle () {
    	this.open = !this.open
    }
  }
}
</script>
