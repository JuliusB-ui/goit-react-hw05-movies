import { getTrending } from "API/fetchAPI";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import {SharedLayout} from './SharedLayout/SharedLayout';

export const App = () => {
  return (
<Routes>
  <Route path="/" element={<SharedLayout />} />
  <Route index element={<HomePage/>}>
  <Route path="`movies/:${movieID}`" element={<MovieDetails/>}/>
  </Route>


</Routes>
  );
};
