"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Eye,
  Trophy,
  FileText,
  Award
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Realisaties() {

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const projects = [
    {
      title: "Cloudway — Multimodale AI-integratie",
      subtitle: "Skills Integration Lab 3 · Teamproject (7 studenten)",
      icon: Brain,

      context:
        "Voor het vak Skills Integration Lab 3 ontwikkelden we in een multidisciplinair team van zeven studenten een end-to-end systeem voor Cloudway. Het team bestond uit drie AI-studenten, twee Cloud & Cybersecurity-studenten en twee APP-studenten. De opdracht bestond erin om Cloudway’s bestaande Logic Unit uit te breiden tot een schaalbare oplossing die multimodale gebruikersinput automatisch kon analyseren en via de Logic Unit kon koppelen aan policies.",

      how:
        "De oplossing werd gerealiseerd via een asynchrone event-driven workerarchitectuur in TypeScript. Voor de pre- en postprocessing maakten we gebruik van Amazon Nova Lite via AWS Bedrock. Mijn belangrijkste bijdrage lag in het ontwerpen en implementeren van de volledige preprocessinglaag. Die laag moest de multimodale input van de gebruiker kunnen verwerken door relevante informatie die de Logic Unit nodig heeft uit de documenten te halen. Die info werd netjes gestructureerd in JSON zodat de Logic Unit die informatie vervolgens kon koppelen aan de nodige policies. Ik werkte ook actief mee aan de worker flow. Daarnaast nam ik initiatief binnen het team om de communicatie en samenwerking te verbeteren. Uiteindelijk zijn we er in geslaagd een mooi project te realiseren waar de cliënt tevreden mee was.",

      tech: [
        "AWS Bedrock",
        "Amazon Nova Lite",
        "TypeScript",
        "Event-Driven Architectuur"
      ],

      documents: [
      {
        label: "Finale presentatie",
        file: "/documents/cloudway-presentatie.pdf"
      },
      {
        label: "Technische documentatie",
        file: "/documents/cloudway-documentatie.pdf"
      }
    ],
        screenshots: [
      "/images/cloudway-1.png",
      "/images/cloudway-2.png"
    ]
    },

    {
      title: "Computer Vision Challenge - Tennis",
      subtitle: "Machine Learning · Teamproject (3 studenten)",
      icon: Eye,

      context:
        "In dit project pasten we computer vision-technieken toe op een video van een tenniswedstrijd. Spelers, bal en courtlijnen moesten automatisch gedetecteerd worden. Daarbovenop moest er bij de video een 2D mini-court aanwezig zijn waarop de spelers en bal ook live geprojecteerd werden. De bedoeling was dat die detectie op de mini-court overeenkwam met de echte court op de video.",

      how:
        "Eerst werd een custom dataset gelabeld waarbij de posities van de bal, spelers en courtlijnen werden aangeduid. Met die informatie kon een YOLO-model (You Only Look Once) getraind worden om deze elementen frame per frame te detecteren. Om de mini-court toe te voegen op de video, werd homografie toegepast. Dit is een techniek waarmee je coördinaten van het ene vlak (de echte court) kan omzetten naar coördinaten van een ander vlak (de 2D mini-court). Op die manier konden we de positie van de spelers en de bal op de video omzetten naar de juiste positie op de mini-court. Ten slotte hadden we ook nog een heatmap toegevoegd aan de mini-court die aangaf waar de bal het vaakst landde tijdens de wedstrijd. Mijn bijdrage lag vooral in het ontwikkelen van de mini-court en het trainen van het YOLO-model.",
      tech: [
        "Python",
        "YOLO",
        "Computer Vision",
        "Homografie"
      ],
      documents: [
        {
          label: "Projectrapport",
          file: "/documents/cv-rapport.pdf"
        }
      ],
      screenshots: [
        "/images/tennis-1.png"
      ]
    },
    {
      title: "Microsoft AI Hackathon",
      subtitle: "AI Hackathon · Microsoft Zaventem",
      icon: Trophy,

      context:
        "Tijdens mijn stage bij de Thomas More ICT-dienst nam ik samen met enkele teamleden van Thomas More deel aan een tweedaagse hackathon op het Microsoft-kantoor in Zaventem. Verschillende onderwijsinstellingen werkten er aan AI-use cases met Microsoft-technologie. Onze opdracht bouwde verder op dezelfde use case als mijn stageproject: het ontwikkelen van een agent die gebruikersvragen kon beantwoorden op basis van informatie uit de SharePoint Service Catalog en automatisch een intakeflow kon starten wanneer bijkomende ondersteuning nodig was.",

      how:
        "De oplossing werd gebouwd in Python met Azure AI Foundry en een Chainlit-frontend voor snelle demonstratie. In plaats van gebruik te maken van similarity search of vector databases ontwikkelden we een agentische aanpak waarbij de AI-agent tijdens runtime zelfstandig door de SharePoint-omgeving navigeerde om relevante informatie op te zoeken en te verwerken. Wanneer onvoldoende context beschikbaar was, werd automatisch een intakeformulier gestart dat na indiening een ticket aanmaakte in TOPdesk. Dit project gaf mij waardevolle inzichten in alternatieve agentische retrieval-architecturen en sloot inhoudelijk sterk aan bij mijn stageproject.",

      tech: [
        "Azure AI Foundry",
        "Python",
        "AI Agents",
        "Chainlit"
      ],

      documents: [
        {
          label: "Credly badge",
          file: "https://www.credly.com/badges/020718fb-39b6-4015-8a62-8312f436183e/public_url"
        }
      ]
    }

  ];



  return (
    <div className="space-y-20">

      <section className="max-w-5xl mx-auto pt-10 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
          Realisaties
        </h1>

        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Op deze pagina deel ik een selectie van projecten en ervaringen die mijn capaciteiten als AI-ontwikkelaar illustreren.
        </p>
      </section>

      <section className="max-w-5xl mx-auto space-y-12">

        {projects.map((project, index) => {
          const Icon = project.icon;

          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-slate-100 border-t-4 border-t-slate-900"
            >
              <div className="space-y-8">

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Icon size={28} className="text-slate-700" />

                    <div>
                      <h2 className="text-2xl font-semibold">
                        {project.title}
                      </h2>

                      <p className="text-gray-500">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-100 rounded-lg text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">
                      De opdracht
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {project.context}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">
                      Technische aanpak
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {project.how}
                    </p>
                  </div>
                </div>

                {project.screenshots && (
                  <div>
                    <h3 className="font-semibold mb-3">
                      Screenshots
                    </h3>

                    <div className="grid md:grid-cols-3 gap-4">
                      {project.screenshots.map((src) => (
                        <button
                          key={src}
                          onClick={() => setSelectedImage(src)}
                          className="overflow-hidden rounded-xl border border-slate-200 cursor-pointer"
                        >
                          <Image
                            src={src}
                            alt="Project screenshot"
                            width={600}
                            height={400}
                            className="w-full h-auto hover:scale-105 transition duration-300"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h3 className="font-semibold mb-3">
                    Bewijsmateriaal
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {project.documents.map((doc) => (
                      <a
                        key={doc.label}
                        href={doc.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3 bg-slate-100 text-slate-900 rounded-xl text-sm flex items-center gap-2 hover:bg-slate-200 transition"
                      >
                        <FileText size={16} />
                        {doc.label}
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          );
        })}
      </section>
        {selectedImage && (
  <div
    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
    onClick={() => setSelectedImage(null)}
  >
    <div
      className="relative max-w-6xl max-h-[90vh]"
      onClick={(e) => e.stopPropagation()}
    >
      <Image
        src={selectedImage}
        alt="Vergrote screenshot"
        width={1600}
        height={900}
        className="max-h-[90vh] w-auto rounded-xl"
      />

      <button
      onClick={() => setSelectedImage(null)}
      className="
        absolute
        top-4
        right-4
        w-10
        h-10
        rounded-full
        bg-white/95
        border
        border-slate-300
        text-slate-700
        hover:bg-white
        transition
        cursor-pointer
        flex
        items-center
        justify-center
        shadow-sm
      "
    >
      ✕
    </button>
    </div>
  </div>
)}
    </div>
  );
}