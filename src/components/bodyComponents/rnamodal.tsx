// src/components/RnaModal.jsx
import React, { useState } from 'react';
import axios from 'axios';

export const RnaModal = ({ onClose }) => {
  const [sequence, setSequence] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      await axios.post(`http://flounder-aws.click/submit-job/`, {
        sequence,
        email,
      });
      setStatus("送信が完了しました");
    } catch {
      setStatus("送信に失敗しました");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl font-bold"
        >
          ×
        </button>
        <h2 className="text-lg font-bold mb-4">RNA 3D構造予測</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <textarea
            placeholder="RNA配列"
            required
            value={sequence}
            onChange={(e) => setSequence(e.target.value)}
            className="w-full border p-2 rounded"
          />
          <input
            type="email"
            placeholder="メールアドレス"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 rounded"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded w-full"
          >
            {loading ? "送信中..." : "送信"}
          </button>
        </form>
        {status && (
          <p className="mt-2 text-center text-sm text-green-600">{status}</p>
        )}
      </div>
    </div>
  );
};