<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Nav/Navbar.vue'
</script>

<template>
  <v-app class="pa-0">
    <v-layout>
      <Navbar />

      <v-main class="d-flex align-center justify-center">
        <!-- <authenticator>
        <template v-slot="{ user, signOut }">
          <nav>
            <h1>Hello {{ user.username }}!</h1>
            <button @click="signOut">Sign Out</button>
          </nav>
          <RouterView />
        </template>
      </authenticator> -->
        <RouterView />
      </v-main>
    </v-layout>
  </v-app>
</template>

<style scoped></style>
