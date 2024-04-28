// Assuming Coordinates and Location are imported from '@/models/location'
import { Coordinates } from '@/models/Coordinates'
import { Location } from '@/models/location'

async function checkGeolocationPermission(): Promise<Location | undefined> {
  if (!navigator.geolocation) {
    console.error('Geolocation is not supported by your browser')
    return undefined
  }

  try {
    const permissionStatus = await navigator.permissions.query({ name: 'geolocation' })
    if (permissionStatus.state === 'granted' || permissionStatus.state === 'prompt') {
      // This will trigger a browser prompt if the permission is in 'prompt' state
      return new Promise((resolve, reject) => {
        navigator.geolocation.watchPosition(
          (position) => {
            const location = new Location(
              new Coordinates(position.coords.latitude, position.coords.longitude)
            )
            resolve(location)
          },
          (error) => {
            console.error('Error obtaining location:', error)
            reject(error)
          },
          { enableHighAccuracy: true }
        )
      })
    } else {
      console.log('Geolocation permission denied or not granted:', permissionStatus.state)
      return undefined
    }
  } catch (error) {
    console.error('Error checking geolocation permission:', error)
    return undefined
  }
}

export { checkGeolocationPermission }
