const clientId = "1450801405572153446";
const redirectUri = "https://mythickiller-ai.github.io/Ultron.dashboard.xyz/"; // replace with your GitHub Pages URL
const scopes = ["identify", "guilds"];

document.getElementById("login-btn").href =
  `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=${scopes.join("%20")}`;

