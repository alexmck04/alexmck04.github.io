'use strict';

// Sidebar toggle
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", function () {
    sidebar.classList.toggle("active");
  });
}


// About Me / Resume tabs
const tabs = document.querySelectorAll("[data-tab]");
const panels = document.querySelectorAll("[data-panel]");

tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    const selectedTab = tab.dataset.tab;

    tabs.forEach(function (item) {
      const isActive = item.dataset.tab === selectedTab;

      item.classList.toggle("active", isActive);
      item.setAttribute("aria-selected", isActive);
      item.setAttribute("tabindex", isActive ? "0" : "-1");
    });

    panels.forEach(function (panel) {
      const isActive = panel.dataset.panel === selectedTab;

      panel.classList.toggle("active", isActive);
      panel.hidden = !isActive;
    });
  });
});