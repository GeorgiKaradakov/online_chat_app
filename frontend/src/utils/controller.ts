import {useEffect, useState} from "react";
import { controllerType } from "../types/types";

export const controller = (options: controllerType) => {
  const usePPCreate = (initVal: boolean) => {
    const [openCR, setOpenCR] = useState(initVal);
    const changeCR = () => setOpenCR(prev => !prev);

    return {openCR, changeCR};
  }

  const usePPJoin = (initVal: boolean) => {
    const [openJR, setOpenJR] = useState(initVal);
    const changeJR = () => setOpenJR(prev => !prev);

    return {openJR, changeJR};
  }


  const useCurrText = (initVal: string) => {
    const [currText, setCurrText] = useState(initVal);
    return {currText, setCurrText};
  }

  const useCurrInd = (initVal: number) => {
    const [currInd, setCurrInd] = useState(initVal);
    return {currInd, setCurrInd};
  }

  const useIsFinished= (initVal: boolean) => {
    const [isFinished, setIsFinished] = useState(initVal);
    const changeIsFinished = () => setIsFinished(prev => !prev);

    return {isFinished, changeIsFinished};
  }

 const useWriteText = (
    currInd: number,
    setCurrInd: React.Dispatch<React.SetStateAction<number>>,
    setCurrText: React.Dispatch<React.SetStateAction<string>>,
    changeIsFinished: () => void,
    text: string,
    delay: number
  ) => {
    useEffect(() => {
      setCurrInd(0);
      setCurrText('');
    }, [setCurrInd, setCurrText]);

    useEffect(() => {
      if (currInd < text.length) {
        const timeout = setTimeout(() => {
          setCurrText((prev) => prev + text[currInd]);
          setCurrInd((prev) => prev + 1);
        }, delay);

        return () => clearTimeout(timeout);
      } else {
        changeIsFinished();
      }
    }, [currInd, text, delay]);
  };

  const clearPopUpContents = () => {
    const create_div = document.getElementById('create_pp')
    const cp_rb_male = document.getElementById('cr_rb_male') as HTMLInputElement | null
    const cp_rb_female = document.getElementById('cr_rb_female') as HTMLInputElement | null

    const join_div = document.getElementById('join_pp')
    const jp_rb_male = document.getElementById('jr_rb_male') as HTMLInputElement | null
    const jp_rb_female = document.getElementById('jr_rb_female') as HTMLInputElement | null


    if(jp_rb_male && jp_rb_female){
      jp_rb_male.checked = false;
      jp_rb_female.checked = false;
    }

    if(cp_rb_male && cp_rb_female){
      cp_rb_male.checked = false;
      cp_rb_female.checked = false;
    }

    if(join_div){
      const inputs = join_div.querySelectorAll('input');
      inputs.forEach((input) => {
        input.value = '';
      });
    }

    if(create_div){
      const inputs = create_div.querySelectorAll('input');
      inputs.forEach((input) => {
        input.value = '';
      });
    }
  };

  const result: Partial<{
    getPPCreate: typeof usePPCreate,
    getPPJoin: typeof usePPJoin,
    getCurrText: typeof useCurrText,
    getCurrInd: typeof useCurrInd,
    getIsFinished: typeof useIsFinished,
    getWriteText: typeof useWriteText,
    getClearContents: typeof clearPopUpContents
  }> = {};

  if(options.usePPJoin)result.getPPJoin = usePPJoin;
  if(options.usePPCreate)result.getPPCreate = usePPCreate;
  if(options.useCurrText)result.getCurrText = useCurrText;
  if(options.useCurrInd)result.getCurrInd = useCurrInd;
  if(options.useIsFinished)result.getIsFinished = useIsFinished;
  if(options.writeText)result.getWriteText= useWriteText;
  if(options.clearPopUpContents)result.getClearContents = clearPopUpContents;

  return result;
};
