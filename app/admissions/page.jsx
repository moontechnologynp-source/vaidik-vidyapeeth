import Link from "next/link";
import SectionHeading from "../../components/section-heading";
import SiteShell from "../../components/site-shell";
import { admissionDocuments, admissionFaq, admissionSteps } from "../../lib/site-content";

export default function AdmissionsPage() {
  return (
    <SiteShell>
      <section className="page-hero page-hero-warm">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-20">
          <div>
            <p className="section-eyebrow">Admissions</p>
            <h1 className="page-title">A clear admissions path for new families.</h1>
            <p className="page-copy">
              Families can begin with a conversation, visit the campus, understand class expectations, and receive
              guidance for a smooth transition.
            </p>
          </div>

          <div className="page-panel">
            <p className="feature-label">Parent Journey</p>
            <h3 className="feature-title">Clear, warm, and easy to follow</h3>
            <p className="feature-copy">
              The process helps parents understand the school before making an enrollment decision.
            </p>
            <Link href="/contact" className="hero-primary mt-6 inline-flex">Contact The School</Link>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="mx-auto max-w-7xl px-6 py-18 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Admission Steps"
            title="A simple process from inquiry to enrollment."
            text="Every step gives families the information they need to feel prepared and confident."
            align="center"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {admissionSteps.map((step, index) => (
              <article key={step} className="step-card">
                <div className="step-number">{index + 1}</div>
                <h3 className="step-title">Step {index + 1}</h3>
                <p className="step-copy">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-soft">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-18 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
          <SectionHeading
            eyebrow="Required Items"
            title="Documents and preparation, presented in a simpler way."
            text="Admissions information becomes more approachable when it is grouped cleanly."
          />

          <div className="grid gap-4">
            {admissionDocuments.map((item) => (
              <article key={item} className="preview-row-card">
                <div className="preview-row-dot" />
                <p className="preview-row-copy">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="mx-auto max-w-7xl px-6 py-18 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Frequently Asked"
            title="Short answers for the questions families usually ask first."
            text="These answers help families understand the first conversation, student interaction, and placement guidance."
            align="center"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {admissionFaq.map((item) => (
              <article key={item.title} className="feature-card">
                <p className="feature-label">FAQ</p>
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
