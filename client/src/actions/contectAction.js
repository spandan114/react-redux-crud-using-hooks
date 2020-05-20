import api from './api';

export const fetchAll = () => dispatch => {
//FETCH ALL CONTACT
  api.Contacts().fetchAll()
      .then(res => {
          dispatch({
              type: "FETCH_ALL",
              payload: res.data
          })
      })
      .catch(err => console.log(err))

}
//ADD CONTACT
export const addContact = (contact) => dispatch => {

    api.Contacts().create(contact)
    .then(res =>{
      console.log(res)
      dispatch({
          type: "CREATE_CONTACT",
          payload: res.data
      })
  })
  .catch(err => console.log(err))

  };
//GET CONTACT BY ID
export const getContact = (id) => ({
  type: "GET_CONTACT",
  payload : id,
  })

//UPDATE BY ID
export const UpdateContact = (id,data) => dispatch => {
  api.Contacts().update(id,data)
      .then(res =>{
          dispatch({
              type: "UPDATE_CONTACT",
              payload: res.data
          })
      })
      .catch(err => console.log(err))
}
//DELETE BY ID
export const deleteContact = (id) => dispatch =>{
  api.Contacts().delete(id)
        .then(res =>{
            dispatch({
                type: "DELETE_CONTACT",
                payload: id
            })
        })
        .catch(err => console.log(err))
}