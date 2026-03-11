// src/tugas2.ts

interface Buku {
    judul: string;
    pengarang: string;
    tahunTerbit: number;
    tersedia: boolean;
}

const bukuSaya: Buku = {
    judul: "Panduan TypeScript Modern",
    pengarang: "Anders Hejlsberg",
    tahunTerbit: 2023,
    tersedia: true
};

console.log("Detail Buku:");
console.log(`Judul: ${bukuSaya.judul}`);
console.log(`Pengarang: ${bukuSaya.pengarang}`);
console.log(`Tahun: ${bukuSaya.tahunTerbit}`);
console.log(`Status: ${bukuSaya.tersedia ? "Tersedia" : "Dipinjam"}`);