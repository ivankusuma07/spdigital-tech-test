<template>
  <div class="mt-1 col-span-1">
    <div class="flex items-center flex-row mb-4">
      <input
        type="checkbox"
        :id="id ?? null"
        :name="name"
        :value="value"
        :checked="modelValue.includes(value)"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
        @input="updateValue"
      />
      <label :for="id ?? null" class="ms-2 text-sm font-medium text-gray-900">
        {{ label }} {{ `( $` + price + `)` }}</label
      >
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  id: String,
  label: String,
  name: String,
  price: Number,
  value: String,
  errors: Object,
  modelValue: Array,
})

const emit = defineEmits(['update:modelValue'])

const updateValue = function (event) {
  const arr = props.modelValue
  if (arr.includes(props.value)) {
    // Remove if present
    arr.splice(arr.indexOf(props.value), 1)
  } else {
    // Add if not present
    arr.push(props.value)
  }
  emit('update:modelValue', arr)
}
</script>
