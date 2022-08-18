import styled from 'styled-components';
import React from 'react';
import { useMonolight } from '../MonolightProvider/index';

import { Col } from '../Col';

const Wrapper = styled.div<{ breakpoints: any }>`
  ${(props) =>
    Object.keys(props.breakpoints).map((key, index: number) => {
      return `@media (min-width: ${props.breakpoints[key]}px) {
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            margin: 0;
            width: 100%;
        }`;
    })}
`;

interface RowProps {
  children: React.ReactNode;
  gutter: number | string;
  animate: boolean;
  className: string;
  style: Object;
  columns: number;
}

const Row: React.FC<RowProps> = ({
  children,
  gutter = 'none',
  animate = false,
  className,
  style,
  columns,
}) => {
  const context = useMonolight();
  return (
    <Wrapper breakpoints={context.breakpoints}>
      {React.Children.toArray(children).map((item: any, index: number) => {
        //console.log(item.props.span);
        return (
          item && (
            <Col
              span={item.props.span}
              offset={item.props.offset}
              key={index}
              gutter={gutter}
              column={columns || context?.column!}
              animate={animate}
              style={style}
              className={className}
            >
              {item.props.children}
            </Col>
          )
        );
      })}
    </Wrapper>
  );
};

export { Row, RowProps };
