import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Layout from './components/layout/Layout';

import Home from './pages/Home';
import MyLists from './pages/MyLists';

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/my-movie-list">
            <MyLists />
          </Route>
        </Switch>
      </Layout>
    </Provider>
  );
}

export default App;
