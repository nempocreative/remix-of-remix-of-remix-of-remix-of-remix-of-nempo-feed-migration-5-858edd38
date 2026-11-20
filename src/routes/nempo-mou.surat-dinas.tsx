import { createFileRoute } from "@tanstack/react-router";
import { lazyWithRetry } from "@/lib/lazy-with-retry";
import { AppShell } from "@/components/app-shell";

const Entry = lazyWithRetry(() => import("@/apps/mou/entry-surat-dinas"));

export const Route = createFileRoute("/nempo-mou/surat-dinas")({
  head: () => ({
    meta: [
      { title: "Surat Dinas Nempo.id — Pemberitahuan Kegiatan Pasanggiri Jaipong" },
      { name: "description", content: "Surat dinas Nempo.id bernomor 004/NEMPO/SD/XI/2026 untuk Kepala Dinas Pariwisata dan Kebudayaan Kabupaten Garut, ditandatangani Ketua Pelaksana dan Founder Nempo.id." },
      { property: "og:title", content: "Surat Dinas Nempo.id — Pasanggiri Jaipong Road to Pasar Seni 2027" },
      { property: "og:description", content: "Pemberitahuan pelaksanaan Pasanggiri Jaipong se-Jawa Barat, 30–31 Desember 2026 di Gedung Art Center Garut." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => <AppShell app={Entry} />,
});
