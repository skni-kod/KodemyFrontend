function getUserInfo() {
  fetch("http://localhost:8181/api/users/me", {
    credentials: "include",
  })
    .then((response) => {
      console.log(response.json());
    })
    .catch((error) => console.log("Authorization failed: " + error.message));
}

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <a href="http://localhost:8181/api/oauth2/authorize/github">
        Zaloguj się
      </a>
      <a href="http://localhost:8181/api/oauth2/logout">Wyloguj się</a>
      <button formMethod="get" onClick={getUserInfo}>
        Pobierz info
      </button>
    </div>
  );
}