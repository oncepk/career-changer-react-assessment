import React, { useEffect, useReducer } from "react";
import Navbar from "./Navbar";
import AdminSector from "./HomeAdmin";
import UserSector from "./HomeUser";
import { mockEmployees } from "./defultdata/mockEmployees";
import styled from "styled-components";

const StyledHome = styled.div`
  background-color: #f5f5f5;
  color: #333;
  padding: 0;
  background-size: cover;
  background-position: center center;
  height: 100vh;
  width: 100vw;

  header {
    display: flex;
    flex-direction: column;

    align-items: center;
    margin-bottom: 20px;

    h1 {
      margin: 0;
    }

    .container-btn {
      display: flex;
      gap: 20px;
    }
  }
`;

const dataEmployees = mockEmployees;

const homeReducer = (state, action) => {
  switch (action.type) {
    case "SET_EMPLOYEES":
      return { ...state, employees: action.payload };
    case "ADD_EMPLOYEE":
      if (!action.payload.name) return state;
      return {
        ...state,
        employees: [
          ...state.employees,
          {
            id: state.employees.length,
            ...action.payload,
          },
        ],
      };
    case "DELETE_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.filter(
          (employee) => employee.id !== action.payload
        ),
      };
    case "SET_SECTOR":
      return { ...state, sector: action.payload };
    default:
      return state;
  }
};

const Home = () => {
  const [state, dispatch] = useReducer(homeReducer, {
    employees: [],
    sector: "",
  });

  useEffect(() => {
    dispatch({ type: "SET_EMPLOYEES", payload: dataEmployees });
  }, []);

  let titles;
  let sectorRender = "";
  switch (state.sector) {
    case "User": {
      titles = "Home - User Sector";
      sectorRender = <UserSector employees={state.employees} />;
      break;
    }
    case "Admin": {
      titles = "Home - Admin Sector";
      sectorRender = (
        <AdminSector
          employees={state.employees}
          handleSetEmpolyees={(data) =>
            dispatch({ type: "ADD_EMPLOYEE", payload: data })
          }
          handleDeleteEmployees={(id) =>
            dispatch({ type: "DELETE_EMPLOYEE", payload: id })
          }
        />
      );
      break;
    }
    default:
      titles = "React - Assessment";
  }

  return (
    <StyledHome>
      <Navbar />
      <header>
        <div>
          <h1>Generation Thailand</h1>
          <h1>{titles}</h1>
        </div>
        <div className="container-btn">
          <button
            onClick={() => dispatch({ type: "SET_SECTOR", payload: "User" })}
          >
            User Home Sector
          </button>
          <button
            onClick={() => dispatch({ type: "SET_SECTOR", payload: "Admin" })}
          >
            Admin Home Sector
          </button>
        </div>
      </header>
      <section>{sectorRender}</section>
    </StyledHome>
  );
};

export default Home;
