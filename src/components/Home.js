import React from 'react'
import { useEffect } from 'react';

import Notes from './Notes';

export default function Home(props) {
  const {showAlert}=props
  
  return (
    <div >
    <div className="container m-3">
   
  <Notes showAlert={showAlert} />
    </div>
   
    </div>
  )
}
