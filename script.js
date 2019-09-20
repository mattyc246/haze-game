let time = 0;
let lives = 10;
let currentAPI = 1;
let leftBoundary = 20;
let rightBoundary = 330;
let crossPoint = 125;
let cloudCount = 1;

function startPoint() {
  let min = 20;
  let max = 330;
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return getRandomInt(min, max);
}

function playRound() {
  cloudCount++;
  $("#life-bar").after(
    `<img id="cloud-${cloudCount}" class="haze-cloud" src="./images/haze-cartoon.png">`
  );
  $(`#cloud-${cloudCount}`).css({ left: startPoint() });
  $(`#cloud-${cloudCount}`).animate(
    { bottom: "20px" },
    {
      duration: 1600,
      step: function() {
        let cloudPosTop = Math.floor(
          $(this)
            .css("bottom")
            .split("p")[0]
        );
        let cloudPosLeft = $(this)
          .css("left")
          .split("p")[0];
        if (
          (cloudPosTop <= crossPoint + 20) | (cloudPosTop <= crossPoint) &&
          (leftBoundary <= cloudPosLeft && rightBoundary >= cloudPosLeft)
        ) {
          $(this).remove();
        }
      }
    }
  );
}

$(document).ready(() => {
  $("#play-btn").click(() => {
    $("#beforeGame").fadeOut(1000, () => {
      $("#inGame").fadeIn(1000, () => {
        $("#fan-box").draggable({
          axis: "x",
          containment: "#inGame",
          drag: function(e) {
            leftBoundary = parseInt(e.target.style.left.split("p")[0]);
            rightBoundary = parseInt(e.target.style.left.split("p")[0]) + 50;
          }
        });
        let timer = setInterval(() => {
          time = time + 1;
          $("#timer").html(`Time: ${time}`);
        }, 1000);
        let play = setInterval(() => {
          playRound();
        }, 800);
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
