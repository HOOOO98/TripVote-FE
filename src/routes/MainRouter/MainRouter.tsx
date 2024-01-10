import { Route, Routes } from "react-router-dom";

import Alarm from "@/pages/Alarm/Alarm";
import Detail from "@/pages/Detail/Detail";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import AgreePrivacy from "@/pages/Signup/Agree/AgreePrivacy";
import AgreeService from "@/pages/Signup/Agree/AgreeService";
import Trip from "@/pages/Trip/Trip";
import Vote from "@/pages/Vote/Vote";
import Dashboard from "@/routes/Dashboard/Dashboard";

function MainRouter() {
  return (
    <Routes>
      <Route element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="/carryout" element={<Trip />} />
        <Route path="/heart" element={<Home />} />
        <Route path="/user" element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/vote" element={<Vote />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/signup/agreePrivacy" element={<AgreePrivacy />} />
      <Route path="/signup/agreeService" element={<AgreeService />} />
      <Route path="/alarm" element={<Alarm />} />
    </Routes>
  );
}

export default MainRouter;
