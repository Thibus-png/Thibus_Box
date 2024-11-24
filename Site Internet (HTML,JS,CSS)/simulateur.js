class Combattant{
    constructor(nom, attack, pv, precision){
        this.nom = nom
        this.attack = attack;
        this.pv = pv;
        this.precision = precision;
    }
    attaquer(ennemis){

        if(this.touche()){
            ennemis.pv-=this.attack
        }else{console.log(`${this.nom} a loupé ${ennemis.nom}`)}
    }
    touche(){
        let gambling=Math.random(0,1);
        return (gambling < this.precision)
    }
}
let Goku = new Combattant("Goku", 10, 20, 0.7);
let Freezer = new Combattant("Freezer", 10, 20, 0.7);

while(Freezer.pv > 0 && Goku.pv > 0){
    Goku.attaquer(Freezer)
    if(Freezer.pv <= 0){
        console.log(`${Goku.nom} a battu ${Freezer.nom}`)
        break;
    }
    Freezer.attaquer(Goku)
    if(Goku.pv <= 0){
        console.log(`${Freezer.nom} a tué ${Goku.nom}`)
        break;
    }
}
