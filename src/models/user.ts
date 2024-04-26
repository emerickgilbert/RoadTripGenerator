import { Location } from './location'
import { checkGeolocationPermission } from '@/services/nativeLocation'
class User {
  locationPermission: PermissionStatus
  location: Location

  constructor(locationPermission?: PermissionStatus, location?: Location) {
    this.locationPermission = locationPermission || new PermissionStatus()
    this.location = location || new Location()
  }
}

export { User }
