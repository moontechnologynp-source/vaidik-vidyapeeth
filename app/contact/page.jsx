import SectionHeading from "../../components/section-heading";
import SiteShell from "../../components/site-shell";
import { contactInfo } from "../../lib/site-content";

const visitReasons = [
  {
    title: "Campus Introduction",
    text: "Meet the school, understand the atmosphere, and explore the learning environment in person."
  },
  {
    title: "Academic Conversation",
    text: "Discuss grade placement, classroom expectations, and the school's learning approach."
  },
  {
    title: "Admission Guidance",
    text: "Get clarity on process, required documents, and next steps for enrollment."
  }
];

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="page-hero page-hero-cool">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-20">
          <div>
            <p className="section-eyebrow">Contact</p>
            <h1 className="page-title">Visit the school and begin the conversation.</h1>
            <p className="page-copy">
              Families can connect with the school for admissions, academic questions, campus visits, and class
              placement guidance.
            </p>
          </div>

          <div className="page-panel">
            <p className="feature-label">Visit The School</p>
            <h3 className="feature-title">Kathmandu-32, Koteshwor</h3>
            <p className="feature-copy">
              A visit is the best way to understand the atmosphere, daily routine, and learning culture.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-18 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <SectionHeading
            eyebrow="Contact Details"
            title="Reach the school directly for visits and inquiries."
            text="Use the details below to contact the school office or plan a campus visit."
          />

          <div className="grid gap-5 sm:grid-cols-2">
            {contactInfo.map((item) => (
              <article key={item.label} className="feature-card">
                <p className="feature-label">{item.label}</p>
                <h3 className="feature-title">{item.value}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-soft">
        <div className="mx-auto max-w-7xl px-6 py-18 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Why Visit"
            title="A campus visit gives families the clearest picture."
            text="Meet the team, see the environment, and discuss the right next step for your child."
            align="center"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {visitReasons.map((item) => (
              <article key={item.title} className="feature-card">
                <p className="feature-label">Purpose</p>
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
