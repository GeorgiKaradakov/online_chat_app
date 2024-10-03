import {Component, RefObject} from "react";

export type buttonChatType = {
  text      ?: string
  img       ?: Component
  className ?: string
  onClick   ?: () => void;
};

export type MessageType = {
  username ?: string
  msg ?: string
  gender ?: string
  className ?: string
  isSender ?: boolean
};

export type chatType = {
  roomName : string
};

export type PPType = {
  isOpen           ?: boolean;
  comp_ref          : RefObject<HTMLDivElement>;
  btn_ref1          : RefObject<HTMLInputElement>;
  btn_ref2          : RefObject<HTMLInputElement>;
  popUpName         : string;
  inputName1        : string;
  inputName2        : string;
  inputPlaceHolder1 : string;
  inputPlaceHolder2 : string;
  btnText           : string;
  className         : string;
  closePopUp        : () => void;
  submitPopUp       : () => void;
};

export type controllerType = {
  useCPPRefHooks ?: boolean
  useJPPRefHooks ?: boolean
  useData ?: boolean
  usePPCreate ?: boolean
  usePPJoin ?: boolean
  useCurrText ?: boolean
  useCurrInd ?: boolean
  useIsFinished ?: boolean
  addData ?: boolean
  writeText ?: boolean
  clearPopUpContents ?: boolean
  sendData ?: boolean
};

export type radioButtonType = {
  name : string;
  comp_ref : RefObject<HTMLInputElement>;
  className ?: string;
  text : string;
  getData : object;
  setData : React.Dispatch<React.SetStateAction<object>>
};
