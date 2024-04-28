import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import {
  signIn,
  signUp,
  type SignInInput,
  signOut,
  getCurrentUser,
  fetchUserAttributes
} from 'aws-amplify/auth' // Import Auth from aws-amplify
import { type SignUpParameters } from '../Types/Types'
import router from '@/router'

import { Location } from '@/models/location'
import { User } from '@/models/user'
import { checkGeolocationPermission } from '@/services/nativeLocation'
import { openRouteService } from '../services/openRouteService'
import { currentAuthenticatedUser } from '@/services/amplifyAuth'
export const useUserContext = defineStore('userContext', () => {
  const user = ref<User | null>(null)

  watch(user, () => {
    console.log('sss', user.value)
  })

  async function handleSignIn({ username, password }: SignInInput) {
    try {
      const { isSignedIn, nextStep } = await signIn({ username, password })

      if (isSignedIn) {
        await getUserInfo()
      }

      router.push('/')
    } catch (error) {
      console.log('error signing in', error)
    }
  }

  async function handleSignUp({
    username,
    password,
    email,
    given_name,
    family_name
  }: SignUpParameters) {
    try {
      const { isSignUpComplete, userId, nextStep } = await signUp({
        username,
        password,
        options: {
          userAttributes: {
            email,
            given_name,
            family_name
          },
          // optional
          autoSignIn: true // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
        }
      })

      await getUserInfo()
    } catch (error) {
      console.log('error signing up:', error)
    }
  }

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

  async function signOff() {
    try {
      await signOut() // Sign out using Auth.signOut()
      user.value = null // Set user to null after sign off
      router.push('/')
      console.log('User signed out successfully')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  return { user, handleSignIn, handleSignUp, checkIfUserAuthenticated, signOff }
})
