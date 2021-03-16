import React from 'react';

const Notification = ({error, success}) => {

    if(error != null){
        return (
            <div>
                <p>{error}</p>
            </div>
        );
    }

    if(success != null)
    {
        return (
            <div>
                <p>{success}</p>
            </div>
        );
    }
        
};

export default Notification;