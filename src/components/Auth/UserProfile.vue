<script setup>
import { User } from '@/models/user'
import { ref, defineEmits, computed } from 'vue'
const props = defineProps({ user: User })
const user = ref(props.user)
const emit = defineEmits(['request:signoff'])

const initial = computed(() => {
  return user.value.fullName
    .split(' ')
    .filter((word) => word.length > 0)
    .map((word) => word[0].toUpperCase()) // Convert to uppercase if needed
    .join('')
})
</script>

<template>
  <v-menu rounded>
    <template v-slot:activator="{ props }">
      <v-btn icon v-bind="props">
        <v-avatar color="blue" size="large">
          <span class="text-h5">{{ initial }}</span>
        </v-avatar>
      </v-btn>
    </template>
    <v-card>
      <v-card-text>
        <div class="mx-auto text-center">
          <h3>{{ user.fullName }}</h3>
          <p class="text-caption mt-1">
            {{ user.email }}
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
