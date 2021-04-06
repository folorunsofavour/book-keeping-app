import React, {useState} from 'react';
import { Button, Form, Segment, Grid } from 'semantic-ui-react'
import {useDispatch, useSelector} from 'react-redux';
import { createBookAction } from '../../redux/actions/books/bookActions';
import Loading from '../Loading/Loading';
import Notification from '../Notification/Notification';


const AddBook = () => {
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    // Create instance of dispatch
    const dispatch = useDispatch();

    // Handler form submit
    const handlerFormSubmit =  e => {
        e.preventDefault();

        const data = { title, author, category, };

        dispatch(createBookAction(data));
    };

    const { book, loading, message } = useSelector(state => state.bookCreated);

    return (
        <>
            {message && <Notification message={message} width='6'/>}
            
            <Grid centered columns={2} style={{marginTop: 50}}>
                <Grid.Column>
                    <Segment stacked color='teal'>
                        <Form  onSubmit={handlerFormSubmit}>
                            <Form.Field>
                                <label htmlFor='category'>Category</label>
                                <select value={category} onChange={e => setCategory(e.target.value)} className='custom-select'>
                                    <option defaultValue='programming'> programming </option>
                                    <option defaultValue='religion'> religion </option>
                                    <option defaultValue='life'> life </option>
                                    <option defaultValue='culture'> culture </option>
                                </select>
                            </Form.Field>
                            <Form.Field>
                                <label htmlFor='author_name'>Author Name</label>
                                <Form.Input fluid icon='user' iconPosition='left' value={author} onChange={e => setAuthor(e.target.value)} type='text' id='author_name' placeholder='Author Name' />
                            </Form.Field>
                            <Form.Field>
                                <label htmlFor='book_title'>Book Title</label>
                                <Form.Input fluid icon='book' iconPosition='left' value={title} onChange={e => setTitle(e.target.value)} type='text' id='book_title' placeholder='Book Title' />
                            </Form.Field>
                            <Button color='teal' size='large' type='submit'>{ loading ? <Loading inverted='true' size='small'/>
                                :'Add Book' }
                            </Button>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        </>
    );
};

export default AddBook;