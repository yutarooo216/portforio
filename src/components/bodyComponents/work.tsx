import React, { useState } from 'react';
import { RnaModal } from './rnamodal.tsx';
import { Index } from './index.tsx';

export const Works = () => {
  const [showRnaModal, setShowRnaModal] = useState(false);

  return (
    <section id="works" className="mb-8">
        <Index name="Works" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6">
            <button
            onClick={() => setShowRnaModal(true)}
            className="flex flex-col justify-between h-32 w-56 p-4 bg-white border border-gray-200 rounded-lg shadow hover:shadow-xl transition-all"
            >
                <div>
                    <h3 className="font-semibold text-md mb-2 line-clamp-3 text-left">RNA 3D Prediction App</h3>
                </div>
                <p className="text-xs text-gray-500 italic mt-auto text-left">
                    source: <a 
                    href="https://github.com/yutarooo216/rna_3d_prediction"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                    >Github</a>
                </p>
            </button>
        </div>

        {showRnaModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <RnaModal onClose={() => setShowRnaModal(false)} />
            </div>
        )}
    </section>
  );
};