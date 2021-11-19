import { useState } from "react"

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  

const ChangeBackGround = () =>{


    let[ style, setStyle ] = useState( { textAlign: 'center', height:'50%', width: '50%', backgroundColor:getRandomColor()} )
    
    let clickHanlder = () =>{
        setStyle ( { textAlign: 'center', height:'50%', width: '50%', backgroundColor:getRandomColor()}  )
    }

    return(
        
        <div style={style}>
            <button type="button" name="" id="" class="btn btn-primary" onClick={clickHanlder}>Click on to Change Background</button>

        </div>

    )

}

export default ChangeBackGround;