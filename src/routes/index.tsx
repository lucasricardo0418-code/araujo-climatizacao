import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-installation.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import {
  Wrench,
  Wind,
  Sparkles,
  ShieldCheck,
  Award,
  Users,
  MapPin,
  Phone,
  Instagram,
  Star,
  CheckCircle2,
  XCircle,
  MessageCircle,
  ArrowRight,
  Thermometer,
  ClipboardList,
  HeadphonesIcon,
  Snowflake,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP_URL =
  "https://wa.me/5531982104934?text=" +
  encodeURIComponent(
    "Olá! Vim pelo site da Araujo Climatização e gostaria de solicitar um orçamento.",
  );
const INSTAGRAM_URL = "https://www.instagram.com/araujoclimatizacao10/";
const GOOGLE_REVIEW_URL = "https://g.page/r/CW698oUL7XFrEBM/review";

const regions = [
  "Morada Nova de Minas",
  "Biquinhas",
  "Três Marias",
  "Felixlândia",
  "Cedro do Abaeté",
  "Pompéu",
  "Abaeté",
  "Paineiras",
];

const differentials = [
  { icon: Award, title: "Atendimento especializado", desc: "Foco exclusivo em climatização, com diagnóstico técnico preciso para cada ambiente." },
  { icon: ShieldCheck, title: "Padrão profissional", desc: "Instalações executadas conforme normas técnicas e recomendações dos fabricantes." },
  { icon: Sparkles, title: "Acabamento limpo", desc: "Cuidado em cada detalhe: tubulação alinhada, fixação correta e ambiente entregue impecável." },
  { icon: Users, title: "Equipe qualificada", desc: "Conhecimento técnico em elétrica e refrigeração, com responsabilidade em cada serviço." },
  { icon: CheckCircle2, title: "Materiais de qualidade", desc: "Trabalhamos apenas com insumos que garantem segurança, desempenho e durabilidade." },
  { icon: Thermometer, title: "Compromisso com excelência", desc: "Mais que instalar. Fazer direito — esse é o padrão Araujo Climatização." },
];

const services = [
  {
    icon: Wind,
    name: "Instalação",
    text: "Realizamos sua instalação no padrão Araujo Climatização, utilizando materiais de qualidade e seguindo as recomendações dos fabricantes para garantir segurança, desempenho e durabilidade.",
  },
  {
    icon: Wrench,
    name: "Manutenção",
    text: "Identificamos as causas do mau funcionamento ou perda de desempenho do equipamento e realizamos o reparo adequado com responsabilidade técnica.",
  },
  {
    icon: Sparkles,
    name: "Limpeza e Higienização",
    text: "Executamos limpeza completa da unidade interna e externa, removendo fungos, sujeiras e agentes nocivos, contribuindo para melhor desempenho e qualidade do ar.",
  },
];

const processSteps = [
  { icon: MessageCircle, title: "Contato pelo WhatsApp", desc: "Atendimento direto e ágil para entender sua demanda." },
  { icon: ClipboardList, title: "Entendimento da necessidade", desc: "Avaliamos o ambiente, o equipamento e o melhor caminho técnico." },
  { icon: Thermometer, title: "Orçamento transparente", desc: "Proposta clara, sem surpresas, com escopo definido." },
  { icon: Wrench, title: "Execução profissional", desc: "Serviço executado com padrão técnico e acabamento cuidadoso." },
  { icon: HeadphonesIcon, title: "Suporte e finalização", desc: "Entregamos o ambiente limpo e seguimos disponíveis após o serviço." },
];

const testimonials = [
  {
    name: "Cliente verificado — Google",
    text: "Serviço impecável. Pontualidade, organização e um acabamento muito acima do que estamos acostumados na região. Recomendo demais.",
  },
  {
    name: "Cliente verificado — Google",
    text: "Profissionalismo do início ao fim. Explicaram cada etapa, deixaram tudo limpo e o ar-condicionado funcionando perfeitamente.",
  },
  {
    name: "Cliente verificado — Google",
    text: "Levam o trabalho muito a sério. É raro encontrar esse nível de cuidado técnico por aqui. Empresa de confiança.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Differentials />
        <Services />
        <MarketProblems />
        <Regions />
        <Gallery />
        <Testimonials />
        <Process />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhats />
    </div>
  );
}

/* -------------------- Components -------------------- */

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-2.5 group">
      <div className="relative h-10 w-10 rounded-xl gradient-brand flex items-center justify-center shadow-brand">
        <Snowflake className="h-5 w-5 text-white" strokeWidth={2.5} />
      </div>
      <div className="leading-tight">
        <div className={`font-display font-700 text-[15px] tracking-tight ${light ? "text-white" : "text-brand-ink"}`}>
          Araujo Climatização
        </div>
        <div className={`text-[11px] uppercase tracking-[0.18em] ${light ? "text-white/70" : "text-muted-foreground"}`}>
          Padrão técnico • MG
        </div>
      </div>
    </a>
  );
}

function Header() {
  return (
    <header id="top" className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
          <a href="#servicos" className="hover:text-primary transition-colors">Serviços</a>
          <a href="#diferenciais" className="hover:text-primary transition-colors">Diferenciais</a>
          <a href="#regioes" className="hover:text-primary transition-colors">Regiões</a>
          <a href="#depoimentos" className="hover:text-primary transition-colors">Depoimentos</a>
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-brand transition-transform hover:-translate-y-0.5"
        >
          <MessageCircle className="h-4 w-4" />
          Solicitar orçamento
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground"
        >
          <MessageCircle className="h-3.5 w-3.5" /> Orçamento
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-soft opacity-60" />
      <div className="absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full bg-accent/50 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-card-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Especialistas em climatização • Morada Nova de Minas
          </div>
          <h1 className="mt-6 font-display text-[2.5rem] leading-[1.05] font-bold tracking-tight text-brand-ink sm:text-5xl lg:text-[3.75rem]">
            Instalação de ar-condicionado feita com{" "}
            <span className="text-gradient-brand">padrão técnico</span> de verdade.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Atendimento profissional, acabamento acima da média e responsabilidade técnica
            em cada etapa. Atendemos Morada Nova de Minas e toda a região com o padrão
            <span className="font-semibold text-brand-ink"> Araujo Climatização</span>.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-brand transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              Solicitar orçamento
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-brand-ink transition-colors hover:bg-accent"
            >
              Conhecer serviços
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6">
            <Stat n="8" label="Cidades atendidas" />
            <Stat n="100%" label="Foco em climatização" />
            <Stat n="5★" label="Avaliações Google" />
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-3 rounded-3xl gradient-brand opacity-10 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-brand">
            <img
              src={heroImg}
              alt="Técnico da Araujo Climatização instalando ar-condicionado split com padrão profissional"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-4 shadow-card-soft sm:flex sm:items-center sm:gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-brand-ink">Garantia de execução</div>
              <div className="text-xs text-muted-foreground">Responsabilidade técnica em cada serviço</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-2xl font-bold text-brand-ink">{n}</div>
      <div className="mt-1 text-xs leading-tight text-muted-foreground">{label}</div>
    </div>
  );
}

function TrustBar() {
  const items = [
    "Instalação", "Manutenção", "Higienização", "Atendimento regional", "Padrão técnico",
  ];
  return (
    <div className="border-y border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 py-5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground lg:px-8">
        {items.map((i, idx) => (
          <span key={i} className="flex items-center gap-3">
            {idx > 0 && <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-block" />}
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, desc }: { eyebrow: string; title: React.ReactNode; desc?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
        {eyebrow}
      </div>
      <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">{title}</h2>
      {desc && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{desc}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            Quem somos
          </div>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
            Mais que instalar. <span className="text-gradient-brand">Fazer direito.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            A Araujo Climatização é uma empresa especializada exclusivamente em climatização,
            sediada em Morada Nova de Minas. Nossa base técnica sólida e o foco em qualidade
            permitem entregar instalações, manutenções e higienizações em um padrão acima da
            média regional.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Não fazemos serviço amador. Cada instalação segue as recomendações dos fabricantes,
            normas técnicas e o cuidado de quem entende que um ar-condicionado bem instalado
            dura mais, consome menos e funciona melhor.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Foco exclusivo em climatização",
              "Base técnica em elétrica",
              "Padrão de execução elevado",
              "Atendimento regional próximo",
            ].map((t) => (
              <div key={t} className="flex items-start gap-2.5 text-sm text-brand-ink">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <img src={gallery2} alt="Instalação finalizada de ar-condicionado" loading="lazy" width={1024} height={1024} className="aspect-square w-full rounded-2xl object-cover shadow-card-soft" />
            <img src={gallery1} alt="Detalhe de instalação técnica" loading="lazy" width={1024} height={1024} className="mt-8 aspect-square w-full rounded-2xl object-cover shadow-card-soft" />
          </div>
          <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3 shadow-card-soft">
            <Award className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-brand-ink">Padrão Araujo Climatização</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Differentials() {
  return (
    <section id="diferenciais" className="bg-card border-y border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <SectionHeader
          eyebrow="Diferenciais"
          title={<>Por que a Araujo Climatização é <span className="text-gradient-brand">referência</span> na região</>}
          desc="Trabalhamos com método, técnica e cuidado em cada detalhe — do orçamento à entrega final."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((d) => (
            <div key={d.title} className="group rounded-2xl border border-border bg-background p-7 transition-all hover:-translate-y-1 hover:shadow-card-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:gradient-brand group-hover:text-white">
                <d.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-brand-ink">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
      <SectionHeader
        eyebrow="Serviços"
        title={<>Soluções completas em <span className="text-gradient-brand">climatização</span></>}
        desc="Atuação focada — sem desvios. Apenas serviços que dominamos com profundidade técnica."
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {services.map((s, i) => (
          <div key={s.name} className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-card-soft">
            <div className="absolute right-0 top-0 h-32 w-32 -translate-y-12 translate-x-12 rounded-full bg-accent/60 blur-2xl" />
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl gradient-brand text-white shadow-brand">
                <s.icon className="h-6 w-6" />
              </div>
              <div className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                0{i + 1} — Serviço
              </div>
              <h3 className="mt-2 font-display text-2xl font-bold text-brand-ink">{s.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
              >
                Solicitar este serviço <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MarketProblems() {
  const bad = [
    "Instalações mal feitas e fora de norma",
    "Acabamento ruim e tubulação desalinhada",
    "Falta de cuidado com o ambiente do cliente",
    "Materiais inadequados para reduzir custo",
    "Ausência de suporte após o serviço",
    "Serviço sem padrão e sem responsabilidade",
  ];
  const good = [
    "Instalação dentro das normas e do fabricante",
    "Acabamento limpo, alinhado e organizado",
    "Ambiente do cliente protegido e entregue impecável",
    "Materiais de qualidade que garantem durabilidade",
    "Suporte técnico após a conclusão do serviço",
    "Padrão técnico consistente em cada atendimento",
  ];
  return (
    <section className="bg-card border-y border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <SectionHeader
          eyebrow="Padrão de mercado"
          title={<>O que separa um serviço comum de um <span className="text-gradient-brand">trabalho bem feito</span></>}
          desc="Existe diferença real entre apenas instalar e instalar com padrão técnico. Veja onde a Araujo Climatização atua diferente."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-background p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                <XCircle className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-semibold text-brand-ink">Comum no mercado</h3>
            </div>
            <ul className="mt-6 space-y-3.5">
              {bad.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive/70" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-primary/20 bg-background p-8 shadow-card-soft ring-1 ring-primary/10">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-brand text-white">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-semibold text-brand-ink">Padrão Araujo Climatização</h3>
            </div>
            <ul className="mt-6 space-y-3.5">
              {good.map((g) => (
                <li key={g} className="flex items-start gap-3 text-sm text-brand-ink">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Regions() {
  return (
    <section id="regioes" className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            Cobertura regional
          </div>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
            Atendimento profissional em toda a região
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Sediados em Morada Nova de Minas, atendemos cidades vizinhas com o mesmo padrão técnico
            e o mesmo cuidado em cada serviço. Proximidade que faz diferença na hora do suporte.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-brand transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" />
            Sua cidade está aqui? Fale conosco
          </a>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {regions.map((r) => (
            <div key={r} className="flex items-center gap-2.5 rounded-xl border border-border bg-card px-4 py-3.5 text-sm font-medium text-brand-ink shadow-card-soft">
              <MapPin className="h-4 w-4 flex-shrink-0 text-primary" />
              {r}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const imgs = [
    { src: gallery2, alt: "Instalação de ar-condicionado em quarto" },
    { src: gallery1, alt: "Detalhe técnico de tubulação" },
    { src: gallery4, alt: "Condensadora instalada externamente" },
    { src: gallery3, alt: "Higienização profissional de ar-condicionado" },
  ];
  return (
    <section className="bg-card border-y border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <SectionHeader
          eyebrow="Serviços executados"
          title={<>Padrão visual que <span className="text-gradient-brand">se vê</span></>}
          desc="Cada instalação reflete o nosso compromisso com acabamento, organização e durabilidade."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {imgs.map((im, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-border shadow-card-soft">
              <img
                src={im.src}
                alt={im.alt}
                loading="lazy"
                width={1024}
                height={1024}
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-ink/80 to-transparent p-4">
                <span className="text-xs font-medium text-white/90">{im.alt}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-brand-ink hover:bg-accent transition-colors"
          >
            <Instagram className="h-4 w-4" />
            Ver mais no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="depoimentos" className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
      <SectionHeader
        eyebrow="Depoimentos"
        title={<>Quem contrata, <span className="text-gradient-brand">recomenda</span></>}
        desc="Avaliações reais de clientes que confiaram na Araujo Climatização."
      />
      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <div key={i} className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-card-soft">
            <div className="flex items-center gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-5 flex-1 text-sm leading-relaxed text-brand-ink">"{t.text}"</p>
            <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
              <span className="text-xs font-medium text-muted-foreground">{t.name}</span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">Google</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href={GOOGLE_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-brand"
        >
          <Star className="h-4 w-4 fill-current" />
          Deixar sua avaliação no Google
        </a>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="bg-card border-y border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <SectionHeader
          eyebrow="Como atendemos"
          title={<>Um processo <span className="text-gradient-brand">claro</span>, do contato à entrega</>}
          desc="Você sabe exatamente o que esperar em cada etapa. Sem surpresas, sem improviso."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl border border-border bg-background p-6">
              <div className="absolute -top-3 left-6 inline-flex items-center rounded-full gradient-brand px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-white">
                ETAPA {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-3 flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-brand-ink">{s.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
      <div className="relative overflow-hidden rounded-3xl gradient-brand p-10 shadow-brand sm:p-14 lg:p-20">
        <div className="absolute inset-0 bg-grid-soft opacity-10" />
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
              Pronto para começar
            </div>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Instalação correta, no padrão técnico que sua casa ou empresa merece.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85">
              Fale agora com a equipe da Araujo Climatização pelo WhatsApp e receba um orçamento
              transparente, com responsabilidade técnica do início ao fim.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-base font-bold text-primary shadow-2xl transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5" />
              Solicitar orçamento no WhatsApp
            </a>
            <a
              href="tel:+5531982104934"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <Phone className="h-4 w-4" />
              (31) 98210-4934
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Especialistas em climatização com padrão técnico elevado. Instalação, manutenção
              e higienização de ar-condicionado em Morada Nova de Minas e região.
            </p>
            <p className="mt-5 text-xs text-muted-foreground">
              CNPJ: 59.839.458/0001-81
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-brand-ink">Contato</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+5531982104934" className="hover:text-primary">(31) 98210-4934</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-primary" />
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary">WhatsApp</a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4 text-primary" />
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary">@araujoclimatizacao10</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Morada Nova de Minas — MG
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-brand-ink">Regiões atendidas</h4>
            <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm text-muted-foreground">
              {regions.map((r) => <li key={r}>{r}</li>)}
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Araujo Climatização. Todos os direitos reservados.</span>
          <span className="font-display font-semibold text-brand-ink">Mais que instalar. Fazer direito.</span>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhats() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full gradient-brand text-white shadow-brand transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
