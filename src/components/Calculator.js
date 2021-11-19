import { add, mult, div } from "./utils/calculatorUtils";

export default () =>{

    return(

        <div>
             The Addition of 2 Numbers is 4+2 = { add( 4,2 )} <br/>
             The Multiplication of 2 Numbers is 4*2 = { mult( 4,2 )}
             The Division of 2 Numbers is 4/2 =  { div( 4,2 )}
        </div>

    )
}