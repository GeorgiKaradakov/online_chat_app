import '../styles/Typewriter.css';
import { useController } from '../controllers/controller';

const Typewriter = ({text, delay }) => {
  const {getCurrText, getCurrInd, getIsFinished, getWriteText} = useController({useCurrText: true, useCurrInd: true, useIsFinished: true, writeText: true});
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
