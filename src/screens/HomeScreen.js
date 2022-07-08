import React from "react";
import HeaderComponent from "../component/HeaderComponent";
import { useDispatch, useSelector } from "react-redux";
import { setUserName } from "../redux/actions";

function HomeScreen() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);

  

  return (
    <div>
        <HeaderComponent />
        <div className="bg-sky-200 h-screen flex justify-center items-center">
        
      <input
        style={{ width: 500, fontSize: 16 }}
        value={userData.userName}
        placeholder={"Enter your name "}
        onChange={(event) => dispatch(setUserName(event.target.value))}
        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-ring-400 focus:ring-1 focus:ring-sky-500 font-normal drop-shadow-md shadow-yellow-200"
      />    
    </div>
    </div>
    
  );
}

export default HomeScreen;
