import React from 'react';
import { Index } from './index.tsx';

type PublicationProps = {
  title: string;
  authors: string;
  journal: string;
  link: string;
}

const publications = [
  {
    title: "Integrated gut microbiome and metabolome analyses identified fecal biomarkers...",
    authors: "Y. Nakamura, S. Suzuki, ... Y. Ito, ...",
    journal: "CSBJ, 2022",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9636538/"
  },
  {
    title: "Comparative analysis based on shared amplicon sequence variants...",
    authors: "Y. Ito, M. Nagasawa, ...",
    journal: "Front Vet Sci, 2024",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11491291/"
  },
  {
    title: "Bioinformatic evaluation of the potential oral-gut translocation...",
    authors: "N. Takahashi, M. Yamaguchi, ... Y. Ito, ...",
    journal: "bioRxiv, 2024",
    link: "https://www.biorxiv.org/content/10.1101/2024.04.29.591540v1"
  },
  {
    title: "Comparative genomic analysis of Latilactobacillus sakei strains...",
    authors: "K. Ito and Y. Ito",
    journal: "Microbiology Society, 2025",
    link: "https://pubmed.ncbi.nlm.nih.gov/40608406/"
  }
];

const PubProps = ({ title, authors, journal, link }: PublicationProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col justify-between h-48 w-56 p-4 bg-white border border-gray-200 rounded-lg shadow hover:shadow-xl transition-all"
    >
      <div>
        <h3 className="font-semibold text-md mb-2 line-clamp-3">{title}</h3>
        <p className="text-xs text-gray-600 mb-2">{authors}</p>
      </div>
      <p className="text-xs text-gray-500 italic mt-auto">{journal}</p>
    </a>
  )
}

export const Publications = () => {
  return (
    <section id="publications" className="mb-12">
      <Index name='Publications' />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6">
        {publications.map((pub) => (
          <PubProps
            key={pub.title}
            title={pub.title}
            authors={pub.authors}
            journal={pub.journal}
            link={pub.link}
          />
        ))}
      </div>
    </section>
  );
};