import { createContext, useReducer } from "react";

const postreducerfun = (currentposts, action) => {
    let newpost = currentposts;
    if(action.TYPE == 'delete'){
        newpost = currentposts.filter((DEFAULT_POST_LIST) => DEFAULT_POST_LIST.id !== action.payload.id);
    }else if(action.TYPE == 'create'){
        newpost = [action.payload, ...currentposts];
    }
    return newpost;
}


export const Context_of_post_list = createContext({
    postlist: [],
    createpost: () => { },
    deletepost: () => { },
});

const DEFAULT_POST_LIST = [];
const post_list_provider = ({ children }) => {
    const [postlist, dispatchpost] = useReducer(postreducerfun, DEFAULT_POST_LIST);
    const deletepost = (id) => {
        dispatchpost({
            TYPE: "delete",
            payload: {
                id,
            }
        })
    }
    const createpost = (id, posttitle, postpara, posttag) => {
        dispatchpost({
            TYPE: "create",
            payload: {
                id,
                title :posttitle,
                para: postpara,
                reactions: 5,
                userId: 8,
                tags: posttag
            }
        })
    }

    
    return <Context_of_post_list.Provider value={
        {
            postlist,
            createpost,
            deletepost
        }
    }>
        {children}
    </Context_of_post_list.Provider>
}

export default post_list_provider;