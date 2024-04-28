import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Location } from '@/models/location'
import { Coordinates } from '@/models/Coordinates'
import { checkGeolocationPermission } from '@/services/nativeLocation'
import { openRouteService } from '../services/openRouteService'

export const useLocationContext = defineStore('locationContext', () => {
  const location = ref<Location | null>(null)

  async function fetchAndUpdateLocation() {
    const newLocation = await checkGeolocationPermission()
    if (newLocation) {
      location.value = newLocation
      // console.log(import.meta.env)
      // let address: string = await openRouteService.reverseGeocode(
      //   import.meta.env.VITE_API_KEY,
      //   location.value.coordinates.latitude,
      //   location.value.coordinates.longitude
      // )
      // console.log(address)
    } else {
      location.value = null
    }
  }

  return { location, fetchAndUpdateLocation }
})
