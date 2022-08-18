import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.div<{}>``;

const InputWrapper = styled.input<{}>``;

const Label = styled.p<{}>``;

interface InputProps {
  children: React.ReactNode | undefined;
  placeholder: string | undefined;
  label: string | undefined;
  type: string | undefined;
  regexes:
    | Array<{ regex: string | object; message: string | undefined }>
    | undefined;
  defaultValue: string | undefined;
  required: boolean | undefined;
  fixed: boolean | undefined;
  minChar: number | undefined;
  maxChar: number | undefined;
  style: object | undefined;
  className: string | undefined;
  labelStyle: object | undefined;
  labelClassName: string | undefined;
  onChange: Function;
}

const Input: React.FC<InputProps> = ({
  children,
  placeholder,
  label,
  type,
  regexes,
  defaultValue,
  required,
  fixed,
  minChar,
  maxChar,
  style,
  className,
  labelStyle,
  labelClassName,
  onChange = () => {},
}) => {
  return (
    <Wrapper>
      {(label !== undefined || children !== undefined) && (
        <Label style={labelStyle} className={labelClassName}>
          {label ?? (children || '')}
        </Label>
      )}
      <InputWrapper
        onChange={(evt) => !fixed && onChange(evt.target.value)}
        type={type}
        required={required}
        defaultValue={defaultValue}
        placeholder={placeholder}
        style={style}
        className={className}
      />
    </Wrapper>
  );
};

export { Input, InputProps };
