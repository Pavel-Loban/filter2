import React from 'react';
import List from '../List/List';

const Lists = (props) => {

// console.log(props)

    const listElements = props.listItems.map(item => {
        return <List {...item}
        key={item.id}
        />
    })

    return (
        <div>
            <ul className={'lists'}>
              {listElements}
            </ul>
        </div>
    );
};

export default Lists;