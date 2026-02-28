/*!
 * NestedUl 2.0.0
 * NestedUl may be freely distributed under the ISC license.
 * 2026-02-28 10:38
 */

const NestedUl = {
  activate: function() {
    const lists = document.querySelectorAll("ul.nestedul")
    console.log('lists: ', lists)
  }
}

export default NestedUl


// NestedUl.activate = function() {
//   $("body").on("click", ".nestedul-dropdown li>i", function(event) {
//     event.stopPropagation()
//     var i = $(this)
//     // Проверяем, кликнули ли по первому тегу <i></i> или по какому-либо в тексте узла.
//     if (i.index() != 0) {
//       return null
//     }
//     var li = $(this).parent()
//     var elBlock = li.find(">ul")[0]
//     // Чиню раскрытие дочерних узлов со стартовой позиции с классом nestedul-close.
//     if (li.hasClass("nestedul-close") && elBlock.style.height == "") {
//       elBlock.style.height = "0"
//     }
//     if (elBlock.style.height === "0px") {
//       // console.log('> ul === "0px"')
//       elBlock.style.height = `${elBlock.scrollHeight}px`
//       // console.log(`> height = ${elBlock.scrollHeight}px`)

//       // if (elBlock.nestedul_timeout_id) {
//       //   clearTimeout(elBlock.nestedul_timeout_id)
//       // }
//       // elBlock.nestedul_timeout_id = setTimeout(function() {
//       //   elBlock.style.height = "auto" 
//       //   // console.log('> height = auto')
//       // }, 250)
//     } else {
//       // console.log('> ul !== "0px"')
//       elBlock.style.height = `${elBlock.scrollHeight}px`
//       // console.log(`> height = ${elBlock.scrollHeight}px`)
//       window.getComputedStyle(elBlock, null).getPropertyValue("height")
//       // console.log('> getComputedStyle')
//       elBlock.style.height = "0"
//       // console.log('> height = "0"')

//       // if (elBlock.nestedul_timeout_id) {
//       //   clearTimeout(elBlock.nestedul_timeout_id)
//       // }
//     }
//     li.toggleClass("nestedul-close")
//   })

//   $("body .nestedul-dropdown ul").on("transitionend", function(event) {
//     var elBlock = $(this)[0]
//     if (elBlock.style.height !== "0px") {
//       elBlock.style.height = "auto"
//     }
//   })
// }
