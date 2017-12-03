import React from 'react'
import { Button, Divider } from 'semantic-ui-react'
import './nav.css'

const ButtonLink = () => (
  <div> 
    
    <Divider />
    <Button.Group widths='5'>
      <Button a href="/">Main</Button>
      <Button a href="/SignUp">Sign Up</Button>
      <Button>Specs</Button>
      
    </Button.Group>
   


  </div>
)

export default ButtonLink