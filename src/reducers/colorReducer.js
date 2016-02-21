/*    eslint indent: 0 */
export function colorB(state = 'green', action = null) {
    const {type, payload} = action;
    switch (type) {
    case 'myActionName_UpdateColor':
        return payload;
    default:
        return state;
    }
}
