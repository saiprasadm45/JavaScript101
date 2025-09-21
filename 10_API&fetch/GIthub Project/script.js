// DOM Elements
const elements = {
    username: document.querySelector("#username"),
    avatar: document.querySelector(".myimg"),
    profileUrl: document.querySelector(".profileurl"),
    name: document.querySelector(".name"),
    email: document.querySelector(".email"),
    repos: document.querySelector(".publicrepo"),
    bio: document.querySelector(".bio"),
    followers: document.querySelector(".followers"),
    following: document.querySelector(".following"),
    created: document.querySelector(".creation"),
    updated: document.querySelector(".lastupdate"),
    searchInput: document.querySelector("#usrnm"),
    searchButton: document.querySelector("#btn"),
    result: document.querySelector(".result"),
    profileContent: document.querySelector(".profile-content"),
    skeletonLoader: document.querySelector(".skeleton-loader")
};

// Constants
const GITHUB_API = "https://api.github.com/users/";
const DATE_FORMAT = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
};

// Utility Functions
const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-GB", DATE_FORMAT);
};

const showError = (message) => {
    elements.result.innerHTML = `
        <div class="error-message">
            <i class="fas fa-exclamation-circle"></i>
            <span>${message}</span>
        </div>
    `;
    elements.profileContent.classList.add("hidden");
    elements.skeletonLoader.classList.add("hidden");
};

const toggleLoading = (isLoading) => {
    elements.skeletonLoader.classList.toggle("hidden", !isLoading);
    elements.profileContent.classList.toggle("hidden", isLoading);
    elements.result.innerHTML = "";
};

// Debounce function to limit API calls
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Update UI with user data
const updateUI = (data) => {
    if (!data) return;

    elements.username.innerHTML = `<i class="fas fa-user"></i> ${data.login}`;
    elements.avatar.src = data.avatar_url;
    elements.avatar.style.display = "block";
    elements.name.innerHTML = data.name || data.login;
    elements.email.innerHTML = data.email || "Email not public";
    elements.bio.innerHTML = data.bio || "No bio available";
    elements.repos.innerHTML = `${data.public_repos} repositories`;
    elements.profileUrl.href = data.html_url;
    elements.followers.innerHTML = `${data.followers.toLocaleString()} followers`;
    elements.following.innerHTML = `${data.following.toLocaleString()} following`;
    elements.created.innerHTML = `Joined ${formatDate(data.created_at)}`;
    elements.updated.innerHTML = `Last updated ${formatDate(data.updated_at)}`;

    elements.profileContent.classList.remove("hidden");
};

// Fetch GitHub user data
const fetchGitHubUser = async (username) => {
    try {
        const response = await fetch(GITHUB_API + username);
        if (!response.ok) {
            throw new Error(response.status === 404 
                ? "User not found" 
                : "Failed to fetch user data"
            );
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Handle search
const handleSearch = async (e) => {
    e?.preventDefault();
    const username = elements.searchInput.value.trim();

    if (!username) {
        showError("Please enter a GitHub username");
        return;
    }

    try {
        toggleLoading(true);
        const userData = await fetchGitHubUser(username);
        updateUI(userData);
    } catch (error) {
        showError(error.message);
    } finally {
        toggleLoading(false);
    }
};

// Event Listeners
elements.searchButton.addEventListener("click", handleSearch);
elements.searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") handleSearch(e);
});

// Auto-search on input (debounced)
elements.searchInput.addEventListener(
    "input", 
    debounce((e) => {
        if (e.target.value.trim()) handleSearch();
    }, 500)
);
