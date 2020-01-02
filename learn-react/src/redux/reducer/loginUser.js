import {SETLOGINUSER, ADDUSER} from '../action/loginUserAction'




export default function (state = null, {type, payload}) {
    switch(type){
      case ADDUSER: 
        return payload
      default:
        return state;
    }
}