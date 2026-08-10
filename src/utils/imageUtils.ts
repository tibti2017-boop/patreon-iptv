import type React from 'react';

export const getChannelFallback = (name: string) => {
  const cleanName = (name || 'TV').replace(/[^a-zA-Z0-9\s+]/g, '').trim().slice(0, 10) || 'TV';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0 0 120 40"><rect width="100%" height="100%" fill="#18181b" rx="6" stroke="#f97316" stroke-width="1.5"/><text x="50%" y="50%" font-family="sans-serif" font-weight="900" font-size="11" fill="#ffffff" text-anchor="middle" dominant-baseline="central">${cleanName}</text></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

export const getPosterFallback = (title: string) => {
  const cleanTitle = (title || 'STREAM').replace(/[^a-zA-Z0-9\s]/g, '').trim().slice(0, 18) || 'STREAM';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="450" viewBox="0 0 300 450"><rect width="100%" height="100%" fill="#09090b"/><rect x="15" y="15" width="270" height="420" fill="#18181b" rx="12" stroke="#27272a" stroke-width="2"/><circle cx="150" cy="200" r="40" fill="#f97316" opacity="0.2"/><path d="M140 180 L170 200 L140 220 Z" fill="#f97316"/><text x="50%" y="280" font-family="sans-serif" font-weight="900" font-size="16" fill="#ffffff" text-anchor="middle" dominant-baseline="middle">${cleanTitle}</text><text x="50%" y="310" font-family="sans-serif" font-weight="700" font-size="11" fill="#f97316" text-anchor="middle" dominant-baseline="middle">PATREON IPTV 4K</text></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

export const handleChannelImageError = (
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  name: string
) => {
  const target = e.currentTarget;
  target.onerror = null; // Strictly prevent infinite loops
  target.referrerPolicy = 'no-referrer';
  target.src = getChannelFallback(name);
};

export const handlePosterImageError = (
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  title: string
) => {
  const target = e.currentTarget;
  target.onerror = null; // Strictly prevent infinite loops
  target.referrerPolicy = 'no-referrer';
  target.src = getPosterFallback(title);
};
