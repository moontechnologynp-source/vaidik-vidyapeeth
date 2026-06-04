import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";

export default function SiteShell({ children }) {
  return (
    <main className="school-site">
      <SiteHeader />
      {children}
      <SiteFooter />
    </main>
  );
}
