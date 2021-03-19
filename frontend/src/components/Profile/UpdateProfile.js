import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserAction } from '../../redux/actions/users/usersActions';
import Loading from '../Loading/Loading';
import Notification from '../Notification/Notification';

const UpdateProfile = () => {
    //pre-populate the existing user from our store
    const {userInfo} = useSelector(state => state.userCreated);

    const [email, setEmail] = useState(userInfo && userInfo.userdetails.email);
    const [name, setName] = useState(userInfo?.userdetails.name);
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    // dispatch action
    const updateFormHandler = (e) => {
        e.preventDefault();
        const data = {email, name, password};
        dispatch(updateUserAction(data));
    }

    const userUpdate = useSelector(state => state.userUpdate);

    const {loading, userUpdatedData, error, success} = userUpdate;

    return (
        <div className='row container-height'>
            <div className='col-lg-6 col-md-6 m-auto'>
                <div className='container'>
                    {error && <Notification error={error}/>}
                    {success && <Notification success='Profile Updated Successfully'/>}
                    <h1 className='text-center'>Update Profile</h1>
                    <form onSubmit={updateFormHandler}>
                        <fieldset>
                            <div className='form-group'>
                                <label htmlFor='exampleInputEmail1'>Name</label>
                                <input value={name} onChange={e => setName(e.target.value)} type='text' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Enter Name' />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='exampleInputEmail1'>Email address</label>
                                <input value={email} onChange={e => setEmail(e.target.value)} type='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Enter email' />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='exampleInputPassword1'>Password</label>
                                <input value={password} onChange={e => setPassword(e.target.value)} type='password' className='form-control' id='exampleInputPassword1' placeholder='Password' />
                            </div>
                            <button type='submit' className='btn btn-info m-auto'>
                                {loading ? <Loading color='text-light'/> : 'Update'}
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;