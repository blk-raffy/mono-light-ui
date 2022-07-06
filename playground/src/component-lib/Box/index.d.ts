import React from 'react';
interface ContainerProps {
    children: React.ReactNode;
    architectMode: {
        show: boolean;
        color: string;
    };
    style: Object;
    className: string;
}
declare const Box: React.FC<ContainerProps>;
export { Box, ContainerProps };
