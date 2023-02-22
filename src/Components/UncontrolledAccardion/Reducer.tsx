type ActionType = {
    type: string
}
export const TOGGLE_COLL = 'TOGGLE-COLLAPSED'

export type stateTypes = {
    collapsed: boolean
}

export const reducer = (state: stateTypes, action: ActionType): stateTypes => {


    switch (action.type) {
        case TOGGLE_COLL: {
            return  {...state, collapsed: !state.collapsed}
        }
        default:
            return state
    }
}