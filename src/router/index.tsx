import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import React from "react";

const router = createBrowserRouter([
  {
		path: '',
		element: <App />,
  },
  {
		path: '2',
		element: <App />,
  }
])

export default router;