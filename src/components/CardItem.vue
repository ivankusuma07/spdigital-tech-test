<template>
  <div class="flex flex-row gap-10 p-5">
    <div
      class="card-wrapper cursor-pointer"
      v-for="(datas, idx) in dataPizza"
      :key="idx"
      @click="openModal(idx)"
    >
      <div class="flex flex-col">
        <div class="w-100 p-2">
          <img :src="datas.srcimg" alt="" class="rounded-md max-h-[155px] object-fill" />
        </div>
        <div class="text-center subtitle mt-4">
          {{ datas.title }}
        </div>
        <div v-if="datas.price === 8" class="text-center mt-3">
          <div class="title-price text-[#A7A7A7;] line-through inline-block mr-2">
            $ 10
          </div>
          <span class="text-[#838383]">$ {{ datas.price }}</span>
        </div>
        <div v-else class="text-center title-price text-[#838383] mt-3">
          $ {{ datas.price }}
        </div>
      </div>
    </div>
  </div>

  <!-- <button data-modal-target="popup-modal" data-modal-toggle="popup-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
Toggle modal
</button> -->

  <div
    id="popup-modal"
    v-if="modalTopping"
    tabindex="-1"
    :class="`${
      modalTopping ? ' flex ' : 'hidden'
    }   'overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full'`"
  >
    <div class="relative p-4 w-full max-w-md max-h-full">
      <div class="relative bg-white rounded-lg shadow">
        <button
          type="button"
          class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
          data-modal-hide="popup-modal"
          @click="modalTopping = false"
        >
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <div class="title p-5">Topings</div>
        <div class="p-5 -my-4">
          Selected Pizza is <span class="font-bold"> {{ selectedMenu }}</span>
        </div>
        <div class="p-4 md:p-5 text-right">
          <div class="grid grid-cols-3 gap-1">
            <!-- <div class="col-span-1" v-for="(topping, idx) in listToppings" :key="idx">
              <div class="flex items-center flex-row mb-4">
                <input
                  :id="topping.name"
                  type="checkbox"
                  :value="topping.name"
                  v-model="selectedToppings"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label :for="topping.name" class="ms-2 text-sm font-medium text-gray-900">
                  {{ topping.name }} {{ `( $` + topping.price + `)` }}</label
                >
              </div>
            </div> -->
            <Checkbox
              v-for="(topping, idx) in listToppings"
              :key="idx"
              v-model="selectedToppings"
              :value="topping.name"
              :label="topping.name"
              :price="topping.price"
              name="status"
            />
          </div>
          <!-- {{ selectedToppings }} -->
          <button
            type="button"
            @click="addToCart"
            class="text-white mt-4 bg-primary hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import Checkbox from './Checkboxes.vue'
const dataPizza = ref([
  {
    srcimg:
      'https://4.bp.blogspot.com/-2qY6ye-DyB0/XAZaiBaO54I/AAAAAAABbQQ/0iMqZuo_4_4I8vJIW3YEQL19wyZYaAlZwCLcBGAs/s640/cara%2Bhemat%2Bmakan%2Bpizza%2Bdi%2Bdomino.png',
    title: 'AMERICAN CLASSIC CHEESEBURGER',
    price: 8,
  },
  {
    srcimg:
      'https://www.newsday.com/_next/image?url=https%3A%2F%2Fcdn.newsday.com%2Fimage-service%2Fversion%2Fc%3AM2RmNjg1MjItMDNiNi00%3AZjU2MzAw%2Ffdfmmain200109.jpg%3Ff%3DLandscape%2B16%253A9%26w%3D770%26q%3D1&w=828&q=80',
    title: 'GRILLED BEEF SUPREME',
    price: 12,
  },
  {
    srcimg:
      'https://i0.wp.com/weirdandwildpizza.com/wp-content/uploads/2021/01/main-2.jpg?resize=2048%2C1152&ssl=1',
    title: 'CHEESY MEATBALL BLAST',
    price: 15,
  },
])

const selectedToppings = ref([])

watch(selectedToppings, () => {
  console.log('selected', selectedToppings.value)
})

const listToppings = ref([
  {
    name: 'Avocado',
    price: 1,
  },
  {
    name: 'Lobster',
    price: 2,
  },
  {
    name: 'Bacon',
    price: 3,
  },
  {
    name: 'Broccoli',
    price: 1,
  },
  {
    name: 'Oyster',
    price: 2,
  },
  {
    name: 'Duck',
    price: 3,
  },
  {
    name: 'Onions',
    price: 1,
  },
  {
    name: 'Salmon',
    price: 2,
  },
  {
    name: 'Ham',
    price: 3,
  },
  {
    name: 'Zucchini',
    price: 1,
  },
  {
    name: 'Tuna',
    price: 2,
  },
  {
    name: 'Sausage',
    price: 3,
  },
])

const modalTopping = ref(false)
const dataId = ref('')
const openModal = (id) => {
  console.log('open modal')
  selectedToppings.value = []
  dataId.value = ''
  modalTopping.value = true
  dataId.value = id
  selectedMenus(dataId.value)
}

const selectedMenu = ref('')
const selectedMenus = (id) => {
  if (id === 0) {
    selectedMenu.value = 'American Classic Cheeseburger'
  } else if (id === 1) {
    selectedMenu.value = 'Grilled Beef Supreme'
  } else {
    selectedMenu.value = 'Cheesy Meatball Blast'
  }
}

// const props = defineProps({
//   modelValue: Array,
// })
const emit = defineEmits(['sendToCart'])
const addToCart = () => {
  let totalToppingPrice = 0
  const selectedToppingPrice = listToppings.value
    .filter((data) => selectedToppings.value.includes(data.name))
    .map((data) => data.price)
  // console.log('selected toping price', selectedToppingPrice)
  totalToppingPrice = selectedToppingPrice.reduce((pv, cv) => pv + cv, 0)
  // console.log('sum toping price', totalToppingPrice)
  // totalPrice.value = data

  // let menuPrice = 0
  // let imgSrc = ''

  // if(dataId.value === 0) {
  //   menuPrice = 8
  // } else  if (dataId.value === 1){
  //   menuPrice = 12
  // } else {
  //   menuPrice = 15
  // }

  const selectedPayload = dataPizza.value.filter((data, idx) => idx === dataId.value)
  console.log('selected payload ', selectedPayload)

  const payload = {
    title: selectedPayload[0].title,
    img: selectedPayload[0].srcimg,
    price: selectedPayload[0].price + totalToppingPrice,
    topping: selectedToppings.value,
  }
  console.log('payload', payload)
  emit('sendToCart', payload)
  modalTopping.value = false
}
</script>

<style scoped>
.card-wrapper {
  @apply shadow-md border-b-4 border-secondary;
  background: #f7f9ff;
  width: 267px;
  height: 268px;
  border-radius: 12px;
}
.title {
  /* color: #838383; */
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
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
</style>
