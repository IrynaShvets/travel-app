import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';
import Navigation from '../Navigation/Navigation';
import Home from '../Home/Home';
import Login from '../Login/Login';
import useToken from './useToken';

/* function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
}
 */
function App() {
  /* const [token, setToken] = useState(); */
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/preferences" element={<Preferences />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </>
    </div>
  );
}

export default App;

/* import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppBar from './components/AppBar/AppBar';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';

const HomePage = lazy(() =>
  import('./views/HomePage.js' ),
);
const RegisterPage = lazy(() =>
  import('./views/RegisterPage.js' ),
);
const LoginPage = lazy(() =>
  import('./views/LoginPage.js' ),
);
const TripPage = lazy(() =>
  import('./views/TripPage.js'),
);
const BookingsPage = lazy(() =>
  import('./views/BookingsPage.js' ),
);

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrent);

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isFetchingCurrentUser && (
        <>
          <Routes>
            <Route path="/" element={<AppBar />}>
              <Route
                path="sing-up"
                element={
                  <PublicRoute restricted navigateTo="/">
                    <RegisterPage />
                  </PublicRoute>
                }
              />
              <Route
                path="sing-in"
                element={
                  <PublicRoute restricted navigateTo="/">
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route
                index
                element={
                  <PrivateRoute navigateTo="login">
                    <HomePage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/trip/:tripId"
                element={
                  <PrivateRoute navigateTo="login">
                    <TripPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="bookings"
                element={
                  <PrivateRoute navigateTo="login">
                    <BookingsPage />
                  </PrivateRoute>
                }
              />
            </Route>
            <Route
              path="*"
              element={
                <PublicRoute>
                  <Navigate to="/" />
                </PublicRoute>
              }
            />
          </Routes>
        </>
      )}
      <ToastContainer autoClose={3000} position="top-center" />
    </>
  );
}
 */
