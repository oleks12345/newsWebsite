import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PageTemplate from './templates/PageTemplate/PageTemplate';
import Index from './pages/Index/Index';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const App = () => {
   return (
      <BrowserRouter>
         <PageTemplate>
            <Switch>
               <Route exact path="/" component={ Index } />
               <Route component={ ErrorPage } />
            </Switch>
         </PageTemplate>
      </BrowserRouter>
   );
};

export default App;
