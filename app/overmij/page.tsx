"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Brain,
  Eye,
  MessageSquare,
  Search,
  Cloud,
  BarChart3,
  Database
} from "lucide-react";

export default function About() {
  const skills = [
  { name: "Machine Learning", icon: Brain },
  { name: "Computer Vision", icon: Eye },
  { name: "Natural Language Processing", icon: MessageSquare },
  { name: "Retrieval-Augmented Generation (RAG)", icon: Search },
  { name: "LlamaIndex", logo: "/logos/llamaindex.svg",logoClass: "scale-[1.35]" },
  { name: "Data Engineering (AWS)", logo: "/logos/aws.svg", logoClass: "scale-[1.35]" },
  { name: "Business Intelligence (Qlik)", icon: BarChart3 },
  { name: "Python", logo: "/logos/python.svg" },
  { name: "SQL", icon: Database },
];

  const interests = [
    {
      icon: "📚",
      title: "Literatuur",
      description:
        "Lezen helpt me mijn analytisch denken en kritische reflectie verder te ontwikkelen."
    },
    {
      icon: "🏛",
      title: "Geschiedenis",
      description:
        "Mijn interesse in geschiedenis versterkt mijn nieuwsgierigheid naar complexe systemen en evoluties."
    },
    {
      icon: "🏃",
      title: "Lopen",
      description:
        "Lopen helpt me focus, discipline en doorzettingsvermogen te onderhouden."
    }
  ];

  return (
    <div className="space-y-20">

      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-14 items-center max-w-5xl mx-auto pt-10">

        {/* FOTO */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
         <Image
          src="/tvs.jpg"
          alt="Thomas Van Sande"
          width={288}
          height={288}
          className="w-72 h-72 rounded-2xl object-cover shadow-lg ring-1 ring-slate-200"
        />
        </motion.div>

        {/* WIE BEN IK */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 max-w-xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
            Wie ben ik?
          </h1>

          <p className="text-gray-600 leading-relaxed">
            Ik ben Thomas Van Sande, een derdejaarsstudent Applied Computer Science
            met als afstudeerrichting Machine Learning. Hierdoor heb ik mijn kennis verdiept in AI-technologieën,
            data engineering en business intelligence.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Naast mijn studie haal ik veel voldoening uit literatuur, geschiedenis en lopen. 
            Ik hou van kennis opdoen en streef ernaar elke dag een betere versie van mezelf te worden.
          </p>
        </motion.div>

      </section>

      {/* TECHNISCHE EXPERTISE */}
      <section className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-2xl font-semibold text-slate-900 text-center">
          Technische expertise
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => {
  const Icon = skill.icon;

  return (
    <motion.div
      key={skill.name}
      whileHover={{ scale: 1.05 }}
      className="px-5 py-3 bg-slate-900/90 text-white rounded-xl text-sm font-medium shadow-sm flex items-center gap-3"
    >
      {skill.logo ? (
        <Image
          src={skill.logo}
          alt={skill.name}
          width={18}
          height={18}
          className={`invert brightness-0 ${skill.logoClass || ""}`}
        />
      ) : (
        Icon && <Icon size={18} />
      )}

      {skill.name}
    </motion.div>
  );
})}
        </div>
      </section>

      {/* PERSOONLIJKE INTERESSES */}
      <section className="max-w-5xl mx-auto space-y-8">
        <h2 className="text-2xl font-semibold text-slate-900 text-center">
          Persoonlijke interesses
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {interests.map((interest) => (
            <motion.div
              key={interest.title}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl p-8 shadow-sm text-center space-y-4"
            >
              <div className="text-4xl">{interest.icon}</div>

              <h3 className="text-lg font-semibold text-slate-900">
                {interest.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {interest.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT + CV */}
      <section className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto pb-12">

        <div className="bg-white rounded-2xl p-8 shadow-sm space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            Contact
          </h2>

          <p className="text-gray-600">📍 Herentals, België</p>
          <p className="text-gray-600">✉ thomas-vansande@hotmail.com</p>
          <p className="text-gray-600">💼 LinkedIn</p>
          <p className="text-gray-600">💻 GitHub</p>
        </div>

        <div className="bg-slate-900/90 text-white rounded-2xl p-8 shadow-sm flex flex-col justify-center items-center text-center space-y-6">
          <h2 className="text-2xl font-semibold">
            Curriculum Vitae
          </h2>

          <p className="text-white/80">
            Download mijn curriculum vitae voor een volledig overzicht van mijn
            opleiding, ervaring en technische vaardigheden.
          </p>

          <Link
            href="/cv.pdf"
            className="px-7 py-3.5 bg-white text-slate-900 rounded-lg font-medium hover:opacity-90 transition"
          >
            Download CV
          </Link>
        </div>

      </section>

    </div>
  );
}