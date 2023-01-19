


const initialState = {
    cards:[
        { id: "1", title: "Alex", body:"Lorem ipsum sit amet dolar... Click the name  go to  user!"},
        { id: "2", title: "Willma", body:"Lorem ipsum sit amet dolar... Click the name  go to  user!"},
        { id: "3", title: "John", body:"Lorem ipsum sit amet dolar... Click the name go to  user!"},
    ],
    users: []

}




const rootReducer = (state = initialState, action) => {

    switch(action.type) {

        case "DELETE_CARD" :
            let newCards = state.cards.filter( card => card.id !== action.id );
            return {
                ...state,
                cards:newCards
            }
        case "FETCH_USER" :
            return {
                ...state,
                users: action.payload

            }
        default :
        return state ;

    }
    

    

}

export default rootReducer;
