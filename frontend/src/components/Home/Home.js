import React from 'react';
import '../../assets/css/Home.css';
import bookpg from '../../assets/img/book.JPG';
import videoSource from '../../assets/video/books.mp4';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='Container'>
            <video autoPlay='autoplay' loop='loop' muted className='Video'>
                <source src={videoSource} type='video/mp4' />
                Your browser does not support the video tag.
            </video>
            <div className='Content'>
                <div className='SubContent'>
                    <h1>Book Catolog</h1>
                    <p>Manage your Books with Ease</p>
                    <button type='button' className='btn btn-outline-dark'>
                        <Link to='/users/register'>Get started</Link>
                    </button>
                    <img src={bookpg} alt='profile' />
                </div>
            </div>
        </div>
    );
};

export default Home;