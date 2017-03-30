
export default function (state = [], action) {
    switch (action.type) {
        case 'ADD_EXPERIENCE':
            return action.payload;
            break;
    }
    return state;
}
