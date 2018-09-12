function Population() {
    this.populationSize = 25;
    this.sticks = new Array(this.populationSize).fill(new Stick());

    this.run = function() {
        this.sticks.forEach(stick => {
            stick.update();
            stick.show();
        });
    }
}