/**
 * 
 * @param { "dark" | "light" } theme 
 */
const changeColorScheme = async (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
}

/**
 * 
 * @returns  { Promise<"dark" | "light"> }
 */
const retriveTheme = async () => {
    let theme = localStorage.getItem("theme");
    if (!theme) {
        theme = "dark";
    }
    return theme;
}


export { changeColorScheme, retriveTheme }