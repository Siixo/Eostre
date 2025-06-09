export function initSidebar() {
  const sidebar = document.querySelector(".sidebar-placeholder");
  const toggleButton = document.getElementById("toggleBtn");

  if (sidebar && toggleButton) {
    toggleButton.addEventListener("click", () => {
      sidebar.classList.toggle("expanded");
    });
  }
}
