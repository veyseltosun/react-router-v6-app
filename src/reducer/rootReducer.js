


const initialState = {
    cards:[
        { id: "1", title: "Alex", body:"Lorem ipsum sit amet dolar... Click the name  go to  user!"},
        { id: "2", title: "Willma", body:"Lorem ipsum sit amet dolar... Click the name  go to  user!"},
        { id: "3", title: "John", body:"Lorem ipsum sit amet dolar... Click the name go to  user!"},
    ],

}




const rootReducer = (state = initialState, action) => {

    switch(action.type) {

        case "DELETE_CARD" :
            let newCards = state.cards.filter( card => card.id !== action.id );
            return {
                ...state,
                cards:newCards
            }
        default :
        return state ;

    }
    

    

}

export default rootReducer;
