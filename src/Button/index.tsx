import styled from 'styled-components';
import React from 'react';
import { useMonolight } from '../MonolightProvider/index';

const Wrapper = styled.button<{
  disabled: boolean | undefined;
  size: number | undefined;
  uppercase: boolean | undefined;
}>`
  cursor: pointer;
  ${(props) => props.uppercase && 'text-transform: uppercase;'}
`;

interface ButtonProps {
  children: React.ReactNode | undefined;
  size: number | undefined;
  type: 'button' | 'submit' | 'reset' | undefined;
  disabled: boolean | undefined;
  uppercase: boolean | undefined;
  className: string | undefined;
  style: Object | undefined;
}

const Button: React.FC<ButtonProps> = ({
  children = 'Button',
  size,
  type = 'button',
  disabled = false,
  uppercase = false,
  className,
  style,
}) => {
  const context = useMonolight();

  return (
    <Wrapper
      type={type}
      size={size}
      disabled={disabled}
      uppercase={uppercase}
      style={style}
      className={className}
    >
      {children}
    </Wrapper>
  );
};

export { Button, ButtonProps };
