// import axios from 'axios';
// import { setStatus } from './setStatus';

// const request = axios.create({
//   baseURL: 'http://localhost:3001/',
//   timeout: 1000,
//   headers: { 'Authorization': 'token' }
// });

// const loadContactSuccess = (data, pageOne) => ({
//   type: 'LOAD_CONTACT_SUCCESS',
//   data,
//   pageOne
// })

// const loadContactFailure = () => ({
//   type: 'LOAD_CONTACT_FAILURE'
// })

// // export const loadContact = () => {
// //   return async (dispatch, getState) => {
// //     try {
// //       const { data } = await request.get('users', { params: getState().status })
// //       return dispatch(setStatus({ page: data.data.page, totalPage: data.data.totalPage }))
// //       return dispatch(loadContactSuccess(data.data.users))
// //     } catch (error) {
// //       return dispatch(loadContactFailure())
// //     }
// //   }
// // }

// export const loadContact = () => (dispatch, getState) => request.get('users', { params: getState().status })
//   .then((data) => {
//     dispatch(setStatus({ page: data.data.page, totalPage: data.data.totalPage }))
//     dispatch(loadContactSuccess(data.data.users, data.data.page == 1 ? true : false))
//   }).catch((err) => {
//     dispatch(loadContactFailure())
//   })

// // export const searchContact = (query) => {
// //       return async dispatch => {
// //           try {
// //               await request.get(`users`, { params: { name, phone } })

// //               return dispatch(searchContactSuccess(name, phone))
// //           } catch (error) {
// //               return dispatch(searchContactFailure())
// //           }
// //       }
// //   }




// // loadMore = (page) => {
// //   if (this.params.page <= this.params.pages) {
// //     this.params = ({
// //       ...this.params,
// //       page: this.params.page + 1
// //     })
// //     this.loadContact()
// //   }
// // }

// export const searchContact = (name, phone) => dispatch => request.get('users', { ...this.params, name, phone, page: 1 }).then((response) => {
//   dispatch(loadContactSuccess(response.data.data))
// }).catch((err) => {
//   dispatch(loadContactFailure())
// })

// export const addContactSuccess = (id, contact) => ({
//   type: 'ADD_CONTACT_SUCCESS',
//   id,
//   contact
// })

// export const addContactFailure = (id) => ({
//   type: 'ADD_CONTACT_FAILURE',
//   id
// })

// export const addContactRedux = (id, name, phone) => ({
//   type: 'ADD_CONTACT',
//   id,
//   name,
//   phone
//   // addContact ngelempar 4 data (type,id,name,phone) dilempar ke reducers/contacts
// })

// // export const addContact = (name, phone) => dispatch => {
// //   const id = Date.now()
// //   dispatch(addContactRedux(id, name, phone))
// //   return request.post('users', { name, phone }).then((response) => {
// //     dispatch(addContactSuccess(id, response.data.data))
// //   }).catch((err) => {
// //     dispatch(addContactFailure(id))
// //   })
// // }

// export const addContact = (name, phone) => {
//   return async dispatch => {
//     const id = Date.now()
//     dispatch(addContactRedux(id, name, phone))
//     try {
//       const { data } = await request.post('users', { name, phone })
//       console.log('ini add', data)
//       return dispatch(addContactSuccess(id, data.data))
//     } catch (error) {
//       return dispatch(addContactFailure(id))
//     }
//   }
// }

// const removeContactSuccess = (id) => ({
//   type: 'REMOVE_CONTACT_SUCCESS',
//   id
// })

// const removeContactFailure = () => ({
//   type: 'REMOVE_CONTACT_FAILURE'
// })

// export const removeContact = (id) => {
//   return async dispatch => {
//     try {
//       await request.delete(`users/${id}`)
//       return dispatch(removeContactSuccess(id))
//     } catch (error) {
//       return dispatch(removeContactFailure())
//     }
//   }
// }


// const resendContactSuccess = (id, contact) => ({
//   type: 'RESEND_CONTACT_SUCCESS',
//   id,
//   contact
// })

// const resendContactFailure = () => ({
//   type: 'RESEND_CONTACT_FAILURE'
// })

// // export const resendContact = (id, name, phone) => dispatch => {
// //   return request.post('users', { name, phone }).then((response) => {
// //     dispatch(resendContactSuccess(id, response.data.data))
// //   }).catch((err) => {
// //     dispatch(resendContactFailure())
// //   })
// // }

// export const resendContact = (id, name, phone) => {
//   return async dispatch => {
//     try {
//       const { data } = await request.post('users', { name, phone })
//       return dispatch(resendContactSuccess(id, data.data))
//     } catch (error) {
//       return dispatch(resendContactFailure())
//     }
//   }
// }


// export const updateContactSuccess = (id, contact) => ({
//   type: 'ADD_CONTACT_SUCCESS',
//   id,
//   contact
// })

// export const updateContactFailure = () => ({
//   type: 'ADD_CONTACT_FAILURE'
// })

// // export const updateContactRedux = (id, name, phone) => ({
// //   type: 'ADD_CONTACT',
// //   id,
// //   name,
// //   phone
// // })

// // export const updateContact = (id, name, phone) => dispatch => {
// //   // dispatch(updateContactRedux(id, name, phone))
// //   return request.put(`users/${id}`, { name, phone }).then((response) => {
// //     dispatch(updateContactSuccess(id, response.data.data))
// //   }).catch((err) => {
// //     dispatch(updateContactFailure(id))
// //   })
// // }

// export const updateContact = (id, name, phone) => {
//   return async dispatch => {
//     try {
//       const { data } = await request.put(`users/${id}`, { name, phone })
//       return dispatch(updateContactSuccess(id, data.data))
//     } catch (error) {
//       return dispatch(updateContactFailure(id))
//     }
//   }
// }


import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:3001/',
  timeout: 1000,
  headers: { 'Authorization': 'token' }
});

const loadContactSuccess = (contacts) => ({
  type: 'LOAD_CONTACT_SUCCESS',
  contacts
})

const loadContactFailure = () => ({
  type: 'LOAD_CONTACT_FAILURE'
})

export const loadContact = () => {
  return async dispatch => {
    try {
      const { data } = await request.get('users')

      dispatch(loadContactSuccess(data.data.users))
    } catch (error) {
      dispatch(loadContactFailure())
    }
  }
}


// export const loadContact = () => dispatch => request.get('users').then((response) => {
//   dispatch(loadContactSuccess(response.data.data))
// }).catch((err) => {
//   dispatch(loadContactFailure())
// })

// export const loadContact = () => async dispatch => {
//   try {
//     const { data } = await request.get('users', { params: this.params })
//     dispatch(loadContactSuccess(data.data.users))
//   } catch (error) {
//     dispatch(loadContactFailure())
//   }
// }

// loadMore = (page) => {
//   if (this.params.page <= this.params.pages) {
//     this.params = ({
//       ...this.params,
//       page: this.params.page + 1
//     })
//     this.loadContact()
//   }
// }

export const searchContact = (name, phone) => dispatch => request.get('users', { ...this.params, name, phone, page: 1 }).then((response) => {
  dispatch(loadContactSuccess(response.data.data))
}).catch((err) => {
  dispatch(loadContactFailure())
})

export const addContactSuccess = (id, contact) => ({
  type: 'ADD_CONTACT_SUCCESS',
  id,
  contact
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
  // addContact ngelempar 4 data (type,id,name,phone) dilempar ke reducers/contacts
})

export const addContact = (name, phone) => dispatch => {
  const id = Date.now()
  dispatch(addContactRedux(id, name, phone))
  return request.post('users', { name, phone }).then((response) => {
    dispatch(addContactSuccess(id, response.data.data))
  }).catch((err) => {
    dispatch(addContactFailure(id))
  })
}

const removeContactSuccess = (id) => ({
  type: 'REMOVE_CONTACT_SUCCESS',
  id
})

const removeContactFailure = () => ({
  type: 'REMOVE_CONTACT_FAILURE'
})

export const removeContact = (id) => dispatch => {
  return request.delete(`users/${id}`).then((response) => {
    dispatch(removeContactSuccess(id))
  }).catch((err) => {
    dispatch(removeContactFailure())
  })
}

const resendContactSuccess = (id, contact) => ({
  type: 'RESEND_CONTACT_SUCCESS',
  id,
  contact
})

const resendContactFailure = () => ({
  type: 'RESEND_CONTACT_FAILURE'
})

export const resendContact = (id, name, phone) => dispatch => {
  return request.post('users', { name, phone }).then((response) => {
    dispatch(resendContactSuccess(id, response.data.data))
  }).catch((err) => {
    dispatch(resendContactFailure())
  })
}

export const updateContactSuccess = (id, contact) => ({
  type: 'ADD_CONTACT_SUCCESS',
  id,
  contact
})

export const updateContactFailure = () => ({
  type: 'ADD_CONTACT_FAILURE'
})

// export const updateContactRedux = (id, name, phone) => ({
//   type: 'ADD_CONTACT',
//   id,
//   name,
//   phone
// })

export const updateContact = (id, name, phone) => dispatch => {
  // dispatch(updateContactRedux(id, name, phone))
  return request.put(`users/${id}`, { name, phone }).then((response) => {
    dispatch(updateContactSuccess(id, response.data.data))
  }).catch((err) => {
    dispatch(updateContactFailure(id))
  })
}   
