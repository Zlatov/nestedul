/*!
 * NList 1.0.0
 * NList may be freely distributed under the ISC license.
 * 2025-03-22 17:08
 */

function NList() {
}

NList.activate = function() {
  $("body").on("click", ".nlist-dropdown li>i", function(event) {
    event.stopPropagation()
    var i = $(this)
    // Проверяем, кликнули ли по первому тегу <i></i> или по какому-либо в тексте узла.
    if (i.index() != 0) {
      return null
    }
    var li = $(this).parent()
    var elBlock = li.find(">ul")[0]
    // Чиню раскрытие дочерних узлов со стартовой позиции с классом nlist-close.
    if (li.hasClass("nlist-close") && elBlock.style.height == "") {
      elBlock.style.height = "0"
    }
    if (elBlock.style.height === "0px") {
      // console.log('> ul === "0px"')
      elBlock.style.height = `${elBlock.scrollHeight}px`
      // console.log(`> height = ${elBlock.scrollHeight}px`)

      // if (elBlock.nlist_timeout_id) {
      //   clearTimeout(elBlock.nlist_timeout_id)
      // }
      // elBlock.nlist_timeout_id = setTimeout(function() {
      //   elBlock.style.height = "auto" 
      //   // console.log('> height = auto')
      // }, 250)
    } else {
      // console.log('> ul !== "0px"')
      elBlock.style.height = `${elBlock.scrollHeight}px`
      // console.log(`> height = ${elBlock.scrollHeight}px`)
      window.getComputedStyle(elBlock, null).getPropertyValue("height")
      // console.log('> getComputedStyle')
      elBlock.style.height = "0"
      // console.log('> height = "0"')

      // if (elBlock.nlist_timeout_id) {
      //   clearTimeout(elBlock.nlist_timeout_id)
      // }
    }
    li.toggleClass("nlist-close")
  })

  $("body .nlist-dropdown ul").on("transitionend", function(event) {
    var elBlock = $(this)[0]
    if (elBlock.style.height !== "0px") {
      elBlock.style.height = "auto"
    }
  })
}

export default NList
