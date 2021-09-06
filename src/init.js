const TICK_RATE = 3000;

function tick() {
  console.log("tick", Date.now());
}

function init() {
  console.log("starting game");

  let nextIntervalToTick = Date.now();

  function nextAnimationFrame() {
    const now = Date.now();

    if (nextIntervalToTick <= now) {
      tick();
      nextIntervalToTick = now + TICK_RATE;
    }
    requestAnimationFrame(nextAnimationFrame);
  }
  requestAnimationFrame(nextAnimationFrame);
}

init();
