"use strict";

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

if (menuToggle && siteNav) {
  const setMenuState = (isOpen) => {
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    siteNav.classList.toggle("is-open", isOpen);
  };

  menuToggle.addEventListener("click", () => {
    setMenuState(menuToggle.getAttribute("aria-expanded") !== "true");
  });

  siteNav.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (link) {
      setMenuState(false);
    }
  });
}

const slider = document.querySelector("#cigarette-slider");
const sliderValue = document.querySelector("#slider-value");
const mealsOutput = document.querySelector("#meals-output");
const nprOutput = document.querySelector("#npr-output");
const usdOutput = document.querySelector("#usd-output");
const impactOutput = document.querySelector("#impact-output");

function updateImpactEstimate() {
  if (!slider || !sliderValue || !mealsOutput || !nprOutput || !usdOutput || !impactOutput) return;

  const cigarettesPerDay = Number.parseInt(slider.value, 10) || 0;
  const monthlySavingsNpr = cigarettesPerDay * 18 * 30;
  const monthlySavingsUsd = monthlySavingsNpr / 135;
  const cigaretteLabel = cigarettesPerDay === 1 ? "cigarette" : "cigarettes";

  sliderValue.textContent = String(cigarettesPerDay);
  slider.setAttribute("aria-valuetext", `${cigarettesPerDay} ${cigaretteLabel} per day`);
  mealsOutput.textContent = String(cigarettesPerDay);
  nprOutput.textContent = `NPR ${monthlySavingsNpr.toLocaleString("en")}`;
  usdOutput.textContent = `about USD ${monthlySavingsUsd.toFixed(2)}`;
  impactOutput.textContent = (cigarettesPerDay * 30).toLocaleString("en");
}

if (slider) {
  slider.addEventListener("input", updateImpactEstimate);
}

updateImpactEstimate();

const contactForm = document.querySelector("#contact-form");
const formFeedback = document.querySelector("#form-feedback");

if (contactForm && formFeedback) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;

    const formData = new FormData(contactForm);
    const name = String(formData.get("name")).trim();
    const email = String(formData.get("email")).trim();
    const message = String(formData.get("message")).trim();
    const subject = encodeURIComponent(`A note from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);

    formFeedback.textContent = "Your email app should open with your note ready. Please send it there to reach me.";
    window.location.href = `mailto:rabinpandey876@gmail.com?subject=${subject}&body=${body}`;
  });
}
