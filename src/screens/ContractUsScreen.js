import React from "react";
import HeaderComponent from "../component/HeaderComponent";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import axios from 'axios';

function ContactUSScreen() {
  const navigate = useNavigate();


    


  

  const gotoMain = () => {
      axios.get('http://localhost:5000/users')
      .then((result) => {
        console.log(result.data );
      }).catch((err) => {
        console.log(err);
      });
  };

  const data = useFetch();  

  return (
    <div className="App">
      <HeaderComponent />
      <header className="App-header">
        <h2 className="text-yellow-500">ContactUS Screen</h2>

        <button
          onClick={() => gotoMain()}
          className=" transition ease-in-out delay-50 rounded-full bg-slate-900 p-2 hover:bg-slate-600 active:bg-slate-900 select-none"
        >
          Goto Main
        </button>

        {/* <h1>{data}</h1> */}

      </header>
    </div>
  );
}

export default ContactUSScreen;
