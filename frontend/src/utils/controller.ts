import {useEffect, useState, useRef, RefObject} from "react";
import { controllerType } from "../types/types";
import axios from "axios";

export const useController = (options: controllerType) => {
  const ppCreateRef = useRef<HTMLDivElement>(null);
  const cRBRef1 = useRef<HTMLInputElement>(null);
  const cRBRef2 = useRef<HTMLInputElement>(null);
  const ppJoinRef = useRef<HTMLDivElement>(null);
  const jRBRef1 = useRef<HTMLInputElement>(null);
  const jRBRef2 = useRef<HTMLInputElement>(null);

  const useData = (initVal: object) => {
    const [data, setData] = useState(initVal);
    return {data, setData};
  };

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

  const addData = (e: React.ChangeEvent<HTMLInputElement>, data: object, setData: React.Dispatch<React.SetStateAction<object>>, isRB: boolean) => {
    if(isRB){
      setData({
        ...data,
        [e.target.name]: e.target.checked ? e.target.value : ''
      })
    }else{
      setData({
        ...data,
        [e.target.name]: e.target.value
      })
    }
  };

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

  const clearPopUpContents = (
    ppRef: RefObject<HTMLDivElement>,
    ppRBMale: RefObject<HTMLInputElement>,
    ppRBFemale: RefObject<HTMLInputElement>,
    setData: React.Dispatch<React.SetStateAction<object>>
  ) => {
    if(ppRBMale.current && ppRBFemale.current){
      ppRBMale.current.checked = false;
      ppRBFemale.current.checked = false;
    }

    if(ppRef.current){
      const inputs = ppRef.current.querySelectorAll('input');
      inputs.forEach(input => {
        input.value = '';
      })
    }

    setData({
      username: '',
      room_name: '',
      room_code: '',
      gender: '',
    })
  };

  const sendData = async (
    data: object
  ) => {
    try {
      const response = await axios.post('http://localhost:6969/api/data', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data)
    } catch (error) {
      console.log('You got an error: ', error);
    }
  };

  // const getComponentData = (
  //   ppRef: RefObject<HTMLDivElement>,
  //   ppRBMale: RefObject<HTMLInputElement>,
  //   ppRBFemale: RefObject<HTMLInputElement>,
  //   isCreate: boolean
  // ) => {
  //   if(!ppRef.current || !ppRBMale.current || !ppRBFemale.current)
  //     return;
  //
  //   const inputs = ppRef.current.querySelectorAll('input');
  //   if(
  //     Array.from(inputs || []).some(input => (input as HTMLInputElement).value.trim() == '') ||
  //     (!ppRBMale.current.checked && !ppRBFemale.current.checked)
  //   ){
  //     return;
  //   }
  //
  //   if(isCreate){
  //     return {
  //       username: (inputs[0] as HTMLInputElement).value,
  //       room_name: (inputs[1] as HTMLInputElement).value,
  //       gender: ppRBMale ? 'male' : 'female'
  //     };
  //   }else{
  //     return {
  //       username: (inputs[0] as HTMLInputElement).value,
  //       room_code: (inputs[1] as HTMLInputElement).value,
  //       gender: ppRBMale ? 'male' : 'female'
  //     };
  //   }
  // };

  const result: Partial<{
    ppCreateRef: typeof ppCreateRef,
    cRBRef1: typeof cRBRef1,
    cRBRef2: typeof cRBRef2,
    ppJoinRef: typeof ppJoinRef,
    jRBRef1: typeof jRBRef1,
    jRBRef2: typeof jRBRef2,
    getData: typeof useData,
    getPPCreate: typeof usePPCreate,
    getPPJoin: typeof usePPJoin,
    getCurrText: typeof useCurrText,
    getCurrInd: typeof useCurrInd,
    getIsFinished: typeof useIsFinished,
    getAddData: typeof addData,
    getWriteText: typeof useWriteText,
    getClearContents: typeof clearPopUpContents
    getSendData: typeof sendData
  }> = {};

  if(options.useData)result.getData = useData;
  if(options.usePPJoin)result.getPPJoin = usePPJoin;
  if(options.usePPCreate)result.getPPCreate = usePPCreate;
  if(options.useCurrText)result.getCurrText = useCurrText;
  if(options.useCurrInd)result.getCurrInd = useCurrInd;
  if(options.useIsFinished)result.getIsFinished = useIsFinished;
  if(options.addData)result.getAddData = addData;
  if(options.writeText)result.getWriteText= useWriteText;
  if(options.clearPopUpContents)result.getClearContents = clearPopUpContents;
  if(options.sendData)result.getSendData = sendData;
  if(options.useCPPRefHooks){
    result.ppCreateRef = ppCreateRef;
    result.cRBRef1 = cRBRef1;
    result.cRBRef2 = cRBRef2;
  }
  if(options.useJPPRefHooks){
    result.ppJoinRef = ppJoinRef;
    result.jRBRef1 = jRBRef1;
    result.jRBRef2 = jRBRef2;
  }

  return result;
};
