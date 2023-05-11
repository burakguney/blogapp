import './App.css';
import Header from './Header';
import Post from './Post';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (

    <Routes>
      <Route index element={
        <main>
          <Header></Header>
          <Post></Post>
          <Post></Post>
          <Post></Post>
        </main>
      } />

      <Route path={'/login'} element={
        <main>
          <Header></Header>
          <div>login page</div>
        </main>
      } />

    </Routes>

  );
}

export default App;
