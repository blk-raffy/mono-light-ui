import styled from 'styled-components';
import React from 'react';
import { useMonolight } from '../MonolightProvider/index';

const Wrapper = styled.div<{}>`
  background-color: transparent;
`;

interface SelectProps {
  children: React.ReactNode;
}

const Select: React.FC<SelectProps> = ({ children }) => {
  const context = useMonolight();

  return <Wrapper>{children}</Wrapper>;
};

export { Select, SelectProps };
