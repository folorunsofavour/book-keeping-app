import React, { useEffect, useState } from 'react';
import { Menu, Segment, Dropdown } from 'semantic-ui-react'
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUserAction } from '../../redux/actions/users/usersActions';

const Navbar = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    
    const state = useSelector(state => state.userCreated);

    const { token, loading, error } = state;

    const logoutHandler = () => {
        dispatch(logoutUserAction());
        history.push('/');
    }

    // for the Menu Items
    const [activeState, setActiveState] = useState({ activeItem: 'home' });

    const activeHandler = (menuName) => {
        setActiveState({ activeItem: menuName });
    }

    const { activeItem } = activeState;
    // End of Menu items

    return (
        <Segment>
            {/* <Link className='navbar-brand' to='/'> BK </Link> */}
            {/* <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarColor01' aria-controls='navbarColor01' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button> */}
            <Menu color='teal' pointing secondary>
                <Menu.Item
                    name='home'
                    active = {activeItem === 'home'}
                    onClick={() => activeHandler('home')} 
                    as={Link} 
                    to='/'
                />
                {!token ?
                /* Login Register */
                <>
                    <Menu.Item
                        name='login'
                        active = {activeItem === 'login'}
                        onClick={() => activeHandler('login')} 
                        as={Link} 
                        to='/users/login'
                    />
                    <Menu.Item
                        name='register'
                        active = {activeItem === 'register'}
                        onClick={() => activeHandler('register')} 
                        as={Link} 
                        to='/users/register'
                    />
                </>
                : 
                <>
                    <Menu.Item
                        name='all books'
                        active = {activeItem === 'books'}
                        onClick={() => activeHandler('books')} 
                        as={Link} 
                        to='/books'
                    />
                    <Menu.Item
                        name='add book'
                        active = {activeItem === 'add book'}
                        onClick={() => activeHandler('add book')} 
                        as={Link} 
                        to='/books/create'
                    />

                    <Menu.Menu position='right'>
                        <Dropdown text='Account' pointing className='link item'>
                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} to='/users/profile'>Profile</Dropdown.Item>
                                <Dropdown.Item as={Link} to='/user/books'>Your Books</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Header onClick={logoutHandler}>Logout</Dropdown.Header>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Menu>
                </>
            }
            </Menu>
        </Segment>
    );
};

export default Navbar;