import React, {useState} from 'react';
// TODO: connect to redux with useSelector

const AllEmotions = () => {
  const [emotions, setEmotions] = useState([]);
  const [errorMsg, setError] = useState("");
  if (!emotions.length)
    setError("There are no emotions, yet.")
  return (
    {errorMsg &&
     <div>{errorMsg}</div>
    }
    {emotions.length && 
     <div>
       emotions.map(emotion =>
       <div
	 key={emotion}
       >
	 {/* TODO: <Emotion /> component */}
	 {emotion}
       </div>
       )
     </div>
    }
  )
};

export default AllEmotions;
