/*!
 * NList 1.0.0
 * https://nlist.zlatov.su
 * NList may be freely distributed under the ISC license.
 * 2025-03-22 17:08
 */

function NList() {
}

NList.activate = function() {
  console.log('> act')
  // $(".ul_to_tree.ul_to_tree-dropdown").on("click", "li", function(event) {
  //   event.stopPropagation()
  //   if (event.offsetX >= -6 && event.offsetX <= 5 && event.offsetY >= 5 && event.offsetY <= 16 ) {
  //     var li = $(this)
  //     var elBlock = li.find(">ul")[0]
  //     if (elBlock.style.height === "0px") {
  //       elBlock.style.height = `${elBlock.scrollHeight}px`
  //     } else {
  //       elBlock.style.height = `${elBlock.scrollHeight}px`
  //       window.getComputedStyle(elBlock, null).getPropertyValue("height")
  //       elBlock.style.height = "0"
  //     }
  //     li.toggleClass("close")
  //   }
  // })

  // $(".ul_to_tree.ul_to_tree-dropdown ul").on("transitionend", function(event) {
  //   var elBlock = $(this)[0]
  //   if (elBlock.style.height !== "0px") {
  //     elBlock.style.height = "auto"
  //   }
  // })

  // $(".ul_to_tree2.ul_to_tree2-dropdown").on("click", "li>i", function(event) {
  //   event.stopPropagation()
  //   var i = $(this)
  //   var li = i.parent()
  //   var elBlock = li.find(">ul")[0]
  //   if (elBlock.style.height === "0px") {
  //     elBlock.style.height = `${elBlock.scrollHeight}px`
  //   } else {
  //     elBlock.style.height = `${elBlock.scrollHeight}px`
  //     window.getComputedStyle(elBlock, null).getPropertyValue("height")
  //     elBlock.style.height = "0"
  //   }
  //   li.toggleClass("close")
  // })

  // $(".ul_to_tree2.ul_to_tree2-dropdown ul").on("transitionend", function(event) {
  //   var elBlock = $(this)[0]
  //   if (elBlock.style.height !== "0px") {
  //     elBlock.style.height = "auto"
  //   }
  // })

  $("body").on("click", ".nlist-dropdown li>i", function(event) {
    event.stopPropagation()
    var i = $(this)
    // Проверяем, кликнули ли по первому тегу <i></i> или по какому-либо в тексте узла.
    if (i.index() != 0) {
      return null
    }
    var li = $(this).parent()
    // var elBlock = li.find(">ul")[0]
    // if (elBlock.style.height === "0px") {
    //   elBlock.style.height = `${elBlock.scrollHeight}px`
    // } else {
    //   elBlock.style.height = `${elBlock.scrollHeight}px`
    //   window.getComputedStyle(elBlock, null).getPropertyValue("height")
    //   elBlock.style.height = "0"
    // }
    li.toggleClass("close")
  })
}
