import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    contacts
                </Link>
            </div>
            <div>
                <Link className="btn btn-light ml-auto " to="/contacts/add">create comtact</Link>
            </div>
        </nav>
    )
}
