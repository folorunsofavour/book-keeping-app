import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserAction } from '../../redux/actions/users/usersActions';
import Loading from '../Loading/Loading';
import Notification from '../Notification/Notification';


const LoginUser = ({history}) => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    // Get data from store 
    const state = useSelector((state) => {
        return state.userCreated;
    });
    const {userInfo, loading, error} = state;

    const loginUserSubmitHandler = (e) => {
        e.preventDefault();

        const data = { email, password, };

        // dispatch action here
        dispatch(loginUserAction(data));
    };

    // Redirect to dashboard after login
    useEffect(() => {
        if(userInfo) {
            history.push('/users/profile');
        }
    }, [state]);

    return (
        <div style={{marginTop: 30}} className='row container-height'>
            <div className='col-lg-6 col-md-6 m-auto'>
                <div className='container'>
                    <form onSubmit = {loginUserSubmitHandler}>
                        {/* this && is also an if statement */}
                        {error && <Notification error={error}/>}
                        <fieldset>
                            <div className='form-group'>
                                <label htmlFor='exampleInputEmail1'>Email address</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Enter email' />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='exampleInputPassword1'>Password</label>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' className='form-control' id='exampleInputPassword1' placeholder='Password' />
                            </div>
                            <button type='submit' className='btn btn-info m-auto'>
                                { loading ?
                                    <Loading color='text-light'/>
                                : 'Login' }
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginUser;