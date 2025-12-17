document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");
  const msg = document.getElementById("msg");
  const toggle = document.getElementById("toggle-pw");
  const pw = document.getElementById("password");
  const tabs = document.querySelectorAll(".mode-tab");
  const title = document.getElementById("form-title");
  const confirmRow = document.getElementById("confirm-row");

  let mode = "login";

  toggle.onclick = () => {
    pw.type = pw.type === "password" ? "text" : "password";
    toggle.textContent = pw.type === "password" ? "Show" : "Hide";
  };

  tabs.forEach(tab => {
    tab.onclick = () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      mode = tab.dataset.mode;

      title.textContent = mode === "login" ? "Log In" : "Sign Up";
      confirmRow.classList.toggle("hidden", mode === "login");
      form.querySelector(".primary").textContent = title.textContent;
    };
  });

  form.onsubmit = e => {
    e.preventDefault();
    msg.textContent = "";

    const email = form.email.value.trim();
    const password = form.password.value;

    if (!email || password.length < 6) {
      msg.textContent = "Enter valid email and password (6+ chars)";
      return;
    }

    msg.textContent = `${title.textContent} successful (demo)`;
  };

  document.querySelectorAll(".social").forEach(btn => {
    btn.onclick = () => {
      msg.textContent = `${btn.textContent} (demo only)`;
    };
  });
});

