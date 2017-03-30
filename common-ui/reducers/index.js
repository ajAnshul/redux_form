import {combineReducers} from 'redux';
import PersonalInformation from './active-profile.js';
import Address from './address-reducers.js';
import Edu from './edu-reducers.js';
import Exp from './exp-reducers.js';


const allReducers = combineReducers({
    personal_info: PersonalInformation,
    address: Address,
    edu:Edu,
    exp:Exp
});

export default allReducers
