import React from 'react';
import useFirebase from '../../../hooks/useFirebase';

const ConfirmAppoinment = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h1>Appoinment Confirm by  {user.displayName}</h1>
        </div>
    );
};

export default ConfirmAppoinment;