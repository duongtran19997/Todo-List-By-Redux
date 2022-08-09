const userReducer = (state = [], action) => {
    switch (action.type) {
        case "CREATE":
            return state;
        default:
            return state
    }
}
export default userReducer