"use client";

import {AnimatePresence, motion} from "framer-motion";
import {useEffect, useState} from "react";
import Link from "next/link";

export default function Home() {
  const subtitles = [
    "Student Applied Computer Science",
    "Afstudeerrichting Machine Learning"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % subtitles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-16">
      

      {/* HERO */}
      <section className="text-center max-w-3xl mx-auto space-y-8 pt-10">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent"
        >
          Thomas Van Sande
        </motion.h1>

    <div className="min-h-[2.5rem] flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.p
          key={subtitles[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-gray-700"
        >
          {subtitles[index]}
        </motion.p>
      </AnimatePresence>
    </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-500 text-base max-w-2xl mx-auto"
        >
          Dit portfolio vormt het sluitstuk van mijn bacheloropleiding en bundelt
          mijn realisaties, vaardigheden en stage-ervaring als bewijs van mijn ontwikkeling tot IT-professional.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="pt-6"
        >
          <Link
            href="/realisaties"
            className="inline-block px-7 py-3.5 bg-slate-900/90 backdrop-blur-md text-white rounded-lg text-base font-medium hover:bg-slate-800/90 shadow-sm hover:shadow-lg transition"
          >
            Ontdek mijn realisaties →
          </Link>
        </motion.div>

      </section>

      {/* NAVIGATIE */}
      <section className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">

  {[
    { href: "/realisaties", label: "Realisaties" },
    { href: "/stage", label: "Stage" },
    { href: "/overmij", label: "Over mij" },
  ].map((item) => (
    <motion.div
      key={item.href}
      whileHover={{ scale: 1.05}}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <Link
        href={item.href}
        className="block p-8 bg-slate-900/90 backdrop-blur-md text-white rounded-xl shadow-sm hover:bg-slate-800/90 transition cursor-pointer text-center"
      >
        <h3 className="text-lg font-semibold tracking-wide">
          {item.label}
        </h3>
      </Link>
    </motion.div>
  ))}

</section>
    </div>
  );
}