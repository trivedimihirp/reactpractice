

const Card = ( props ) => {

    return(

        <div className='card'>

            <div className='card-title'>
                    {props.title}
            </div>
            <div className='card-data'>
                {props.value}
            </div>
        </div>
    )

}

export default Card;