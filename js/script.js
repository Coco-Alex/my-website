const translations = {
    en: {
        title: "Profile from Alex",
        description: "Aspiring web developer",
        instagram: "Instagram",
        twitter: "Twitter",
        github: "Github"
    },
    de: {
        title: "Profil von Alex",
        description: "Angehender Webentwickler",
        instagram: "Instagram",
        twitter: "Twitter",
        github: "Github"
    }
};

const languageSelector = document.getElementById("language");
const description = document.getElementById("description");
const instagramButton = document.getElementById("instagram-button");
const twitterButton = document.getElementById("twitter-button");
const githubButton = document.getElementById("github-button");

function updateText(lang) {
    const t = translations[lang] || translations["de"];
    document.title = t.title;
    description.textContent = t.description;
    instagramButton.textContent = t.instagram;
    twitterButton.textContent = t.twitter;
    githubButton.textContent = t.github;
    document.documentElement.lang = lang;
}

languageSelector.addEventListener("change", (e) => {
    updateText(e.target.value);
});
