import { useState } from 'react';
import * as MovieList from '../public/movie-list.json';

function App() {
  const [moveis, setMovies] = useState(MovieList);
  return (
    <div>
      It works
    </div>
  );
}

export default App;
