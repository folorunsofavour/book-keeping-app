import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../../assets/css/Profile.css';
import pic from '../../assets/img/bookpic.PNG';
import { getUserProfileAction } from '../../redux/actions/users/usersActions';
import Notification from '../Notification/Notification';
import Loading from '../Loading/Loading';

const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfileAction());
  }, [dispatch]);

  const userProfile = useSelector(state => state.userProfile);

  const {loading, userProfileData, error} = userProfile;
  return (
    <>
      {error && <Notification error={error}/>}
      {loading ? <Loading/> : 
        <>
          <div className='container'>
            <div className='row'>
              <div className='col mt-5'>
                <div className='card m-auto ' style={{ width: '50%' }}>
                  <img src={pic} className='card-img-top' alt='...' />
                  <div className='card-body'>
                    <h5 className='card-title'>{userProfileData && userProfileData.email}</h5>
                    <p className='card-text'>{userProfileData?.name}</p> {/* this ? does the same as the && above */}
                    <Link to='/users/update' className='btn btn-primary'>
                      Update your profile
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Table */}
          <table className='table table-hover'>
            <thead>
              <tr>
                <th scope='col'>Author</th>
                <th scope='col'>Book Name</th>
                <th scope='col'>Delete</th>
                <th scope='col'>Update</th>
              </tr>
            </thead>
            <tbody>
              {userProfileData && userProfileData.books.map((book, index) =>
                <tr className='table-default'>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td> <i className='bi-trash2-fill' style={{ color: 'red', cursor: 'progress' }}></i> </td>
                    <td> <i className='bi-journal-text' style={{ color: 'yellow', cursor: 'progress', }}></i> </td>
                </tr>
              )}
            </tbody>
          </table>
        </>
      }
      
    </>
  );
};

export default Profile;