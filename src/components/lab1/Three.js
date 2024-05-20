import {useState} from "react";

function Three(props) {
  const {number} = props;

  const [message, setMessage] = useState(number);

  return (
      <div className="mt-50">
        <h2>Пункт 3</h2>

        <div>
          <div>{message}</div>
          <button onClick={e => setMessage(message + 1)}>+ 1</button>
        </div>
      </div>
  );
}

export default Three;