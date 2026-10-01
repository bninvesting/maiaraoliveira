import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, Sparkles, Flower2, Eye, Brush, GraduationCap, MapPin, Phone, Clock, Menu } from "lucide-react";

const TITLE = "Maiara Oliveira | Beleza e estética na Vila Nova Curuçá";
const DESC = "Studio de beleza e estética na Vila Nova Curuçá, São Paulo. Estética facial e corporal, cílios, sobrancelhas e cursos. Agende pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const MSG = "Olá! Conheci a Maiara Oliveira Studio de beleza e estética pelo site e gostaria de saber mais sobre os serviços e agendar um horário.";
const WA = `https://wa.me/5511994307944?text=${encodeURIComponent(MSG)}`;
const IG = "https://www.instagram.com/maiaraoliveira.estetica/";
const ADDRESS = "Rua Ananaí, 227 - Vila Nova Curuçá, São Paulo - SP, 08032-370";
const MAPS = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;
const img = (f: string) => import.meta.env.BASE_URL + "images/" + f;

const PHOTOS = [
  { src: img("fachada.png"), alt: "Fachada rosa do studio com letreiro dourado Clinic Lady Elegance, na Rua Ananaí, 227" },
  { src: img("entrada.png"), alt: "Entrada e área de espera com colunas, flores rosas e espelho de moldura dourada" },
  { src: img("sala-atendimento.png"), alt: "Sala de atendimento rosa com maca, luminária e estantes" },
  { src: img("interior.jpg"), alt: "Sala com parede de flores rosas, maca e equipamentos de estética" },
];

const SERVICES = [
  { icon: Sparkles, t: "Estética facial", d: "Consulte os cuidados e procedimentos disponíveis." },
  { icon: Flower2, t: "Estética corporal", d: "Converse com o studio sobre as opções de atendimento." },
  { icon: Eye, t: "Cílios", d: "Consulte os serviços e a disponibilidade." },
  { icon: Brush, t: "Sobrancelhas", d: "Conheça as opções oferecidas pelo studio." },
  { icon: GraduationCap, t: "Cursos", d: "Solicite informações sobre modalidades e próximas turmas." },
];

const HOURS = [
  ["Segunda-feira", "Fechado"],
  ["Terça a sexta-feira", "10h às 19h"],
  ["Sábado", "8h às 14h"],
  ["Domingo", "Fechado"],
];

const NAV = [
  ["Início", "#inicio"],
  ["Serviços", "#servicos"],
  ["Nosso espaço", "#espaco"],
  ["Contato", "#contato"],
];

function WhatsIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.44-9.43 2.52 0 4.89.98 6.67 2.77a9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.24 9.43-9.44 9.43m8.03-17.46A11.3 11.3 0 0 0 12.05.71C5.79.71.7 5.8.7 12.06c0 2 .52 3.95 1.52 5.67L.6 23.6l6.01-1.58a11.3 11.3 0 0 0 5.43 1.38h.01c6.25 0 11.35-5.09 11.35-11.35 0-3.03-1.18-5.88-3.32-8.02" />
    </svg>
  );
}
function InstaIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const btn = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
const btnPrimary = `${btn} bg-primary text-primary-foreground shadow-soft hover:bg-primary/90`;
const btnOutline = `${btn} border border-gold/60 text-foreground hover:bg-secondary`;

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-gold">
      <span className="h-px w-8 bg-gold" />
      {children}
    </p>
  );
}

function Index() {
  const [open, setOpen] = useState<number | null>(null);
  const [menu, setMenu] = useState(false);
  const close = useCallback(() => setOpen(null), []);
  const move = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + PHOTOS.length) % PHOTOS.length)), []);

  useEffect(() => {
    if (open === null) return;
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", k);
      document.body.style.overflow = "";
    };
  }, [open, close, move]);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href="#inicio" className="min-w-0 leading-tight">
            <span className="block font-display text-2xl font-semibold text-primary">Maiara Oliveira</span>
            <span className="block truncate text-[11px] uppercase tracking-[0.2em] text-gold">Studio de beleza e estética</span>
          </a>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Principal">
            {NAV.map(([l, h]) => (
              <a key={h} href={h} className="text-sm text-foreground/80 hover:text-primary">{l}</a>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <a href={IG} target="_blank" rel="noopener noreferrer" aria-label="Instagram @maiaraoliveira.estetica" className="rounded-full p-2 text-primary hover:bg-secondary">
              <InstaIcon />
            </a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className={`${btnPrimary} hidden px-4 py-2 sm:inline-flex`}>
              <WhatsIcon className="h-4 w-4" /> Agendar pelo WhatsApp
            </a>
            <button className="rounded-full p-2 md:hidden" aria-label="Abrir menu" aria-expanded={menu} onClick={() => setMenu(!menu)}>
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
        {menu && (
          <nav className="border-t border-border px-5 py-3 md:hidden" aria-label="Menu móvel">
            {NAV.map(([l, h]) => (
              <a key={h} href={h} onClick={() => setMenu(false)} className="block py-2 text-foreground/80">{l}</a>
            ))}
            <a href={WA} target="_blank" rel="noopener noreferrer" className={`${btnPrimary} mt-2 w-full`}>
              <WhatsIcon className="h-4 w-4" /> Agendar pelo WhatsApp
            </a>
          </nav>
        )}
      </header>

      <main>
        <section id="inicio" className="scroll-mt-20 bg-gradient-to-b from-secondary/60 to-background">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-2 md:py-20">
            <div className="reveal">
              <Eyebrow>Vila Nova Curuçá · São Paulo</Eyebrow>
              <h1 className="text-5xl font-semibold leading-[1.05] md:text-6xl lg:text-7xl">
                Seu momento de cuidado <em className="text-primary">começa aqui.</em>
              </h1>
              <p className="mt-6 max-w-md text-lg text-muted-foreground">
                Conheça nosso espaço na Vila Nova Curuçá e converse com a gente sobre os serviços de beleza e estética disponíveis para você.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={WA} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                  <WhatsIcon className="h-4 w-4" /> Quero agendar meu horário
                </a>
                <a href="#espaco" className={btnOutline}>Conhecer o espaço</a>
              </div>
            </div>
            <figure className="relative mx-auto w-full max-w-md reveal">
              <div className="absolute -inset-3 rounded-t-[12rem] rounded-b-3xl border border-gold/50" aria-hidden="true" />
              <img src={PHOTOS[0].src} alt={PHOTOS[0].alt} width={1086} height={1448} className="relative w-full rounded-t-[11rem] rounded-b-2xl object-contain shadow-soft" fetchPriority="high" />
            </figure>
          </div>
        </section>

        <section id="servicos" className="scroll-mt-20 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="mx-auto max-w-xl text-center">
              <div className="flex justify-center"><Eyebrow>Serviços</Eyebrow></div>
              <h2 className="text-4xl font-semibold md:text-5xl">Cuidados pensados para você</h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map(({ icon: I, t, d }) => (
                <article key={t} className="flex flex-col rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-soft">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-secondary text-gold"><I className="h-5 w-5" aria-hidden="true" /></span>
                  <h3 className="mt-5 text-2xl font-semibold">{t}</h3>
                  <p className="mt-2 flex-1 text-muted-foreground">{d}</p>
                  <a href={WA} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                    <WhatsIcon className="h-4 w-4" /> Consultar pelo WhatsApp
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="espaco" className="scroll-mt-20 bg-secondary/50 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="max-w-xl">
              <Eyebrow>Nosso espaço</Eyebrow>
              <h2 className="text-4xl font-semibold md:text-5xl">Conheça cada detalhe do nosso espaço</h2>
              <p className="mt-4 text-muted-foreground">Explore o ambiente e entre em contato para tirar dúvidas, conhecer os serviços e consultar um horário.</p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {[1, 2, 3, 0].map((i) => (
                <button key={i} onClick={() => setOpen(i)} className="group overflow-hidden rounded-2xl bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-label={`Ampliar foto: ${PHOTOS[i].alt}`}>
                  <img src={PHOTOS[i].src} alt={PHOTOS[i].alt} loading="lazy" width={1086} height={1448} className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-105" />
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-3xl px-5 text-center">
            <InstaIcon className="mx-auto h-8 w-8 text-gold" />
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">Conheça mais pelo Instagram</h2>
            <p className="mt-4 text-muted-foreground">Acompanhe as publicações da Maiara Oliveira e explore o perfil do studio.</p>
            <a href={IG} target="_blank" rel="noopener noreferrer" className={`${btnOutline} mt-8`}>
              <InstaIcon className="h-4 w-4" /> Visitar @maiaraoliveira.estetica
            </a>
          </div>
        </section>

        <section className="bg-primary py-20 text-primary-foreground">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-center text-4xl font-semibold md:text-5xl">Reserve um momento para você</h2>
            <ol className="mt-12 grid gap-8 md:grid-cols-3">
              {["Entre em contato pelo WhatsApp.", "Informe o serviço desejado e sua preferência de dia e horário.", "Aguarde a confirmação do studio."].map((s, i) => (
                <li key={s} className="text-center">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-accent font-display text-2xl text-accent">{i + 1}</span>
                  <p className="mx-auto mt-4 max-w-xs">{s}</p>
                </li>
              ))}
            </ol>
            <div className="mt-12 text-center">
              <a href={WA} target="_blank" rel="noopener noreferrer" className={`${btn} bg-background text-primary hover:bg-secondary`}>
                <WhatsIcon className="h-4 w-4" /> Consultar horários
              </a>
              <p className="mt-4 text-sm opacity-85">O agendamento é confirmado diretamente pelo studio.</p>
            </div>
          </div>
        </section>

        <section id="contato" className="scroll-mt-20 py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2">
            <div>
              <Eyebrow>Contato</Eyebrow>
              <h2 className="text-4xl font-semibold md:text-5xl">Venha nos visitar</h2>
              <ul className="mt-8 space-y-5">
                <li className="flex gap-3"><MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" /><span>{ADDRESS}</span></li>
                <li className="flex gap-3"><Phone className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" /><a href="tel:+5511994307944" className="hover:text-primary">(11) 99430-7944</a></li>
                <li className="flex gap-3"><InstaIcon className="mt-1 h-5 w-5 shrink-0 text-gold" /><a href={IG} target="_blank" rel="noopener noreferrer" className="hover:text-primary">Visitar Instagram</a></li>
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className={btnOutline}><MapPin className="h-4 w-4" /> Como chegar</a>
                <a href={WA} target="_blank" rel="noopener noreferrer" className={btnPrimary}><WhatsIcon className="h-4 w-4" /> Falar pelo WhatsApp</a>
              </div>
            </div>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
              <h3 className="flex items-center gap-2 text-2xl font-semibold"><Clock className="h-5 w-5 text-gold" aria-hidden="true" /> Horários</h3>
              <dl className="mt-6 divide-y divide-border">
                {HOURS.map(([d, h]) => (
                  <div key={d} className="flex justify-between py-3">
                    <dt>{d}</dt>
                    <dd className={h === "Fechado" ? "text-muted-foreground" : "font-medium text-primary"}>{h}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-secondary/50 pb-24 pt-12 sm:pb-12">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-semibold text-primary">Maiara Oliveira</p>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">Studio de beleza e estética</p>
          </div>
          <div className="space-y-1 text-sm text-muted-foreground">
            <p>{ADDRESS}</p>
            <p><a href="tel:+5511994307944" className="hover:text-primary">(11) 99430-7944</a></p>
            <p><a href={IG} target="_blank" rel="noopener noreferrer" className="hover:text-primary">@maiaraoliveira.estetica</a></p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm md:justify-end" aria-label="Rodapé">
            {NAV.map(([l, h]) => <a key={h} href={h} className="hover:text-primary">{l}</a>)}
          </nav>
        </div>
      </footer>

      <a href={WA} target="_blank" rel="noopener noreferrer" aria-label="Falar pelo WhatsApp" className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-primary-foreground shadow-soft transition hover:scale-105">
        <WhatsIcon className="h-7 w-7" />
      </a>

      {open !== null && (
        <div role="dialog" aria-modal="true" aria-label="Galeria de fotos" className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4" onClick={close}>
          <img src={PHOTOS[open].src} alt={PHOTOS[open].alt} className="max-h-[88vh] max-w-full rounded-xl object-contain" onClick={(e) => e.stopPropagation()} />
          <button autoFocus onClick={close} aria-label="Fechar" className="absolute right-4 top-4 rounded-full bg-background p-2 text-foreground"><X className="h-5 w-5" /></button>
          <button onClick={(e) => { e.stopPropagation(); move(-1); }} aria-label="Foto anterior" className="absolute left-3 rounded-full bg-background p-2 text-foreground"><ChevronLeft className="h-6 w-6" /></button>
          <button onClick={(e) => { e.stopPropagation(); move(1); }} aria-label="Próxima foto" className="absolute right-3 rounded-full bg-background p-2 text-foreground"><ChevronRight className="h-6 w-6" /></button>
          <p className="absolute bottom-4 text-sm text-background">{open + 1} / {PHOTOS.length}</p>
        </div>
      )}
    </div>
  );
}
