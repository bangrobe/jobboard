<template>
  <footer class="footer footer-center bg-black text-white py-4">
    <div>
        <BriefcaseIcon style="width: 32px; height: 32px;" />
      <p class="font-bold">
        Job demo <br />Providing reliable tech since 1992
      </p>
      <p>Copyright © 2022 - All right reserved</p>
    </div>
    <div>
      <div class="flex items-center space-x-2 p-4">
        <a>
            <FacebookIcon />
        </a>
        <a>
            <TwitterIcon />
        </a>
        <a>
            <YoutubeIcon />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { BriefcaseIcon } from '@heroicons/vue/24/solid'
import FacebookIcon from './Icons/FacebookIcon.vue';
import TwitterIcon from './Icons/TwitterIcon.vue';
import YoutubeIcon from './Icons/YoutubeIcon.vue';
</script>

<style lang="scss" scoped></style>
