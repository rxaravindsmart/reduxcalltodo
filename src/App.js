import "./App.css";
import { Provider } from "react-redux";
import { Data } from "./Components/Data";
import store, { persistor } from "./Redux/Store";
import { PersistGate } from "redux-persist/integration/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./Login/login";
import SignIn from "./Login/Signin";
import SignUp from "./Login/Signup";
import UserList from "./Components/User/userlist";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <UserList />,
    },
    { path: "call", element: <Data /> },
    {
      path: "login",
      element: <LoginPage />,
      children: [
        { path: "", element: <SignIn /> },
        { path: "singup", element: <SignUp /> },
      ],
    },
  ]);
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
