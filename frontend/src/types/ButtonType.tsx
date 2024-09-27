import {Component} from "react";

export type buttonType = {
  text      ?: string
  img       ?: Component
  className ?: string
  onClick   ?: () => {};
};
