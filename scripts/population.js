function Population() {
    this.populationSize = 25;
    this.sticks = new Array(this.populationSize).fill(0).map(() => new Stick());
    this.pool = [];

    this.run = function() {
        this.sticks.forEach(stick => {
            stick.update();
            stick.show();
        });
    }

    this.evaluate = function() {
        var maxFitness = this.sticks.reduce(function(fitness, stick) {
            return Math.max(fitness, stick.calculateFitess());
        }, 0);

        this.sticks.forEach(stick => stick.fitness /= maxFitness);

        this.pool = [];

        this.sticks.forEach(stick => {
            var n = stick.fitness * 100;
            for (var j = 0; j < n; j++) {
                this.pool.push(stick);
            }
        })
    }

    this.selection = function() {
        this.sticks = this.sticks.map(stick => {
            var parentA = random(this.pool).dna;
            var parentB = random(this.pool).dna;

            var child = parentA.crossover(parentB);

            return new Stick(child);
        });


    }
}