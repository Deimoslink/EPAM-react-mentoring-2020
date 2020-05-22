import {ActionI} from '../interface';


export interface dropdownStateStateI {
    showDropdown: boolean;
}

export const dropdownState = (state: dropdownStateStateI = {
    showDropdown: false
}, action: ActionI) => {
    switch (action.type) {
        case "SHOW_DROPDOWN":
            state = {
                ...state,
                showDropdown: action.payload
            };
            break;
        default:
            break;
    }
    return state;
};
