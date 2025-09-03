import { createBrowserRouter, RouterProvider } from "react-router-dom";
import First from "./First";
import Home from "./pages/Home";
import Flights from "./pages/Flights";
import FlightDetails from "./pages/FlightDetails";

// import About from "./Pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <First />, // wrapper (nav, footer, etc.)
    children: [
      { index: true, element: <Home /> },
      { path: "/flights", element: <Flights /> },
      { path: "//flight-details", element: <FlightDetails /> },
      
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
