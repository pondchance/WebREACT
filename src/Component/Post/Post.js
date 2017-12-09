import React from 'react'
import {Icon, Grid, Button,Divider,Container } from 'semantic-ui-react'


const Post = () => (

    <Grid celled='internally'>
        <Grid.Column width={4}>
            <p>ffgf</p>
        </Grid.Column>
        <Grid.Column width={8}>
            <div class="ui form">
                <div class="field">
                    <label>User Text</label>
                    <textarea></textarea>
                </div>
            </div>
           <br/>
           <Container textAlign='right'>
            <Button animated textAlign='right'>
                <Button.Content visible>POST</Button.Content>
                <Button.Content hidden>
                    <Icon name='comment' />
                </Button.Content>
            </Button>
            </Container>
            <Divider />
        </Grid.Column>
        <Grid.Column width={4}>
            <p>ffgf</p>
        </Grid.Column>
    </Grid>
)


export default Post
