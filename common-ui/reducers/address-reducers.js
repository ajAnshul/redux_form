
export default function (state = [], action) {
    switch (action.type) {
        case 'ADD_ADDRESS':
            return action.payload;
            break;
    }
    return state;
}
