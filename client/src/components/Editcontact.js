import React,{useState,useEffect} from 'react'
import {useDispatch} from 'react-redux';
import { getContact} from '../actions/contectAction'
import { useHistory } from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux'
import {UpdateContact} from '../actions/contectAction'


export default function EditContacts() {

    const {_id} = useParams()
    const dispatch = useDispatch();
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [paramid,setID] = useState()
    const contacts = useSelector(state => state.contactReducer.contact)
    const history = useHistory()


    useEffect(() => {
        if(contacts != null ){
          setName(contacts.name)
          setEmail(contacts.email)
          setPhone(contacts.phone)
          setID(contacts._id)
        }
        dispatch(getContact(_id))
    }, [contacts])

    const updateContact = (e) => {
        e.preventDefault();
        
        //Object.assign(contacts,{name:name,email:email,phone:phone},
        const update_contact =  {
            name:name,
            email:email,
            phone:phone
        };
        
        // console.log(paramid)
        dispatch(UpdateContact(paramid,update_contact))
        history.push("/")
    }

    return (
        <div className="card border-0 shadow">
            <div className="card-header bg-danger text-white text-center">Edit Your Contact</div>
            <div className="card-body">
                <form onSubmit={(e)=>updateContact(e)}>
                 <div className="form-group">
                   <label >Enter Your Name</label>
                   <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" />
                  </div>
                  <div className="form-group">
                   <label >Enter Your Email</label>
                   <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" />
                  </div>
                  <div className="form-group">
                   <label >Enter Your Phone No</label>
                   <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} className="form-control" />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">Update Contact</button>
                </form>
            </div>
        </div>
    )
}
