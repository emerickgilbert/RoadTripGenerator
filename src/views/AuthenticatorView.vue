<script setup lang="ts">
import { Authenticator } from '@aws-amplify/ui-vue'
import { useUserContext } from '@/stores/userContext'
const userContext = useUserContext()

// `route` `user` and `signOut` all are reactive.
</script>

<template>
  <authenticator></authenticator>
</template>
