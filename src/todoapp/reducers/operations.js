const initialstate =[
    {id: 1, todo: 'Geetika', completed: false},
    {id: 1, todo: 'Smruti', completed: false},
    {id: 1, todo: 'Payal', completed: false}
]

export const operationsReducer =(state= initialstate, action)=>{
    switch(action.type){
        default: return state;
    }
}