import React from 'react';

const ErrorPage = () => {
    const onReload = ()=> {
            location.reload();
    }
    return (
        <div>
                <h1>Error!</h1>
            <button onClick={onReload}>Reload</button>
        </div>
    );
};

export default ErrorPage;