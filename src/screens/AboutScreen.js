import React from "react";
import HeaderComponent from "../component/HeaderComponent";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUsersList, setUsersCount } from "../redux/actions";

function AboutScreen() {
  useEffect(() => {
    // dispatch(setUsersCount(users.length));

    

    dispatch(getUsersList());
  }, []);

  const users = useSelector((state) => state.usersList.users);
  const usersCount = useSelector(state => state.usersList.usersCount);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <HeaderComponent />
      <header className="App-header">
        {/* <button onClick={()=> dispatch(getUsersList())} className="bg-slate-50 text-slate-900">Click Here</button> */}

        <div className="form-group">
          <select className="text-slate-900" name="" id="">
            {users.map((item) => (
              <option
                key={item.id}
                selected={users[0]}
                className="text-slate-900"
              >
                {item.name}
              </option>
            ))}
          </select>

          <h1>{'usersCount : ' + usersCount }</h1>
        </div>
      </header>
    </div>
  );
}

export default AboutScreen;
