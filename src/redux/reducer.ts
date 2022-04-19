import React from "react"
import * as ACTION from './actionTypes'
const initialState= {
    questionCategory: "",
    questionDifficulty: "",
    questionType: "",
    amountOfQuestion: 50,
    score: 0,

}

const reducer = (state=initialState,action:any)=>{
    switch(action?.type){
        case ACTION.CHANGE_CATEGORY:
            return {
                ...state,
                questionCategory: action.payload
            }
        case ACTION.CHANGE_DIFFICULTY:
            return {
                ...state,
                questionDifficulty: action.payload
            }
        case ACTION.CHANGE_AMOUNT:
            return {
                ...state,
                amountOfQuestion: action.payload
            }
        case ACTION.CHANGE_TYPE:
            return {
                ...state,
                questionType: action.payload
            }
        case ACTION.CHANGE_SCORE:
            return {
                ...state,
                score: action.payload
            }
        default:
            return state
    }
}

export default reducer;