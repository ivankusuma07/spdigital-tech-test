<template>
  <div class="cart-wrapper">
    <div class="title p-5">Cart</div>
    <div class="flex flex-col gap-5 p-4 max-h-[73vh] overflow-y-auto">
      <div
        v-if="dataPizza.length === 0"
        class="empty items-center flex justify-center ml-5 w-96 align-middle h-[50vh]"
      >
        The shopping cart is still empty, click item to add to cart
      </div>
      <div v-else class="cart-card" v-for="(datas, idx) in dataPizza" :key="idx">
        <div class="flex flex-row">
          <div class="p-2">
            <img
              :src="datas.img"
              alt=""
              class="rounded-md h-[122px] max-w-[122px] object-cover"
            />
          </div>
          <div class="flex flex-col flex-wrap my-auto p-2">
            <div class="subtitle">{{ datas.title }}</div>
            <div v-if="datas.topping.length > 0" class="title-toping mb-4 break-all">
              {{
                datas.topping.length <= 1 ? datas.topping[0] : listStrings(datas.topping)
              }}
            </div>
            <div v-else class="title-toping mb-4">No Toppings</div>
            <div class="title-price text-[#838383]">$ {{ datas.price }}</div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="fixed bottom-10 right-5 total-price bg-primary">
        <div class="flex flex-row justify-between total-font p-4">
          <div>Total</div>
          <div>${{ totalPrice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
const props = defineProps({
  modelValue: Array,
})
const dataPizza = ref([
  // {
  //   srcimg:
  //     'https://4.bp.blogspot.com/-2qY6ye-DyB0/XAZaiBaO54I/AAAAAAABbQQ/0iMqZuo_4_4I8vJIW3YEQL19wyZYaAlZwCLcBGAs/s640/cara%2Bhemat%2Bmakan%2Bpizza%2Bdi%2Bdomino.png',
  //   title: 'AMERICAN CLASSIC CHEESEBURGER',
  //   price: 8,
  // },
  // {
  //   srcimg:
  //     'https://www.newsday.com/_next/image?url=https%3A%2F%2Fcdn.newsday.com%2Fimage-service%2Fversion%2Fc%3AM2RmNjg1MjItMDNiNi00%3AZjU2MzAw%2Ffdfmmain200109.jpg%3Ff%3DLandscape%2B16%253A9%26w%3D770%26q%3D1&w=828&q=80',
  //   title: 'GRILLED BEEF SUPREME',
  //   price: 12,
  // },
  // {
  //   srcimg:
  //     'https://i0.wp.com/weirdandwildpizza.com/wp-content/uploads/2021/01/main-2.jpg?resize=2048%2C1152&ssl=1',
  //   title: 'CHEESY MEATBALL BLAST',
  //   price: 15,
  // },
  // {
  //   srcimg:
  //     'https://www.newsday.com/_next/image?url=https%3A%2F%2Fcdn.newsday.com%2Fimage-service%2Fversion%2Fc%3AM2RmNjg1MjItMDNiNi00%3AZjU2MzAw%2Ffdfmmain200109.jpg%3Ff%3DLandscape%2B16%253A9%26w%3D770%26q%3D1&w=828&q=80',
  //   title: 'GRILLED BEEF SUPREME',
  //   price: 12,
  // },
])

const arrayPrice = ref([])
// const getPrice = () => {
//   arrayPrice.value = dataPizza.value.map(data=> data.price)
//   console.log()
// }

watch(props.modelValue, () => {
  if (props.modelValue.length > 0) {
    dataPizza.value = props.modelValue
    sumPrice()
  }
})
const totalPrice = ref(0)
const sumPrice = () => {
  arrayPrice.value = dataPizza.value.map((data) => data.price)
  console.log('sum array price', arrayPrice.value)
  const data = arrayPrice.value.reduce((pv, cv) => pv + cv, 0)
  totalPrice.value = data
  // dataPizza.value = props.modelValue
}
// sumPrice()

const listStrings = (arr) => {
  return arr.slice(0, -1).join(' , ') + ' , ' + arr.at(-1) + ''
}
</script>

<style scoped>
.cart-wrapper {
  @apply bg-sky-100 shadow-lg;
  /* background: #f7f9ff; */
  position: absolute;
  right: 0;
  top: 0;
  min-width: 460px;
  height: 100vh;
  /* background: #f5f5f5; */
}
.title {
  /* color: #838383; */
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.cart-card {
  @apply shadow-md border-b-4 border-primary;
  background: #f7f9ff;
  /* background-color: white; */
  width: 412px;
  height: 138px;
  border-radius: 12px;
}

.subtitle {
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.title-price {
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.title-toping {
  /* color: #a7a7a7; */
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.total-price {
  border-radius: 8px;
  /* background: #dadada; */
  width: 420px;
  height: 64px;
}

.total-font {
  @apply text-white;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.empty {
  /* color: #838383; */
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
