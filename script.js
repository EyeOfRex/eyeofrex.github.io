document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const root = document.documentElement; 

    let isDarkTheme = localStorage.getItem("isDarkTheme");
    if (isDarkTheme === null) {
        isDarkTheme = "true";
        localStorage.setItem("isDarkTheme", isDarkTheme);
    }
    

    
    const updateTheme = () => {
        if (isDarkTheme === "false") {
            // go to light theme
            root.style.setProperty("--background-dark", "#fdebf3");
            root.style.setProperty("--text-light", "#1e1e2e");
            root.style.setProperty("--background-light", "#1e1e2e");
            root.style.setProperty("--text-dark", "#fdebf3");
            themeToggle.src = "/res/sun.png"; 
            localStorage.setItem("isDarkTheme", "false");
        } else if (isDarkTheme === "true") {
            // go to dark theme
            root.style.setProperty("--background-dark", "#1e1e2e");
            root.style.setProperty("--text-light", "#fdebf3");
            root.style.setProperty("--background-light", "#fdebf3");
            root.style.setProperty("--text-dark", "#1e1e2e");
            themeToggle.src = "/res/moon.svg";
            localStorage.setItem("isDarkTheme", "true");
        }
    };

    
    themeToggle.addEventListener("click", () => {
        isDarkTheme = isDarkTheme === "true" ? "false" : "true";
        localStorage.setItem("isDarkTheme", isDarkTheme);
        updateTheme();
    });

    
    updateTheme();

   
});

