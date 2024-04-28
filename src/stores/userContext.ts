import { defineStore } from 'pinia'
import { ref, watch, toRefs } from 'vue'
import { getCurrentUser, fetchUserAttributes } from 'aws-amplify/auth' // Import Auth from aws-amplify
import router from '@/router'
import { useAuthenticator } from '@aws-amplify/ui-vue'
// `route` `user` and `signOut` all are reactive.
import { Location } from '@/models/location'
import { User } from '@/models/user'
import { checkGeolocationPermission } from '@/services/nativeLocation'
import { openRouteService } from '../services/openRouteService'
import { currentAuthenticatedUser } from '@/services/amplifyAuth'
export const useUserContext = defineStore('userContext', () => {
  const { route, user, signOut, authStatus } = toRefs(useAuthenticator())
  const authenticationStatus = ref(authStatus)
  // const user = ref<User | null>(null)

  watch(authenticationStatus, () => {
    console.log(authenticationStatus.value)
    if (authenticationStatus.value == 'authenticated') {
      router.push('/')
    }
  })

  async function checkIfUserAuthenticated(): Promise<any> {
    try {
      await getCurrentUser()

      await getUserInfo()
    } catch (error) {
      // console.error('Error checking authentication:', error)
      user.value = null // Set user to null on error
    }
  }

  async function getUserInfo() {
    const cognitoUser = await fetchUserAttributes() // Use Auth.currentAuthenticatedUser()
    if (cognitoUser) {
      user.value = {
        location: new Location(), // Initialize location
        email: cognitoUser.email, // Map email from Cognito attributes
        fullName: `${cognitoUser.given_name} ${cognitoUser.family_name}` // Map name from Cognito attributes (assuming given_name and family_name exist)

        // ... other user properties as defined in your User class
      }
    }
  }

  // async function signOff() {
  //   try {
  //     await signOut() // Sign out using Auth.signOut()
  //     user.value = null // Set user to null after sign off
  //     router.push('/')
  //     console.log('User signed out successfully')
  //   } catch (error) {
  //     console.error('Error signing out:', error)
  //   }
  // }

  return { user, authenticationStatus, checkIfUserAuthenticated }
})
