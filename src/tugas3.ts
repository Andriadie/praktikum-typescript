// src/tugas3.ts

class Lingkaran {
    jariJari: number;

    constructor(r: number) {
        this.jariJari = r;
    }

    hitungLuas(): number {
        return Math.PI * Math.pow(this.jariJari, 2);
    }
}

const bundaran = new Lingkaran(7);
console.log(`Jari-jari: ${bundaran.jariJari}`);
console.log(`Luas Lingkaran: ${bundaran.hitungLuas().toFixed(2)}`);