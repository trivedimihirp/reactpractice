import { useState } from "react";

export const ButtonClick = () => {

 let [ time, setTime] = useState( new Date().toLocaleTimeString() );

 let clickHanlder = ( e ) =>{
    setTime( new Date().toLocaleTimeString() );
 }

  return (
    <>
      <div >👍 { `Las times Button is Clicked --> ${time}`} </div>
      <div className="d-grid gap-2" style={{padding:'2em'}}>
         <button type="button" name="" id="" class="btn btn-primary" onClick={clickHanlder}>Click on Button</button>
    </div>
    </>
  );
};
