import React from "react";
import { Route, Routes } from "react-router-dom";
import { Profile } from "./Profile";

function MyPage(props) {
    return (
        <>
            <Routes>
                <Route path="/" exact element={<Profile/>}/>
            </Routes>
        </>
    );
}
export default MyPage;