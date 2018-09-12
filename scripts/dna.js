function dna(genes) {
    if (genes) {
        this.genes = genes;
    } else {
        this.genes = [];

        for (let i = 0; i < lifespan; i++) {
            this.genes[i] = p5.Vector.random2D();
            this.genes[i].setMag(0.4);
        }
    }

    this.crossover = function(partner) {
        var mid = floor(random(this.genes.length));
        
        var newgenes = this.genes.map((gene, i) => {
            if(i > mid) {
                return gene;
            } else {
                return partner.genes[i];
            }
        });

        return new dna(newgenes);
    }
}