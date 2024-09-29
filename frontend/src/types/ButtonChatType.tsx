import {Component} from "react";

export type buttonChatType = {
  text      ?: string
  img       ?: Component
  className ?: string
  onClick   ?: () => void;
};
