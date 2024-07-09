import axios from 'axios'

const apiClient = axios.create({
    baseURL: `https://my-json-server.typicode.com/DataScientist2807/vuemastery-events-projects/`,
    withCredentials: false, // This is the default
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
  })

  export default {
    getEvents(perPage, page) {
      return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
    },
    getEvent(id) {
      return apiClient.get('/events/' + id)
    }
  }