// Action - Define what to do
export const petIncrement = (number) => {
    return {
      type: "PET_INCREASED",
      payload: number
    }
 }
 
 export const petDecrement = (number) => {
    return {
      type: "PET_DECREASED",
      payload: number
    }
 }