import {Component} from "react";

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
  id                : string;
  btn_id1           : string;
  btn_id2           : string;
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
  usePPCreate ?: boolean
  usePPJoin ?: boolean
  useCurrText ?: boolean
  useCurrInd ?: boolean
  useIsFinished ?: boolean
  writeText ?: boolean
  clearPopUpContents ?: boolean
};

export type radioButtonType = {
  name : string;
  id : string;
  className ?: string;
  text : string;
};
