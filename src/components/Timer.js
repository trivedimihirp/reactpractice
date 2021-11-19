import { useEffect, useState } from "react";



const Timer = ()=>{
    let [ time, setTime] = useState( new Date().toLocaleTimeString() );

    useEffect(()=>{
        setInterval( ()=>{
            setTime( new Date().toLocaleTimeString() );
        }, 1000 );
        console.log( 'USE EFFET CALLED')
    }, []);
  return (
    <>
      <div className='clock'>👍 { `Current Time is --> ${time}`} </div>
     
    </>
  );

}

export default Timer;