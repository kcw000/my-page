const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  const closeMenu = () => {
    navToggle.setAttribute("aria-expanded", "false");
    siteNav.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";

    navToggle.setAttribute("aria-expanded", String(!isOpen));
    siteNav.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("nav-open", !isOpen);
  });

  siteNav.addEventListener("click", (event) => {
    if (!(event.target instanceof HTMLAnchorElement)) {
      return;
    }

    closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
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
}

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  const submitButton = contactForm.querySelector(".submit-button");
  const statusMessage = contactForm.querySelector(".form-status-message");
  const defaultButtonText = submitButton?.textContent || "相談内容を送信する";
  const requiredFields = contactForm.querySelectorAll("[required]");

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

      if (statusMessage) {
        statusMessage.textContent = "お問い合わせを送信しました。内容を確認のうえ、通常2〜3営業日以内を目安にご連絡します。";
        statusMessage.classList.add("is-success");
        statusMessage.hidden = false;
      }
    } catch (error) {
      if (statusMessage) {
        statusMessage.textContent = "送信できませんでした。通信環境をご確認のうえ、時間を置いてもう一度お試しください。";
        statusMessage.classList.add("is-error");
        statusMessage.hidden = false;
      }
    } finally {
      if (submitButton instanceof HTMLButtonElement) {
        submitButton.disabled = false;
        submitButton.textContent = defaultButtonText;
      }
    }
  });
}
