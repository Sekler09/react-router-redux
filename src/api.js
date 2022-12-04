const BASE_URL = 'https://jsonplaceholder.typicode.com'

const myFetch = async (url) => {
  const data = await fetch(BASE_URL + url).then((r) => r.json())
  return data
}

export const getUsers = async () => {
  return await myFetch('/users')
}

export const getPhotos = async () => {
  return await myFetch('/photos')
}

export const getAlbums = async () => {
  return await myFetch('/albums')
}
