import React from 'react';
import {
  FieldWrapper,
  Information,
  Input,
  InputIcon,
  InputWrapper,
  Label,
} from './TextField.styled';
import { ITextFieldProps } from './types';

const TextField = ({
  type,
  required,
  label,
  placeholder,
  value,
  onChange,
  id,
  extraInfo,
  icon,
  withOutLabel = false,
  withOutExtra = false,
}: ITextFieldProps) => {
  return (
    <>
      <FieldWrapper required={required} isWithIcon={!!icon}>
        {!withOutLabel ? (
          <Label htmlFor={id} type={type}>
            {label}
          </Label>
        ) : (
          ''
        )}

        <InputWrapper>
          <div
            style={{ display: 'flex', margin: `${withOutLabel && withOutExtra ? '10px 0' : ''}` }}
          >
            <InputIcon>{icon ? icon : ''}</InputIcon>
            <Input
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              id={id}
              className={!!icon ? 'withIcon' : ''}
            />
          </div>
        </InputWrapper>
      </FieldWrapper>
      {!withOutExtra ? <Information>{extraInfo}</Information> : ''}
    </>
  );
};

export default TextField;
