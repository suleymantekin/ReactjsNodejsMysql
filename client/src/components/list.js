import React from 'react';

const List = (props) => (
    <table className='table'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>{props.rows}</tbody>
    </table>
);

export default List;