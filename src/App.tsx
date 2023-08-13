import React from "react";
import {
  MovieGrid,
  Header,
  Button,
  MovieRecommendation,
  MovieSelected,
  SearchResultsPage,
  SignIn,
  SignUp,
} from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SignUpActivation from "./components/SignUpActivation/SignUpActivation";
import { useSelector } from "react-redux";
import { IStoreState } from "./types";

function App() {
  const currentUser = useSelector((state: IStoreState) => state.user.user);
  const isAuthorized = !!currentUser?.id;
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="Movie-To-Night/">
          <Route index element={<MovieGrid />} />
          <Route path="movie">
            <Route
              path=":movieId"
              element={isAuthorized ? <MovieSelected /> : <SignIn />}
            />
            <Route
              path=":actorId"
              element={isAuthorized ? <MovieSelected /> : <SignIn />}
            />
          </Route>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="search-results" element={<SearchResultsPage />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="activate/:uid/:token" element={<SignUpActivation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
