import React from 'react';

const SmurfCard = (props) => {
    return (
        <div>
            <h3>{props.item.name}</h3>
            <h4>age: {props.item.age}</h4>
            <h4>height: {props.item.height}</h4>
        </div>
    );
};

export default SmurfCard;