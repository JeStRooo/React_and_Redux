import "./App.css";
import "./normalize.css";
import Header from "./components/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Posts from "./components/Posts/Posts";
import PostList from "./components/MyList/PostList";
import CustomSvg from "./components/svg/CustomSvg";
import {params} from "./components/svg/coordinateMock";
import Redux from "./components/Redux/Redux";
import ToDo from "./components/toDo/ToDo";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path={'/list'} element={<PostList/>}/>
                    <Route path={'/posts'} element={<Posts/>}/>
                    <Route path={'/svg'} element={<CustomSvg params={params}/>}/>
                    <Route path={'/redux'} element={<Redux/>}/>
                    <Route path={'/todo'} element={<ToDo/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;

