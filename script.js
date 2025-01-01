document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const root = document.documentElement; // Permet d'accéder aux variables CSS définies dans :root

    let isDarkTheme = localStorage.getItem("isDarkTheme");
    if (isDarkTheme === null) {
        isDarkTheme = "true";
        localStorage.setItem("isDarkTheme", isDarkTheme);
    }
    

    // Fonction pour mettre à jour le thème
    const updateTheme = () => {
        if (isDarkTheme === "false") {
            // Passer au thème clair
            root.style.setProperty("--background-dark", "#fdebf3");
            root.style.setProperty("--text-light", "#1e1e2e");
            root.style.setProperty("--background-light", "#1e1e2e");
            root.style.setProperty("--text-dark", "#fdebf3");
            themeToggle.src = "/res/sun.png"; // Icône du soleil pour le thème clair
            localStorage.setItem("isDarkTheme", "false");
        } else if (isDarkTheme === "true") {
            // Passer au thème sombre
            root.style.setProperty("--background-dark", "#1e1e2e");
            root.style.setProperty("--text-light", "#fdebf3");
            root.style.setProperty("--background-light", "#fdebf3");
            root.style.setProperty("--text-dark", "#1e1e2e");
            themeToggle.src = "/res/moon.svg"; // Icône de la lune pour le thème sombre
            localStorage.setItem("isDarkTheme", "true");
        }
    };

    // Ajouter un gestionnaire d'événement pour basculer le thème lors du clic
    themeToggle.addEventListener("click", () => {
        isDarkTheme = isDarkTheme === "true" ? "false" : "true";
        localStorage.setItem("isDarkTheme", isDarkTheme);
        updateTheme(); // Appliquer le nouveau thème
    });

    // Initialiser le thème sombre par défaut
    updateTheme();

   
});

