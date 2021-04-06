import React, { useEffect, useState } from 'react';
import { Button, Form, Segment, Grid } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux';
import { registerUserAction } from '../../redux/actions/users/usersActions';
import Loading from '../Loading/Loading';
import Notification from '../Notification/Notification';

const RegisterUser = ({history}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    // Get user login from store
    const  userCreatedLogin = useSelector(state => state.userCreated);

    const {token, loading, message} = userCreatedLogin;

    // Redirect if user is logged in OR authenticated
    useEffect(() => {
        if(token) {
            history.push('/users/profile');
        }
    }, [token]);

    const formSubmitHandler = (e) => {
        e.preventDefault();

        // dispatch action here
        dispatch(registerUserAction(name, email, password));
    };
    
    return (
        <>
        {/* this && is also an if statement  */}
        {message && <Notification message={message} width='6'/>}
        
        <Grid centered columns={3} style={{marginTop: 150}}>
            <Grid.Column>
                <Segment stacked color='teal'>
                    <Form  onSubmit = {formSubmitHandler}>
                        <Form.Field>
                            <label htmlFor='name'>Name</label>
                            <Form.Input fluid icon='user' iconPosition='left' value={name} onChange={(e) => setName(e.target.value)} type='text' id='name' placeholder='Enter Your Name' />
                        </Form.Field>
                        <Form.Field>
                            <label htmlFor='email_address'>Email Address</label>
                            <Form.Input fluid icon='envelope' iconPosition='left' value={email} onChange={(e) => setEmail(e.target.value)} type='email' id='email_address' placeholder='Enter Email Address' />
                        </Form.Field>
                        <Form.Field>
                            <label htmlFor='pass_word'>Password</label>
                            <Form.Input fluid icon='lock' iconPosition='left' value={password} onChange={(e) => setPassword(e.target.value)} type='password' id='pass_word' placeholder='Enter Password' />
                        </Form.Field>
                        <Button color='teal' fluid size='large' type='submit'>{ loading ? <Loading inverted='true' size='small'/>
                            :'Register' }
                        </Button>
                    </Form>
                </Segment>
            </Grid.Column>
        </Grid>
        </>
    );
};

export default RegisterUser;