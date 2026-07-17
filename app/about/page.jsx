"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Fraunces, Nunito_Sans } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Calculator,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  HeartHandshake,
  ImageIcon,
  MapPin,
  School,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

import SiteShell from "../../components/site-shell";
import { quickFacts, schoolValues } from "../../lib/site-content";

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5050/api/v1";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:5050";

const getImageUrl = (src) => {
  if (!src) return "";

  if (src.startsWith("http")) return src;

  if (src.startsWith("/images")) return src;

  if (src.startsWith("/uploads")) return `${SITE_URL}${src}`;

  return src;
};

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const iconMap = {
  School,
  HeartHandshake,
  BookOpen,
  MapPin,
  Sparkles,
  Users,
  Star,
  CheckCircle2,
  Calculator,
  ImageIcon,
};

const getIcon = (iconName, fallback = BookOpen) => {
  if (!iconName) return fallback;
  return iconMap[iconName] || fallback;
};

const heroSlides = [
  {
    src: "/images/im-8.jpg",
    label: "Learning",
    title: "A peaceful place to learn",
    text: "Bright classrooms, guided routines, and a caring school culture.",
  },
  {
    src: "/images/im-1.jpg",
    label: "Values",
    title: "Discipline with warmth",
    text: "Students grow through respect, responsibility, and daily guidance.",
  },
  {
    src: "/images/im-9.jpg",
    label: "Growth",
    title: "Confidence beyond books",
    text: "Activities and academics work together to shape capable learners.",
  },
];

const albumImages = [
  {
    src: "/images/im-1.jpg",
    title: "Morning Assembly",
    category: "Events",
  },
  {
    src: "/images/im-2.jpg",
    title: "Classroom Learning",
    category: "Academics",
  },
  {
    src: "/images/im-3.jpg",
    title: "Creative Activities",
    category: "Activities",
  },
  {
    src: "/images/im-10.jpg",
    title: "School Program",
    category: "Events",
  },
  {
    src: "/images/im-8.jpg",
    title: "Student Activities",
    category: "Activities",
  },
  {
    src: "/images/im-5.jpg",
    title: "Focused Study",
    category: "Academics",
  },
];

const colorStripItems = [
  {
    iconName: "School",
    title: "Academic Care",
    color: "bg-[#0f766e]",
  },
  {
    iconName: "HeartHandshake",
    title: "Values First",
    color: "bg-[#be123c]",
  },
  {
    iconName: "BookOpen",
    title: "Guided Routine",
    color: "bg-[#0e7490]",
  },
  {
    iconName: "MapPin",
    title: "Koteshwor Based",
    color: "bg-[#2563eb]",
  },
];

const identityTabs = [
  {
    key: "mission",
    label: "Mission",
    iconName: "HeartHandshake",
    color: "from-[#0f766e] to-[#0e7490]",
    title: "To nurture capable, confident, and respectful learners.",
    text: "We focus on academic progress while helping students develop responsibility, discipline, communication, and good character.",
  },
  {
    key: "vision",
    label: "Vision",
    iconName: "Sparkles",
    color: "from-[#0e7490] to-[#2563eb]",
    title: "To remain rooted while preparing students for change.",
    text: "Our aim is to blend values-based learning with the skills, curiosity, and mindset needed in a modern world.",
  },
  {
    key: "promise",
    label: "Promise",
    iconName: "Users",
    color: "from-[#be123c] to-[#db2777]",
    title: "Care, clarity, and visible progress.",
    text: "Parents should feel that communication is clear, expectations are consistent, and student growth is easy to observe.",
  },
];

const faqs = [
  {
    q: "What makes  different?",
    a: "The school balances academic expectations with care, discipline, character-building, and parent communication.",
  },
  {
    q: "Can parents visit the school before admission?",
    a: "Yes, parents can book a campus visit to understand the classrooms, routines, facilities, and school environment.",
  },
  {
    q: "Does the school focus only on academics?",
    a: "No. Along with academics, the school also focuses on values, confidence, communication, responsibility, and co-curricular growth.",
  },
];

const fitQuestions = [
  "I want a school with strong values and discipline.",
  "I want my child to grow in confidence and communication.",
  "I prefer a school with caring teachers and clear routines.",
];

const parseSectionList = (aboutData, sectionId, fallback = []) => {
  const items = aboutData?.[sectionId];

  if (!items || items.length === 0) return fallback;

  return items.map((item) => item.content || {});
};

const parseSingleSection = (aboutData, sectionId, fallback = {}) => {
  return aboutData?.[sectionId]?.[0]?.content || fallback;
};

export default function AboutPage() {
  const [aboutData, setAboutData] = useState({});
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("mission");
  const [albumFilter, setAlbumFilter] = useState("All");
  const [openFaq, setOpenFaq] = useState(0);

  const [grade, setGrade] = useState("Primary");
  const [transport, setTransport] = useState(false);
  const [hostel, setHostel] = useState(false);

  const [fitAnswers, setFitAnswers] = useState(fitQuestions.map(() => false));

  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const imageY = useTransform(scrollYProgress, [0, 0.65], [0, -32]);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const res = await fetch(`${API_BASE}/about`, {
          cache: "no-store",
        });

        const data = await res.json();

        if (data.success) {
          setAboutData(data.data || {});
        }
      } catch (error) {
        console.log("ABOUT FETCH ERROR:", error);
      }
    };

    fetchAboutData();
  }, []);

  const aboutHero = useMemo(() => {
    return parseSingleSection(aboutData, "aboutHero", {
      Kicker: "Gothatar, Kathmandu",
      Title: "A values-led school with a warmer way of learning.",
      Description:
        "VAIDIK VIDYAPEETH blends care, academic clarity, discipline, creativity, and character-building so every child can grow with confidence.",
      "Primary Button Text": "Explore Academics",
      "Primary Button Link": "/academics",
      "Secondary Button Text": "Book Campus Visit",
      "Secondary Button Link": "/contact",
    });
  }, [aboutData]);

  const dynamicHeroSlides = useMemo(() => {
    return parseSectionList(aboutData, "aboutHeroCarousel", heroSlides).map(
      (slide) => ({
        src: getImageUrl(
          slide["Image URL"] || slide.src || "/images/school-1.jpg"
        ),
        label: slide["Label"] || slide.label || "Learning",
        title: slide["Title"] || slide.title || "A peaceful place to learn",
        text:
          slide["Description"] ||
          slide.text ||
          "Bright classrooms, guided routines, and a caring school culture.",
      })
    );
  }, [aboutData]);

  const dynamicQuickFacts = useMemo(() => {
    return parseSectionList(aboutData, "aboutQuickFacts", quickFacts).map(
      (fact) => ({
        value: fact["Value"] || fact.value || "",
        label: fact["Label"] || fact.label || "",
      })
    );
  }, [aboutData]);

  const dynamicColorStrip = useMemo(() => {
    return parseSectionList(aboutData, "aboutColorStrip", colorStripItems).map(
      (item) => ({
        iconName: item["Icon Name"] || item.iconName || "School",
        title: item["Title"] || item.title || "Feature",
        color: item["Color Class"] || item.color || "bg-[#0f766e]",
      })
    );
  }, [aboutData]);

  const dynamicIdentityTabs = useMemo(() => {
    return parseSectionList(aboutData, "aboutIdentityTabs", identityTabs).map(
      (tab) => ({
        key: tab["Key"] || tab.key || "mission",
        label: tab["Label"] || tab.label || "Mission",
        iconName: tab["Icon Name"] || tab.iconName || "HeartHandshake",
        color:
          tab["Gradient Class"] ||
          tab.color ||
          "from-[#0f766e] to-[#0e7490]",
        title:
          tab["Title"] ||
          tab.title ||
          "To nurture capable, confident, and respectful learners.",
        text:
          tab["Description"] ||
          tab.text ||
          "We focus on academic progress while helping students develop responsibility, discipline, communication, and good character.",
      })
    );
  }, [aboutData]);

  const feeData = useMemo(() => {
    return parseSingleSection(aboutData, "aboutFeeCalculator", {
      "Pre-Primary Base Fee": "4500",
      "Primary Base Fee": "6000",
      "Secondary Base Fee": "7500",
      "Transport Fee": "1800",
      "Hostel Fee": "6500",
      "Note Text": "Demo estimate only. Replace numbers with official school fees.",
    });
  }, [aboutData]);

  const dynamicFitQuestions = useMemo(() => {
    return parseSectionList(
      aboutData,
      "aboutFitChecker",
      fitQuestions.map((question) => ({
        Question: question,
        "Result Message": "",
      }))
    ).map((item) => ({
      question: item["Question"] || "",
      resultMessage: item["Result Message"] || "",
    }));
  }, [aboutData]);

  const dynamicCoreValues = useMemo(() => {
    return parseSectionList(aboutData, "aboutCoreValues", schoolValues).map(
      (item, index) => ({
        title: item["Title"] || item.title || "",
        text: item["Description"] || item.text || "",
        iconName: item["Icon Name"] || "BookOpen",
        color:
          item["Color Class"] ||
          (index === 0
            ? "bg-[#0f766e]"
            : index === 1
              ? "bg-[#be123c]"
              : "bg-[#0e7490]"),
      })
    );
  }, [aboutData]);

  const dynamicAlbumImages = useMemo(() => {
    return parseSectionList(aboutData, "aboutAlbum", albumImages).map(
      (image) => ({
        src: getImageUrl(
          image["Image URL"] || image.src || "/images/album-1.jpg"
        ),
        title: image["Title"] || image.title || "School Image",
        category: image["Category"] || image.category || "Events",
        alt: image["Alt Text"] || image.title || "School image",
      })
    );
  }, [aboutData]);

  const dynamicFaqs = useMemo(() => {
    return parseSectionList(aboutData, "aboutFaq", faqs).map((faq) => ({
      q: faq["Question"] || faq.q || "",
      a: faq["Answer"] || faq.a || "",
    }));
  }, [aboutData]);

  const ctaData = useMemo(() => {
    return parseSingleSection(aboutData, "aboutCta", {
      Eyebrow: "Visit Our School",
      Title: "Experience the campus, classrooms, and culture in person.",
      Description:
        "Book a visit and see how values, academics, and care come together at VAIDIK VIDYAPEETH.",
      "Button Text": "Book Campus Visit",
      "Button Link": "/contact",
    });
  }, [aboutData]);

  useEffect(() => {
    if (!dynamicHeroSlides.length) return;

    setActiveSlide((prev) => (prev >= dynamicHeroSlides.length ? 0 : prev));
  }, [dynamicHeroSlides.length]);

  useEffect(() => {
    if (!dynamicIdentityTabs.length) return;

    const exists = dynamicIdentityTabs.some((tab) => tab.key === activeTab);

    if (!exists) {
      setActiveTab(dynamicIdentityTabs[0].key);
    }
  }, [dynamicIdentityTabs, activeTab]);

  useEffect(() => {
    setFitAnswers((prev) => {
      if (prev.length === dynamicFitQuestions.length) return prev;
      return dynamicFitQuestions.map(() => false);
    });
  }, [dynamicFitQuestions.length]);

  const activeTabData =
    dynamicIdentityTabs.find((tab) => tab.key === activeTab) ||
    dynamicIdentityTabs[0];

  const albumCategories = useMemo(() => {
    const categories = dynamicAlbumImages.map((image) => image.category);
    return ["All", ...Array.from(new Set(categories))];
  }, [dynamicAlbumImages]);

  const filteredAlbum = useMemo(() => {
    if (albumFilter === "All") return dynamicAlbumImages;

    return dynamicAlbumImages.filter(
      (image) => image.category === albumFilter
    );
  }, [albumFilter, dynamicAlbumImages]);

  const estimatedFee = useMemo(() => {
    const prePrimaryFee = Number(feeData["Pre-Primary Base Fee"]) || 4500;
    const primaryFee = Number(feeData["Primary Base Fee"]) || 6000;
    const secondaryFee = Number(feeData["Secondary Base Fee"]) || 7500;
    const transportFee = Number(feeData["Transport Fee"]) || 1800;
    const hostelFee = Number(feeData["Hostel Fee"]) || 6500;

    const base =
      grade === "Pre-Primary"
        ? prePrimaryFee
        : grade === "Primary"
          ? primaryFee
          : secondaryFee;

    return base + (transport ? transportFee : 0) + (hostel ? hostelFee : 0);
  }, [grade, transport, hostel, feeData]);

  const fitScore = fitAnswers.filter(Boolean).length;

  const fitResultMessage = useMemo(() => {
    const selectedMessages = dynamicFitQuestions
      .filter((_, index) => fitAnswers[index])
      .map((item) => item.resultMessage)
      .filter(Boolean);

    if (selectedMessages.length > 0) {
      return selectedMessages[selectedMessages.length - 1];
    }

    if (
      fitScore === dynamicFitQuestions.length &&
      dynamicFitQuestions.length > 0
    ) {
      return "Great match for your priorities.";
    }

    if (fitScore >= 2) {
      return "Good match. A visit may help confirm.";
    }

    return "Select what matters most to you.";
  }, [dynamicFitQuestions, fitAnswers, fitScore]);

  const nextSlide = () => {
    if (!dynamicHeroSlides.length) return;

    setActiveSlide((prev) => (prev + 1) % dynamicHeroSlides.length);
  };

  const prevSlide = () => {
    if (!dynamicHeroSlides.length) return;

    setActiveSlide((prev) =>
      prev === 0 ? dynamicHeroSlides.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (!dynamicHeroSlides.length) return;

    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % dynamicHeroSlides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [dynamicHeroSlides.length]);

  return (
    <SiteShell>
      <main
        className={`${nunito.variable} ${fraunces.variable} overflow-hidden bg-[radial-gradient(circle_at_top_left,#ecfdf5_0%,#f8fbfb_30%,#fff7ed_65%,#fdf2f8_100%)] font-[var(--font-nunito)] text-slate-900`}
      >
        {/* HERO */}
        <section className="relative overflow-hidden">
          <motion.div
            style={{ y: bgY }}
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#0f766e]/15 blur-3xl" />
            <div className="absolute right-[-80px] top-20 h-80 w-80 rounded-full bg-[#be123c]/12 blur-3xl" />
            <div className="absolute bottom-0 left-1/2 h-72 w-72 rounded-full bg-[#0e7490]/10 blur-3xl" />
          </motion.div>

          <div className="relative mx-auto grid max-w-6xl gap-8 px-6 py-14 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:px-10 lg:py-16">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="flex flex-col justify-center"
            >
              <motion.div
                variants={fadeUp}
                className="mb-4 flex w-fit items-center gap-2 rounded-full border border-[#0f766e]/15 bg-white/80 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#0f766e] shadow-sm backdrop-blur"
              >
                <Star className="h-3.5 w-3.5 fill-[#be123c] text-[#be123c]" />
                {aboutHero.Kicker || "Gothatar, Kathmandu"}
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="max-w-2xl font-[var(--font-fraunces)] text-[38px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#083344] sm:text-5xl lg:text-[56px]"
              >
                {aboutHero.Title ||
                  "A values-led school with a warmer way of learning."}
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600"
              >
                {aboutHero.Description ||
                  "VAIDIK VIDYAPEETH blends care, academic clarity, discipline, creativity, and character-building so every child can grow with confidence."}
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-7 flex flex-wrap gap-3"
              >
                <Link
                  href={aboutHero["Primary Button Link"] || "/academics"}
                  className="group inline-flex items-center rounded-full bg-[#be123c] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#be123c]/20 transition hover:-translate-y-0.5 hover:bg-[#9f1239]"
                >
                  {aboutHero["Primary Button Text"] || "Explore Academics"}
                  <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                </Link>

                <Link
                  href={aboutHero["Secondary Button Link"] || "/contact"}
                  className="inline-flex items-center rounded-full border border-[#0f766e]/20 bg-white px-5 py-2.5 text-sm font-bold text-[#0f766e] transition hover:-translate-y-0.5 hover:bg-[#ecfdf5]"
                >
                  {aboutHero["Secondary Button Text"] || "Book Campus Visit"}
                </Link>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-7 grid max-w-md grid-cols-3 gap-2"
              >
                {dynamicQuickFacts.slice(0, 3).map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-2xl border border-white/80 bg-white/75 p-3 shadow-sm backdrop-blur"
                  >
                    <p className="font-[var(--font-fraunces)] text-xl font-semibold text-[#083344]">
                      {fact.value}
                    </p>

                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                      {fact.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* HERO CAROUSEL */}
            <motion.div
              style={{ y: imageY }}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[34px] border border-white bg-white/80 p-2 shadow-2xl shadow-slate-900/[0.08] backdrop-blur">
                <div className="relative h-[330px] overflow-hidden rounded-[28px] bg-slate-100 sm:h-[430px]">
                  {dynamicHeroSlides.map((slide, index) => (
                    <motion.div
                      key={`${slide.src}-${index}`}
                      initial={false}
                      animate={{
                        opacity: activeSlide === index ? 1 : 0,
                        scale: activeSlide === index ? 1 : 1.04,
                      }}
                      transition={{ duration: 0.55 }}
                      className="absolute inset-0"
                    >
                      <img
                        src={slide.src}
                        alt={slide.title}
                        className="h-full w-full object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#083344]/35 via-[#083344]/5 to-transparent" />

                      <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#be123c] backdrop-blur">
                        {slide.label}
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                        <p className="font-[var(--font-fraunces)] text-3xl font-semibold leading-tight">
                          {slide.title}
                        </p>

                        <p className="mt-2 max-w-md text-sm leading-6 text-white/80">
                          {slide.text}
                        </p>
                      </div>
                    </motion.div>
                  ))}

                  <button
                    type="button"
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#083344] shadow-sm backdrop-blur transition hover:bg-white"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#083344] shadow-sm backdrop-blur transition hover:bg-white"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>

                  <div className="absolute right-5 top-5 flex gap-2">
                    {dynamicHeroSlides.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setActiveSlide(index)}
                        className={`h-2 rounded-full transition-all ${activeSlide === index
                          ? "w-6 bg-white"
                          : "w-2 bg-white/50"
                          }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* COLOR STRIP */}
        <section className="relative overflow-hidden px-6 pb-8 sm:px-8 lg:px-10">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white/40" />

          <div className="relative mx-auto grid max-w-6xl gap-3 md:grid-cols-4">
            {dynamicColorStrip.map((item) => {
              const Icon = getIcon(item.iconName, School);

              return (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -4 }}
                  className="flex items-center gap-3 rounded-3xl border border-white/80 bg-white/75 p-4 shadow-sm backdrop-blur transition hover:bg-white hover:shadow-md"
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-2xl ${item.color} text-white`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <p className="text-sm font-extrabold text-[#083344]">
                    {item.title}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* INTERACTIVE IDENTITY */}
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#f8fbfb] to-[#ecfdf5]">
          <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#0f766e]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#be123c]/10 blur-3xl" />

          <div className="relative z-10 mx-auto grid max-w-6xl gap-8 px-6 py-14 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10 lg:py-16">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
              viewport={{ once: true, amount: 0.35 }}
            >
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#be123c]">
                Our Identity
              </p>

              <h2 className="mt-3 font-[var(--font-fraunces)] text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#083344] sm:text-4xl">
                Care, discipline, and learning in one simple rhythm.
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
                Click each card to explore what defines the school experience.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="grid gap-3"
            >
              <div className="grid gap-3 sm:grid-cols-3">
                {dynamicIdentityTabs.map((tab) => {
                  const Icon = getIcon(tab.iconName, HeartHandshake);
                  const isActive = activeTab === tab.key;

                  return (
                    <motion.button
                      key={tab.key}
                      variants={fadeUp}
                      type="button"
                      onClick={() => setActiveTab(tab.key)}
                      whileHover={{ y: -3 }}
                      className={`rounded-3xl border p-4 text-left transition ${isActive
                        ? "border-transparent bg-[#083344] text-white shadow-lg shadow-[#083344]/15"
                        : "border-white/80 bg-white/70 text-[#083344] shadow-sm backdrop-blur hover:bg-white hover:shadow-md"
                        }`}
                    >
                      <Icon
                        className={`h-5 w-5 ${isActive ? "text-[#67e8f9]" : "text-[#be123c]"
                          }`}
                      />

                      <p className="mt-3 text-sm font-extrabold">
                        {tab.label}
                      </p>
                    </motion.button>
                  );
                })}
              </div>

              {activeTabData && (
                <motion.div
                  key={activeTabData.key}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`overflow-hidden rounded-[30px] bg-gradient-to-br ${activeTabData.color} p-[1px] shadow-lg shadow-slate-900/[0.05]`}
                >
                  <div className="rounded-[29px] bg-white/90 p-6 backdrop-blur">
                    <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#be123c]">
                      {activeTabData.label}
                    </p>

                    <h3 className="mt-3 font-[var(--font-fraunces)] text-2xl font-semibold leading-snug text-[#083344]">
                      {activeTabData.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {activeTabData.text}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* INTERACTIVE TOOLS */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#ecfdf5] via-[#f8fbfb] to-[#fff7ed]">
          <div className="pointer-events-none absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-[#0e7490]/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#be123c]/10 blur-3xl" />

          <div className="relative z-10 mx-auto grid max-w-6xl gap-5 px-6 py-14 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-10 lg:py-16">
            {/* FEE CALCULATOR */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-[32px] bg-[#083344] p-6 text-white shadow-xl shadow-[#083344]/10"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-cyan-200">
                <Calculator className="h-5 w-5" />
              </div>

              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-100">
                Fee Calculator
              </p>

              <h2 className="mt-3 font-[var(--font-fraunces)] text-3xl font-semibold leading-tight">
                Estimate monthly fee.
              </h2>

              <div className="mt-5 rounded-3xl bg-white/10 p-5">
                <p className="text-sm text-white/70">Estimated Monthly Fee</p>

                <p className="mt-1 font-[var(--font-fraunces)] text-4xl font-semibold">
                  Rs. {estimatedFee.toLocaleString()}
                </p>
              </div>

              <div className="mt-5 grid gap-2 sm:grid-cols-3">
                {["Pre-Primary", "Primary", "Secondary"].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setGrade(item)}
                    className={`rounded-2xl px-3 py-2.5 text-xs font-extrabold transition ${grade === item
                      ? "bg-white text-[#083344]"
                      : "bg-white/10 text-white/75 hover:bg-white/15"
                      }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setTransport(!transport)}
                  className={`rounded-2xl border px-4 py-3 text-left text-sm font-bold transition ${transport
                    ? "border-cyan-200 bg-cyan-100 text-[#083344]"
                    : "border-white/10 bg-white/10 text-white/75"
                    }`}
                >
                  Transport + Rs.{" "}
                  {Number(feeData["Transport Fee"] || 1800).toLocaleString()}
                </button>

                <button
                  type="button"
                  onClick={() => setHostel(!hostel)}
                  className={`rounded-2xl border px-4 py-3 text-left text-sm font-bold transition ${hostel
                    ? "border-cyan-200 bg-cyan-100 text-[#083344]"
                    : "border-white/10 bg-white/10 text-white/75"
                    }`}
                >
                  Hostel + Rs.{" "}
                  {Number(feeData["Hostel Fee"] || 6500).toLocaleString()}
                </button>
              </div>

              <p className="mt-4 text-xs leading-6 text-white/55">
                {feeData["Note Text"] ||
                  "Demo estimate only. Replace numbers with official school fees."}
              </p>
            </motion.div>

            {/* SCHOOL FIT CHECKER */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-[32px] border border-white/80 bg-white/75 p-6 shadow-sm backdrop-blur"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fce7f3] text-[#be123c]">
                <CheckCircle2 className="h-5 w-5" />
              </div>

              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#be123c]">
                School Fit Checker
              </p>

              <h2 className="mt-3 font-[var(--font-fraunces)] text-3xl font-semibold leading-tight text-[#083344]">
                Is this school a good match?
              </h2>

              <div className="mt-5 space-y-3">
                {dynamicFitQuestions.map((item, index) => (
                  <button
                    key={`${item.question}-${index}`}
                    type="button"
                    onClick={() =>
                      setFitAnswers((prev) =>
                        prev.map((value, i) => (i === index ? !value : value))
                      )
                    }
                    className={`flex w-full items-center gap-3 rounded-2xl border p-4 text-left transition ${fitAnswers[index]
                      ? "border-[#0f766e]/20 bg-[#ecfdf5]"
                      : "border-white/80 bg-white/70 hover:bg-white"
                      }`}
                  >
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${fitAnswers[index]
                        ? "bg-[#0f766e] text-white"
                        : "bg-white text-slate-300"
                        }`}
                    >
                      <CheckCircle2 className="h-4 w-4" />
                    </span>

                    <span className="text-sm font-bold text-slate-700">
                      {item.question}
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-5 rounded-3xl bg-gradient-to-r from-[#0f766e] to-[#0e7490] p-5 text-white">
                <p className="text-sm font-bold">Match Score</p>

                <p className="mt-1 font-[var(--font-fraunces)] text-4xl font-semibold">
                  {fitScore}/{dynamicFitQuestions.length}
                </p>

                <p className="mt-2 text-xs leading-6 text-white/75">
                  {fitResultMessage}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#f8fbfb] to-[#fff1f2]">
          <div className="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-[#0f766e]/10 blur-3xl" />
          <div className="pointer-events-none absolute right-[-80px] top-10 h-72 w-72 rounded-full bg-[#be123c]/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:px-10 lg:py-16">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mx-auto max-w-2xl text-center"
            >
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#be123c]">
                Core Values
              </p>

              <h2 className="mt-3 font-[var(--font-fraunces)] text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#083344] sm:text-4xl">
                Three simple values that shape everyday school life.
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="mt-9 grid gap-4 md:grid-cols-3"
            >
              {dynamicCoreValues.map((item, index) => {
                const Icon = getIcon(item.iconName, BookOpen);

                return (
                  <motion.article
                    key={`${item.title}-${index}`}
                    variants={fadeUp}
                    whileHover={{ y: -6 }}
                    className="group rounded-[30px] border border-white/80 bg-white/75 p-6 shadow-sm backdrop-blur transition hover:bg-white hover:shadow-xl hover:shadow-slate-900/[0.07]"
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-2xl text-white ${item.color}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <span className="font-[var(--font-fraunces)] text-xl text-slate-300">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="font-[var(--font-fraunces)] text-2xl font-semibold text-[#083344]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.text}
                    </p>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* FILTERABLE ALBUM */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#ecfdf5] via-[#f8fbfb] to-[#fff7ed]">
          <div className="pointer-events-none absolute left-10 top-10 h-72 w-72 rounded-full bg-[#0e7490]/10 blur-3xl" />
          <div className="pointer-events-none absolute right-10 bottom-10 h-72 w-72 rounded-full bg-[#be123c]/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:px-10 lg:py-16">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col justify-between gap-5 md:flex-row md:items-end"
            >
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#be123c]">
                  School Album
                </p>

                <h2 className="mt-3 font-[var(--font-fraunces)] text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#083344] sm:text-4xl">
                  A colourful glimpse of school life.
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {albumCategories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setAlbumFilter(item)}
                    className={`rounded-full px-4 py-2 text-sm font-extrabold transition ${albumFilter === item
                      ? "bg-[#be123c] text-white"
                      : "bg-white/80 text-slate-600 shadow-sm backdrop-blur hover:text-[#be123c]"
                      }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div
              layout
              className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredAlbum.map((image) => (
                <motion.article
                  layout
                  key={`${image.src}-${image.title}`}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -6 }}
                  className="group overflow-hidden rounded-[30px] border border-white/80 bg-white/75 p-2 shadow-sm backdrop-blur transition hover:bg-white hover:shadow-xl hover:shadow-slate-900/[0.06]"
                >
                  <div className="relative h-64 overflow-hidden rounded-[24px] bg-slate-100">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#083344]/65 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-extrabold text-white">
                          {image.title}
                        </p>

                        <p className="text-xs text-white/75">
                          {image.category}
                        </p>
                      </div>

                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#be123c]">
                        <ImageIcon className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#f8fbfb] to-[#ecfdf5]">
          <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#0f766e]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#be123c]/10 blur-3xl" />

          <div className="relative z-10 mx-auto grid max-w-6xl gap-8 px-6 py-14 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:px-10 lg:py-16">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#be123c]">
                Questions
              </p>

              <h2 className="mt-3 font-[var(--font-fraunces)] text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#083344] sm:text-4xl">
                Things parents usually ask.
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
                A cleaner accordion section for quick admission and school
                information.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="space-y-3"
            >
              {dynamicFaqs.map((item, index) => {
                const isOpen = openFaq === index;

                return (
                  <motion.div
                    key={`${item.q}-${index}`}
                    variants={fadeUp}
                    className="rounded-3xl border border-white/80 bg-white/75 p-4 shadow-sm backdrop-blur transition hover:bg-white"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      className="flex w-full items-center justify-between gap-4 text-left"
                    >
                      <span className="font-extrabold text-[#083344]">
                        {item.q}
                      </span>

                      <ChevronDown
                        className={`h-5 w-5 text-[#be123c] transition ${isOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    {isOpen && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-3 text-sm leading-7 text-slate-600"
                      >
                        {item.a}
                      </motion.p>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#ecfdf5] via-[#f8fbfb] to-[#fff1f2] px-6 py-12 sm:px-8 lg:px-10">
          <div className="pointer-events-none absolute left-10 top-0 h-64 w-64 rounded-full bg-[#0e7490]/10 blur-3xl" />
          <div className="pointer-events-none absolute right-10 bottom-0 h-64 w-64 rounded-full bg-[#be123c]/10 blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative z-10 mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 overflow-hidden rounded-[32px] bg-gradient-to-r from-[#083344] via-[#0f766e] to-[#be123c] p-7 text-white shadow-xl shadow-slate-900/10 md:flex-row md:items-center"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-24 left-1/2 h-56 w-56 rounded-full bg-white/10 blur-2xl" />

            <div className="relative z-10">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/75">
                {ctaData.Eyebrow || "Visit Our School"}
              </p>

              <h2 className="mt-3 max-w-2xl font-[var(--font-fraunces)] text-3xl font-semibold tracking-[-0.02em]">
                {ctaData.Title ||
                  "Experience the campus, classrooms, and culture in person."}
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-white/75">
                {ctaData.Description ||
                  "Book a visit and see how values, academics, and care come together at VAIDIK VIDYAPEETH."}
              </p>
            </div>

            <Link
              href={ctaData["Button Link"] || "/contact"}
              className="group relative z-10 shrink-0 rounded-full bg-white px-5 py-2.5 text-sm font-extrabold text-[#be123c] transition hover:-translate-y-0.5 hover:bg-[#fff1f2]"
            >
              {ctaData["Button Text"] || "Book Campus Visit"}
              <ArrowRight className="ml-2 inline h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </section>
      </main>
    </SiteShell>
  );
}