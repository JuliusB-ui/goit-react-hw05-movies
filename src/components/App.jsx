import { getTrending } from "API/fetchAPI";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import {SharedLayout} from './SharedLayout/SharedLayout';
import {HomePage} from '../Pages/HomePage/Home';
import {MovieDetails} from './MovieDetails/MovieDetails';

export const App = () => {

  return (

<Routes>
  <Route path="/" element={<SharedLayout />} />
  <Route path="home" element={<HomePage/>}>
  <Route path='movies/:movieId' element={<MovieDetails/>}/>
  </Route>


</Routes>

  );
};
