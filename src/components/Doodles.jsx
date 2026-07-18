import React from 'react';

// Hand-drawn-looking SVG components

export const StarDoodle = ({ className = '', fill = '#FFE066' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-6 h-6 inline-block select-none ${className}`}
  >
    <path
      d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z"
      fill={fill}
      stroke="#141414"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

export const AsteriskDoodle = ({ className = '', stroke = '#FF5C39' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-6 h-6 inline-block select-none ${className}`}
  >
    <path
      d="M12 3V21M3 12H21M5.6 5.6L18.4 18.4M5.6 18.4L18.4 5.6"
      stroke={stroke}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

export const HeartDoodle = ({ className = '', fill = '#FFB3C6' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-6 h-6 inline-block select-none ${className}`}
  >
    <path
      d="M12 21C12 21 3 15.5 3 9.5C3 6.5 5.5 4 8.5 4C10.2 4 11.3 5 12 6C12.7 5 13.8 4 15.5 4C18.5 4 21 6.5 21 9.5C21 15.5 12 21 12 21Z"
      fill={fill}
      stroke="#141414"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowDoodle = ({ className = '', stroke = '#FF5C39' }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-12 h-12 inline-block select-none ${className}`}
  >
    <path
      d="M8 20C16 12 28 8 38 14M38 14C33 16 29 20 28 25M38 14C38 20 36 26 33 30"
      stroke={stroke}
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CurlyArrow = ({ className = '', stroke = '#141414' }) => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-16 h-16 inline-block select-none ${className}`}
  >
    <path
      d="M10 65C25 65 35 45 35 30C35 15 20 15 20 25C20 35 45 45 65 35M65 35C58 35 52 38 48 42M65 35C62 28 62 20 65 14"
      stroke={stroke}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SmileyDoodle = ({ className = '', fill = '#FFE066' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-8 h-8 inline-block select-none ${className}`}
  >
    <circle cx="12" cy="12" r="10" fill={fill} stroke="#141414" strokeWidth="2" />
    <circle cx="8.5" cy="9.5" r="1.5" fill="#141414" />
    <circle cx="15.5" cy="9.5" r="1.5" fill="#141414" />
    <path
      d="M8 14.5C9.5 16.5 14.5 16.5 16 14.5"
      stroke="#141414"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const WashiTape = ({ className = '', text = '' }) => (
  <div
    className={`px-4 py-1 text-xs font-mono border-y-2 border-dashed border-ink/30 rotate-2 washi-tape-yellow text-ink shadow-sm relative inline-block ${className}`}
  >
    <div className="absolute top-0 bottom-0 left-0 w-2 border-r-2 border-dashed border-ink/20 bg-cream/40" />
    <div className="absolute top-0 bottom-0 right-0 w-2 border-l-2 border-dashed border-ink/20 bg-cream/40" />
    <span className="px-2 select-none">{text || '✦ PORTFOLIO 2026 ✦'}</span>
  </div>
);

export const AvailableBadge = ({ className = '' }) => (
  <div
    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border-2 border-ink bg-mint shadow-brutal-sm text-xs font-mono font-bold text-ink select-none animate-wiggle-slow ${className}`}
  >
    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping absolute" />
    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 relative" />
    ✦ available for work
  </div>
);

export const SparkleDoodle = ({ className = '', fill = '#C9B6F2' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-6 h-6 inline-block select-none ${className}`}
  >
    <path
      d="M12 2C12 2 12.5 8.5 14.5 10.5C16.5 12.5 22 12 22 12C22 12 16.5 11.5 14.5 13.5C12.5 15.5 12 22 12 22C12 22 11.5 15.5 9.5 13.5C7.5 11.5 2 12 2 12C2 12 7.5 12.5 9.5 10.5C11.5 8.5 12 2 12 2Z"
      fill={fill}
      stroke="#141414"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

export const ScribbleUnderline = () => (
  <svg
    viewBox="0 0 100 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-3 absolute left-0 -bottom-2.5 select-none"
    preserveAspectRatio="none"
  >
    <path
      d="M2 8C20 3.5 50 2 98 6M6 10C35 7.5 65 5.5 92 8"
      stroke="#FF5C39"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

export const ClickArrowDoodle = ({ className = '', stroke = '#FF5C39' }) => (
  <svg
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-14 h-14 select-none ${className}`}
  >
    <path
      d="M45 45 C 40 35, 30 25, 20 22 C 15 20, 10 25, 12 30 C 15 35, 25 35, 35 20 C 38 15, 32 10, 25 8"
      stroke={stroke}
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 15 L 25 8 L 32 12"
      stroke={stroke}
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const LongResumeArrow = ({ className = '', stroke = '#FF5C39' }) => (
  <svg
    viewBox="0 0 280 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none ${className}`}
  >
    <path
      d="M15 20 C 45 35, 80 45, 105 32 C 118 25, 122 12, 112 8 C 100 4, 92 20, 110 32 C 135 48, 195 44, 245 18"
      stroke={stroke}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M233 19 L 245 18 L 241 30"
      stroke={stroke}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ShortResumeArrow = ({ className = '', stroke = '#FF5C39' }) => (
  <svg
    viewBox="0 0 120 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none ${className}`}
  >
    <path
      d="M10 25 C 35 35, 50 35, 58 20 C 62 10, 52 5, 48 12 C 44 20, 55 28, 70 33 C 82 37, 95 30, 105 18"
      stroke={stroke}
      strokeWidth="2.0"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M94 20 L 105 18 L 100 28"
      stroke={stroke}
      strokeWidth="2.0"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ShortDiagonalArrow = ({ className = '', stroke = '#FF5C39' }) => (
  <svg
    viewBox="0 0 120 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none ${className}`}
  >
    <path
      d="M10 35 C 35 38, 50 30, 58 20 C 62 10, 52 5, 48 12 C 44 20, 55 25, 75 22 C 90 20, 105 12, 118 2"
      stroke={stroke}
      strokeWidth="2.0"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M106 5 L 118 2 L 116 14"
      stroke={stroke}
      strokeWidth="2.0"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const FolderDoodle = ({ className = '', fill = '#E2D4F0' }) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-10 h-10 inline-block select-none ${className}`}
  >
    <path
      d="M6 10 C 6 8, 8 7, 10 7 L 18 7 C 20 7, 21 9, 23 10 L 32 10 C 34 10, 35 11, 35 13 L 35 31 C 35 33, 34 34, 32 34 L 8 34 C 6 34, 5 33, 5 31 L 5 13 C 5 11, 6 10, 6 10 Z"
      fill={fill}
      stroke="#141414"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 15 L 35 15"
      stroke="#141414"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const MagnifyingGlassDoodle = ({ className = '', fill = '#FAF8F0' }) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-10 h-10 inline-block select-none ${className}`}
  >
    <circle
      cx="16"
      cy="16"
      r="10"
      fill={fill}
      stroke="#141414"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M23 23 L 33 33"
      stroke="#141414"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
  </svg>
);
