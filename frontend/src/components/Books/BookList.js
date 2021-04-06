import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../assets/css/Books.css';
import { fetchBooksAction } from '../../redux/actions/books/bookActions';
import Loading from '../Loading/Loading';
import Notification from '../Notification/Notification';

const BookList = () => {
    // Create instance of dispatch
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch action
        dispatch(fetchBooksAction());
    }, [dispatch]);

    // Get the data from our store
    const { books, loading, message } = useSelector(state => {
        return state.booksFetched;
    })

    const [toggleState, setToggleState] = useState("inactive");
    const [hoverState, setHoverState] = useState("");

    const toggleHandler = (indexNum) => {
        // setToggleState(toggleState === indexNum ? "active" : "");
        setToggleState(indexNum);
    }

    const hoverHandler = (indexNum) => {
        setHoverState(indexNum);
    }


    return (
        <section id="section-feature" className="container">
            <div className="row">
                <ul>
                {books && books.map((item, index) =>
                    <li id="sf-innovation" className="col-md-3 col-sm-6 col-xs-12">
                        <div  onMouseEnter={() => hoverHandler(index)} onClick={() => toggleHandler(index)} 
                              className={`sf-wrap ${hoverState === index ? "hover" : ""} ${toggleState === index ? "active" : "inactive"}`}>
                            <div className="sf-mdl-left">
                                <div className="sf-icon">
                                    <i className="fa fa-fw fa-rocket fa-5x"></i>
                                </div>
                                <h3>Gallia est omnis</h3>
                            </div>
                            <div className="sf-mdl-right">
                                <div className="sf-icon">
                                    <i className="fa fa-fw fa-rocket fa-5x"></i>
                                </div>
                                <h3>Gallia est omnis</h3>
                            </div>

                            <div className="sf-mdl-left-full">
                                <div className="sf-icon">
                                    <i className="fa fa-fw fa-rocket fa-5x"></i>
                                </div>
                                <h3><a href="#">Gallia est omnis</a></h3>
                                <p>Curabitur blandit tempus ardua ridiculus sed magna. Integer legentibus erat a ante historiarum dapibus.</p>
                            </div>
                            <div className="sf-mdl-right-full">
                                <div className="sf-icon">
                                    <i className="fa fa-fw fa-rocket fa-5x"></i>
                                </div>
                                <h3><a href="#">Gallia est omnis</a></h3>
                                <p>Curabitur blandit tempus ardua ridiculus sed magna. Integer legentibus erat a ante historiarum dapibus.</p>
                            </div>
                        </div>
                    </li>
                )} 
                </ul>
            </div>
        </section>
        // <div>
        //     <div style={{marginTop: 30}} className='row'>
        //         <div className='col'>
        //             {error && <Notification error={error}/>}
        //             {success && <Notification success={success}/>}
        //             <table className='table table-hover'>
        //                 <thead>
        //                     <tr>
        //                         <th scope='col'>Author</th>
        //                         <th scope='col'>Book Name</th>
        //                         <th scope='col'>Category</th>
        //                         <th scope='col'>Date Created</th>
        //                     </tr>
        //                 </thead>
        //                 { loading ? <Loading className='text-center' color='text-dark'/> : 
        //                         /* && means if books it should do the map, so its just an if statement */
        //                         /* Map through here (Map is also Loop)*/
        //                 <tbody>
                            
        //                         {books && books.map((item, index) =>
        //                             <tr className='table-default' key={index}>
        //                                 <td>{item.title}</td>
        //                                 <td>{item.author}</td>
        //                                 <td>{item.category}</td>
        //                                 <td>{item.createdAt}</td>
        //                             </tr>
        //                         )} 
                            
        //                 </tbody>
        //                 }
        //             </table>
        //         </div>
        //     </div>
        // </div>
    );
};

export default BookList;