/**
 * Surat dinas Nempo.id: pemberitahuan pelaksanaan kegiatan Pasanggiri Jaipong
 * (Road to Pasar Seni 2027). Rincian kegiatan sengaja diambil dari data surat
 * peminjaman Gedung Art Center supaya kedua surat tidak pernah berbeda isi.
 * Surat ini ditandatangani dua pihak: Ketua Pelaksana dan Founder Nempo.id.
 */
import { rentangAcara, suratArtCenter, tanggalLengkap } from './surat-art-center';

export const suratDinas = {
  nomor: '004/NEMPO/SD/XI/2026',
  tempatSurat: 'Garut',
  tanggalSurat: '2026-11-20',
  lampiran: '1 (satu) berkas',
  perihal: 'Pemberitahuan Pelaksanaan Kegiatan Pasanggiri Jaipong se-Jawa Barat',
  tujuan: {
    jabatan: 'Kepala Dinas Pariwisata dan Kebudayaan Kabupaten Garut',
    alamat:
      'Jl. Raya Ciledug No. 120, Kota Kulon, Kec. Garut Kota, Kabupaten Garut 44114',
  },
  pengirim: {
    nama: suratArtCenter.pengirim.nama,
    alamat: suratArtCenter.pengirim.alamat,
    whatsapp: suratArtCenter.pengirim.whatsapp,
    instagram: suratArtCenter.pengirim.instagram,
  },
  /** Ditandatangani berurutan: kiri Ketua Pelaksana, kanan Founder Nempo.id. */
  penandatangan: [
    {
      nama: 'Derian Cahyadi Saputra Wiraatmaja',
      jabatan: 'Ketua Pelaksana',
      mengetahui: false,
    },
    {
      nama: 'Syahrul Ramadhani Nasution',
      jabatan: 'Founder Nempo.id',
      mengetahui: true,
    },
  ],
} as const;

/** "20 November 2026" */
export function tanggalSuratDinas(): string {
  return tanggalLengkap(suratDinas.tanggalSurat, false);
}

/** "Rabu–Kamis, 30–31 Desember 2026" */
export function tanggalKegiatan(): string {
  return rentangAcara();
}

/** "TK, SD kelas 1–3, SD kelas 4–6, dan SMP–SMA" */
export function daftarKategori(): string {
  const kategori = [...suratArtCenter.acara.kategori];
  return `${kategori.slice(0, -1).join(', ')}, dan ${kategori[kategori.length - 1]}`;
}

/** Nama penandatangan yang mengurus teknis kegiatan (narahubung surat). */
export function narahubung(): string {
  const ketua = suratDinas.penandatangan.find((p) => p.jabatan === 'Ketua Pelaksana');
  return ketua ? `${ketua.nama} · WhatsApp ${suratDinas.pengirim.whatsapp}` : '';
}
