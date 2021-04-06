import React, { useState } from 'react';
import { Grid, Message } from 'semantic-ui-react'

const Notification = ({message, width}) => {
    const [dismissState, setDismissState] = useState(false);

    const handleDismiss = () => {
        setDismissState(true);
    }

    const success = message.type === 'success' ? true : false;
    const error = message.type === 'fail' ? true : false;

    return (
        <Grid centered >
            <Grid.Column width={width}>
                <Message hidden={dismissState} onDismiss={() => handleDismiss()} success={success} error={error}>
                    <Message.Header>{message.title}</Message.Header>
                    <p>{message.content}</p>
                </Message>
            </Grid.Column>
        </Grid>
    );
        
};

export default Notification;