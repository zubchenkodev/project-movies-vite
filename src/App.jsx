import Genre from "./pages/Genre";
import Movie from "./pages/Movie";
import Movies from "./pages/Movies";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PageIsNotFound from "./pages/PageIsNotFound";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Movies />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<Movie />} />
          <Route path="genres/:id" element={<Genre />} />
          <Route path='*' element={<PageIsNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
  
};

