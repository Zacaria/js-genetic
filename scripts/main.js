var population;
var lifespan = 200;
var visualLifespan;
var count = 0;
var target;
var generation = 0;

function setup() {
    createCanvas(800, 600);

    population = new Population();
    visualLifespan = createDiv();
    visualGeneration = createP();
    target = createVector(width/2, 250);
}

var temp = 0;

function draw() {
    background(42, 49, 57);

    temp++;
    population.run();
    visualLifespan.html(count);
    count++;

    if (count == lifespan) {
        population.evaluate();
        population.selection();

        count = 0;
        generation++;
        visualGeneration.html('Generation: ' + generation)
    }

    ellipse(target.x, target.y, 16, 16);
}