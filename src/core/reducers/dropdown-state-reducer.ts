import {ActionI} from '../interface';
import {ACTIONS} from '../actions/actions.enum';
import {dropdownStateStateI} from './reducer.interface';

export const dropdownState = (state: dropdownStateStateI = {
    showDropdown: false
}, {type, payload}: ActionI) => {
    switch (type) {
        case ACTIONS.SHOW_DROPDOWN:
            state = {
                ...state,
                showDropdown: payload
            };
            break;
        default:
            break;
    }
    return state;
};
