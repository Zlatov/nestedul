/*!
 * NestedUl 2.0.0
 * NestedUl may be freely distributed under the ISC license.
 * 2026-02-28 10:38
 */

export const version = "2.0.0"

function click_handle(event) {
  event.stopPropagation()
  var i = $(this)
  // Проверяем, кликнули ли по первому тегу <i></i> или по какому-либо в тексте узла.
  if (i.index() != 0) {
    return null
  }

  var li = $(this).parent()
  var elBlock = li.find(">ul")[0]

  // Чиню раскрытие дочерних узлов со стартовой позиции с классом nestedul-close.
  if (li.hasClass("nestedul-close") && elBlock.style.height == "") {
    elBlock.style.height = "0"
  }

  if (elBlock.style.height === "0px") {
    elBlock.style.height = `${elBlock.scrollHeight}px`
  } else {
    elBlock.style.height = `${elBlock.scrollHeight}px`
    window.getComputedStyle(elBlock, null).getPropertyValue("height")
    elBlock.style.height = "0"
  }

  li.toggleClass("nestedul-close")
}

function transitionend_handle(event) {
  const elBlock = event.target
  if (elBlock.style.height !== "0px") {
    elBlock.style.height = "auto"
  }
}

export function activate(root = document) {
  root.querySelectorAll("ul.nestedul-dropdown").forEach(function(ul, _i, _a) {
    ul.addEventListener("click", function(event) {
      if (event.target.matches("li > i")) {
        click_handle.call(event.target, event)
      }
    })
  })
  root.querySelectorAll("ul.nestedul-dropdown ul").forEach(function(ul, _i, _a) {
    ul.addEventListener("transitionend", transitionend_handle)
  })
}

export function destroy() {
}

export default { version, activate, destroy }
