import { describe, expect, it } from 'vitest';
import {
  daftarKategori,
  narahubung,
  suratDinas,
  tanggalKegiatan,
  tanggalSuratDinas,
} from './surat-dinas';

describe('surat dinas dua tanda tangan', () => {
  it('ditandatangani dua orang: Ketua Pelaksana lalu Founder Nempo.id', () => {
    expect(suratDinas.penandatangan.map((p) => `${p.nama} — ${p.jabatan}`)).toEqual([
      'Derian Cahyadi Saputra Wiraatmaja — Ketua Pelaksana',
      'Syahrul Ramadhani Nasution — Founder Nempo.id',
    ]);
  });

  it('hanya Founder yang didahului kata Mengetahui', () => {
    expect(suratDinas.penandatangan.map((p) => p.mengetahui)).toEqual([false, true]);
  });

  it('nomor dan tanggal surat', () => {
    expect(suratDinas.nomor).toBe('004/NEMPO/SD/XI/2026');
    expect(tanggalSuratDinas()).toBe('20 November 2026');
  });

  it('kegiatan sama persis dengan surat peminjaman Art Center', () => {
    expect(tanggalKegiatan()).toBe('Rabu–Kamis, 30–31 Desember 2026');
    expect(daftarKategori()).toBe('TK, SD kelas 1–3, SD kelas 4–6, dan SMP–SMA');
  });

  it('narahubung adalah Ketua Pelaksana', () => {
    expect(narahubung()).toBe(
      'Derian Cahyadi Saputra Wiraatmaja · WhatsApp +62 857-2498-1356',
    );
  });

  it('ditujukan ke Kepala Dinas Pariwisata dan Kebudayaan Kabupaten Garut', () => {
    expect(suratDinas.tujuan.jabatan).toBe(
      'Kepala Dinas Pariwisata dan Kebudayaan Kabupaten Garut',
    );
  });
});
