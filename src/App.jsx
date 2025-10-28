import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
 } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home/Home";
import SearchResults from "./pages/SearchResults/SearchResults";
import Favorites from "./pages/Favorites/Favorites";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./components/NotFound";

export default function App() {
  const [searchInput, setSearchInput] = useState("");
  const [favorited, setFavorited] = useState(false)
  
  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<NavBar />}>
        <Route path="*" element={<NotFound />}/>
        <Route index element={<Home searchInput={searchInput} setSearchInput={setSearchInput} />} />
        <Route path="searchresults" element={<SearchResults />} />
        <Route path="favorites" element={<Favorites favorited={favorited} setFavorited={setFavorited} />}/>
      </Route>
    </>
  ))

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#876F3A] bg-fixed bg-[radial-gradient(ellipse_900px_600px_at_15%_10%,rgba(214,197,160,0.38),transparent_60%),radial-gradient(ellipse_700px_500px_at_85%_85%,rgba(214,197,160,0.28),transparent_55%),linear-gradient(135deg,#876F3A_0%,#876F3A_70%,#D6C5A0_130%)] overflow-y-scroll">
      <RouterProvider router={router}/>
    </div>
  );
}

// 
// 
// 