//Inspired by Rothko’s Blue & Grey
let m = 20,
  a = 0;

function setup() {
  createCanvas(800, 800);
  colorMode(HSB, 250);
  background(250);
  for (i = 0; i < height; i++) {
    stroke(290, random(250), random(10), random(25));
    strokeWeight(randomGaussian(15, 20));
    line(i, 0, i, height);
    line(0, i, height, i);
  }
  frameRate(500);
}

function draw() {
  //  blendMode(OVERLAY);
  noStroke();
  fill(random(21, 23), random(10, 20), random(100, 225), random(200, 250));
  // strokeWeight(random(100));
  circle(
    random(m, width - m),
    random(m, (2 * height) / 3 - m / 2),
    random(5, 10)
  );

  fill(random(160, 162), random(50, 100), random(10, 100), random(200, 250));
  circle(
    random(m, width - m),
    random((2 * height) / 3 + m / 2, height - m),
    random(5, 10)
  );

  if (mouseIsPressed === true) {
    if (mouseY > (2 * height) / 3) {
      fill(random(21, 23), random(5, 10), random(200, 220), random(100, 250));
      circle(
        randomGaussian(mouseX, 30),
        randomGaussian(mouseY, 10),
        random(5, 20)
      );
    } else {
      fill(
        random(160, 162),
        random(100, 150),
        random(50, 100),
        random(100, 250)
      );

      circle(
        randomGaussian(mouseX, 30),
        randomGaussian(mouseY, 10),
        random(5, 20)
      );
    }
  } else {
    fill(random(21, 23), random(5, 10), random(200, 220), random(100, 250));
    circle(
      randomGaussian(width / 2, 150),
      randomGaussian(height / 3, 100),
      random(5, 20)
    );
    fill(random(160, 162), random(100, 150), random(50, 100), random(100, 250));

    circle(
      randomGaussian(width / 2, 150),
      randomGaussian((5 * height) / 6, 20),
      random(5, 20)
    );
  }
}