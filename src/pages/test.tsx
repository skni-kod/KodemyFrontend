import Head from "next/head";
import { metadata } from "@/pages/_document";
import router, { useRouter } from "next/router";
import { useState } from "react";
import Favicon from "@/assets/favicon.ico";
import HomeBubble from "@/components/home/bubble/HomeBubble";

let data = null;

function performSignIn() {
  let headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Origin", "http://localhost:3000");

  fetch("http://localhost:8181/api/oauth2/authorize/github", {
    mode: "cors",
    credentials: "include",
    method: "GET",
    headers: headers,
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((json) => {
      // Otwieramy nową kartę z przekierowaniem
      window.open(json.redirectURL, "_blank");
    })
    .catch((error) => console.log("Authorization failed: " + error.message));
}

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <button formMethod="get" onClick={performSignIn}>
        PSZYCISK
      </button>
    </div>
  );
}
