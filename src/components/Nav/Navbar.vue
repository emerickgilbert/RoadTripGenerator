<template>
  <v-app-bar id="app-bar">
    <v-app-bar-title @click="$router.push('/')">RoadTrip Generator</v-app-bar-title>
    <UserProfile v-if="user" @request:signoff="signOut()" :user="user" />
    <v-btn v-else @click="router.push('/authenticate')">Login</v-btn>
  </v-app-bar>
</template>

<script setup lang="ts">
import UserProfile from '@/components/Auth/UserProfile.vue'
import router from '@/router'
import { toRefs } from 'vue'
import { useAuthenticator } from '@aws-amplify/ui-vue'
// `route` `user` and `signOut` all are reactive.
const { user, signOut } = toRefs(useAuthenticator())
</script>

<style scoped>
#app-bar {
  position: fixed !important;
}
</style>
