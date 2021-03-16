import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooksAction } from '../../redux/actions/books/bookActions';
import Loading from '../Loading/Loading';

const BookList = () => {
    // Create instance of dispatch
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch action
        dispatch(fetchBooksAction());
    }, [dispatch]);

    // Get the data from our store
    const { books, loading } = useSelector(state => {
        return state.booksFetched;
    })

    console.log(books);
    console.log(loading);

    return (
        <div>
            <div className='row'>
                <div className='col'>
                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th scope='col'>Author</th>
                                <th scope='col'>Book Name</th>
                                <th scope='col'>Action</th>
                                <th scope='col'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { loading ? <Loading color='text-dark'/> : 
                                /* && means if books it should do the map, so its just an if statement */
                                /* Map through here (Map is also Loop)*/
                                books && books.map((item, index) =>
                                    <tr className='table-default'>
                                        <td>{item.title}</td>
                                        <td>{item.author}</td>
                                        <td> <i className='bi-trash2-fill' style={{ color: 'red', cursor: 'progress' }}></i> </td>
                                        <td> <i className='bi-journal-text' style={{ color: 'yellow', cursor: 'progress', }}></i> </td>
                                    </tr>
                                ) 
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BookList;