import { useState } from "react";
import logoImage from "./assets/bianca-zuim-logo.png";
import heroImage from "./assets/bianca-zuim-hero.jpg";
import aboutImage from "./assets/bianca-zuim-sobre.jpg";

const WHATSAPP_URL =
  "https://wa.me/5511966333798?text=Ol%C3%A1%2C%20Bianca!%20Gostaria%20de%20saber%20mais%20sobre%20o%20M%C3%A9todo%20BiZ.";

const navItems = [
  { label: "Método BiZ", href: "#metodo" },
  { label: "Sobre mim", href: "#sobre" },
  { label: "Pacientes", href: "#pacientes" },
  { label: "Dúvidas", href: "#duvidas" },
  { label: "Contato", href: "#contato" },
];

const included = [
  ["01", "Consulta inicial", "Um encontro aprofundado para conhecer você, sua rotina e seus objetivos."],
  ["02", "Plano individualizado", "Estratégias alimentares desenhadas para a sua realidade — sem fórmulas prontas."],
  ["03", "Materiais orientativos", "Conteúdos práticos para apoiar as escolhas no dia a dia."],
  ["04", "Plano de metas", "Passos possíveis e progressivos para acompanhar sua evolução."],
  ["05", "Consultas contínuas", "Encontros de acompanhamento para ajustar a rota e celebrar avanços."],
  ["06", "Acompanhamento inicial", "Suporte próximo para você se sentir segura no começo do processo."],
];

const benefits = [
  "Reeducação alimentar",
  "Rotina alimentar saudável",
  "Autonomia nas escolhas",
  "Relação com a comida sem culpa",
  "Mais energia e disposição",
  "Confiança e autoestima",
];

const testimonials = [
  {
    quote:
      "A Bianca é uma excelente profissional! Está me ajudando muito no processo com a compulsão alimentar, sempre com muito cuidado, atenção e acolhimento. Foi a melhor escolha que eu poderia ter feito.",
    name: "Julyanna, 32 anos",
  },
  {
    quote:
      "A Bianca é uma profissional excelente, me senti acolhida e senti que a minha saúde tem valor. A clínica é aconchegante, um lugar gostoso de estar.",
    name: "Alessandra, 29 anos",
  },
  {
    quote:
      "Bianca é uma profissional incrível, ela se certifica que eu me sinta confortável, entenda tudo o que é checado em cada sessão e me acompanha ao longo dos meses, sempre prestando assistência com muito cuidado e dedicação.",
    name: "Clara, 25 anos",
  },
];

const faqs = [
  {
    question: "O atendimento é online ou presencial?",
    answer:
      "As duas modalidades estão disponíveis. O atendimento presencial acontece em São Paulo, e o online permite que você faça seu acompanhamento de onde estiver.",
  },
  {
    question: "Como funciona o Método BiZ?",
    answer:
      "É uma jornada de 90 dias com estratégia individualizada, plano de metas e acompanhamento próximo para transformar hábitos de forma consciente e possível.",
  },
  {
    question: "Qual é a frequência das consultas?",
    answer:
      "A frequência é definida após a consulta inicial, de acordo com seus objetivos e necessidades. Assim, o cuidado acompanha o seu ritmo.",
  },
  {
    question: "O plano alimentar é individualizado?",
    answer:
      "Sim. Seu plano considera rotina, preferências, contexto, objetivos e necessidades específicas. Nada de dietas prontas ou desconectadas da sua vida.",
  },
  {
    question: "Tenho suporte entre as consultas?",
    answer:
      "O Método BiZ inclui acompanhamento inicial e orientações para ajudar você a colocar o plano em prática com mais segurança.",
  },
  {
    question: "A consulta inclui avaliação física?",
    answer:
      "No atendimento presencial, a necessidade de avaliação física é conversada individualmente. No online, utilizamos recursos e informações adequados a essa modalidade.",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4">
      <path d="M4 10h11M11 6l4 4-4 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <span className="check-icon" aria-hidden="true">
      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5">
        <path d="m3.5 8.2 2.7 2.7 6.3-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      </svg>
    </span>
  );
}

function ContactIcon({ type }: { type: "instagram" | "pin" | "care" }) {
  const commonProps = {
    "aria-hidden": true,
    viewBox: "0 0 24 24",
    className: "h-4 w-4",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: "1.8",
  };

  const paths = {
    instagram: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="4.2" />
        <circle cx="12" cy="12" r="3.4" />
        <path d="M16.8 7.2h.01" />
      </>
    ),
    pin: (
      <>
        <path d="M12 21s6-5.5 6-11a6 6 0 0 0-12 0c0 5.5 6 11 6 11Z" />
        <circle cx="12" cy="10" r="2.2" />
      </>
    ),
    care: (
      <>
        <path d="M12 21c-4.5-3.8-7-6.3-7-9.3A4.1 4.1 0 0 1 12 8a4.1 4.1 0 0 1 7 3.7c0 3-2.5 5.5-7 9.3Z" />
        <path d="M12 8V4" />
        <path d="M9.5 5.8h5" />
      </>
    ),
  };

  return <svg {...commonProps}>{paths[type]}</svg>;
}

function AppleIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7">
      <path d="M12 7.2c-1.8-2-5.3-.9-6 2.4-.8 3.8 1.7 9.2 4.7 9.2.9 0 1.5-.5 2.4-.5.8 0 1.5.5 2.4.5 3 0 5.4-5.4 4.7-9.2-.7-3.3-4.2-4.4-6-2.4-.8.9-1.4.9-2.2 0Z" />
      <path d="M12.5 6.5c.1-2.2 1.4-3.4 3.6-3.8" />
      <path d="M9.5 5.2c.9.1 1.8.5 2.5 1.3" />
    </svg>
  );
}

function WhatsappButton({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className={dark ? "button button-light" : "button button-primary"}
    >
      {children}
      <ArrowIcon />
    </a>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen overflow-hidden bg-[#FAF7F2] text-[#2E2B26]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#526333]/10 bg-[#FAF7F2]/92 backdrop-blur-md">
        <div className="page-container flex h-[76px] items-center justify-between lg:h-[88px]">
          <a href="#" aria-label="Bianca Zuim - início" className="flex items-center gap-2.5">
            <img src={logoImage} alt="Bianca Zuim Nutricionista" className="h-[66px] w-auto object-contain lg:h-[76px]" />
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hidden rounded-full border border-[#526333] px-5 py-3 text-xs font-bold tracking-wide text-[#2F3A1F] transition hover:bg-[#526333] hover:text-white lg:block">
            Agendar consulta
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-[#526333]/25 lg:hidden"
          >
            <span className={`h-px w-5 bg-[#2F3A1F] transition ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px w-5 bg-[#2F3A1F] transition ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-[#526333]/10 bg-[#FAF7F2] px-6 py-6 lg:hidden" aria-label="Navegação mobile">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="font-display border-b border-[#526333]/10 py-3 text-xl text-[#2F3A1F]">
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main>
        <section className="relative overflow-hidden pb-16 pt-[108px] sm:pt-[124px] lg:min-h-[790px] lg:pb-20 lg:pt-[138px]">
          <div className="hero-blob" aria-hidden="true" />
          <div className="page-container relative grid items-center gap-11 lg:grid-cols-[1.04fr_.96fr] lg:gap-20">
            <div className="relative z-10 max-w-[680px]">
              <p className="eyebrow mb-5">Nutrição com consciência e acolhimento</p>
              <h1 className="font-display text-[43px] font-medium leading-[1.06] tracking-[-.025em] text-[#2F3A1F] sm:text-6xl lg:text-[72px]">
                Você não precisa ter uma <em className="font-normal text-[#C86F32]">má relação</em> com a comida.
              </h1>
              <p className="mt-6 max-w-[570px] text-[17px] leading-7 text-[#5F5A52] lg:mt-7 lg:text-lg lg:leading-8">
                No Método BiZ, você aprende a emagrecer de forma leve, consciente e com metas alcançáveis.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-10">
                <WhatsappButton>Quero agendar minha consulta</WhatsappButton>
                <a href="#metodo" className="button button-secondary">
                  Conhecer o Método BiZ
                </a>
              </div>
              <div className="mt-7 flex items-center gap-3 text-sm text-[#756F66]">
                <span className="h-px w-8 bg-[#C86F32]" />
                Atendimento presencial em São Paulo e online.
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[540px] lg:mx-0">
              <div className="absolute -left-5 top-14 h-[75%] w-full rounded-[180px_180px_32px_32px] border border-[#C86F32]/30 lg:-left-7" />
              <div className="relative ml-3 overflow-hidden rounded-[170px_170px_28px_28px] bg-[#E8B08D] lg:ml-0">
                <img
                  src={heroImage}
                  alt="Nutricionista em uma cozinha clara e acolhedora"
                  className="h-[500px] w-full object-cover object-[50%_38%] sm:h-[620px] lg:h-[585px]"
                />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#2F3A1F]/35 to-transparent" />
              </div>
              <div className="absolute -bottom-5 left-0 rounded-2xl bg-[#FFFDF8] px-5 py-4 shadow-[0_18px_50px_rgba(47,58,31,.15)] sm:-left-8 sm:px-6">
                <p className="font-display text-2xl text-[#2F3A1F]">Cuidado que cabe</p>
                <p className="mt-0.5 text-xs font-bold uppercase tracking-[.18em] text-[#C86F32]">na sua vida real</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad bg-[#FFFDF8]">
          <div className="page-container grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
            <div>
              <p className="eyebrow mb-5">Talvez você se reconheça</p>
              <h2 className="section-title">Se alimentar bem não deveria ser uma fonte de culpa.</h2>
            </div>
            <div className="lg:pt-7">
              <p className="max-w-[680px] text-lg leading-8 text-[#625D55]">
                Muitas pessoas chegam ao consultório cansadas de recomeçar dietas, perder a constância e sentir que precisam escolher entre resultado e leveza. O caminho pode ser diferente: com estratégia, acolhimento e acompanhamento profissional.
              </p>
              <ul className="mt-9 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {[
                  "Vive recomeçando a dieta",
                  "Tem dificuldade de constância",
                  "Sente culpa ao comer",
                  "Quer uma rotina possível",
                  "Busca orientação individualizada",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[15px] font-bold text-[#46423C]">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="metodo" className="section-pad scroll-mt-20 bg-[#2F3A1F] text-[#FAF7F2]">
          <div className="page-container">
            <div className="grid items-end gap-8 border-b border-white/15 pb-12 lg:grid-cols-[1.25fr_.75fr]">
              <div>
                <p className="eyebrow eyebrow-light mb-5">Uma jornada com começo, meio e continuidade</p>
                <h2 className="font-display max-w-[780px] text-4xl font-medium leading-[1.12] tracking-[-.02em] sm:text-5xl lg:text-[60px]">
                  Método BiZ <span className="text-[#E8B08D]">— 90 dias</span> para transformar sua relação com a comida
                </h2>
              </div>
              <p className="max-w-[460px] text-base leading-7 text-[#E7E0D6]/80 lg:pb-1">
                Um método desenvolvido para pacientes que buscam melhorar a relação com a comida, construir hábitos saudáveis e ter acompanhamento profissional durante o processo.
              </p>
            </div>
            <div className="grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-5">
              {[
                ["90", "dias de jornada"],
                ["Leve", "e consciente"],
                ["Metas", "alcançáveis"],
                ["Plano", "individualizado"],
                ["Mais", "autonomia alimentar"],
              ].map(([highlight, text]) => (
                <div key={text} className="bg-[#2F3A1F] px-5 py-8 lg:py-10">
                  <strong className="font-display block text-3xl font-normal text-[#E8B08D]">{highlight}</strong>
                  <span className="mt-2 block text-sm text-white/70">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-[#FAF7F2]">
          <div className="page-container">
            <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end lg:mb-16">
              <div>
                <p className="eyebrow mb-5">Cuidado em cada etapa</p>
                <h2 className="section-title max-w-[650px]">O que está incluso no Método BiZ</h2>
              </div>
              <p className="max-w-[360px] text-sm leading-6 text-[#756F66]">Estrutura e proximidade para transformar intenção em hábitos que permanecem.</p>
            </div>
            <div className="grid border-t border-[#526333]/20 md:grid-cols-2 lg:grid-cols-3">
              {included.map(([number, title, text]) => (
                <article key={number} className="included-item">
                  <span className="font-display text-sm italic text-[#C86F32]">{number}</span>
                  <h3 className="font-display mt-8 text-[25px] text-[#2F3A1F]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#756F66]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative bg-[#E8B08D]/35 py-20 lg:py-28">
          <div className="page-container grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-28">
            <div>
              <p className="eyebrow mb-5">Além do número na balança</p>
              <h2 className="section-title">O que você pode construir com o Método BiZ</h2>
              <p className="mt-6 max-w-md leading-7 text-[#625D55]">
                Mudanças consistentes começam quando conhecimento, prática e acolhimento caminham juntos.
              </p>
              <div className="mt-8">
                <WhatsappButton>Quero começar minha jornada</WhatsappButton>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div key={benefit} className="group flex min-h-24 items-center gap-4 border-b border-[#526333]/25 px-2 py-5">
                  <span className="font-display text-3xl italic text-[#C86F32]">0{index + 1}</span>
                  <p className="font-display text-xl leading-tight text-[#2F3A1F]">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="section-pad scroll-mt-20 bg-[#FFFDF8]">
          <div className="page-container grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-24">
            <div className="relative mx-auto w-full max-w-[500px]">
              <div className="absolute -right-4 -top-4 h-full w-full rounded-[24px_150px_24px_24px] bg-[#526333] sm:-right-6 sm:-top-6" />
              <img
                src={aboutImage}
                alt="Bianca Zuim, nutricionista"
                className="relative h-[510px] w-full rounded-[24px_150px_24px_24px] object-cover object-[50%_28%] sm:h-[620px]"
              />
              <div className="absolute -bottom-5 -right-2 rounded-2xl bg-[#C86F32] px-6 py-5 text-[#FFFDF8] shadow-xl sm:-right-9">
                <span className="block text-[10px] font-bold uppercase tracking-[.2em] text-white/70">Atendimento</span>
                <strong className="font-display mt-1 block text-xl font-normal">São Paulo + online</strong>
              </div>
            </div>
            <div>
              <p className="eyebrow mb-5">Quem vai caminhar com você</p>
              <h2 className="section-title">Sobre mim</h2>
              <p className="font-display mt-7 text-2xl leading-9 text-[#526333] sm:text-[28px] sm:leading-10">
                “Acredito em uma nutrição que orienta sem julgar e transforma sem desconectar você da vida.”
              </p>
              <p className="mt-6 max-w-[620px] text-base leading-8 text-[#625D55]">
                Sou Bianca Zuim, nutricionista, e meu trabalho é ajudar pessoas a construírem uma relação mais leve, consciente e possível com a alimentação. Por meio do Método BiZ, acompanho cada paciente de forma individualizada, respeitando sua rotina, seus objetivos e seu momento.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-[#526333]/15 pt-7 text-sm font-bold text-[#46423C]">
                <span>CRN385911</span>
                <span>Presencial em São Paulo</span>
                <span>Atendimento online</span>
              </div>
            </div>
          </div>
        </section>

        <section id="pacientes" className="section-pad scroll-mt-20 bg-[#FAF7F2]">
          <div className="page-container">
            <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
              <p className="eyebrow mb-5 justify-center">Histórias reais, mudanças possíveis</p>
              <h2 className="section-title">Meus pacientes dizem</h2>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <figure key={testimonial.name} className={`testimonial ${index === 1 ? "lg:-translate-y-5" : ""}`}>
                  <span className="font-display text-6xl leading-none text-[#E8B08D]">“</span>
                  <blockquote className="font-display mt-4 text-[22px] leading-[1.38] text-[#2F3A1F] sm:text-[24px]">{testimonial.quote}</blockquote>
                  <figcaption className="mt-9 flex items-center gap-3 text-xs font-bold uppercase tracking-[.14em] text-[#756F66]">
                    <span className="h-px w-8 bg-[#C86F32]" />
                    {testimonial.name}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="duvidas" className="section-pad scroll-mt-20 bg-[#FFFDF8]">
          <div className="page-container grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="eyebrow mb-5">Antes de começar</p>
              <h2 className="section-title">Dúvidas frequentes</h2>
              <p className="mt-6 max-w-sm leading-7 text-[#756F66]">
                Informação também é uma forma de cuidado. Se sua dúvida não estiver aqui, fale comigo.
              </p>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#526333] underline decoration-[#C86F32] decoration-2 underline-offset-8">
                Enviar uma pergunta <ArrowIcon />
              </a>
            </div>
            <div className="border-t border-[#526333]/20">
              {faqs.map((faq, index) => {
                const open = openFaq === index;
                return (
                  <div key={faq.question} className="border-b border-[#526333]/20">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? -1 : index)}
                      aria-expanded={open}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left sm:py-7"
                    >
                      <span className="font-display text-xl text-[#2F3A1F] sm:text-2xl">{faq.question}</span>
                      <span className="relative h-8 w-8 shrink-0 rounded-full border border-[#526333]/30">
                        <span className="absolute left-1/2 top-1/2 h-px w-3 -translate-x-1/2 -translate-y-1/2 bg-[#526333]" />
                        <span className={`absolute left-1/2 top-1/2 h-3 w-px -translate-x-1/2 -translate-y-1/2 bg-[#526333] transition ${open ? "rotate-90 opacity-0" : ""}`} />
                      </span>
                    </button>
                    {open && <p className="max-w-[700px] pb-7 pr-10 text-[15px] leading-7 text-[#756F66]">{faq.answer}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contato" className="bg-[#C86F32] py-20 text-[#FFFDF8] lg:py-28">
          <div className="page-container">
            <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_.75fr]">
              <div>
                <p className="mb-5 text-[11px] font-bold uppercase tracking-[.22em] text-white/70">Seu próximo passo pode ser mais leve</p>
                <h2 className="font-display max-w-[760px] text-5xl leading-[1.06] tracking-[-.02em] sm:text-6xl lg:text-[70px]">
                  Vamos conversar sobre o seu objetivo?
                </h2>
                <p className="mt-6 text-lg text-white/80">Agende sua consulta ou tire suas dúvidas pelo WhatsApp.</p>
              </div>
              <div className="lg:justify-self-end">
                <WhatsappButton dark>Chamar no WhatsApp</WhatsappButton>
                <div className="mt-7 space-y-3 text-sm text-white/80">
                  <a href="https://www.instagram.com/nutri.biancazuim/" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white">
                    <ContactIcon type="instagram" />
                    <span>@nutri.biancazuim</span>
                  </a>
                  <p className="flex items-center gap-3">
                    <ContactIcon type="pin" />
                    <span>Av. Padre Arlindo Vieira, 835 - sala 1 · Vila das Mercês · São Paulo, SP</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <ContactIcon type="care" />
                    <span>Atendimento presencial e online</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#2F3A1F] py-8 text-[#FAF7F2]">
        <div className="page-container flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <a href="#" className="flex items-center gap-2.5">
            <img src={logoImage} alt="Bianca Zuim Nutricionista" className="h-16 w-auto rounded-full object-contain" />
          </a>
          <p className="flex items-center gap-2 text-xs text-white/50">
            <AppleIcon />
            <span>Nutrição leve, consciente e possível. · CRN385911</span>
          </p>
          <a href="#" className="text-xs font-bold uppercase tracking-[.14em] text-white/70 hover:text-white">Voltar ao topo</a>
        </div>
      </footer>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com Bianca pelo WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#526333] text-white shadow-[0_8px_28px_rgba(47,58,31,.3)] transition hover:-translate-y-1 lg:hidden"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7">
          <path d="M20 11.6a8 8 0 0 1-11.8 7L4 20l1.4-4.1A8 8 0 1 1 20 11.6Z" />
          <path d="M9 8.5c.3 3 2 4.7 5.5 5.6M14.5 14.1l1-1.3M9 8.5l-1.2 1" />
        </svg>
      </a>
    </div>
  );
}
