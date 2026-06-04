import Link from "next/link";
import SectionHeading from "../../components/section-heading";
import SiteShell from "../../components/site-shell";
import { facilities } from "../../lib/site-content";

const supportAreas = [
  {
    title: "Safety And Supervision",
    text: "A strong school environment depends on attentive routines, guided movement, and consistent support."
  },
  {
    title: "Student Expression",
    text: "Spaces for arts, speaking, and performance make the campus feel alive rather than purely instructional."
  },
  {
    title: "Balanced Development",
    text: "Facilities should support academics, movement, creativity, and confidence together."
  }
];

export default function FacilitiesPage() {
  return (
    <SiteShell>
      <section className="page-hero page-hero-dark">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-20">
          <div>
            <p className="section-eyebrow text-white/70">Facilities</p>
            <h1 className="page-title text-white">Campus spaces for learning, reading, activity, and expression.</h1>
            <p className="page-copy text-white/80">
              The school environment supports focused classroom learning, hands-on work, movement, creativity, and
              safe student routines.
            </p>
          </div>

          <div className="page-panel page-panel-dark">
            <p className="feature-label text-white/75">Campus View</p>
            <h3 className="feature-title text-white">Learning spaces that support real school life</h3>
            <p className="feature-copy text-white/75">
              A good campus is not only about rooms. It is about how students use those spaces every day.
            </p>
            <Link href="/contact" className="hero-secondary mt-6 inline-flex">Schedule A Visit</Link>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="mx-auto max-w-7xl px-6 py-18 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Campus Features"
            title="Facilities that support a balanced school day."
            text="Each space contributes to academic focus, expression, discipline, confidence, and care."
            align="center"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {facilities.map((facility) => (
              <article key={facility.title} className="feature-card">
                <p className="feature-label">Facility</p>
                <h3 className="feature-title">{facility.title}</h3>
                <p className="feature-copy">{facility.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-soft">
        <div className="mx-auto max-w-7xl px-6 py-18 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Support Environment"
            title="The campus should communicate safety, care, and student energy."
            text="The school environment is planned to support learning, supervision, creativity, and balanced development."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {supportAreas.map((item) => (
              <article key={item.title} className="feature-card">
                <p className="feature-label">Environment</p>
                <h3 className="feature-title">{item.title}</h3>
                <p className="feature-copy">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
