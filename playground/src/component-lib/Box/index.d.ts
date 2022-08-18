import React from 'react';
interface BoxProps {
    children: React.ReactNode;
    architectMode: {
        show: boolean;
        color: string;
    };
    style: Object;
    className: string;
}
declare const Box: React.FC<BoxProps>;
export { Box, BoxProps };
