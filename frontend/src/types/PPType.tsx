
export type PPJoinType = {
  isOpen           ?: boolean;
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
