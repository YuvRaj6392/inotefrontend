import React from 'react'

export default function Alert(props) {
  return (
    //if props.alert is null than the things written after && will not get evaluated else it will get evaluated!
    <div className='mb-4' style={{height:'50px'}}>
 {props.alert &&  <div className="alert alert-success alert-dismissible fade show" role="alert">
  {props.alert.msg}
 
    </div>}
 
</div>
   
  )
}