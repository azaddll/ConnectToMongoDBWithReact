import axios from "axios";
import { GETUSERSLIST, SETUSERNAME, SETUSERSCOUNT } from "./actionsType";
import { useSelector } from "react-redux/es/exports";

const url = "https://gorest.co.in/public/v2/users";
const token =
  "e1f3d97bd32e1b05c75ba2b23ad4841a94e2319e9e4cad0906653a08e15c09ef";

export const setUserName = (value) => {
  return {
    type: SETUSERNAME,
    payload: value,
  };
};


export const getUsersList = () => {
  try {
    return async (dispatch) => {
      const result = await axios.get(url, {
        headers: {
          Authorization: `Basic ${token}`,
        },
      });

      const jsonData = await result.data;

      if (jsonData) {
        dispatch({
          type: GETUSERSLIST,
          payload: jsonData,
        });
      } else {
        console.log("there is not json data");
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export const setUsersCount = (value) => {
  return {
    type: SETUSERSCOUNT,
    payload: value,
  };
};
