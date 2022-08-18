import styled from 'styled-components';
import React from 'react';
import { useMonolight } from '../MonolightProvider/index';

const Wrapper = styled.div<{ architectMode: boolean; color: string }>`
  position: relative;
  width: auto;

  ${(props) =>
    props.architectMode &&
    `
        &:before {
            content: '';
            display: block;
            position: absolute;
            top: 0; right: 0; bottom: 0; left: 0;
            outline: 1px solid ${props.color};
            opacity: .5;
        }

        &:hover {
            &:before {
                content: '';
                display: block;
                position: absolute;
                top: 0; right: 0; bottom: 0; left: 0;
                outline: 2px solid ${props.color};
                opacity: 1;
            }
        }
        
    `}
`;

interface BoxProps {
  children: React.ReactNode;
  architectMode: {
    show: boolean;
    color: string;
  };
  style: Object;
  className: string;
}

const Box: React.FC<BoxProps> = ({ children, style, className }) => {
  const box = useMonolight();

  return (
    <Wrapper
      architectMode={box?.architectMode?.show!}
      color={box?.architectMode?.color!}
      className={className}
      style={style}
    >
      {children}
    </Wrapper>
  );
};

export { Box, BoxProps };
