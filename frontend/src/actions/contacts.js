import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:3001/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

const loadContactSuccess = (contacts) => ({
  type: 'LOAD_CONTACT_SUCCESS',
  contacts
})

const loadContactFailure = () => ({
  type: 'LOAD_CONTACT_FAILURE'
})

export const loadContact = () => dispatch => request.get('users').then((response) => {
  dispatch(loadContactSuccess(response.data.data))
}).catch((err) => {
  dispatch(loadContactFailure())
})

export const addContactSuccess = (id, user) => ({
  type: 'ADD_CONTACT_SUCCESS',
  id,
  user
})

export const addContactFailure = (id) => ({
  type: 'ADD_CONTACT_FAILURE',
  id
})

export const addContactRedux = (id, name, phone) => ({
  type: 'ADD_CONTACT',
  id,
  name,
  phone
})

export const addContact = (name, phone) => dispatch => {
  const id = Date.now()
  dispatch(addContactRedux(id, name, phone))
  return request.post('users', { name, phone }).then((response) => {
    dispatch(addContactSuccess(id, response.data.data))
  }).catch((err) => {
    dispatch(addContactFailure())
  })
}

export const removeContactSuccess = (id) => ({
  type: 'REMOVE_CONTACT_SUCCESS',
  id
})

export const removeContactFailure = () => ({
  type: 'REMOVE_CONTACT_FAILURE'
})

export const removeContact = (id) => dispatch => {
  return request.delete(`users/${id}`).then((response) => {
    dispatch(removeContactSuccess(id))
  }).catch((err) => {
    dispatch(removeContactFailure())
  }) 
}


