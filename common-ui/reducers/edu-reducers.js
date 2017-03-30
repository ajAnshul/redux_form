
export default function (state = [], action) {
    switch (action.type) {
        case 'ADD_EDUCATION':
            return action.payload;
            break;
    }
    return state;
}
