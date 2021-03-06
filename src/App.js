import './App.css';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useState } from 'react';

function App() {
  const [likeColor, setLikeColor] = useState('');
  const handleLike = () =>{
    // const color = likeColor ? '' : 'primary';
    // setLikeColor(color)
    setLikeColor(likeColor ? '' : 'primary');

  }
  return (
    <div className="App">
      <AccessAlarmIcon></AccessAlarmIcon>
      <ThumbUpAltIcon onClick={handleLike} color={likeColor}></ThumbUpAltIcon>
    </div>
  );
}

export default App;
