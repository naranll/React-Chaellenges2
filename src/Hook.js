import { useState, useEffect } from "react";

// export function useTheme() {
//     const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
//     useEffect(() => {
//         localStorage.setItem("theme", theme);
//     }, [theme]);

//     return { theme, setTheme };
// }

export function notHook() {
    const [theme, setTheme] = useState();
    // useEffect(() => {
    //     localStorage.setItem("theme", theme);
    // }, [theme]);

    return { theme, setTheme };
}

