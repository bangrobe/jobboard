<template>
    <section class="hero md:h-[300px] h-screen search-wrapper">
        <div class="bg-opacity-60 hero-overlay"></div>
        <div class="text-center hero-content">
            <div class="max-w-3xl">
                <h2 class="text-h2 text-3xl font-semibold text-white">Find Your Next Dream Job</h2>
                <p class="text-weight-bold text-white">Connecting the best jobs with top talent</p>
                <SearchFilter />
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped>
.search-wrapper {
    background: url('~/assets/images/bg-top.jpg') no-repeat center center;
}
</style>