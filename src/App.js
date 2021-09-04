import { useState, useEffect } from 'react';

function App() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetch('./movie-list.json')
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);
  return <div>
    <ul>
      {
        movies?.slice(0, 20).map((m, index)=>{
          return (
            <li key={index}>
              <span>{m.title}</span>
              <img src={m.poster} alt="poster"/>
            </li>
          )
        })
      }
    </ul>
  </div>;
}

export default App;
