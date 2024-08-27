import { createContext, useReducer, useEffect , useState} from "react";
import { useCallback } from "react"; 

const postreducerfun = (currentposts, action) => {
    let newpost = currentposts;
    if(action.TYPE == 'delete'){
        newpost = currentposts.filter((DEFAULT_POST_LIST) => DEFAULT_POST_LIST.id !== action.payload.id);
    }else if(action.TYPE == 'create'){
        newpost = [action.payload, ...currentposts];
        console.log(newpost)
    }else if(action.TYPE == "create_multi_posts"){
        newpost = action.payload.posts; 
    }
    return newpost;
}


export const Context_of_post_list = createContext({
    postlist: [],
    createpost: () => { },
    deletepost: () => { }
});

const post_list_provider = ({ children }) => {
    const [postlist, dispatchpost] = useReducer(postreducerfun, []);
    
    const deletepost = useCallback((id) => {
        dispatchpost({
            TYPE: "delete",
            payload: {
                id,
            }
        })
    },
      [dispatchpost],
    );
    

    const createmultiposts = (posts) => {
        dispatchpost({
            TYPE: "create_multi_posts",
            payload: {posts}
        })
    }
    const createpost = (post) => {
        dispatchpost({
            TYPE: "create",
            payload: post
        })
    }

    const [fetching, setfetching] = useState(false);

    useEffect(() => {
      setfetching(true)
      const controller = new AbortController();
      const signal = controller.signal;
      fetch('https://dummyjson.com/posts', {signal})
      .then(res => res.json())
      .then(data => {
        createmultiposts(data.posts)
        setfetching(false)
      });
      return () => {
        controller.abort();
      }
    }, []);
    
    return <Context_of_post_list.Provider value={
        {
            postlist,
            createpost,
            deletepost,
        }
    }>
        {children}
    </Context_of_post_list.Provider>
}

export default post_list_provider;