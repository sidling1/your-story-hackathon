import React,{ useEffect, useState } from 'react';

const NotificationCard = ({notif})=>{
    return(
        <div style={{"border":"1px solid black"}}>
            <div>{notif.type}</div>
            <div>{notif.content}</div>
        </div>
    );
}


export default function Notifications() {
    const [notifs,setNotifs] = useState([{id: 0, content: "Hey Guys", type: "Post"}]);

    // useEffect(()=>{
    //     let ar = []
    //     for(let i=0;i<100;i++){
    //         ar.push('Something');
    //     }

    //     setNotifs(ar);
    // })

	return (
		<div style={{"border": "1px solid black"}}> 
            Notifications : 
            <div style={{"overflow-y" : "scroll", "height": "100px"}}>
            {notifs.map((val,index)=>{
                return (<NotificationCard key={val.id} notif={val}/>);
            })}
            </div>  
        </div>
    );
}