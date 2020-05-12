export const dropdownStateReducer = (state = {
    showDropdown: false
}, action) => {
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
