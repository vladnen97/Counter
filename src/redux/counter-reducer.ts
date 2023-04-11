
export type ModeType = 'view' | 'edit' | 'error'

const initState = {
    maxValue: 5,
    startValue: 0,
    mode: 'view' as ModeType
}

type InitStateType = typeof initState
type ActionsType = ReturnType<typeof setValuesAC> | ReturnType<typeof setModeAC>

export const counterReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case 'SET-VALUES':
            return {
                ...state,
                startValue: action.startValue,
                maxValue: action.maxValue,
                mode: 'view'
            }
        case 'SET-MODE':
            return {
                ...state,
                mode: action.mode
            }
        default:
            return state
    }
}

export const setValuesAC = (startValue: number, maxValue: number) => {
    return {type: 'SET-VALUES', startValue, maxValue} as const
}
export const setModeAC = (mode: ModeType) => {
    return {type: 'SET-MODE', mode} as const
}