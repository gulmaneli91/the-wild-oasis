/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useUser } from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Spinner from "./Spinner";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate()
  // 1. load  authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // 2. If there is no authenticated user, redirect to the /login
  useEffect(function () {
    if(!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  // 3.  while loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );


  //4. If there is a user , render the app

if(isAuthenticated) return children;
}

export default ProtectedRoute;
