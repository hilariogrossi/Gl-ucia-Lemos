export = { };

class Animal {
    mover(distancia = 0) {
        console.log(`Animal se moveu ...: ${distancia} metros.`);
        
    }

}

class Cachorro extends Animal {
    latir() {
        console.log('Au! Au!');
        
    }

}

const cachorro = new Cachorro();

cachorro.latir();
cachorro.mover(10);
cachorro.latir();
