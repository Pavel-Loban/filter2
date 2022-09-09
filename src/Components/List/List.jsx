import React from 'react';


const List = (props) => {

    // console.log(props)

    return (
        <li className={'li-item'}>
            {props.title}
        </li>
    );
};

export default List;