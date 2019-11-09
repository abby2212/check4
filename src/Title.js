import React from 'react';
function Title(props) {
    let small = props.small
    let s=40;
    if (props.small) {s=12} 
    return (<>
         <h1 style={{...props.style ,fontSize:s}} >{props.children} </h1>
         
         
    </>

    )
}
export default Title;