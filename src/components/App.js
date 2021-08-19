import React, { Component, useState } from "react";
import "./../styles/App.css";

// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow",
          },
          {
            name: "Dewas",
          },
        ],
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit",
          },
          {
            name: "Berasia",
          },
        ],
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad",
          },
          {
            name: "Hirapur",
          },
        ],
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's",
          },
          {
            name: "Faizal khan's",
          },
        ],
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's",
          },
          {
            name: "Guddu bhaiya's",
          },
        ],
      },
    ],
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin",
          },
          {
            name: "Jalah",
          },
        ],
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati",
          },
          {
            name: "Leopard found in IIT Guwahati",
          },
        ],
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh",
          },
          {
            name: "Silchar",
          },
        ],
      },
    ],
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur",
          },
          {
            name: "Maner",
          },
        ],
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur",
          },
          {
            name: "Barachatti",
          },
        ],
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara",
          },
          {
            name: "Jale",
          },
        ],
      },
    ],
  },
];

function City(props){
  let {children} = props;
  let [showCityName, setShowCityName] = React.useState(false);
  function showCity(){
    setShowCityName(!showCityName);
  }
  return(
    <>
      <li onClick={showCity}>
        {children.name}
      </li>
      {
        showCityName?
        <ul>
          {
            children.towns.map((ele,index)=>{
              let key = 'town'+(index+1)
              return(
                <li key={key} id={key}>{ele.name}</li>
              )
            })
          }
        </ul>
        :null
      }
    </>
  )
}

function State(props){
  let {children} = props;
  let [state, setState] = React.useState(false);
  function showCity(){
    setState(!state);
  }
  return(
    <>
      <li onClick={showCity}>
        {children.name}
      </li>
      {
        state?
        <ul>
          {
            children.cities.map((ele,index)=>{
              let key = 'city'+(index+1)
              return(
                <City key={key} id={key}>{ele}</City>
              )
            })
          }
        </ul>
        :null
      }
    </>
  )
}




function App() {
  return <div id="main">
    <ul>
      {
        states.map((state,index)=>{
          let key = 'state'+(index+1)
          return(
            <State key={key} id={key}>{state}</State>  
          )
        })
      }
    </ul>
  </div>;
}

export default App;
