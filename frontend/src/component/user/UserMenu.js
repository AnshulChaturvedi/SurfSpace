import { Logout, Settings } from '@mui/icons-material';
import { ListItemIcon, Menu, MenuItem } from '@mui/material';
import React from 'react';
import { useValue } from '../../Context/ContexProvider';
import useCheckToken from '../../hooks/useCheckToken';
import Profile from './Profile';

const UserMenu = ({ anchorUserMenu, setAnchorUserMenu }) => {
  useCheckToken()
  const { dispatch ,
    state:{currentUser}
  } = useValue();
  
  const handleCloseUserMenu = () => {
    setAnchorUserMenu(null);
  };

 

  return (
    <>
       <Menu
      anchorEl={anchorUserMenu}
      open={Boolean(anchorUserMenu)}
      onClose={handleCloseUserMenu}
      onClick={handleCloseUserMenu}
    >
      <MenuItem onClick={()=>dispatch({type:'UPDATE_PROFILE',payload:{open:true,file:null,photoURL:currentUser?.photo,}})}>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Profile
      </MenuItem>
      <MenuItem
        onClick={() => dispatch({ type: 'UPDATE_USER', payload: null })}
      >
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
      </Menu>
      <Profile />
    </>
   
  );
};

export default UserMenu;