import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/pages/Main';
import Movie from './components/pages/Movie';
import Book from './components/pages/Book';
import TopNav from './components/organisms/TopNav';

const Router = () => {
  return (
    <BrowserRouter>
      {/* <TopNav /> */}
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/" element={<TopNav />}>
          <Route path="/movie" element={<Movie />} />
          <Route path="/book" element={<Book />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
