import { useState } from "react"


const LoginForm = () =>{

    let [ {fname, surname, email, phone}, setUserData ] = useState( { fname: '', surname: '', email:'', phone: ''} );

    const onSubmit = ( e ) => {
        console.log('On Submit Hello');
       // e.preventDefault();
       
    }

    const onInputChange = ( e ) =>{
        let {name, value } = e.target;

        setUserData( ( prevState ) => {
            return { ...prevState, [name] : value };
        } );

    }
    
    const clickHandler = ( e )=>{
        //e.preventDefault();
        console.log('CLICKED');
    }

    return(
        <div className='login-form'>
            <div className='welcome-msg'>
                Hello { fname} { surname } 
                <div>
                    {email} <br/> {phone}
                </div>
            </div>
            <form >
                <input type="text" value={fname} placeholder='Enter Name' className='input-widget' onChange={onInputChange} name='fname'/> 
                <input type="text" placeholder= 'Enter Surname'  value={surname} className='input-widget' onChange={onInputChange} name='surname'/>
                <input type="text"  placeholder= 'Enter Email' value={email} className='input-widget' onChange={onInputChange} name='email'/>
                <input type="text"  placeholder= 'Enter Phone' value={phone} className='input-widget' onChange={onInputChange} name='phone'/>

                <button   className='btn btn-primary input-widget' onClick={clickHandler}> Click Me </button>

            </form>



        </div>
    )

}

export default LoginForm;