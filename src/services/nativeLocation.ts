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
    if (permissionStatus.state === 'granted') {
      return new Promise((resolve, reject) => {
        navigator.geolocation.watchPosition(
          (position) => {
            console.log('calledd')
            const location = new Location(
              new Coordinates(position.coords.latitude, position.coords.longitude)
            )
            resolve(location)
          },
          (err) => {
            console.error('Error obtaining location:', err)
            reject(err)
          },
          { enableHighAccuracy: true }
        )
      })
    } else {
      console.log('Geolocation permission not granted:', permissionStatus.state)
      return undefined
    }
  } catch (error) {
    console.error('Error checking geolocation permission:', error)
    return undefined
  }
}
export { checkGeolocationPermission }
