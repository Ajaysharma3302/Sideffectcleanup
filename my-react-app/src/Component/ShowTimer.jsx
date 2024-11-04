import {useState} from 'react'
import TimerComponent from '../Component/Timer'

const ShowTimer = () => {
    const [showTimer, setShowTimer] = useState(true);
  
    return (
      <div>
        <button onClick={() => setShowTimer((prev) => !prev)}>
          Toggle Timer
        </button>
        {showTimer && <TimerComponent />}
      </div>
    );
  };

  export default ShowTimer