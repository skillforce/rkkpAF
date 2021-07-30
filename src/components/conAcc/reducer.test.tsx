import {reducer} from './reducer';

test('Collapsed should be true', () => {
    type StateType = {
        collapsed: boolean
    }
    //data

    const state: StateType = {
        collapsed: false
    }

    //action
    const newState = reducer(state, {type: 'TOGGLE-COLLAPSED'})


    //expected

    expect(newState.collapsed).toBe(true);


})

test('Collapsed should be false', () => {
    type StateType = {
        collapsed: boolean
    }
    //data

    const state: StateType = {
        collapsed: true
    }

    //action
    const newState = reducer(state, {type: 'TOGGLE-COLLAPSED'})


    //expected

    expect(newState.collapsed).toBe(false);


})

test('reducer should throw error because action type is incorrect', () => {
    type StateType = {
        collapsed: boolean
    }
    //data

    const state: StateType = {
        collapsed: true
    }

    //expected

    expect(()=>{reducer(state, {type: 'FAKETYPE'})}).toThrowError();


})
