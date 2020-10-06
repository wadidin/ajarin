function openSidebar() {
  document.getElementById("mySidebar").classList.add("show-sidebar");
  document.getElementById("sideLinks").classList.add("sidebar-links");
  document.getElementById("socialLinks").classList.add("sidebar-icons");
}

function closeSidebar() {
  document.getElementById("mySidebar").classList.remove("show-sidebar");
  document.getElementById("sideLinks").classList.remove("sidebar-links");
  document.getElementById("socialLinks").classList.remove("sidebar-icons");
  document.getElementById("mySidebar").classList.add("sidebar");
}