import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Location } from '@/models/location'
import { User } from '@/models/user'
import { checkGeolocationPermission } from '@/services/nativeLocation'
import { openRouteService } from '../services/openRouteService'
import { currentAuthenticatedUser } from '@/services/amplifyAuth'
export const useUserContext = defineStore('userContext', () => {
  const user = ref<User | null>(null)

  async function checkIfUserAuthenticated() {
    await currentAuthenticatedUser()
  }

  return { user, checkIfUserAuthenticated }
})
