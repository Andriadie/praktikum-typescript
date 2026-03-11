// src/tugas4.ts

function sapaan(input: string | number): string {
    if (typeof input === "string") {
        return `Halo, ${input}`;
    } else {
        return `Umur: ${input} tahun`;
    }
}

console.log(sapaan("Vrs")); 
console.log(sapaan(19));     