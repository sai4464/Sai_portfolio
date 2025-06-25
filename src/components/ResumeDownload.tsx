import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

const ResumeDownload = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/resume.pdf');
      if (!response.ok) {
        throw new Error('Resume not found');
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Sai_Charan_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading resume:', error);
      alert('Resume will be available soon!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.button
      onClick={handleDownload}
      disabled={isLoading}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#457B9D] to-[#1D3557] text-white rounded-lg shadow-md hover:from-[#1D3557] hover:to-[#457B9D] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <Download className={`w-5 h-5 ${isLoading ? 'animate-bounce' : ''}`} />
      {isLoading ? 'Downloading...' : 'Download Resume'}
    </motion.button>
  );
};

export default ResumeDownload;