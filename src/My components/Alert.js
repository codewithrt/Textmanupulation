import React from 'react'

function Alert(props) {
    return (
      <div style={ {height : "50px"}}>
      { props.alert && <div className={`alert alert-${props.alert.type} d-flex align-items-center" role="alert"`}>
        <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Info:"></svg>
        <div>
          {props.alert.msg}
        </div>
      </div>}
      </div>
    )
}

export default Alert
