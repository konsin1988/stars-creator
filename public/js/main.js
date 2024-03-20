document.addEventListener("DOMContentLoaded", () => {
  const moon = document.querySelector("#moon1");
  const moonCoordinates = moon.getBoundingClientRect();
  const availableScreenWidth = window.screen.availWidth;
  const availableScreenHeight = window.screen.availHeight;

  const moonXY = {
    startLeft: (moonCoordinates.left / availableScreenWidth) * 100,
    endLeft:
      ((moonCoordinates.left + moonCoordinates.width) / availableScreenWidth) *
      100,
    startTop: (moonCoordinates.top / availableScreenHeight) * 100,
    endTop:
      ((moonCoordinates.top + moonCoordinates.height) / availableScreenHeight) *
      100,
  };

  createStars("starSize_sm", 200, moonXY);
  createStars("starSize_md", 50, moonXY);
  createStars("starSize_bg", 10, moonXY);
});

function getRandonNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function createStars(size, count, moonXY) {
  const starsBx = document.querySelector(".stars-box");

  for (let i = 0; i < count; i++) {
    let cloneStar = document.querySelector(".star").cloneNode(true);
    cloneStar.className = "star" + " " + size;

    const star = getStarCoordinates(moonXY);
    cloneStar.style.top = star.top + "%";
    cloneStar.style.left = star.left + "%";

    starsBx.appendChild(cloneStar);
  }
}

function getStarCoordinates(moonXY) {
  while (1) {
    const star = {
      top: getRandonNumber(5, 95),
      left: getRandonNumber(5, 95),
    };
    console.log(star);
    console.log(moonXY.startLeft < star.left && star.left < moonXY.endLeft);
    if (
      moonXY.startLeft + 5 < star.left &&
      star.left < moonXY.endLeft - 5 &&
      moonXY.startTop < star.top &&
      star.top < moonXY.endTop
    ) {
      continue;
    }
    // if (

    //   !document.elementFromPoint(star.left, star.top) ||
    //   document.elementFromPoint(star.left, star.top).id == ("moon6" || "moon5")
    // ) {
    //   continue;
    // }

    return star;
  }
}
