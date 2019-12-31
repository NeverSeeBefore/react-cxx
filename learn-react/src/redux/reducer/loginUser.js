import {SETLOGINUSER} from '../action/loginUserAction'


export default function (state = null, {type, payload}) {
    switch(type){
      case SETLOGINUSER: 
        return payload
      default:
        return state;
    }
}