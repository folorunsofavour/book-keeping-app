import React, {useState, useEffect} from 'react';
import { Button, Form, Segment, Grid } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux';
import { loginUserAction } from '../../redux/actions/users/usersActions';
import Loading from '../Loading/Loading';
import Notification from '../Notification/Notification';


const LoginUser = ({history}) => {

    const [values, setValues] = useState({email:'', password:''});

    const changeHandler = (e) => {
        const {name, value} = e.target;
        setValues({...values, [name]:value});
    };

    const dispatch = useDispatch();

    // Get data from store 
    const state = useSelector((state) => {
        return state.userCreated;
    });
    const {token, loading, message} = state;

    const loginUserSubmitHandler = (e) => {
        e.preventDefault();

        const data = { email: values.email, password: values.password };

        // dispatch action here
        dispatch(loginUserAction(data));
    };

    // Redirect to dashboard after login
    useEffect(() => {
        if(token) {
            history.push('/users/profile');
        }
    }, [state]);

    return (             
        <>
        {/* this && is also an if statement  */}
        {message && <Notification message={message} width='6'/>}
        
        <Grid centered columns={3} style={{marginTop: 150}}>
            <Grid.Column>
                <Segment stacked color='teal'>
                    <Form  onSubmit = {loginUserSubmitHandler}>
                        <Form.Field>
                            <label htmlFor='email_address'>Email Address</label>
                            <Form.Input fluid icon='envelope' iconPosition='left' focus name='email' value={values.email} onChange={(e) => changeHandler(e)} type='email' id='email_address' placeholder='Enter Email Address' />
                        </Form.Field>
                        <Form.Field>
                            <label htmlFor='pass_word'>Password</label>
                            <Form.Input fluid icon='lock' iconPosition='left' focus name='password' value={values.password} onChange={(e) => changeHandler(e)} type='password' id='pass_word' placeholder='Enter Password' />
                        </Form.Field>
                        <Button color='teal' fluid size='large' type='submit'>{ loading ? <Loading inverted='true' size='small'/>
                            :'Login' }
                        </Button>
                    </Form>
                </Segment>
            </Grid.Column>
        </Grid>
        </>
    );
};

export default LoginUser;