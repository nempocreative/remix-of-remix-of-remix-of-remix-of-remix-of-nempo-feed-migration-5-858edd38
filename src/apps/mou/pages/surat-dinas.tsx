import mark from '@/assets/mou/nempo-mark.png.asset.json';
import {
  daftarKategori,
  narahubung,
  suratDinas as s,
  tanggalKegiatan,
  tanggalSuratDinas,
} from '@/apps/mou/data/surat-dinas';
import { suratArtCenter, totalKuota } from '@/apps/mou/data/surat-art-center';

export function SuratDinasDocument() {
  const acara = suratArtCenter.acara;
  return (
    <article
      className="document preview-document"
      aria-label="Surat dinas pemberitahuan pelaksanaan kegiatan"
    >
      <section className="doc-page letter-page">
        <header className="letter-kop">
          <img className="letter-kop-logo" src={mark.url} alt="Logo Nempo" />
          <div className="letter-kop-copy">
            <strong>NEMPO</strong>
            <span>{s.pengirim.nama} · Event Organizer, Wedding Organizer &amp; Creative</span>
            <span>
              {s.pengirim.alamat} · WhatsApp {s.pengirim.whatsapp} · Instagram {s.pengirim.instagram}
            </span>
          </div>
        </header>

        <div className="letter-meta">
          <dl className="letter-meta-list">
            <div><dt>Nomor</dt><span aria-hidden="true">:</span><dd>{s.nomor}</dd></div>
            <div><dt>Lampiran</dt><span aria-hidden="true">:</span><dd>{s.lampiran}</dd></div>
            <div><dt>Perihal</dt><span aria-hidden="true">:</span><dd><strong>{s.perihal}</strong></dd></div>
          </dl>
          <p className="letter-date">{s.tempatSurat}, {tanggalSuratDinas()}</p>
        </div>

        <div className="letter-to">
          <p>Kepada Yth.</p>
          <p><strong>{s.tujuan.jabatan}</strong></p>
          <p>{s.tujuan.alamat}</p>
          <p>di</p>
          <p className="letter-to-place">Tempat</p>
        </div>

        <div className="letter-body">
          <p>Dengan hormat,</p>
          <p>
            Dalam rangka melestarikan seni tari Jaipong sebagai warisan budaya Sunda serta
            menjaring penari muda berbakat menuju Pasar Seni 2027, kami dari {s.pengirim.nama}
            akan menyelenggarakan kegiatan <strong>{acara.nama}</strong> bertajuk
            “{acara.tema}”.
          </p>
          <p>
            Sehubungan dengan hal tersebut, melalui surat dinas ini kami menyampaikan
            pemberitahuan pelaksanaan kegiatan dimaksud, dengan rincian sebagai berikut:
          </p>
          <dl className="letter-details">
            <div><dt>Nama kegiatan</dt><span aria-hidden="true">:</span><dd>{acara.nama} ({acara.tema})</dd></div>
            <div><dt>Hari, tanggal</dt><span aria-hidden="true">:</span><dd>{tanggalKegiatan()}</dd></div>
            <div><dt>Waktu</dt><span aria-hidden="true">:</span><dd>{acara.waktu}</dd></div>
            <div><dt>Tempat</dt><span aria-hidden="true">:</span><dd>{acara.tempat}</dd></div>
            <div>
              <dt>Peserta</dt><span aria-hidden="true">:</span>
              <dd>Penari Jaipong kategori {daftarKategori()} (kuota {acara.kuotaPerKategori} peserta per kategori, total {totalKuota()} peserta)</dd>
            </div>
            <div>
              <dt>Penanggung jawab</dt><span aria-hidden="true">:</span>
              <dd>Syahrul Ramadhani Nasution (Founder Nempo.id)</dd>
            </div>
          </dl>
          <p>
            Kegiatan ini dilaksanakan oleh kepanitiaan yang dibentuk {s.pengirim.nama} dengan
            saudara Derian Cahyadi Saputra Wiraatmaja sebagai Ketua Pelaksana. Surat dinas ini
            kami jadikan dasar koordinasi teknis serta pengurusan perizinan pelaksanaan kegiatan.
          </p>
          <p>
            Demikian surat dinas ini kami sampaikan. Atas perhatian dan kerja sama Bapak/Ibu,
            kami ucapkan terima kasih.
          </p>
        </div>

        <div className="letter-sign-grid">
          {s.penandatangan.map((penandatangan) => (
            <div className="letter-sign-cell" key={penandatangan.nama}>
              {penandatangan.mengetahui ? <p className="letter-sign-know">Mengetahui,</p> : null}
              <p className="letter-sign-role">{penandatangan.jabatan}</p>
              <div className="letter-sign-space" aria-hidden="true" />
              <p className="letter-sign-name">{penandatangan.nama}</p>
            </div>
          ))}
        </div>

        <p className="letter-contact">
          Narahubung: {narahubung()} · Instagram {s.pengirim.instagram}
        </p>
      </section>
    </article>
  );
}
