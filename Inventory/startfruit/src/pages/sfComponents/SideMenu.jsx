import React, { Fragment } from "react";
import { Button } from 'antd';

const SideMenu = () => {
  return (
    <Fragment style={{ height: "100%" }}>

      <Button>MY</Button>

      <Button>Seeting</Button>
      <Button>Exit</Button>

    </Fragment>
  )
}

export default SideMenu;