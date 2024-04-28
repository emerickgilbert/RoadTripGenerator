<script setup lang="ts">
import { ref } from 'vue'
import { useUserContext } from '@/stores/userContext'

const userContext = useUserContext()
const username = ref<string>('')
const password = ref<string>('')
const email = ref<string>('')
const firstName = ref<string>('')
const lastName = ref<string>('')
const valid = ref(false)

const handleSubmit = async () => {
  try {
    console.log(username.value)
    const user = await userContext.handleSignUp({
      username: username.value,
      password: password.value,
      email: email.value,
      given_name: firstName.value,
      family_name: lastName.value
    })
    console.log('User signed in:', user)
    // Handle successful login (e.g., navigate to another page)
  } catch (error) {
    console.error('Login error:', error)
    // Handle login errors (e.g., display error message)
  }
}
</script>
<template>
  <v-form v-model="valid" @submit.prevent="handleSubmit">
    <v-card>
      <v-card-title>Signup</v-card-title>
      <v-card-text>
        <v-text-field v-model="username" label="Username" required autofocus />
        <v-text-field v-model="password" label="Password" type="password" required />
        <v-text-field v-model="email" label="Email" type="email" required />
        <v-text-field v-model="firstName" label="First Name" required />
        <v-text-field v-model="lastName" label="Last Name" required />
      </v-card-text>

      <v-card-actions>
        <v-btn type="submit" color="primary">Create account</v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>
