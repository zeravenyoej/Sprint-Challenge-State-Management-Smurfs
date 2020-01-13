import React, { useEffect } from 'react';
import SmurfCard from './SmurfCard';

const SmurfList = (props) => {
    
    useEffect(()=>{
        props.getData();
    }, [])

    return (
        <div>
            {props.smurfs.map((item, index)=>(
                <SmurfCard
                    key={index}
                    item={item}
                />))}
        </div>
    );
};

export default SmurfList;