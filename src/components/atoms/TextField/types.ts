import React, { ReactNode } from 'react';

export interface ITextFieldProps extends TextFieldStyleProps {
  type: string;
  label?: string;
  placeholder?: string;
  value?: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  htmlFor?: string;
  extraInfo?: string;
  icon?: ReactNode | string;
  withOutLabel?: boolean;
  withOutExtra?: boolean;
}
export type TextFieldStyleProps = {
  required?: boolean;
  type?: string;
  isWithIcon?: boolean;
};
