<template>
  <header class="w-full bg-white shadow-sm">
    <nav class="flex items-center max-w-screen-xl mx-auto px-4 py-4">
      <div class="flex flex-grow items-center">
        <div class="flex-none md:hidden mr-2">
        <label for="my-drawer" class="btn btn-square btn-ghost">
          <Bars3Icon class="h-[1.5rem]" />
        </label>
      </div>
        <nuxt-link to="/">
          <h1 class="flex items-center">
            <BriefcaseIcon
              style="
                height: 36px;
                width: auto;
                max-width: 100px;
                margin-right: 5px;
              "
            />
            DigiJob
          </h1>
        </nuxt-link>
      </div>

      <div class="hidden md:flex items-center justify-end space-x-4 mr-2">
        <nuxt-link class="btn btn-ghost no-caps" to="/jobs">Jobs</nuxt-link>
        <div class="divider divider-horizontal"></div>
        <button class="btn btn-ghost no-caps">Employer Login</button>
      </div>
      <button class="btn btn-success">Post a job</button>
    </nav>
  </header>
</template>

<script setup>
import { BriefcaseIcon } from "@heroicons/vue/24/solid";
import { Bars3Icon } from "@heroicons/vue/24/outline";
</script>
