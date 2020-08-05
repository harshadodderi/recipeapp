import React, { useState } from 'react';
import './Card.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import SvgIcon from '@material-ui/core/SvgIcon';

export default function Card({ ele }) {
  const [state, setState] = useState(true);
  const [visible, setVisible] = useState(false);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > svg': {
        margin: theme.spacing(2),
      },
    },
  }));

  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' />
      </SvgIcon>
    );
  }

  function SvgIconsColor() {
    const classes = useStyles();
  }
  return (
    <div
      className='card'
      style={{
        objectFit: 'contain',
        backgroundSize: 'cover',

        backgroundImage: `url(${ele.image})`,
      }}>
      <div className='category'>
        <div className={ele.label ? 'label' : ''}>{ele.label}</div>
        <div className='gap'></div>
      </div>
      <div className='info'>
        <div className='flexit'>
          <div className='heading'>
            <h1 className='name'>{truncate(ele?.name, 15)}</h1>
            <h4 className='timer'>45 min</h4>
          </div>
          <div className='heartlogo' onClick={() => setState(!state)}>
            <h1>
              {state ? (
                <FavoriteBorderIcon color='black' />
              ) : (
                <FavoriteIcon style={{ color: 'red' }} />
              )}
            </h1>
          </div>
        </div>
        <div className='description'>{truncate(ele?.description, 50)}</div>
        <div>
          {/*<div className='button'>
            <button onClick={() => setVisible(!visible)}>More Info</button>
          </div>*/}
        </div>
        <div className='banner_fadeButtom'></div>{' '}
      </div>
    </div>
  );
}
