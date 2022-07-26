import styled from 'styled-components';
import React from 'react';
import { useMonolight } from '../MonolightProvider/index'; 

import { Box } from '../Box';

const Wrapper = styled.div<{
    animate: boolean, 
    breakpoints: any, 
    span: number | string | Array<number | string> | any | any[], 
    column: number, 
    offset: number | string | Array<number | string> | any | any[],
    gutter: any
}>`
    flex: 1 1 0;
    width: 100%;
    ${props => props.animate && `
        transition: all 0.3s ease;
        transition-property: width;
    `}
    ${props => Object.keys(props.breakpoints).map((key, index) => {
        if (index === Object.keys(props.breakpoints).length - 1){
            return `@media(min-width: ${props.breakpoints[key]}px) {
                    width: ${props.span[index] !== 'auto'
                        ? `${((props.span[index] || props.span[0] || props.column) / props.column) * 100}%`
                        : null};
                    margin-left: ${props.offset[index] !== 'auto'
                        ? `${((props.offset[index] || props.offset[0] || 0) / props.column) * 100}%`
                        : null};
                    flex: ${(props.span[index] !== 'auto' ? 'none !important' : null)};
                    padding: ${props.gutter != 'none' ? `${props.gutter}` : "0"}px;
                }`
        } else {
            return `@media(min-width: ${props.breakpoints[key]}px) and
                    (max-width: ${props.breakpoints[Object.keys(props.breakpoints)[index+1]] || 0}px) {
                        width: ${props.span[index] !== 'auto'
                            ? `${((props.span[index] || props.span[0] || props.column) / props.column) * 100}%`
                            : null};
                        margin-left: ${props.offset[index] !== 'auto'
                            ? `${((props.offset[index] || props.offset[0] || 0) / props.column) * 100}%`
                            : null};
                        flex: ${(props.span[index] !== 'auto' ? 'none !important' : null)};
                        padding: ${props.gutter != 'none' ? `${props.gutter}` : "0"}px;
                    }`
        }
  })}
`;

interface ColProps {
    children: React.ReactNode;
    span: number | string | Array<number | string>;
    offset: number | string | Array<number | string>;
    gutter: number | string;
    animate: boolean;
    className: string;
    style: Object;
    column: number;
}

const Col: React.FC<ColProps> = ({ children, span = [12, 12, 12, 12, 12], offset = [0, 0, 0, 0, 0], gutter = 'none', animate = false, className, style, column = 12 }) => {
    const context = useMonolight();

    //console.log(`span: ${span},\noffset: ${offset},\ngutter: ${gutter},\nanimate: ${animate},\ncolumn: ${column}`);

    return <Wrapper
        breakpoints={context.breakpoints}
        span={span}
        offset={offset}
        gutter={gutter}
        animate={animate}
        column={column || context?.column!}
        style={style}
        className={className}>
        <Box architectMode={{
            show: context?.architectMode?.show!,
            color: context?.architectMode?.color || '#5c95ff'
        }} style={{}} className={''}>
            {children}
        </Box> 
    </Wrapper>
}

export { Col, ColProps };