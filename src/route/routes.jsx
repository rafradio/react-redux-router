import {createBrowserRouter} from "react-router-dom";
import { Root } from './Root'
import { TableNext } from "../components/TableNext";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Root/>,
      children: [
        {
          path: "table/:dateID",
          element: <TableNext />,
        },
      ]
    },
]);