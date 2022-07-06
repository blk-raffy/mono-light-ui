import { createContext, useContext } from "react"

export type Context = {
    children: React.ReactNode;          // The children of the component
    column?: number;                    // number of columns                            -> 12
    architectMode?: {
        show: boolean,                  // true if the component is in architect mode
        color: string                   // the color of the architecture mode
    };         
    breakpoints?: {
        min?: number;                   // min width of the breakpoint                  -> 0
        xs?: number;                    // number of columns for xs breakpoint          -> 500
        sm?: number;                    // number of columns for sm breakpoint          -> 800
        md?: number;                    // number of columns for md breakpoint          -> 1000
        lg?: number;                    // number of columns for lg breakpoint          -> 1200
        xl?: number;                    // number of columns for xl breakpoint          -> 1500
        max?: number;                   // max width of the breakpoint                  -> 9999
    },
}

export const Monolight = createContext<Context>({
    children: null,
    column: 12,
    architectMode: {
        show: false,
        color: '#5c95ff'
    },
    breakpoints: {
        min: 0,
        xs: 500,
        sm: 800,
        md: 1000,
        lg: 1200,
        xl: 1500,
        max: 9999
    }
})


export const useMonolight = () => useContext(Monolight);

/**
 * 
 * <Monolight.Provider value={{
 *      column, architectMode, breakpoints
 * }}>
 *     {children}
 * </Monolight.Provider>
 * 
 */