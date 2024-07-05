import React, { useState,Suspense } from 'react'
import './App.css'
import {Routes,Route,Link,Outlet,useLocation,Navigate} from "react-router-dom";
import {SwitchTransition,CSSTransition} from "react-transition-group";
import Navbar from "./components/Navbar.jsx";
import {appRoutes} from "./components/Routes.js";
import Footer from "./components/Footer.jsx";

function App() {
  const location = useLocation();
  const [isLogin,setIsLogin] = useState(false);
  return (
      <>
          <Navbar />
          <SwitchTransition component={null}>
              <CSSTransition key={location.pathname} classNames={"fade"} timeout={300} unmountOnExit>
                  <Suspense fallback={<h1>Loading...</h1>}>
                      <Routes location={location}>
                          {appRoutes.map( (route) => {
                              if(route.requireLogined && !isLogin){
                                  return (
                                      <Route
                                          key={route.path}
                                          path={route.path}
                                          element={ <Navigate  replace to={"/login"} /> }
                                      />
                                  );
                              }else{
                                  return (
                                      <Route
                                          key={route.path}
                                          path={route.path}
                                          element={<route.component/>}
                                      />
                                  );
                              }
                          } )}
                      </Routes>
                  </Suspense>
              </CSSTransition>
          </SwitchTransition>
          <Footer />
      </>
  )
}



export default App
