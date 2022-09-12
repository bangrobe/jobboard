<template>
  <div>
    <div class="flex p-4 rounded-md border-[1px] border-grey-400 my-2 bg-white shadow-sm">
      <div class="flex space-x-4 grow">
        <div class="avatar">
          <div class="w-24 rounded-xl">
            <img
                :src="mediaUrl"
                :alt="job?.attributes.avatar.data.attributes.formats.thumbnail.name"
            />
            
          </div>
        </div>
        <div class="job-info">
          <nuxt-link class="font-weight-bold" :to="`/jobs/${job.id}`">
            {{ job.attributes.vacancy}}
          </nuxt-link>
          <p class="text-gray-400 mt-2"> {{ job.attributes.recruiter }} - {{ category }} </p>
          <div class="flex space-x-1 mt-2">
            <span class="badge badge-outline badge-gray-300">OEM</span>
            <span class="badge badge-outline badge-gray-300">ODM</span>
          </div>
        </div>
      </div>
      <div class="flex justify-end items-center">
        <ClockIcon class="w-[1.2rem]" /> 
        <timeago :datetime="job.attributes.createdAt" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { ClockIcon } from '@heroicons/vue/24/outline'
import getStrapiMedia from '../utils/getMediaUrl';
const props = defineProps({
    job: {
        type: Object,
        required: true
    }
})
const mediaUrl = computed(()=> {
   return getStrapiMedia(props.job?.attributes.avatar.data.attributes.formats.thumbnail)
})

const category = computed(()=> {
    return props.job.attributes.categories.data[0].attributes.name;
})
</script>