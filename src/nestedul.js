export const version = __VERSION__;

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

// * Оборачивает контент в <div></div>;
// * Добавляет <i></i> в начало.
function prepareList(ul) {
  const isNarrow = ul.classList.contains("nestedul-narrow");
  const isStatic = ul.classList.contains("nestedul-static");

  ul.querySelectorAll("li").forEach(li => {
    // Дочерний ul текущего li
    const childUl = li.querySelector(":scope > ul");

    // Обернуть в <div></div>
    if (!isNarrow) {
      const wrapper = document.createElement("div");

      // Переносим содержимое узла в <div></div> кроме <i></i> и <ul></ul>
      const nodes = Array.from(li.childNodes);
      nodes.forEach(node => {
        if (node === childUl) return;
        // if (node.nodeName === "I") return;
        wrapper.appendChild(node);
      });

      li.insertBefore(wrapper, childUl);
    }

    // Добавить <i></i>
    if (!isStatic) {
      const icon = document.createElement("i");
      li.insertBefore(icon, li.firstChild);
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

(function(global){
  if (global.NestedUl && global.NestedUl.default) {
    global.NestedUl = global.NestedUl.default
  }
})(window)
