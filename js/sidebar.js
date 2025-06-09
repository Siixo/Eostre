import { initSidebar } from "./main.js";

fetch("/html/htmlcomponents/sidebar.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Fetch error, status: ${response.status}`);
    }
    return response.text();
  })
  .then((html) => {
    document.querySelector(".sidebar-placeholder").innerHTML = html;
    initSidebar();
  })
  .catch((error) => {
    console.error("Erreur dans le chargement de la barre de navigation", error);
  });
