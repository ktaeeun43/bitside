/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { auth } from '../_actions/user_actions';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';





export default function Auth (SpecificComponent, option, adminRoute = null) {
    function AuthenticationCheck(props) {
        const dispatch = useDispatch();
        let user = useSelector(state => state.User);
        const navigate = useNavigate();
        useEffect(() => {
          dispatch(auth()).then((response) => {
            
            if (!response.payload.isAuth) {
              // login yet
              if (option) {
                navigate("/login");
              }
            } else {
              // login
              if (adminRoute && !response.payload.isAdmin) {
                navigate("/");
              } else {
                if (option === false) {
                  navigate("/");
                }
              }
            }
          });
        }, []);
    
        return (
          <SpecificComponent {...props} user={user} /> // component return이 없으면 React 실행이 안됨.
        );
      }
    
      return AuthenticationCheck;
}


