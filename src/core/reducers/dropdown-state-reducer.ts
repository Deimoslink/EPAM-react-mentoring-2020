import {ActionI} from '../interface';


export interface DropdownStateReducerStateI {
    showDropdown: boolean;
}

export const dropdownStateReducer = (state: DropdownStateReducerStateI = {
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
