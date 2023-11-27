<script setup>
import { ref, watch } from 'vue'
import Cart from '../components/CartItem.vue'
import Card from '../components/CardItem.vue'
// import TheWelcome from '../components/TheWelcome.vue'
// const emit = defineEmits(['update:modelValue'])

const addToCart = ref([])
const toCartPayload = ref([])

const onSendtoCard = (data) => {
  console.log('onSendtoCard', data)
  toCartPayload.value.push(data)
}

watch(addToCart, () => {
  console.log('payload from card', addToCart.value)
})
</script>

<template>
  <main class="font-sfpro">
    <!-- <TheWelcome /> -->

    <div class="title p-5">Pizza List</div>
    <Card @sendToCart="onSendtoCard" />
    <Cart v-model="toCartPayload" />
  </main>
</template>

<style scoped>
.title {
  /* color: #838383; */
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
</style>
