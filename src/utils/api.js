import { API_KEY, BASE_URL, API_VERSION4, API_VERSION3, ADULT } from './constants'

const api = {
  lists: async (list = 1, page = 1) => {
    try {
      const response = await fetch(`${BASE_URL}/${API_VERSION4}/list/${list}?api_key=${API_KEY}&page=${page}`)
      if (!response.ok) {
        throw new Error(response.status_message)
      }
      const data = await response.json()
      if (data.error) {
        throw new Error(data.error)
      }
      return data
    } catch (error) {
      console.error(error)
    }
  },
  category: async (category = '', page = 1) => {
    try {
      const response = await fetch(`${BASE_URL}/${API_VERSION3}/movie/${category}?api_key=${API_KEY}&page=${page}`)
      if (!response.ok) {
        throw new Error(response.status_message)
      }
      const data = await response.json()
      if (data.error) {
        throw new Error(data.error)
      }
      return data
    } catch (error) {
      console.error(error)
    }
  },
  search: async (query = '', page = 1) => {
    try {
      const response = await fetch(`${BASE_URL}/${API_VERSION4}/search/movie?api_key=${API_KEY}&query=${query}&include_adult=${ADULT}&page=${page}`)
      if (!response.ok) {
        throw new Error(response.status_message)
      }
      const data = await response.json()
      if (data.error) {
        throw new Error(data.error)
      }
      return data
    } catch (error) {
      console.error(error)
    }
  },
  video: async (videoId = 0) => {
    try {
      const response = await fetch(`${BASE_URL}/${API_VERSION3}/movie/${videoId}/videos?api_key=${API_KEY}`)
      if (!response.ok) {
        throw new Error(response.status_message)
      }
      const data = await response.json()
      if (data.error) {
        throw new Error(data.error)
      }
      return data
    } catch (error) {
      console.error(error)
    }
  },
  detail: async (movieId = 0) => {
    try {
      const response = await fetch(`${BASE_URL}/${API_VERSION3}/movie/${movieId}?api_key=${API_KEY}`)
      if (!response.ok) {
        throw new Error(response.status_message)
      }
      const data = await response.json()
      if (data.error) {
        throw new Error(data.error)
      }
      return data
    } catch (error) {
      console.error(error)
    }
  },
}

export default api
