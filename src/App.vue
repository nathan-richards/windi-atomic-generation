<script setup lang="ts">
import { onMounted } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import { fetchJSON } from "./composables/atomGeneration/scripts/fetchJSON";
import { buildJSON } from "./composables/atomGeneration/scripts/buildJSON";

const fileURL =
  "./src/composables/atomGeneration/files/untitled-design-tokens.tokens.json";

onMounted(async () => {
  const json = await fetchJSON(fileURL);
  if (typeof json === "object" && json != null) {
    console.log(buildJSON(json));
  }
});
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
