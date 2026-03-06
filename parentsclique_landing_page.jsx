export default function ParentsCliqueLandingPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F3] text-[#2E2E2E]">
      <header className="sticky top-0 z-10 border-b border-[#E6E2D9] bg-[#FAF8F3]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#7A9B8C] text-white shadow-sm">
              <div className="relative h-6 w-6">
                <span className="absolute left-0 top-0 h-3 w-3 rounded-full bg-white/95" />
                <span className="absolute right-0 top-0 h-3 w-3 rounded-full bg-white/95" />
                <span className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-white/95" />
              </div>
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight">ParentsClique</p>
              <p className="text-xs text-[#6F6B63]">A calm place for parents to help each other</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#how-it-works" className="transition hover:opacity-70">How it works</a>
            <a href="#trust" className="transition hover:opacity-70">Trust & safety</a>
            <a href="#join" className="transition hover:opacity-70">Join</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <div className="mb-4 inline-flex items-center rounded-full border border-[#E6E2D9] bg-white px-4 py-2 text-sm text-[#6F6B63] shadow-sm">
              Built for trusted local parent communities
            </div>
            <h1 className="max-w-xl text-4xl font-semibold leading-tight md:text-6xl">
              A calmer, safer way for parents to support each other.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#5F5A52]">
              ParentsClique helps local parents share resources, ask questions, post announcements, and exchange items in a trusted neighborhood-based community.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#join"
                className="inline-flex items-center justify-center rounded-2xl bg-[#7A9B8C] px-6 py-3 text-base font-medium text-white shadow-sm transition hover:opacity-90"
              >
                Join the waitlist
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-2xl border border-[#C9A24D] px-6 py-3 text-base font-medium text-[#2E2E2E] transition hover:bg-[#FFF9EC]"
              >
                See how it works
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#6F6B63]">
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">Neighborhood-based</span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">Parent-only access</span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">No gossip culture</span>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-[#E6E2D9] bg-white p-6 shadow-[0_20px_60px_rgba(46,46,46,0.08)]">
              <div className="rounded-[1.5rem] bg-[#F4F1EB] p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#6F6B63]">Your neighborhood circle</p>
                    <h2 className="text-xl font-semibold">Maple Street Parents</h2>
                  </div>
                  <div className="rounded-full bg-[#7A9B8C] px-3 py-1 text-xs font-medium text-white">
                    Verified
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <p className="text-sm font-medium">Need toddler rain boots size 7</p>
                    <p className="mt-1 text-sm text-[#6F6B63]">Anyone nearby have a pair to trade or sell?</p>
                  </div>

                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <p className="text-sm font-medium">Saturday park meetup</p>
                    <p className="mt-1 text-sm text-[#6F6B63]">Community playdate at 10 AM for local families.</p>
                  </div>

                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <p className="text-sm font-medium">Free crib in excellent condition</p>
                    <p className="mt-1 text-sm text-[#6F6B63]">Pickup only. Shared by a verified parent nearby.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-4 rounded-2xl border border-[#E6E2D9] bg-white px-4 py-3 shadow-md">
              <p className="text-xs text-[#6F6B63]">Community standard</p>
              <p className="text-sm font-medium">Kind, helpful, no harmful gossip</p>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="border-y border-[#E6E2D9] bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7A9B8C]">How it works</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Simple steps, built on trust.</h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl bg-[#FAF8F3] p-6 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#7A9B8C] text-white">1</div>
                <h3 className="text-xl font-semibold">Request access</h3>
                <p className="mt-3 leading-7 text-[#5F5A52]">
                  Join the waitlist and share your neighborhood and basic parent profile.
                </p>
              </div>

              <div className="rounded-3xl bg-[#FAF8F3] p-6 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#7A9B8C] text-white">2</div>
                <h3 className="text-xl font-semibold">Get verified</h3>
                <p className="mt-3 leading-7 text-[#5F5A52]">
                  Members are reviewed and recommended through a trusted local community process.
                </p>
              </div>

              <div className="rounded-3xl bg-[#FAF8F3] p-6 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#7A9B8C] text-white">3</div>
                <h3 className="text-xl font-semibold">Support each other</h3>
                <p className="mt-3 leading-7 text-[#5F5A52]">
                  Exchange items, ask questions, share updates, and build a calmer parent network.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="trust" className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[2rem] bg-[#7A9B8C] p-8 text-white shadow-sm">
              <p className="text-sm uppercase tracking-[0.2em] text-white/75">Trust & safety</p>
              <h2 className="mt-3 text-3xl font-semibold">A parent space designed to stay calm.</h2>
              <p className="mt-4 max-w-lg leading-8 text-white/90">
                ParentsClique starts small on purpose. We focus on verified adults, neighborhood connections, and respectful communication so families feel safe participating.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-[#E6E2D9] bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Parent-only community</h3>
                <p className="mt-2 leading-7 text-[#5F5A52]">Built for trusted grown-ups supporting children and families.</p>
              </div>
              <div className="rounded-3xl border border-[#E6E2D9] bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Neighborhood-first</h3>
                <p className="mt-2 leading-7 text-[#5F5A52]">Start local, learn carefully, and grow with real community trust.</p>
              </div>
              <div className="rounded-3xl border border-[#E6E2D9] bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">No harmful gossip</h3>
                <p className="mt-2 leading-7 text-[#5F5A52]">Clear standards help keep the space kind, practical, and helpful.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="join" className="bg-[#2E2E2E]">
          <div className="mx-auto max-w-4xl px-6 py-16 text-center text-white">
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">Early access</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Join ParentsClique early.</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/75">
              Be part of the first trusted neighborhoods shaping a calmer way for parents to connect.
            </p>

            <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-12 flex-1 rounded-2xl border border-white/15 bg-white px-4 text-[#2E2E2E] outline-none ring-0 placeholder:text-[#7C7C7C]"
              />
              <button
                type="button"
                className="h-12 rounded-2xl bg-[#C9A24D] px-6 font-medium text-[#2E2E2E] transition hover:opacity-90"
              >
                Join waitlist
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
