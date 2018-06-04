export type SetState = Action<'SET_STATE',{key:string,state:any}>


export const setState = (statekey:string,newState:any) => ({
    payload:{key:statekey, state:newState},
    type: 'SET_STATE',
})
