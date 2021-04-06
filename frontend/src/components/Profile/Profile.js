import React, { useEffect } from 'react';
import { Card, Grid, Button, Placeholder, Image, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../../assets/css/Profile.css';
import pic from '../../assets/img/bookpic.PNG';
import { getUserProfileAction } from '../../redux/actions/users/usersActions';
import Notification from '../Notification/Notification';
import Loading from '../Loading/Loading';
import { deleteBookAction } from '../../redux/actions/books/bookActions';

const Profile = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfileAction());
  }, []);

  const userProfile = useSelector(state => state.userProfile);

  const {loading, userProfileData, message} = userProfile;

  const deleteBookHandler = (bookId) => {
    dispatch(deleteBookAction(bookId));
    // console.log(userProfileData?.books.filter(item => item._id !== bookId));
  }
  
  const extra = (
    <Button.Group>
      <Button as={Link} to={{ pathname: '/users/update', userProfileData }} color='teal'>Update Profile</Button>
      <Button.Or />
      <Button as={Link} to='/user/books' positive>Your Books</Button>
    </Button.Group>
  )

  return (
    <>  
      {message && <Notification message={message} width='6'/>}       

          <Grid centered>
            <Grid.Row columns={4}>

              <Grid.Column>
                <Card raised>
                  {loading ?                 
                    <Placeholder>
                      <Placeholder.Image square />
                    </Placeholder> 
                    : 
                    <Image src={pic} wrapped ui={false} />
                  }
                </Card>
              </Grid.Column>

              <Grid.Column style={{marginTop: 50}}>
                  {loading ?
                    <Segment raised>
                      <Placeholder>
                        <Placeholder.Header>
                          <Placeholder.Line length='short' />
                          <Placeholder.Line length='very short' />
                        </Placeholder.Header>
                        <Placeholder.Paragraph>
                          <Placeholder.Line length='long' />
                          <Placeholder.Line length='medium' /> <Placeholder.Line length='medium' />
                          <Placeholder.Line length='short' />
                        </Placeholder.Paragraph>
                      </Placeholder>
                    </Segment>
                    :
                    <Card raised>
                      <Card.Content>
                        <Card.Header>{userProfileData?.name}</Card.Header>
                        <Card.Meta>
                          <span >Joined in {userProfileData?.createdAt} </span>
                        </Card.Meta>
                        <Card.Description>
                        {userProfileData && userProfileData.email}, this is your Profile, you can either Update your profile or make changes to your Books.
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        {extra}
                      </Card.Content>
                    </Card>
                  }
              </Grid.Column>

            </Grid.Row>
          </Grid>
      
    </>
  );
};

export default Profile;