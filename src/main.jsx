import * as React from "react";
import { createRoot } from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from './store/store';
import {router} from './route/routes.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} stabilityCheck="never">
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
