import React from 'react';
interface RowProps {
    children: React.ReactNode;
    gutter: number | string;
    animate: boolean;
    className: string;
    style: Object;
    columns: number;
}
declare const Row: React.FC<RowProps>;
export { Row, RowProps };
