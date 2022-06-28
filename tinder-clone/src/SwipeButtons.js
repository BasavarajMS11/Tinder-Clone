import React from 'react';
import "./SwipeButtons.css";
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material';
import ReplayCircleFilled from '@mui/icons-material/ReplayCircleFilled';

function SwipeButtons() {
  return (
    <div className='swipeButtons'>
        <IconButton className='swipeButton__repeat'>
            <ReplayCircleFilledIcon fontSize='large'/>
        </IconButton>
        <IconButton className='swipeButton__left'>
            <CloseIcon fontSize='large'/>
        </IconButton>
        <IconButton className='swipeButton__star'>
            <StarRateIcon fontSize='large'/>
        </IconButton>
        <IconButton className='swipeButton__right'>
            <FavoriteIcon fontSize='large'/>
        </IconButton>
        <IconButton className='swipeButton__lightning'>
            <FlashOnIcon fontSize='large'/>
        </IconButton>
    </div>
  )
}

export default SwipeButtons