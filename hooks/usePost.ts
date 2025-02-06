"use client"
import { PostContext } from '@/context/PostContext';
import { useContext } from 'react';
export default function usePost() {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error('usePost must be used within a PostProvider');
  }
  return context;
}