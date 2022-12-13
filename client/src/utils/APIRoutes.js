// making the base url dynamic
export const BASE_URL = process.env.REACT_APP_BASE_URL
  ? process.env.REACT_APP_BASE_URL
  : 'http://localhost:5000'

export const host = `${BASE_URL}`
export const loginRoute = `${BASE_URL}/api/auth/login`
export const registerRoute = `${BASE_URL}/api/auth/register`
export const logoutRoute = `${BASE_URL}/api/auth/logout`
export const allUsersRoute = `${BASE_URL}/api/auth/allusers`
export const sendMessageRoute = `${BASE_URL}/api/messages/addmsg`
export const recieveMessageRoute = `${BASE_URL}/api/messages/getmsg`
export const setAvatarRoute = `${BASE_URL}/api/auth/setavatar`
