import React from 'react';
import styled from 'styled-components';
import { useMonolight } from '../MonolightProvider/index'; 

import { Box } from '../Box';

const Wrapper = styled.div<{breakpoints: any, fluid: boolean, padding: number}>`
    height: 100%;
    ${props => 
        {
            if (props.fluid) {
                return `width: 100% !important;`
            } else {
                return Object.keys(props.breakpoints).map((key, index) => {
                    if (index === Object.keys(props.breakpoints).length - 1){
                        return `@media(min-width: ${props.breakpoints[key]}px) {
                            width: ${(props.breakpoints[key] < 501 ? '100%' : `${props.breakpoints[key] - 200}px`)} !important;
                            margin: 0 auto;
                            padding: ${props.padding}px;
                        }`
                    } else {
                        return `@media(min-width: ${props.breakpoints[key]}px) and
                        (max-width: ${props.breakpoints[Object.keys(props.breakpoints)[index+1]] | 9999}px) {
                            width: ${(props.breakpoints[key] < 501 ? '100%' : `${props.breakpoints[key] - 200}px`)} !important;
                            margin: 0 auto;
                            padding: ${props.padding}px;
                        }`
                    }
                })
            }
        }
    }
`

interface ContainerProps {
    children: React.ReactNode;
    padding: number;
    fluid: boolean;
    className: string;
    style: Object;
}

const Container: React.FC<ContainerProps> = ({ children, padding, fluid, style, className }) => {

    const context = useMonolight();
    return <Wrapper
    breakpoints={context.breakpoints}
    padding={padding}
    fluid={fluid}
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


export { ContainerProps, Container };