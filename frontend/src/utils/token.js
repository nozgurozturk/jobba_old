export function setToken (token) {
  if (!token) throw new Error('Token is not found')
  localStorage.setItem('token', token)
}

export function getToken () {
  return localStorage.getItem('token')
}

export function removeToken () {
  if (checkToken()) throw new Error('Token is not found')
  localStorage.removeItem('token')
}

export function checkToken () {
  if (getToken() !== null) {
    return true
  } else {
    return false
  }
}
