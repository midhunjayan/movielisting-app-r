import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';

import Home from './pages/Home';
import MyLists from './pages/MyLists';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/my-movie-list'>
          <MyLists />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;