<template>
  <div class="container mx-auto px-3 pt-3">
    <h1 class="font-sans text-xl">{{ title }}</h1>
    <div class="font-sans pt-3">
      <div class="w-full flex flex-col px-3 text-sm">
        <div class="w-full flex py-2" >
          <div>
            <font-awesome-icon :icon="['fab', 'whatsapp']" size="lg" fixed-width class="mr-3" style="color: #25d366;"></font-awesome-icon>
          </div>
          <div class="text-lg">
            WhatsApp
          </div>
        </div>
        <div class="w-full flex py-2" >
          <div>
            <font-awesome-icon :icon="['fab', 'telegram-plane']" size="lg" fixed-width class="mr-3" style="color: #0088cc;"></font-awesome-icon>
          </div>
          <div class="text-lg">
            Telegram
          </div>
        </div>
        <div class="w-full flex py-2" >
          <div>
            <font-awesome-icon :icon="['fab', 'vk']" size="lg" fixed-width class="mr-3" style="color: #45668e;"></font-awesome-icon>
          </div>
          <div class="text-lg">
            VK
          </div>
        </div>
        <hr class="my-1"/>
        <div class="w-full flex py-2" >
          <div>
            <font-awesome-icon icon="phone" size="lg" fixed-width flip="horizontal" class="mr-3 text-indigo"></font-awesome-icon>
          </div>
          <div class="text-lg">
            +7 (914) 296-6292
          </div>
        </div>
        <div class="w-full flex py-2" >
          <div>
            <font-awesome-icon icon="envelope" size="lg" fixed-width class="mr-3 text-indigo"></font-awesome-icon>
          </div>
          <div class="text-lg">
            test@mail.ru
          </div>
        </div>
        <div class="w-full flex py-2" >
          <div>
            <font-awesome-icon icon="map-marker" size="lg" fixed-width class="mr-3 text-indigo"></font-awesome-icon>
          </div>
          <div class="text-lg">
            Жилой комплекс "Прометей", Якутск, Автодорожная
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contacts',
  data () {
    return {
      title: 'Контакты'
    }
  }
}
</script>
