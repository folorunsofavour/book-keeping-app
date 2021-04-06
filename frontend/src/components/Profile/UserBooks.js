import React, { useEffect } from 'react';
import { Card, Grid, Button, Placeholder, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../../assets/css/Profile.css';
import { getUserProfileAction } from '../../redux/actions/users/usersActions';
import Notification from '../Notification/Notification';
import Loading from '../Loading/Loading';
import { deleteBookAction } from '../../redux/actions/books/bookActions';

const UserBooks = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfileAction());
  }, []);

  const userBooks = useSelector(state => state.userBooks);

  const {loading, books, message} = userBooks;

  const deleteBook = useSelector(state => state.deleteBook);

  const {deletemessage} = deleteBook;

  const deleteBookHandler = (bookId) => {
    dispatch(deleteBookAction(bookId));
    // console.log(userProfileData?.books.filter(item => item._id !== bookId));
  }


  return (
    <>  

        {message && <Notification message={message} width='6'/>}  
        {deletemessage && <Notification message={deletemessage} width='6'/>}  
        {loading ? 
            <Grid columns={4} stackable>
                <Grid.Column>
                    <Segment raised>
                        <Placeholder>
                            <Placeholder.Header >
                                <Placeholder.Line />
                                <Placeholder.Line />
                            </Placeholder.Header>
                            <Placeholder.Paragraph>
                                <Placeholder.Line length='medium' /> <Placeholder.Line length='short' /> <Placeholder.Line length='long' />
                                <Placeholder.Line length='very short' /> <Placeholder.Line length='medium' />
                            </Placeholder.Paragraph>
                        </Placeholder>
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment raised>
                        <Placeholder>
                            <Placeholder.Header >
                                <Placeholder.Line />
                                <Placeholder.Line />
                            </Placeholder.Header>
                            <Placeholder.Paragraph>
                                <Placeholder.Line length='medium' /> <Placeholder.Line length='short' /> <Placeholder.Line length='long' />
                                <Placeholder.Line length='very short' /> <Placeholder.Line length='medium' />
                            </Placeholder.Paragraph>
                        </Placeholder>
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment raised>
                        <Placeholder>
                            <Placeholder.Header >
                                <Placeholder.Line />
                                <Placeholder.Line />
                            </Placeholder.Header>
                            <Placeholder.Paragraph>
                                <Placeholder.Line length='medium' /> <Placeholder.Line length='short' /> <Placeholder.Line length='long' />
                                <Placeholder.Line length='very short' /> <Placeholder.Line length='medium' />
                            </Placeholder.Paragraph>
                        </Placeholder>
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment raised>
                        <Placeholder>
                            <Placeholder.Header >
                                <Placeholder.Line />
                                <Placeholder.Line />
                            </Placeholder.Header>
                            <Placeholder.Paragraph>
                                <Placeholder.Line length='medium' /> <Placeholder.Line length='short' /> <Placeholder.Line length='long' />
                                <Placeholder.Line length='very short' /> <Placeholder.Line length='medium' />
                            </Placeholder.Paragraph>
                        </Placeholder>
                    </Segment>
                </Grid.Column>
            </Grid> 
            :
            <Card.Group itemsPerRow={4}>
                {books?.map((book, index) =>
                    <Card raised>
                        <Card.Content>
                            <Card.Header>{book?.title}</Card.Header>
                            <Card.Meta className='date'>Added on {book?.createdAt}</Card.Meta>
                            <Card.Description>
                                <p>This Book was Written By <strong>{book?.author}</strong></p>
                                <p>Category: <strong>{book?.category}</strong></p>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Button.Group inline='centered'>
                                <Button icon='edit' as={Link} to={{ pathname: `/books/update/${book?._id}` }} color='yellow'/>
                                <Button.Or />
                                <Button icon='delete' onClick={ () => deleteBookHandler(book?._id)} negative />
                            </Button.Group>
                        </Card.Content>
                    </Card>
                )}
            </Card.Group>
        }  
    </>
  );
};

export default UserBooks;