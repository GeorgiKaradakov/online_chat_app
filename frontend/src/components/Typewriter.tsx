import '../styles/Typewriter.css';
import { controller } from '../utils/controller';

const Typewriter = ({text, delay }) => {
  const {getCurrText, getCurrInd, getIsFinished, getWriteText} = controller({useCurrText: true, useCurrInd: true, useIsFinished: true, writeText: true});
  const {currText, setCurrText} = getCurrText!('');
  const {currInd, setCurrInd} = getCurrInd!(0);
  const {isFinished, changeIsFinished} = getIsFinished!(false);

  getWriteText!(currInd, setCurrInd, setCurrText, changeIsFinished, text, delay);

  return (
    <span>
      {currText}
      <span className={`${isFinished ? "hidden" : "blinking-cursor"}`}>|</span>
    </span>
  );
};

export default Typewriter;
