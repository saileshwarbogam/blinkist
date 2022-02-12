import { Grid, Menu, MenuItem, Toolbar } from "@mui/material";
import React from "react";
import LoginButton from "../../../atoms/loginButton/LoginButton";
import LogoutButton from "../../../atoms/loginButton/logoutButton/LogoutButton";

import AvatarDrop from "../../../molecules/avatar/AvatarDrop";
import HeaderLeft from "../header-left/HeaderLeft";

interface Handle {
  handleChange: () => void;
  icon: boolean;
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  anchorEl: null | HTMLElement;
  open: boolean;
  handleClose: () => void;
  isAuthenticated: boolean;
}

const ToolBarHeader = (props: Handle) => {
  return (
    <Toolbar>
      <Grid
        container
        columnGap="160px"
        justifyContent="center"
        data-testid="ToolBarHeader"
      >
        <Grid item>
          <HeaderLeft icon={props.icon} handleChange={props.handleChange} />
        </Grid>
        <Grid item>
          <Grid container>
          <AvatarDrop handleClick={props.handleClick} isAuthenticated={props.isAuthenticated}/>
            <Menu
              id="basic-menu"
              anchorEl={props.anchorEl}
              open={props.open}
              onClose={props.handleClose}
            >
              {!props.isAuthenticated ? (
                <>
                  <MenuItem onClick={props.handleClose}>
                    <LoginButton />
                  </MenuItem>
                </>
              ) : (
                <MenuItem onClick={props.handleClose}>
                  <LogoutButton />
                </MenuItem>
              )}
            </Menu>
          </Grid>
        </Grid>
      </Grid>
    </Toolbar>
  );
};

export default ToolBarHeader;
