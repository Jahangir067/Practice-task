import React from 'react';


const Link = ({route}) => {
    return (
        <li className='mr-12 ml-8 hover:bg-blue-400'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;