const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  const desktopQuery = window.matchMedia("(min-width: 900px)");

  const syncMenuAccessibility = () => {
    const isDesktop = desktopQuery.matches;
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";

    siteNav.toggleAttribute("inert", !isDesktop && !isOpen);

    if (isDesktop) {
      siteNav.removeAttribute("aria-hidden");
    } else {
      siteNav.setAttribute("aria-hidden", String(!isOpen));
    }
  };

  const closeMenu = ({ returnFocus = false } = {}) => {
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "メニューを開く");
    siteNav.classList.remove("is-open");
    document.body.classList.remove("nav-open");
    syncMenuAccessibility();

    if (returnFocus) {
      navToggle.focus();
    }
  };

  const openMenu = () => {
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "メニューを閉じる");
    siteNav.classList.add("is-open");
    document.body.classList.add("nav-open");
    syncMenuAccessibility();
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  siteNav.addEventListener("click", (event) => {
    if (!(event.target instanceof HTMLAnchorElement)) {
      return;
    }

    closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";

    if (event.key === "Escape" && isOpen) {
      closeMenu({ returnFocus: true });
      return;
    }

    if (event.key !== "Tab" || !isOpen || desktopQuery.matches) {
      return;
    }

    const focusableItems = [navToggle, ...siteNav.querySelectorAll("a[href]")];
    const firstItem = focusableItems[0];
    const lastItem = focusableItems[focusableItems.length - 1];

    if (event.shiftKey && document.activeElement === firstItem) {
      event.preventDefault();
      lastItem.focus();
    } else if (!event.shiftKey && document.activeElement === lastItem) {
      event.preventDefault();
      firstItem.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (
      navToggle.getAttribute("aria-expanded") !== "true" ||
      !(event.target instanceof Node) ||
      siteNav.contains(event.target) ||
      navToggle.contains(event.target)
    ) {
      return;
    }

    closeMenu();
  });

  desktopQuery.addEventListener("change", () => {
    closeMenu();
    syncMenuAccessibility();
  });

  syncMenuAccessibility();
}

document.querySelectorAll(".price-group").forEach((group) => {
  const slider = group.querySelector("[data-price-slider]");
  const buttons = group.querySelectorAll("[data-price-direction]");

  if (!(slider instanceof HTMLElement) || buttons.length === 0) {
    return;
  }

  const updateControls = () => {
    const maxScroll = Math.max(0, slider.scrollWidth - slider.clientWidth);

    buttons.forEach((button) => {
      if (!(button instanceof HTMLButtonElement)) {
        return;
      }

      const direction = Number(button.dataset.priceDirection);
      button.disabled = direction < 0 ? slider.scrollLeft <= 2 : slider.scrollLeft >= maxScroll - 2;
    });
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const firstCard = slider.querySelector("article");

      if (!(firstCard instanceof HTMLElement)) {
        return;
      }

      const gap = Number.parseFloat(getComputedStyle(slider).gap) || 0;
      const direction = Number(button.dataset.priceDirection) || 1;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      slider.scrollBy({
        left: direction * (firstCard.getBoundingClientRect().width + gap),
        behavior: reduceMotion ? "auto" : "smooth",
      });
    });
  });

  slider.addEventListener("scroll", updateControls, { passive: true });
  window.addEventListener("resize", updateControls);
  requestAnimationFrame(updateControls);
});

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  const submitButton = contactForm.querySelector(".submit-button");
  const statusMessage = contactForm.querySelector(".form-status-message");
  const serviceSelect = contactForm.querySelector("#service");
  const budgetHelp = contactForm.querySelector("#budget-help");
  const defaultButtonText = submitButton?.textContent || "相談内容を送信する";
  const requiredFields = contactForm.querySelectorAll("[required]");
  const defaultBudgetHelp = "サービスにより目安が異なります。未定でも送信できます。";

  const updateBudgetHelp = () => {
    if (!budgetHelp || !(serviceSelect instanceof HTMLSelectElement)) {
      return;
    }

    budgetHelp.textContent =
      serviceSelect.value === "LP・Webページ制作"
        ? "LP・Webページ制作の基本料金は80,000円です。内容により追加見積もりとなります。"
        : defaultBudgetHelp;
  };

  const resetServiceSelection = () => {
    if (!(serviceSelect instanceof HTMLSelectElement)) {
      return;
    }

    serviceSelect.value = "";
    updateBudgetHelp();
  };

  document.querySelectorAll("[data-service]").forEach((link) => {
    link.addEventListener("click", () => {
      if (!(serviceSelect instanceof HTMLSelectElement)) {
        return;
      }

      const service = link.getAttribute("data-service");

      if (!service || !Array.from(serviceSelect.options).some((option) => option.value === service)) {
        return;
      }

      serviceSelect.value = service;
      serviceSelect.dispatchEvent(new Event("change", { bubbles: true }));
    });
  });

  serviceSelect?.addEventListener("change", updateBudgetHelp);
  window.addEventListener("pageshow", resetServiceSelection);
  resetServiceSelection();

  const getErrorMessage = (field) => {
    if (field instanceof HTMLInputElement && field.type === "checkbox") {
      return "同意チェックを入れてください。";
    }

    if (field instanceof HTMLInputElement && field.type === "email") {
      return field.validity.typeMismatch
        ? "メールアドレスの形式で入力してください。"
        : "メールアドレスを入力してください。";
    }

    if (field instanceof HTMLSelectElement) {
      return "希望するサービスを選択してください。";
    }

    if (field instanceof HTMLTextAreaElement) {
      return "ご相談内容を入力してください。";
    }

    return "入力してください。";
  };

  const setFieldError = (field) => {
    field.setAttribute("aria-invalid", String(!field.validity.valid));
    const errorId = field.getAttribute("aria-describedby");

    if (!errorId) {
      return;
    }

    const errorElement = document.getElementById(errorId);

    if (!errorElement) {
      return;
    }

    errorElement.textContent = field.validity.valid ? "" : getErrorMessage(field);
  };

  const clearFieldError = (field) => {
    field.removeAttribute("aria-invalid");
    const errorId = field.getAttribute("aria-describedby");

    if (errorId) {
      const errorElement = document.getElementById(errorId);

      if (errorElement) {
        errorElement.textContent = "";
      }
    }
  };

  const showStatus = (message, className) => {
    if (!statusMessage) {
      return;
    }

    statusMessage.textContent = message;
    statusMessage.classList.add(className);
    statusMessage.hidden = false;
    statusMessage.focus({ preventScroll: true });
    statusMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  requiredFields.forEach((field) => {
    field.addEventListener("input", () => setFieldError(field));
    field.addEventListener("change", () => setFieldError(field));
    field.addEventListener("invalid", () => setFieldError(field));
  });

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!(contactForm instanceof HTMLFormElement)) {
      return;
    }

    let firstInvalidField = null;

    requiredFields.forEach((field) => {
      setFieldError(field);

      if (!field.validity.valid && !firstInvalidField) {
        firstInvalidField = field;
      }
    });

    if (firstInvalidField) {
      firstInvalidField.focus();
      return;
    }

    if (submitButton instanceof HTMLButtonElement && submitButton.disabled) {
      return;
    }

    if (submitButton instanceof HTMLButtonElement) {
      submitButton.disabled = true;
      submitButton.textContent = "送信中…";
    }

    if (statusMessage) {
      statusMessage.hidden = true;
      statusMessage.textContent = "";
      statusMessage.classList.remove("is-success", "is-error");
    }

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Formspree submission failed");
      }

      contactForm.reset();
      requiredFields.forEach((field) => clearFieldError(field));
      updateBudgetHelp();

      showStatus(
        "お問い合わせを送信しました。内容を確認のうえ、通常2〜3営業日以内を目安にご連絡します。",
        "is-success"
      );
    } catch (error) {
      showStatus(
        "送信できませんでした。通信環境をご確認のうえ、時間を置いてもう一度お試しください。",
        "is-error"
      );
    } finally {
      if (submitButton instanceof HTMLButtonElement) {
        submitButton.disabled = false;
        submitButton.textContent = defaultButtonText;
      }
    }
  });
}
