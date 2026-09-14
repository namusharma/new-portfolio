import { socialImgs } from '../constants'

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-8 right-10 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.3em] text-cyan-200">
            Contact Information
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Get In Touch With Me
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_1.45fr]">
          <aside className="premium-panel p-6 md:p-8">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.28em] text-white/50">Let’s connect</p>
              <h3 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
                Let’s build something memorable.
              </h3>
            </div>

            <div className="space-y-5">
              <a
                href="mailto:hello@namyasharma.dev"
                className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/5"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-white/45">Email</p>
                  <p className="mt-2 text-base font-medium text-white">hello@namyasharma.dev</p>
                </div>
                <span className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-cyan-200 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
                <p className="text-xs uppercase tracking-[0.22em] text-white/45">Availability</p>
                <p className="mt-2 text-base font-medium text-white">Open for freelance, product design, and front-end engineering work.</p>
              </div>

              <div className="pt-2">
                <p className="mb-4 text-xs uppercase tracking-[0.22em] text-white/45">Socials</p>
                <div className="flex flex-wrap gap-3">
                  {socialImgs.map(({ name, url, imgPath }) => (
                    <a
                      key={name}
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={name}
                      className="group inline-flex size-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10"
                    >
                      <img src={imgPath} alt={name} className="h-4 w-4 object-contain" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <form className="premium-panel p-6 md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-white/80">
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="contact-field"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm text-white/80">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="contact-field"
                />
              </label>
            </div>

            <label className="mt-5 flex flex-col gap-2 text-sm text-white/80">
              <span>Message</span>
              <textarea
                name="message"
                rows="6"
                placeholder="Tell me about your project or idea..."
                className="contact-field resize-none"
              />
            </label>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-white/60">Average response time: within 24 hours</p>

              <button
                type="submit"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-cyan-400/50 bg-gradient-to-r from-cyan-300 via-sky-400 to-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_16px_30px_rgba(56,189,248,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_35px_rgba(56,189,248,0.45)]"
              >
                <span className="absolute inset-0 translate-x-full bg-white/30 transition-transform duration-500 group-hover:translate-x-0" />
                <span className="relative">Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
