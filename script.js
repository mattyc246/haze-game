let time = 0;
let lives = 10;
let leftBoundary = 20;
let rightBoundary = 330;

$(document).ready(() => {
  $("#play-btn").click(() => {
    $("#beforeGame").fadeOut(1000, () => {
      $("#inGame").fadeIn(1000, () => {
        $("#fan-box").draggable({
          axis: "x",
          containment: "#inGame",
          drag: function(e) {
            // console.log(e.target.style.left);
            leftBoundary = e.target.left;
            rightBoundary = e.target.left + 50;
          }
        });
        setInterval(() => {
          time = time + 1;
          $("#timer").html(`Time: ${time}`);
        }, 1000);
      });
    });
  });
});

// NOT USING FOR NOW!!!!

// window.addEventListener("mousedown", e => {
//   console.log(e);
//   let boxPos = parseInt(
//     $("#fan-box")
//       .css("left")
//       .split("p")[0]
//   );
//   if (e.key === "ArrowLeft") {
//     if (boxPos > leftBoundary && boxPos <= rightBoundary) {
//       let newPos = boxPos - 10;
//       $("#fan-box").css("left", `${newPos}px`);
//     }
//   } else if (e.key === "ArrowRight") {
//     if (boxPos >= leftBoundary && boxPos < rightBoundary) {
//       let newPos = boxPos + 10;
//       $("#fan-box").css("left", `${newPos}px`);
//     }
//   }
// });
