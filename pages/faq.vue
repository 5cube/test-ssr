<template>
  <div class="container mx-auto px-3 pt-3">
    <h1 class="font-sans text-xl">{{ title }}</h1>
    <div class="font-sans pt-3">
      <div class="w-full flex flex-col px-3 text-sm">
        <div
          v-for="item in items"
          :key="item.title"
          :to="item.href"
          class="w-full flex flex-col py-2"
        >
          <div class="text-lg">
            {{ item.title }}
          </div>
          <div class="pt-2">
            {{ item.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Faq',
  data () {
    return {
      title: 'Часто задаваемые вопросы',
      items: [
        {
          title: '1. Что такое подписка?',
          text: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
        },
        {
          title: '2. Можно ли заказать товары которых нет в списке товаров?',
          text: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
        },
        {
          title: '3. Что такое бонусы и как их потратить?',
          text: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
        }
      ]
    }
  }
}
</script>
