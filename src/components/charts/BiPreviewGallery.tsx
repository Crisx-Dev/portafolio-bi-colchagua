// src/components/charts/BiPreviewGallery.tsx
import { useState, useEffect, useRef } from "react";

interface BiPage {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface Props {
  pages: BiPage[];
}

export default function BiPreviewGallery({ pages }: Props) {
  const [selected, setSelected] = useState<BiPage | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (selected && !dialog.open) {
      dialog.showModal();
    } else if (!selected && dialog.open) {
      dialog.close();
    }
  }, [selected]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => setSelected(null);
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, []);

  // Estilos del dialog nativo (backdrop + animación)
  const dialogStyles = `
    .bi-lightbox {
      padding: 0;
      border: none;
      background: transparent;
      max-width: 95vw;
      max-height: 95vh;
      margin: auto;
    }
    .bi-lightbox::backdrop {
      background: rgba(2, 6, 23, 0.92);
      backdrop-filter: blur(6px);
    }
    .bi-lightbox[open] {
      animation: biLightboxIn 0.25s ease-out;
    }
    @keyframes biLightboxIn {
      from {
        opacity: 0;
        transform: scale(0.96);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
  `;

  return (
    <>
      <style>{dialogStyles}</style>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {pages.map((page, index) => (
          <button
            key={page.id}
            type="button"
            onClick={() => setSelected(page)}
            className={`group relative text-left rounded-xl overflow-hidden
                       border border-slate-200 dark:border-slate-800
                       bg-white dark:bg-slate-900
                       hover:border-emerald-400 dark:hover:border-emerald-600
                       hover:shadow-xl
                       transition-all
                       ${index === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}
          >
            <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
              <img
                src={page.image}
                alt={page.title}
                className="w-full h-full object-cover
                           group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-emerald-950/0 group-hover:bg-emerald-950/40
                              transition-colors duration-300
                              flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity
                                 inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                                 bg-white/95 text-emerald-900 text-xs font-semibold">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Ampliar
                </span>
              </div>
            </div>

            <div className="p-4">
              <p className="text-[10px] uppercase tracking-[0.15em] text-emerald-600 dark:text-emerald-400 font-bold mb-1.5">
                {page.title}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {page.description}
              </p>
            </div>
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="bi-lightbox"
        onClick={(e) => {
          const dialog = dialogRef.current;
          if (!dialog) return;
          const rect = dialog.getBoundingClientRect();
          const isInDialog =
            e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom;
          if (!isInDialog) setSelected(null);
        }}
      >
        {selected && (
          <div className="relative max-w-6xl w-full p-4">
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Cerrar"
              className="absolute -top-2 -right-2 z-10 w-10 h-10 rounded-full
                         bg-white dark:bg-slate-800
                         border border-slate-200 dark:border-slate-700
                         flex items-center justify-center
                         text-slate-700 dark:text-slate-200
                         hover:bg-slate-100 dark:hover:bg-slate-700
                         shadow-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <img
              src={selected.image}
              alt={selected.title}
              className="w-full h-auto rounded-xl shadow-2xl"
            />

            <div className="mt-4 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-400 font-bold mb-1">
                {selected.title}
              </p>
              <p className="text-sm text-slate-300 max-w-2xl mx-auto">
                {selected.description}
              </p>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}