"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Brain,
  Eye,
  MessageSquare,
  Search,
  BarChart3,
  Database,
  BookOpen,
  Landmark,
  Footprints,
  MapPin,
  Mail,
  Phone
} from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

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
      icon: BookOpen,
      title: "Literatuur",
      description:
        "Ik haal veel rust en inspiratie uit lezen. Het helpt me kritisch te blijven nadenken en nieuwe perspectieven te ontdekken."
    },
    {
      icon: Landmark,
      title: "Geschiedenis",
      description:
        "Geschiedenis fascineert me omdat het inzicht geeft in hoe complexe systemen ontstaan, evolueren en veranderen doorheen de tijd."
    },
    {
      icon: Footprints,
      title: "Lopen",
      description:
        "Lopen geeft me energie en helpt me mijn gedachten te ordenen. Het is ook enorm aangenaam om in de natuur even tot rust te komen."
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
          src="/profile.jpg"
          alt="Thomas Van Sande"
          width={320}
          height={400}
          priority
          className="w-72 rounded-2xl object-contain shadow-lg ring-1 ring-slate-200"
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
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-100 text-center space-y-5 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center text-slate-700">
                <interest.icon size={40} strokeWidth={1.8} />
              </div>

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

        {/* Contact */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-100 flex flex-col justify-center space-y-6">
          <h2 className="text-2xl font-semibold text-slate-900">
            Contact
          </h2>

          <div className="space-y-4">

            <div className="flex items-center gap-3 text-gray-600">
              <MapPin size={18} />
              <span>Herentals, België</span>
            </div>

            <a
              href="mailto:thomas-vansande@hotmail.com"
              className="flex items-center gap-3 text-gray-600 hover:text-slate-900 transition"
            >
              <Mail size={18} />
              <span>thomas-vansande@hotmail.com</span>
            </a>

            <div className="flex items-center gap-3 text-gray-600">
              <Phone size={18} />
              <span>+32 496 223 269</span>
            </div>

            <a
              href="https://www.linkedin.com/in/thomas-van-sande"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-600 hover:text-slate-900 transition"
            >
              <FaLinkedinIn size={18} />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/ThomasVS98"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-600 hover:text-slate-900 transition"
            >
              <FaGithub size={18} />
              <span>GitHub</span>
            </a>


          </div>
        </div>

        {/* CV */}
        <div className="bg-slate-800/95 text-white rounded-2xl p-8 shadow-lg flex flex-col justify-center items-center text-center space-y-6">
          <h2 className="text-2xl font-semibold">
            Curriculum Vitae
          </h2>

          <p className="text-white/80">
            Download mijn CV voor een volledig overzicht van mijn opleiding,
            technische expertise en relevante ervaring.
          </p>

          <a
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold hover:bg-slate-100 hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Download CV
          </a>
        </div>

      </section>
    </div>
  );
}