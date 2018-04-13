<template>
  <div class="container mx-auto px-3 pt-3">
    <h1 class="font-sans text-xl">{{ title }}</h1>
    <div class="font-sans pt-3" v-html="text"></div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      title: 'О сервисе',
      text: `<p><strong>Deliver</strong> - это быстрая и безопасная доставка продуктов прямо в Ваш дом.</p>
        <p>Мы доставляем только в Вашем районе. Доставляем заранее накопленные товары.</p>
        <p>Время доставки от 15 мин.</p>
        <p>Широкий ассортимент.</p>
        <p>Цена не дороже чем в магазине.</p>
        <p>Доставка бесплатна.</p>
        <p>Доставляем 24/7.</p>
      `
    }
  }
}
</script>
