// 2
// AuthenticationService.js is going to export an object that has a register method to it.

import Api from '@/services/Api'

// have an object that allows us to call REGISTER endpoint.
export default {
  register (credentials) {
    return Api().post('register', credentials)// pass credentials to the post method of axios module which is going to do a post request to the register endpoint on the express server and will use the credentials
  }
}
