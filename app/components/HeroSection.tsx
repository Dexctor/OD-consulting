/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Spotlight } from "../components/ui/Spotlight";
import { cn } from "../components/utils/cn";

export default function HeroSection() {
  const [showSpotlight, setShowSpotlight] = useState(false);

  useEffect(() => {
    const handlePageLoad = () => {
      setTimeout(() => {
        setShowSpotlight(true);
      }, 1000);
    };

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
      return () => window.removeEventListener("load", handlePageLoad);
    }
  }, []);

  return (
    <section
      className="relative flex flex-col items-center justify-center gap-4 min-h-screen mb-16"
      id="accueil"
    >
      {showSpotlight && <Spotlight className="animate-spotlight opacity-0 delay-1000" />}
      <div className="inline-block max-w-2xl text-center">
        <motion.h1
          animate={{ opacity: 1 }}
          className={cn("text-5xl font-bold")}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          Réalisez vos&nbsp;
        </motion.h1>
        <motion.h1
          animate={{ opacity: 1 }}
          className={cn("text-5xl font-bold text-violet-600")}
          initial={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        >
          projets SAP&nbsp;
        </motion.h1>
        <br />
        <motion.h1
          animate={{ opacity: 1 }}
          className={cn("text-5xl font-bold")}
          initial={{ opacity: 0 }}
          transition={{ duration: 1.4 }}
        >
          avec un expert certifié.
        </motion.h1>
        <motion.h4
          animate={{ opacity: 1 }}
          className={cn("text-xl mt-4")}
          initial={{ opacity: 0 }}
          transition={{ duration: 1.6 }}
        >
          Avec 18 ans d'expérience en tant qu'Architecte SAP Solution Manager
          et Administratrice SAP BASIS, je suis prête à relever de nouveaux
          challenges pour optimiser et sécuriser vos systèmes SAP.
        </motion.h4>
        <motion.div
          animate={{ opacity: 1 }}
          className="flex justify-center mt-6"
          initial={{ opacity: 0 }}
          transition={{ duration: 1.8 }}
        >
          <button className="px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700">
            Contactez-moi
          </button>
        </motion.div>
      </div>
    </section>
  );
}
