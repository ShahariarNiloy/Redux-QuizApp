import * as ACTION from "./actionTypes"

export const handleCategoryChange = (payload:any)=>({
    type: ACTION.CHANGE_CATEGORY,
    payload,
})
export const handleDifficultyChange = (payload:any)=>({
    type: ACTION.CHANGE_DIFFICULTY,
    payload,
})
export const handleTypeChange = (payload:any)=>({
    type: ACTION.CHANGE_TYPE,
    payload,
})
export const handleAmountChange = (payload:any)=>({
    type: ACTION.CHANGE_AMOUNT,
    payload,
})
export const handleScoreChange = (payload:any)=>({
    type: ACTION.CHANGE_SCORE,
    payload,
})