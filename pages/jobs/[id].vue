<template>
  <div>
    <div class="ml-4 md:ml-8">
      <nuxt-link class="btn btn-outline btn-sm gap-2" to="/jobs">
        <ArrowLeftIcon class="h-[1rem]" />
        All Jobs</nuxt-link>
    </div>
    <div class="grid md:grid-cols-3 grid-cols-1 md:gap-4 my-4">
      <div class="col-span-2 md:p-8 p-4">
        <h2 class="text-slate-500 font-bold">JOB DETAILS</h2>
        <h2 class="text-3xl text-bold">
          {{ jobData.vacancy }}
        </h2>
        <div class="job-meta mt-2">
          <p class="text-semibold text-slate-500">
            {{ jobData.recruiter }} • <timeago :datetime="jobData.createdAt" />
          </p>
        </div>
        <div class="divider"></div>
        <div>
          {{ jobData.description }}
        </div>
      </div>
      <div>
        <JobApplyCard :avatar="avatar" :recruiter="jobData.recruiter" />
      </div>
    </div>
  </div>
</template>
<script setup>
//https://www.reddit.com/r/Nuxt/comments/wnal2h/nuxt_3_how_the_data_fetching_and_refreshing_is/
//useAsyncData and useFetch will use initialCache, so they don't get new data unless refresh.
//Easiest possible solution: add initialCache: false
//Second solution: give them a unique key
import { computed, ref } from "vue";
import getStrapiMedia from "~~/utils/getMediaUrl";
import { ArrowLeftIcon } from '@heroicons/vue/24/outline'
const jobData = ref({});
const route = useRoute();
const { data, pending, error, refresh } = await useAsyncData(
  `job-${route.params.id}`,
  async () => {
    const response = await useBaseFetch(
      `jobs/${route.params.id}?populate=avatar,categories`
    );
    //   jobData.value = response.data;
    return response;
  },
  {
    initialCache: true,
  }
);

if (data) jobData.value = data.value.data.attributes;

const avatar = computed(() => {
  return getStrapiMedia(jobData.value.avatar.data.attributes.formats.thumbnail);
});
</script>
