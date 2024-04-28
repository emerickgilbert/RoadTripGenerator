<template>
  <v-card>
    <v-card-title
      >Latitude: {{ location?.coordinates.latitude }}, Longitude:
      {{ location?.coordinates.longitude }}</v-card-title
    >
  </v-card>
</template>

<script setup lang="ts">
import { useLocationContext } from '@/stores/locationContext'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'

const locationContext = useLocationContext()

const { location } = storeToRefs(locationContext)

onMounted(async () => {
  await locationContext.fetchAndUpdateLocation()
})
</script>

<style scoped></style>
