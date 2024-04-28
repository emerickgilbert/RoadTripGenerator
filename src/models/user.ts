import { Location } from './location'
import { checkGeolocationPermission } from '@/services/nativeLocation'

interface AuthInfo {
  // Define properties for your authentication data (e.g., accessToken, userId)
  accessToken?: string
  userId?: string
  // Add other relevant auth info based on your Amplify setup
}

class User {
  location?: Location
  email?: string
  fullName?: string
  authInfo?: AuthInfo // Optional authInfo property

  constructor(
    location?: Location,
    email?: string,
    fullName?: string,
    authInfo?: AuthInfo // Optional authInfo parameter
  ) {
    this.location = location || new Location()
    this.email = email || ''
    this.fullName = fullName || ''
    this.authInfo = authInfo // Assign authInfo if provided
  }
}

export { User }
