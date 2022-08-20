const initialState = {
  data: [],
  history: [
  ],
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SUCCESS':
      return {
        ...state,
        data: action.payload,
      }
    
    case 'HISTORY':
      return {
        ...state,
        history: action.payload,
      }
    default:
      return state
  }
}

export const success = (data) => ({
  type: 'SUCCESS',
  payload: data,
})



export const history = (history) => ({
  type: 'HISTORY',
  payload: history,
})

