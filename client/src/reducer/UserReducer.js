
export const initialData=null;

export const reducer=(state, action)=>
{
    if(action.type=="user")
    {
        return action.payload;
    }

    return state;
}