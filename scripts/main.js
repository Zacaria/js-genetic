var population;
var lifespan = 200;
var visualLifespan;
var count = 0;
var target;

function setup() {
    createCanvas(800, 600);

    population = new Population();
    visualLifespan = createDiv();
    target = createVector(width/2, 50);
}

function draw() {
    background(42, 49, 57);
    population.run();

    visualLifespan.html(count);
    count++;

    if (count == lifespan) {
        population = new Population();
        count = 0;
    }

    ellipse(target.x, target.y, 16, 16);
}