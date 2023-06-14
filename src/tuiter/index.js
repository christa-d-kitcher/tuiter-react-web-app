//2.1.5 Creating a Tuiter placeholder component

//3.1.4 Highlight based on the URL path
import { Routes, Route } from "react-router";
import Nav from "/Users/christad.kitcher/2023/summer/webdev/tuiter-react-web-app/src/nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen/home-screen";
import ExploreScreen from "./explore-screen/index";
import BookmarksScreen from "./bookmarks-screen/bookmarks-screen";
import ProfileScreen from "./profile-screen/profile-screen";
import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";
import WhoToFollowList from "./who-to-follow-list/index"

import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
const store = configureStore({reducer: {who: whoReducer, tuits: tuitsReducer}});

function Tuiter() {
    return (
        <Provider store={store}>
        <div>
            <Nav/>
            <div className="row">
                <div className="col-2">
                    <NavigationSidebar />
                </div>
                <div className="col-7">
                    <Routes>
                        <Route path="/home" element={<HomeScreen/>} />
                        <Route path="/explore" element={<ExploreScreen/>} />
                        <Route path="/bookmarks" element={<BookmarksScreen/>} />
                        <Route path="/profile" element={<ProfileScreen/>}/>
                    </Routes>
                </div>
                <div className="col-3">
                    <WhoToFollowList/>
                </div>
            </div>
        </div>
        </Provider>

    );
}
export default Tuiter;

