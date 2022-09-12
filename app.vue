<template>
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <AppNavbar />
      <Banner v-if="route.path === '/'" />
      <main class="bg-base-200">
        <div class="md:max-w-screen-xl mx-auto md:px-0 px-2 py-4 w-full">
          <NuxtPage />
        </div>
      </main>
      <AppFooter />
    </div>
    <LeftDrawer />
  </div>
</template>
<script setup>
const route = useRoute();
console.log(route.path);
</script>
