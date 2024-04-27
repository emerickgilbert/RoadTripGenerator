import { getCurrentUser, fetchAuthSession } from 'aws-amplify/auth'

async function currentAuthenticatedUser() {
  try {
    var userInfo = await getCurrentUser()
    console.log(`Userinfo: ${userInfo.signInDetails?.loginId}`)
    return userInfo
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
