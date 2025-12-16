// Theme toggle
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeBtn.textContent =
    document.body.classList.contains("light") ? "🌙" : "☀️";
});

// Cost Estimator
const serviceSelect = document.getElementById("serviceSelect");
const costText = document.getElementById("costText");

serviceSelect.addEventListener("change", () => {
  const prices = {
    electrician: "₹300 – ₹600",
    plumber: "₹400 – ₹700",
    carpenter: "₹500 – ₹900"
  };
  costText.textContent =
    "Estimated Cost: " + (prices[serviceSelect.value] || "—");
});




function updateDateTime() {
  const now = new Date();
  const formatted = now.toLocaleString('en-GB', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
  document.getElementById('datetime').textContent = formatted;
}
setInterval(updateDateTime, 1000);
updateDateTime();