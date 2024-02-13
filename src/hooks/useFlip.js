import {useState} from "react";

const useFlip = () => {
    const [state, setState] = useState(true);
    const flip = () => {
        setState(state => !state);
      }
      return [state, flip]
}

export default useFlip;