<template>
  <p>{{ location }}</p>
</template>

<script setup lang="ts">
import { useLocationContext } from '@/stores/locationContext'
import { onBeforeMount, onMounted } from 'vue'
import { storeToRefs } from 'pinia'

const locationContext = useLocationContext()

const { location } = storeToRefs(locationContext)

onMounted(async () => {
  await locationContext.fetchAndUpdateLocation()
})
</script>

<style scoped></style>
