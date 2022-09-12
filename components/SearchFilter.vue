<template>
  <div class="flex flex-col mt-4">
    <div class="bg-white p-6 rounded-xl shadow-lg">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <div class="flex flex-col">
          <input
            type="text"
            id="name"
            placeholder="Skill, company, tag..."
            class="input input-bordered w-full max-w-xs shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
          />
        </div>
        <div class="flex flex-col">
          <select
            id="category"
            class="select select-bordered w-full max-w-xs focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
          >
            <option selected disabled>All categories</option>
            <option>UI/UX Design</option>
            <option>Product Management</option>
            <option>Marketing & Sales</option>
          </select>
        </div>

        <div class="flex flex-col">
          <input
            type="text"
            id="location"
            placeholder="Location"
            class="input input-bordered w-full max-w-xs shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
          />
        </div>
        
      <div>
        <button
          class="btn btn-success py-4 w-full hover:bg-teal-500 font-bold text-white transition ease-in-out duration-200 translate-10"
        >
          Search
        </button>
      </div>
      </div>

    </div>
  </div>
</template>

<script setup></script>
