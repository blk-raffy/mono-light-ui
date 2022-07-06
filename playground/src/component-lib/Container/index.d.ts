import React from 'react';
interface ContainerProps {
    children: React.ReactNode;
    padding: number;
    fluid: boolean;
    className: string;
    style: Object;
}
declare const Container: React.FC<ContainerProps>;
export { ContainerProps, Container };
