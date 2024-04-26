import { Coordinates } from './Coordinates'

export class Location {
  coordinates: Coordinates

  constructor(coordinates?: Coordinates) {
    this.coordinates = coordinates || new Coordinates()
  }
}
