import { hey } from './lp.mjs'



function end(){
    console.log("theernu")
   
}

function note (){
    console.log('theernu2')
}

export function first (sec,not){
    sec()
    
    not()
    
}


hey(end,note)