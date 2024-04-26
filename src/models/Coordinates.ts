// File: Coordinates.ts
export class Coordinates {
  readonly latitude: number;
  readonly longitude: number;

  constructor(latitude: number = 0, longitude: number = 0) {
    if (latitude < -90 || latitude > 90) {
      throw new Error("Latitude must be between -90 and 90 degrees.");
    }
    if (longitude < -180 || longitude > 180) {
      throw new Error("Longitude must be between -180 and 180 degrees.");
    }
    this.latitude = latitude;
    this.longitude = longitude;
  }
}


