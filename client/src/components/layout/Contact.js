import React from 'react'
import Avatar from 'react-avatar';
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom'
import { deleteContact } from '../../actions/contectAction';

export default function Contact({contact}) {

    const dispatch = useDispatch();

     const {_id,name,phone,email} = contact?contact:"";

    return (
        <tr >
        <th>
        <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <label className="custom-control-label" ></label>
            </div>
        </th>
              <td> <Avatar name={name} size="45" round={true} className="mr-2"/> {name}</td>
              <td>{phone}</td>
              <td>{email}</td>
              <td className="actions">
                  <Link to={`/contacts/edit/${_id}`} className="mr-4">
                      <span className="fas fa-edit"></span>
                  </Link>
                  <Link to="#" onClick={()=>dispatch(deleteContact(_id))}>
                      <span className="fas fa-trash text-danger" ></span>
                  </Link>
              </td>
              
      </tr>
    )
}
