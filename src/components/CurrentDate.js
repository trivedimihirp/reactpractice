
const CurrentDate = () =>{

    let date =  new Date();
    //date.getDate()


    return(
        <div style={{backgroundColor: 'white'}}>
            <h1> Hello There</h1>

            <div>
                    Today's date is { `${date.toLocaleDateString()}` }
                    <br/>
                    Current time is { `${date.toLocaleTimeString()}` }


            </div>

        </div>

    );

}

export {CurrentDate}
//export {NetflixSeries}
