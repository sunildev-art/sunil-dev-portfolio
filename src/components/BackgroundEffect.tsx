import React from 'react';

const BackgroundEffect: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-[var(--page-bg)] transition-colors duration-500">
      {/* Moving Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.55] dark:opacity-[0.4]" />
      
      {/* Premium Aurora/Mesh blobs */}
      <div className="hidden dark:block absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-br dark:from-primary/15 dark:to-secondary/5 blur-[130px] animate-pulse-slow" />
      <div className="hidden dark:block absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full bg-gradient-to-tr dark:from-accent/10 dark:to-primary/5 blur-[135px] animate-pulse-slow" style={{ animationDelay: '3s' }} />
      <div className="hidden dark:block absolute top-[30%] left-[20%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-r dark:from-secondary/8 dark:to-accent/3 blur-[140px] animate-pulse-slow" style={{ animationDelay: '6s' }} />

      {/* Noise layer for extra premium texture */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] mix-blend-overlay bg-[radial-gradient(#808080_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Radial overlay to fade edges and center attention */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--page-bg)] via-transparent to-[var(--page-bg)] opacity-90" />
    </div>
  );
};

export default BackgroundEffect;
