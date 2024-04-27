import { getCurrentUser, fetchAuthSession } from 'aws-amplify/auth'

async function currentAuthenticatedUser() {
  try {
    const { username, userId, signInDetails } = await getCurrentUser()
    console.log(`The username: ${username}`)
    console.log(`The userId: ${userId}`)
    console.log(`The signInDetails: ${signInDetails}`)
  } catch (err) {
    console.log(err)
  }
}

async function currentSession() {
  try {
    const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {}
  } catch (err) {
    console.log(err)
  }
}

export { currentAuthenticatedUser, currentSession }
