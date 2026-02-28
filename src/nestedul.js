/*!
 * NestedUl 2.0.0
 * NestedUl may be freely distributed under the ISC license.
 * 2026-02-28 10:38
 */

export const version = "2.0.0";

let controller = null;

/**
 * Открыть ветку с анимацией height
 */
function expand(ul) {
  ul.style.height = "0px";
  const target = ul.scrollHeight;
  ul.style.height = `${target}px`;
}

/**
 * Закрыть ветку с анимацией height
 */
function collapse(ul) {
  const current = ul.scrollHeight;
  ul.style.height = `${current}px`;

  // форсим reflow, чтобы браузер применил текущую высоту
  ul.offsetHeight;

  ul.style.height = "0px";
}

/**
 * Обработчик клика по иконке
 */
function onClick(event) {
  const icon = event.target.closest(".nestedul li > i");
  if (!icon) return;

  const li = icon.parentElement;
  const child = li.querySelector(":scope > ul");
  if (!child) return;

  event.stopPropagation();

  const isClosed = li.classList.contains("nestedul-close");

  if (isClosed) {
    expand(child);
  } else {
    collapse(child);
  }

  li.classList.toggle("nestedul-close");
}

/**
 * После окончания анимации открытой ветке возвращаем auto,
 * чтобы высота адаптировалась к контенту.
 */
function onTransitionEnd(event) {
  const ul = event.target;
  if (ul.style.height !== "0px") {
    ul.style.height = "auto";
  }
}

function prepareList(ul) {
  const isStatic = ul.classList.contains("nestedul-static");
  if (isStatic) return;

  const isWide = ul.classList.contains("nestedul-wide");
  const noIcons = ul.classList.contains("nestedul-no-icons");

  ul.querySelectorAll("li").forEach(li => {
    const childUl = li.querySelector(":scope > ul");
    console.log('childUl: ', childUl)
    // if (!childUl) return;

    // --- добавить иконку ---
    // if (!noIcons && !li.querySelector(":scope > i")) {
    if (!noIcons) {
      const icon = document.createElement("i");
      li.insertBefore(icon, li.firstChild);
    }

    // --- wide режим ---
    if (isWide && !li.querySelector(":scope > div")) {
      const wrapper = document.createElement("div");

      // переносим текстовые узлы и inline элементы
      const nodes = Array.from(li.childNodes);
      nodes.forEach(node => {
        if (node === childUl) return;
        if (node.nodeName === "I") return;
        wrapper.appendChild(node);
      });

      li.insertBefore(wrapper, childUl);
    }
  });
}

/**
 * Идемпотентная активация
 */
export function activate(root = document) {
  controller?.abort();
  controller = new AbortController();

  root.querySelectorAll("ul.nestedul").forEach(prepareList);

  root.addEventListener("click", onClick, {
    signal: controller.signal
  });

  root.addEventListener("transitionend", onTransitionEnd, {
    signal: controller.signal
  });
}

export function destroy() {
  controller?.abort();
  controller = null;
}

export default { version, activate, destroy };
