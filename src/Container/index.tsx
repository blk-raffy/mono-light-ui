import React from 'react';
import styled from 'styled-components';
import { useMonolight } from '../MonolightProvider/index';

import { Box } from '../Box';

const Wrapper = styled.div<{
  breakpoints: any;
  fluid: boolean;
  padding: number;
  margins: {
    vertical: number;
    horizontal: number;
  };
}>`
  height: 100%;
  ${(props) => {
    if (props.fluid) {
      return `width: 100% !important;`;
    } else {
      return Object.keys(props.breakpoints).map((key, index) => {
        if (index === Object.keys(props.breakpoints).length - 1) {
          return `@media(min-width: ${props.breakpoints[key]}px) {
                            width: ${
                              props.breakpoints[key] < 501
                                ? '100%'
                                : `${
                                    props.breakpoints[key] -
                                    props.margins.horizontal
                                  }px`
                            } !important;
                            min-width: 90%;
                            margin: 0 auto;
                            padding: ${props.padding}px;
                        }`;
        } else {
          return `@media(min-width: ${props.breakpoints[key]}px) and
                        (max-width: ${
                          props.breakpoints[
                            Object.keys(props.breakpoints)[index + 1]
                          ] | 9999
                        }px) {
                            width: ${
                              props.breakpoints[key] < 501
                                ? '100%'
                                : `${
                                    props.breakpoints[key] -
                                    props.margins.horizontal
                                  }px`
                            } !important;
                            margin: 0 auto;
                            min-width: 90%;
                            padding: ${props.padding}px;
                        }`;
        }
      });
    }
  }}
`;

interface ContainerProps {
  children: React.ReactNode;
  padding: number;
  fluid: boolean;
  className: string;
  style: Object;
}

const Container: React.FC<ContainerProps> = ({
  children,
  padding,
  fluid,
  style,
  className,
}) => {
  const context = useMonolight();
  console.log(context.margins);
  return (
    <Wrapper
      breakpoints={context.breakpoints}
      fluid={fluid}
      padding={padding}
      style={style}
      margins={{
        vertical: context?.margins?.vertical ?? 0,
        horizontal: context?.margins?.horizontal ?? 200,
      }}
      className={className}
    >
      <Box
        architectMode={{
          show: context?.architectMode?.show!,
          color: context?.architectMode?.color || '#5c95ff',
        }}
        style={{}}
        className={''}
      >
        {children}
      </Box>
    </Wrapper>
  );
};

export { ContainerProps, Container };
