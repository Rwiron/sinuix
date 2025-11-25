import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  image?: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  img: string;
  description?: string;
  client?: string;
  completionDate?: string;
  news?: NewsItem[];
}

export enum SectionId {
  HOME = 'home',
  SERVICES = 'services',
  ABOUT = 'about',
  PROJECTS = 'projects',
  CONTACT = 'contact'
}