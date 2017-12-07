import React from 'react'
import { Button, Divider } from 'semantic-ui-react'
import './nav.css'
//โค้ดcompnentนี้ไม่ได้ใช้ทำอะไรแต่ไม่ได้ลบ
const ButtonLink = () => (
  <div> 
    
    <Divider />
    
      <Button a href="/">Main</Button>
      <Button a href="/SignUp">Sign Up</Button>
      <Button>Specs</Button>
      
    
   


  </div>
)

export default ButtonLink