import React from 'react';
import Photo from './Photo';
import Title from './Title';

function Wrapper (props){
    return (<div>
        {props.children}
    </div>)
}
export default Wrapper;