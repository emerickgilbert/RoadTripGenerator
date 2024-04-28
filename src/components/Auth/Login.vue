<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { signIn } from 'aws-amplify/auth'
import { useUserContext } from '@/stores/userContext'

const userContext = useUserContext()
const username = ref<string>('')
const password = ref<string>('')
const valid = ref(false)

const handleSubmit = async () => {
  try {
    console.log(username.value)
    const user = await userContext.handleSignIn({
      username: username.value,
      password: password.value
    })
    console.log('User signed in:', user)
    // Handle successful login (e.g., navigate to another page)
  } catch (error) {
    console.error('Login error:', error)
    // Handle login errors (e.g., display error message)
  }
}

onBeforeMount(async () => {
  await userContext.signOff()
})
</script>
<template>
  <v-form v-model="valid" @submit.prevent="handleSubmit">
    <v-card>
      <v-card-title>Login</v-card-title>
      <v-card-text>
        <v-text-field v-model="username" label="Username" required autofocus />
        <v-text-field v-model="password" label="Password" type="password" required />
      </v-card-text>

      <v-card-actions>
        <v-btn type="submit" color="primary">Login</v-btn>
        <v-btn @click="$router.push('/signup')">Signup</v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>
