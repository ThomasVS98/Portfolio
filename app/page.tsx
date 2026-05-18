"use client";

import {motion} from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-28">
      

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

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-xl text-gray-700"
        >
          Student Applied Computer Science met specialisatie in Machine Learning
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-500 text-base max-w-2xl mx-auto"
        >
          Dit portfolio vormt het sluitstuk van mijn bacheloropleiding en bundelt
          mijn projecten, vaardigheden en stage-ervaring als bewijs van mijn ontwikkeling tot IT-professional.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="pt-6"
        >
          <Link
            href="/projects"
            className="inline-block px-7 py-3.5 bg-slate-900/90 backdrop-blur-md text-white rounded-lg text-base font-medium hover:bg-slate-800/90 shadow-sm hover:shadow-lg transition"
          >
            Bekijk mijn projecten →
          </Link>
        </motion.div>

      </section>

      {/* NAVIGATIE */}
      <section className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">

  {[
    { href: "/projects", label: "Projects" },
    { href: "/internship", label: "Internship" },
    { href: "/about", label: "About" },
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