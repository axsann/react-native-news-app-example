// @flow

import axios from 'axios'
import { URL } from '../constants'

export const fetchItems = () => {
  return (
    axios.get(URL.JSON_URL)
    .then(response => {
      const payload = response.data

      // console.log(response)

      return { payload }
    })
    .catch(error => {
      // console.log(error)
      return { error }
    })
  )
}
