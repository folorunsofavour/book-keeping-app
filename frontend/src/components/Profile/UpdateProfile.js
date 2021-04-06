import React, { useEffect, useState } from 'react';
import { Button, Form, Segment, Grid } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserAction } from '../../redux/actions/users/usersActions';
import Loading from '../Loading/Loading';
import Notification from '../Notification/Notification';

const UpdateProfile = ({location, history}) => {

    //pre-populate the existing user using location from profilr.js
    useEffect(() => {
        if(!location?.userProfileData){
            history.push('/users/profile');
        }
      }, []);

    const [email, setEmail] = useState(location.userProfileData && location.userProfileData.email);
    const [name, setName] = useState(location.userProfileData?.name);
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    // dispatch action
    const updateFormHandler = (e) => {
        e.preventDefault();
        const data = {email, name, password};
        dispatch(updateUserAction(data));
    }

    const userUpdate = useSelector(state => state.userUpdate);

    const {loading, message, userUpdatedInfo} = userUpdate;

    // if(userUpdatedInfo){
    //     history.push('/users/profile');
    // }

    return (
        <>
            {message && <Notification message={message} width='6'/>}
            
            <Grid centered columns={2} style={{marginTop: 50}}>
                <Grid.Column>
                    <Segment stacked color='teal'>
                        <Form  onSubmit={updateFormHandler}>
                            <Form.Field>
                                <label htmlFor='user_name'>Name</label>
                                <Form.Input fluid icon='user' iconPosition='left' value={name} onChange={e => setName(e.target.value)} type='text' id='user_name' placeholder='Enter Name' />
                            </Form.Field>
                            <Form.Field>
                                <label htmlFor='email'>Email Address</label>
                                <Form.Input fluid icon='email' iconPosition='left' value={email} onChange={e => setEmail(e.target.value)} type='email' id='email' placeholder='Enter Email' />
                            </Form.Field>
                            <Form.Field>
                                <label htmlFor='pass_word'>Password</label>
                                <Form.Input fluid icon='book' iconPosition='left' value={password} onChange={e => setPassword(e.target.value)} type='password' id='pass_word' placeholder='Enter Password' />
                            </Form.Field>
                            <Button color='teal' size='large' type='submit'>{ loading ? <Loading inverted='true' size='small'/>
                                :'Update Profile' }
                            </Button>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        </>
    );
};

export default UpdateProfile;