const steps = [1, 2, 3, 4, 5].map(
  n => document.getElementById(`step${n}`)
);


// Change screen

function show(n) {

  steps.forEach((step, index) => {

    step.classList.toggle(
      "active",
      index === n - 1
    );

  });

}


// Floating hearts

const holder =
  document.getElementById("hearts");

for (let i = 0; i < 18; i++) {

  const h =
    document.createElement("span");

  h.className = "heart";

  h.textContent =
    i % 3 === 0 ? "♥" : "♡";

  h.style.left =
    Math.random() * 96 + "%";

  h.style.animationDelay =
    Math.random() * 7 + "s";

  h.style.animationDuration =
    5 + Math.random() * 5 + "s";

  h.style.fontSize =
    12 + Math.random() * 12 + "px";

  holder.appendChild(h);
}


// NO button

const noBtn =
  document.getElementById("noBtn");

function moveNo() {

  const area =
    document.getElementById("choiceArea");

  const r =
    area.getBoundingClientRect();

  const x =
    Math.random() *
    Math.max(30, r.width - 95);

  const y =
    Math.random() * 45;

  noBtn.style.left = x + "px";

  noBtn.style.top = y + "px";
}


// Make NO button run away

["mouseenter", "touchstart", "click"]
.forEach(event => {

  noBtn.addEventListener(
    event,
    e => {

      e.preventDefault();

      moveNo();

    }
  );

});


// YES

document
  .getElementById("yesBtn")
  .onclick = () => {

    show(2);

  };


// OKAY

document
  .getElementById("okayBtn")
  .onclick = () => {

    show(3);

  };


// Food selection

document
  .querySelectorAll(".food-grid button")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        document
          .querySelectorAll(
            ".food-grid button"
          )
          .forEach(b =>
            b.classList.remove(
              "selected"
            )
          );

        button.classList.add(
          "selected"
        );

        setTimeout(
          () => show(4),
          350
        );

      }
    );

  });


// Date button

document
  .getElementById("dateBtn")
  .onclick = () => {

    const date =
      document.getElementById(
        "date"
      ).value;

    const time =
      document.getElementById(
        "time"
      ).value;

    if (!date || !time) {

      alert(
        "Pick a day and time first 💌"
      );

      return;
    }

    show(5);

  };


// Final button

document
  .getElementById("acceptBtn")
  .onclick = () => {

    for (let i = 0; i < 45; i++) {

      const s =
        document.createElement("span");

      s.className = "heart";

      s.textContent =
        ["♥", "💗", "✦", "♡"][
          Math.floor(
            Math.random() * 4
          )
        ];

      s.style.left =
        45 + Math.random() * 10 + "%";

      s.style.top =
        45 + Math.random() * 10 + "%";

      s.style.animation =
        "burst 1.2s ease forwards";

      s.style.setProperty(
        "--x",
        Math.random() * 500 - 250 + "px"
      );

      s.style.setProperty(
        "--y",
        Math.random() * 500 - 250 + "px"
      );

      holder.appendChild(s);
    }

    document
      .getElementById("acceptBtn")
      .textContent =
      "See you soon! 💕";

  };


// Confetti / heart burst animation

const style =
  document.createElement("style");

style.textContent = `

@keyframes burst {

  to {

    transform:
      translate(var(--x), var(--y))
      scale(1.5);

    opacity: 0;

  }

}

`;

document.head.appendChild(style);