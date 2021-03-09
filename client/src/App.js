import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import MenuBar from "./components/MenuBar/MenuBar";
import Admin from "./components/Admin/Admin";
import Posts from "./components/Posts/Posts";
import Postpage from "./components/Postpage/Postpage";
import { getPosts } from "./actions/posts";


function App() {
    const dispatch = useDispatch();     

    const [currentId, setCurrentId] = useState(null);
    
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    
    const posts = useSelector((state) => state.posts);
        

    return (
        <Router>
            <MenuBar />
            <Switch>
                <Route exact path="/">
                    <Posts setCurrentId={setCurrentId} posts={posts} />
                </Route>
                <Route path="/posts/:id">
                    <Postpage posts={posts} />
                </Route>
                <Route path="/admin">
                    <Admin currentId={currentId} setCurrentId={setCurrentId} posts={posts}/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;