import React,{Component} from 'react'
import { Button, Form } from 'semantic-ui-react'
import './SignUpForm.css'

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
]

class SignUpForm extends Component {
    state = {}

    render() {
        return (
            <Form>
                
                    <Form.Field inline>
                        <label>First Name</label>
                        <input placeholder='First Name' />
                    </Form.Field>
                    <Form.Field inline>
                        <label>Last Name</label>
                        <input placeholder='Last Name' />
                    </Form.Field>
                    <Form.Field inline>
                        <label>Username</label>
                        <input placeholder='Username' />
                    </Form.Field>
                    <Form.Field inline>
                        <label>Password</label>
                        <input placeholder='password' />
                    </Form.Field>
                    <Form.Field inline>
                        <label>Confirm Password</label>
                        <input placeholder='Confirm Password' />
                    </Form.Field>
                    <Form.Field inline>
                        <label>E-mail</label>
                        <input placeholder='xxxxx@.mail.com' />
                    </Form.Field>
                    <Form.Field inline>
                        <label>Phone</label>
                        <input placeholder='0XXXXXXXXX' />
                    </Form.Field>
                    <Form.Select label='Gender' options={options} placeholder='Gender' inline />
                
                <a href="/"><Button type='sumbit'>Submit</Button></a>
            </Form >
        )
    }
}

export default SignUpForm