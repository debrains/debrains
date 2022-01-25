import React from "react";
import Header, { LoginButton } from "../../components/Base/Header";
import { connect } from "react-redux";

const HeaderContainer = (props) => {
  const { visible } = props;
  if (!visible) return null;
  return (
    <Header>
      <LoginButton />
    </Header>
  );
};

export default connect(
  (state) => ({
    visible: state.base.getIn(["header", "visible"]),
  }),
  (dispatch) => ({})
)(HeaderContainer);
