"use client";

import { motion } from "framer-motion";
import {
  PlayCircle,
  Wrench,
  FileText,
  Download
} from "lucide-react";

export default function Stage() {
  const flow = [
  {
  title: "Ingestie van kennisbronnen",
  description:
    "De oplossing haalde informatie op uit verschillende kennisbronnen: de SharePoint Service Catalog, de LMS-infosite en TOPdesk kennis-items. Voor de SharePoint-bronnen werd gebruikgemaakt van de Microsoft Graph API, terwijl de TOPdesk kennis-items werden opgehaald via de TOPdesk API. De opgehaalde data bestond uit HTML-pagina’s en verschillende bestandstypes zoals PDF- en Word-documenten. Voor deze documenten werd Docling ingezet om tekststructuur en tabellen correct te extraheren. Vervolgens werd alle data opgeschoond, genormaliseerd en opgesplitst in verwerkbare Markdown tekstfragmenten. De architectuur werd bovendien configureerbaar opgezet zodat nieuwe kennisbronnen later eenvoudig konden worden toegevoegd aan de knowledge base."
  },
  {
    title: "Retrieval-Augmented Generation",
    description:
      "Alle tekstfragmenten werden omgezet naar vectorrepresentaties via het embeddingmodel paraphrase-multilingual-mpnet-base-v2 en opgeslagen in ChromaDB als vector database. LlamaIndex beheerde hierbij de retrieval pipeline. Wanneer een gebruiker een vraag stelde, werd ook deze omgezet naar een embedding. Door semantische vergelijking konden de meest relevante tekstfragmenten opgehaald worden, waardoor het systeem contextueel informatie kon terugvinden zonder afhankelijk te zijn van exacte zoekwoorden."
  },
  {
    title: "Reranking en antwoordgeneratie",
    description:
      "De opgehaalde resultaten werden vervolgens opnieuw beoordeeld via een reranker. Dit model analyseerde de opgehaalde informatie tekstueel en vergeleek deze opnieuw met de originele gebruikersvraag. Enkel de best scorende blokken informatie bleven over en werden samen met de gebruikersvraag doorgestuurd naar het Llama 3.2 Large Language Model als context. Hierdoor konden antwoorden gegenereerd worden die zowel inhoudelijk relevant als nauwkeurig afgestemd waren op de beschikbare kennisbronnen."
  },
  {
    title: "Backend, intake en ticketcreatie",
    description:
      "De volledige oplossing werd georkestreerd via een FastAPI-backend die alle services en interacties tussen de verschillende componenten aanstuurde. Wanneer tijdens retrieval onvoldoende relevante context werd teruggevonden, detecteerde de agent dat de vraag mogelijk een nieuwe behoefte voorstelde. Eerst werd gecontroleerd of de vraag relevant was voor de ICTS-dienst. Indien relevant, werd een intakeprocedure opgestart waarbij de gebruiker gerichte vragen beantwoordde. Op basis van deze intake-antwoorden werd vervolgens via de TOPdesk API automatisch een ticket aangemaakt binnen de TOPdesk-omgeving. Daarnaast was er een controlemechanisme aanwezig dat intake-antwoorden vergeleek met bestaande TOPdesk tickets om duplicaten te vermijden."
  },
  {
    title: "Evaluatie, monitoring en frontend",
    description:
      "De kwaliteit van de gegenereerde antwoorden werd geëvalueerd via een combinatie van LLM-as-judge en praktische testscenario’s. Hierbij werd nagegaan in welke mate antwoorden correct, relevant en bruikbaar waren. De resultaten van deze evaluaties werden gebruikt om retrievalinstellingen, reranking en beslissingsdrempels verder te optimaliseren. Bovendien werd monitoring via Langfuse toegevoegd om de volledige flow te analyseren. Voor interactie en validatie werd daarnaast een Streamlit frontend ontwikkeld waarmee de volledige oplossing lokaal getest kon worden."
  }
];

  const challenges = [
  {
    title: "Beperkte hardwarecapaciteit",
    description:
      "Aangezien de volledige oplossing lokaal en open-source moest draaien op mijn eigen laptop, vormde hardwarecapaciteit een belangrijke beperking. Daarom werden bewust lichte en resource-efficiënte modellen gekozen, zoals Llama 3.2 en het MPNet embeddingmodel. Daarnaast werden geheugengevoelige processen geoptimaliseerd. Een voorbeeld hiervan is dat ik Docling liet draaien als subproces zodat het RAM-geheugen onmiddellijk na verwerking opnieuw vrijgemaakt werd. Voor vergelijkende testen en validatie kon ik gebruikmaken van een Deep Learning Station, wat me toeliet om een zwaarder Mistral 7B-model te gebruiken en zo de prestaties van Llama 3.2 beter te kunnen inschatten binnen de gegeven hardwarebeperkingen."
  },
  {
    title: "Relevantie van retrieval",
    description:
      "Een belangrijke uitdaging was het vermijden van irrelevante context bij semantische retrieval. Embedding-gebaseerde similarity search alleen bleek niet altijd voldoende nauwkeurig. Daarom werd een bijkomende rerankinglaag geïntegreerd die opgehaalde tekstfragmenten opnieuw evalueerde op basis van hun inhoudelijke relevantie ten opzichte van de gebruikersvraag."
  },
  {
    title: "Detectie van nieuwe behoeften",
    description:
      "Het systeem moest betrouwbaar kunnen onderscheiden tussen vragen die beantwoord konden worden vanuit bestaande kennisbronnen en vragen die een nieuwe ICT-behoefte vertegenwoordigden. Hiervoor werd beslissingslogica ontwikkeld op basis van retrievalscores, relevantiecontroles en validatiecriteria, zodat enkel relevante intakeprocedures gestart werden."
  }
  ];

  const documents = [
  {
    title: "Project plan",
    file: "/documents/Project_plan.pdf",
    description: "Planning, scope en projectaanpak"
  },
  {
    title: "Realisatiedocument",
    file: "/documents/Realisatiedocument.pdf",
    description: "Volledige analyse en documentatie van de implementatie"
  },
  {
    title: "Reflectie",
    file: "/documents/Reflectie.pdf",
    description: "Persoonlijke evaluatie en leerproces"
  }
];

  return (
    <div className="space-y-20">

      {/* HERO + OPDRACHT */}
      <section className="max-w-5xl mx-auto pt-10 space-y-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-2"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight pb-2 tracking-tight bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
            Stage bij Thomas More ICTS
          </h1>

          <p className="text-lg italic text-gray-500">
            Implementatie van een slimme AI-agent voor IT-support, self-service en intake
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-slate-100 space-y-6 max-w-5xl"
        >
          <p className="text-gray-600 leading-relaxed">
            Gedurende 13 weken liep ik stage binnen de ICTS-dienst van Thomas More. Mijn opdracht was het ontwikkelen van een AI-agent
            die gebruikersvragen ontving en automatisch informatie ophaalde uit de gewenste kennisbronnen. Bij een nieuwe behoefte startte de agent een intakeprocedure die
            kon leiden tot een automatische ticketaanmaak in het TOPdesk ticketing systeem.
          </p>

          <p className="text-gray-600 leading-relaxed">
            De gewenste kennisbronnen waren de SharePoint Service Catalog, de SharePoint LMS-infosite en de TOPdesk kennis-items. Die bronnen bevatten informatie over
            aangeboden IT-diensten met vaak handleidingen. Deze bronnen moesten echter configureerbaar zijn, zodat de knowledge base in de toekomst verder uitgebreid kon worden.
            Met deze kennis kon de agent gebruikersvragen beantwoorden op basis van uitsluitend relevante informatie.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Wanneer een gebruiker een nieuwe behoefte had, startte de agent vervolgens een intakeprocedure waar de gebruiker gerichte vragen kreeg die hij
            moest beantwoorden. Op basis van die antwoorden kon er dan een ticket aangemaakt worden in de TOPdesk omgeving, wat de gebruikte ticketing software was binnen de Thomas More ICTS-dienst.
          </p>

          <p className="text-gray-600 leading-relaxed">
            De gehele oplossing moest open-source zijn en lokaal kunnen draaien op mijn eigen laptop.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Deze oplossing zorgde ervoor dat het volledige proces werd geautomatiseerd en gecentraliseerd. Bovendien verliep het proces aanzienlijk sneller. Voordien
            moest een gebruiker met een bepaalde vraag zelf manueel op de SharePoint Service Catalog op zoek gaan naar welke informatie of doorverwijzingen relevant waren. Als er dan geen 
            informatie zou zijn, ontdekte de gebruiker dit vaak pas na langdurig manueel zoeken. Met de agent konden gebruikers eenvoudig hun vraag stellen en kregen ze meteen
            een antwoord, of er werd automatisch een support-ticket aangemaakt.
          </p>
        </motion.div>
      </section>

      {/* HOE WERKTE DE OPLOSSING */}
      <section className="max-w-5xl mx-auto space-y-8">
        <h2 className="text-2xl font-semibold text-center">
          Hoe werkte de oplossing?
        </h2>

        <div className="space-y-6">
          {flow.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DEMO */}
      <section className="max-w-5xl mx-auto">
        <div className="bg-slate-900 text-white rounded-2xl p-10 text-center space-y-6 shadow-lg">
          <PlayCircle size={48} className="mx-auto" />

          <h2 className="text-2xl font-semibold">
            Demonstratie van de oplossing
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto">
            Omdat de oplossing lokaal draaide en inferentie afhankelijk was van beperkte
            hardwarecapaciteit, werd een demonstratievideo voorzien.
          </p>

          <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/L7YlRStQ7Cc"
              title="Demonstratie van de oplossing"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* UITDAGINGEN */}
      <section className="max-w-5xl mx-auto space-y-8">
        <h2 className="text-2xl font-semibold text-center">
          Uitdagingen en oplossingen
        </h2>

        <div className="space-y-5">
          {challenges.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100"
            >
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <Wrench size={18} className="text-slate-700" />
                </div>

                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DOCUMENTEN */}
      <section className="max-w-5xl mx-auto space-y-8 pb-12">
        <h2 className="text-2xl font-semibold text-center">
          Documenten
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {documents.map((doc) => (
            <motion.a
              key={doc.title}
              whileHover={{ scale: 1.03 }}
              href={doc.file}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 flex flex-col items-center text-center space-y-4"
            >
              <FileText className="text-slate-700" />
              <h3 className="font-semibold">{doc.title}</h3>

              <p className="text-sm text-gray-500">
                {doc.description}
              </p>

              <Download size={18} />
            </motion.a>
          ))}
        </div>
      </section>

    </div>
  );
}