<template>
  <v-app-bar id="app-bar" title="RoadTrip Generator">
    <UserProfile v-if="user" @request:signoff="userContext.signOff()" :user="user" />
    <v-btn v-else @click="router.push('/login')">Login</v-btn>
  </v-app-bar>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import UserProfile from '@/components/Auth/UserProfile.vue'
import { storeToRefs } from 'pinia'
import { useUserContext } from '@/stores/userContext'
import router from '@/router'
const userContext = useUserContext()
const { user } = storeToRefs(userContext)
</script>

<style scoped>
#app-bar {
  position: fixed !important;
}
</style>
