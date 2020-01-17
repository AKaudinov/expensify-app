import React from 'react';

const EditExpense = (props) => {
    return (
    <div><p>Editing expense with id of {props.match.params.id}</p></div>
    );
};

export default EditExpense;
