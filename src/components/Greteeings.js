
const Greetings = ()=>{


    let time =  new Date('July 21, 1983 01:15:00').getHours();
    return(
        <div style={ {  display:'flex', justifyContent:'center', alignItems:'center', height:'100vh' }}>
         { time>= 1  && time <12 && <div style={{backgroundColor:'green', width: '40em', height:'10em', borderRadius:'2em', display:'flex'}}>
           <span style={{margin:'auto'}}>Good Morning time is {time} </span> </div> } 
          { time>= 12  && time <17 && <div style={{backgroundColor:'orange'}}> Good After Noon time is {time} </div> } 
          { time>17   && time< 1 && <div style={{backgroundColor:'black'}}>Good Night time is {time} </div> } 
        </div>

    );

}

export { Greetings }