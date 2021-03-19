import React from 'react';

const Notification = ({error, success}) => {

    if(error != null){
        return (
            <div className="alert alert-dismissible alert-danger">
                <button type="button" className="close" data-bs-dismiss="alert">&times;</button>
                <strong> {error} </strong>
            </div>
        );
    }

    if(success != null)
    {
        return (
            <div className="alert alert-dismissible alert-success">
                <button type="button" className="close" data-bs-dismiss="alert">&times;</button>
                <strong> {success} </strong>
            </div>
        );
    }
        
};

export default Notification;