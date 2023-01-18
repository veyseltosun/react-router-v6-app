export const deleteCard = (id) => {
    return{
        type:"DELETE_CARD",
        id: id,
    }
}