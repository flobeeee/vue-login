import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env'

export default class LoginController {
  // 로그인 화면 진입
  // google/redirect
  public async getGoogleLoginAction({ ally }: HttpContextContract) {
    return ally.use('google').redirect()
  }

  // 토큰 받기
  // google/callback
  public async getGoogleCallbackAction ({ ally, response }: HttpContextContract) {
    const google = ally.use('google')

    if (google.accessDenied()) {
      return 'Access was denied'
    }

    if (google.stateMisMatch()) {
      return 'Request expired. Retry again'
    }

    if (google.hasError()) {
      return google.getError()
    }

    const googleToken = await ally.use('google').accessToken()
    const userInfo = await ally.use('google').userFromToken(googleToken.token)

    // console.log(userInfo)
    // return userInfo
    return response.redirect().withQs({ googleToken, userInfo }).toPath(Env.get('GOOGLE_REDIRECT_URL'))    
  }
}