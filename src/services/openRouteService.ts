async function reverseGeocode(apiKey: string, lat: number, lon: number): Promise<string> {
  const url = `https://api.openrouteservice.org/geocode/reverse?api_key=${apiKey}&point.lat=${lat}&point.lon=${lon}`
  const response = await fetch(url)
  const data = await response.json()
  if (data.features.length > 0) {
    return data.features[0].properties.label // Return the address label
  } else {
    throw new Error('No address found for the given coordinates.')
  }
}

const openRouteService = { reverseGeocode }

export { openRouteService }
