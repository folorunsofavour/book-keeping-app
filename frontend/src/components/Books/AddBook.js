import React, {useState} from 'react';
import {useDispatch} from 'react-redux';


const AddBook = () => {
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

// Create instance of dispatch
const dispatch = useDispatch();

// Handler form submit
const handlerFormSubmit =  e => {
    e.preventDefault();
}

    return (
        <div className='row container-height'>
            <div className='col-lg-6 col-md-6 m-auto'>
                <div className='container'>
                    <button type='button' className='btn btn-primary' data-toggle='modal' data-target='#exampleModal'>
                        Click to Add Book.
                    </button>

                    <div className='modal fade' id='exampleModal' tabIndex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
                        <div className='modal-dialog'>
                            <div className='modal-content'>
                                <div className='modal-header'>
                                    <h5 className='modal-title' id='exampleModalLabel'>
                                        Create Book
                                    </h5>
                                    <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                                        <span aria-hidde='true'>&times;</span>
                                    </button>
                                </div>
                                <div className='modal-body'>
                                    <h1 className='text-center'>Add Book</h1>
                                    <form>
                                        <fieldset>
                                            <div className='form-group'>
                                                <select value={category} onChange={e => setCategory(e.target.value)} className='custom-select'>
                                                    <option defaultValue='programming'> programming </option>
                                                    <option defaultValue='religion'> religion </option>
                                                    <option defaultValue='life'> life </option>
                                                    <option defaultValue='culture'> culture </option>
                                                </select>
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor='exampleInputEmail1'>Author Name</label>
                                                <input type='text' value={author} onChange={e => setAuthor(e.target.value)} className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Author Name'/>                                            
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor='exampleInputPassword1'>Title</label>
                                                <input type='text' value={title} onChange={e => setTitle(e.target.value)} className='form-control' id='exampleInputPassword1' placeholder='Book Title'/>                                            
                                            </div>
                                            <button type='submit' className='btn btn-warning m-auto'>
                                                Create Book
                                            </button>
                                        </fieldset>
                                    </form>
                                </div>
                                <div className='modal-footer'>
                                    <button type='button' className='btn btn-danger' data-dismiss='modal'>
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBook;