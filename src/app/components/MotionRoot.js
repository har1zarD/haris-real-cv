'use client';

import { MotionConfig } from 'framer-motion';

export default function MotionRoot({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
