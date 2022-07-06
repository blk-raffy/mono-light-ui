import React from 'react';
import styled from 'styled-components';
import { useMonolight } from '../MonolightProvider/index'; 

import { Box } from '../Box';

const Wrapper = styled.div<{
    breakpoints: number[], 
    currentIndex: number,
}>`
    display: none;
    ${props => props.currentIndex > 0 ? `
        @media screen and (min-width: ${props.breakpoints[props.currentIndex-1]}px) and
            (max-width: ${props.breakpoints[props.currentIndex] || 0}px) {
                display: block;
            }
    ` : `
            @media screen and (max-width: ${props.breakpoints[props.currentIndex]}px) {
                display: block;
            }
    `}
`

interface MediaSwitchProps {
    childrens: React.ReactNode[];
    breakpoints: any;
}

const MediaSwitch: React.FC<MediaSwitchProps> = ({ childrens, breakpoints }) => {
    const context = useMonolight();

    if ((childrens == null || breakpoints == null) || childrens.length != breakpoints.length) {
        return <></>
    } else {
        return <Box architectMode={{
            show: context?.architectMode?.show!,
            color: context?.architectMode?.color || '#5c95ff'
            }} style={{}} className={''}>
            {childrens.map((item: React.ReactNode, index: number) => {
                return <Wrapper breakpoints={breakpoints} currentIndex={index}>
                    {childrens[index]}
                </Wrapper>
            })}
        </Box>
    }
}

export { MediaSwitch, MediaSwitchProps };