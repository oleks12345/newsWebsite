import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PageTemplate from './templates/PageTemplate/PageTemplate';
import Index from './pages/Index/Index';

const App = () => {
   return (
      <BrowserRouter>
         <PageTemplate>
            <Switch>
               <Route exact path="/" component={ Index } />
            </Switch>
         </PageTemplate>
      </BrowserRouter>
   );
};

export default App;
