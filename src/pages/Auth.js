import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as baseActions from "../redux/modules/base";
import { AuthWrapper } from "../components/Auth";
import { Route, Routes } from "react-router-dom";
import { Login, Register } from "../containers/Auth";

function Auth(props) {
  useEffect(() => {
    props.BaseActions.setHeaderVisibility(false);
    return () => {
      props.BaseActions.setHeaderVisibility(true);
    };
  }, []);

  return (
    <AuthWrapper>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </AuthWrapper>
  );
}

export default connect(
  (state) => ({}),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
  })
)(Auth);
