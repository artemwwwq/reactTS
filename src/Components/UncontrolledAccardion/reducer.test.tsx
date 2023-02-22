import {reducer, stateTypes} from "./Reducer";

test('should test on reducer ', () => {
    // data
    const state: stateTypes = {
        collapsed: false
    }

    // action
  const newState = reducer(state, {type: 'TOGGLE-COLLAPSED'})


    // expect

    expect(newState.collapsed).toBe(true)
})

test('should test on reducer ', () => {
    // data
    const state: stateTypes = {
        collapsed: true
    }

    // action
    const newState = reducer(state, {type: 'TOGGLE-COLLAPSED'})


    // expect

    expect(newState.collapsed).toBe(false)
})