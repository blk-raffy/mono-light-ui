/// <reference types="react" />
export declare type Context = {
    children: React.ReactNode;
    column?: number;
    architectMode?: {
        show: boolean;
        color: string;
    };
    margins?: {
        vertical: number;
        horizontal: number;
    };
    breakpoints?: {
        min?: number;
        xs?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
        max?: number;
    };
};
export declare const Monolight: import("react").Context<Context>;
export declare const useMonolight: () => Context;
/**
 *
 * <Monolight.Provider value={{
 *      column, architectMode, breakpoints
 * }}>
 *     {children}
 * </Monolight.Provider>
 *
 */
