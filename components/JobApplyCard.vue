<template>
  <div class="card card-bordered bg-white shadow-md p-8">
    <div class="avatar text-center mx-auto">
      <div class="w-24 rounded">
        <img :src="avatar" />
      </div>
    </div>
    <p class="text-center font-extrabold my-2">
      {{ recruiter }}
    </p>
    <button class="btn btn-accent btn-block text-white">Apply</button>
  </div>
</template>
<script setup>
const props = defineProps({
    avatar: {
        type: String
    },
    recruiter: {
        type: String
    }
})
</script>
