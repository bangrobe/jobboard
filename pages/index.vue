<template>
    <div>
        <div class="text-left">
            <h3 class="font-weight-bold text-2xl">Latest Jobs</h3>
        </div>
        <div class="flex flex-col">
            <JobCard v-for="job in jobs" :key="job.id" :job="job"/>
        </div>
    </div>
</template>

<script setup>
    import { computed } from 'vue'
    const { data, pending, error, refresh } = await useAsyncData("jobs-home", ()=> useBaseFetch('jobs?populate[categories][fields][0]=name&populate[avatar][fields][1]=formats'))
    const jobs = computed(()=> {
        return data.value.data;
    })
</script>
