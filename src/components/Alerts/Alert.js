import React from 'react'
import './alert.css'

const Alert = ({message}) => {
  return (
    <div className="alert alert-warning" role="alert"><i className="bi bi-emoji-smile px-2"></i>{message}</div>
  )
}

export default Alert