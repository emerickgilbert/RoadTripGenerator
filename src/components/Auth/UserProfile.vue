<script setup lang="ts">
import { ref, defineEmits } from 'vue'
const props = defineProps({ user: Object })
const user = ref(props.user)
const emit = defineEmits(['request:signoff'])
</script>

<template>
  <v-menu rounded>
    <template v-slot:activator="{ props }">
      <v-btn icon v-bind="props">
        <v-avatar color="blue" icon="mdi-account-circle"> </v-avatar>
      </v-btn>
    </template>
    <v-card>
      <v-card-text>
        <div class="mx-auto text-center">
          <h3>{{ user?.username }}</h3>
          <p class="text-caption mt-1">
            {{ user?.email }}
          </p>
          <v-divider class="my-3"></v-divider>
          <v-btn variant="text" rounded> Edit Account </v-btn>
          <v-divider class="my-3"></v-divider>
          <v-btn variant="text" rounded @click="emit('request:signoff')"> Signoff </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<style scoped></style>
