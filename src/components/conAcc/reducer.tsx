import {ActionType} from './newacc';


type StateType={
    collapsed:boolean
}

export const reducer = (state: StateType, action: ActionType):StateType => {
    switch (action.type) {
        case 'TOGGLE-COLLAPSED':
            return state = {...state, collapsed:!state.collapsed}
           
        default:
            throw new Error('Bad action type!')
    }
}