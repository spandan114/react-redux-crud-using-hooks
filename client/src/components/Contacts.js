import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Contact from './layout/Contact'
import { fetchAll } from '../actions/contectAction'

export default function Contacts() {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch( fetchAll())
    }, [])//DidMount


    const contacts = useSelector(state => state.contactReducer.contects)

    return (
        <div>
            <table className="table shadow">
  <thead className="bg-danger text-white">
    <tr>
      <th scope="col">
          <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customCheck1"/>
              <label className="custom-control-label"  ></label>
          </div>
      </th>
      <th scope="col">Name</th>
      <th scope="col">Phone No</th>
      <th scope="col">Email</th>
      <th scope="col">Actions</th>
    </tr>
     </thead>
     <tbody>
    {
        contacts.map(contact => {
            return(
            <Contact contact={contact} key={contact?contact._id:""} />
            )
        })
    }
         </tbody>
         </table>
        </div>
    )
}
