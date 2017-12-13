import React, { Component } from 'react'
import { Button, Form, Header, Segment, Container, Icon,Divider ,Grid} from 'semantic-ui-react'
import './SignUpForm.css'

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
]

class SignUpForm extends Component {
    state = {}

    render() {
        return (


             <Grid columns={1}>
                 <Grid.Column>
            <Form>
                <Header as='h2' attached='top'>
                    SIGN UP WITH YOUR E-MAIL  <Icon name='add user' />
                </Header>
                <Segment attached>
                You made it! We’re stoked to see you and want to let you
                 in on a little secret. If you register right here, you’ll get
                  access to sweet members. Basically, if you want the hook-up, take a couple 
                   seconds to fill out your info, and welcome to the team!
                <Divider/>
                <Container text>


                        <Form.Group widths='equal'>
                            <Form.Input label='First Name' placeholder='First Name' type='text' />
                            <Form.Input label='Last Name' placeholder='Last Name' type='text' />
                            <Form.Input label='Username' placeholder='Username' type='text' />
                        </Form.Group>

                        <Form.Group widths='equal'>

                            <Form.Input label='Password' placeholder='Password' type='password' />
                            <Form.Input label='Confirm Password' placeholder='Confirm Password' type='password' />
                        </Form.Group>

                        <Form.Group widths='equal'>
                            <Form.Input label='email' placeholder='xxxxx@.mail.com' type='text' />
                            <Form.Input label='phone' placeholder='0XXXXXXXXX' type='password' />

                            <Form.Select label='Gender' options={options} placeholder='Gender' inline />
                        </Form.Group>



                        <a href="/"><Button type='sumbit'>Submit</Button></a>  </Container> </Segment>
            </Form >
            </Grid.Column>

           
         </Grid>
         

        )
    }
}

export default SignUpForm