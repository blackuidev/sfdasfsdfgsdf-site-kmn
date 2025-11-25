import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Home, TrendingUp, Subscription, Library, History, Clock, PlayCircle, Film, Award, Settings, Flag, MessageSquare, Lightbulb } from 'lucide-react';

const sidebarItems = [
  { icon: Home, label: 'Home', link: '/' },
  { icon: TrendingUp, label: 'Trending', link: '/trending' },
  { icon: Subscription, label: 'Subscriptions', link: '/subscriptions' },
  { icon: Library, label: 'Library', link: '/library' },
  { icon: History, label: 'History', link: '/history' },
  { icon: Clock, label: 'Watch Later', link: '/watch-later' },
  { icon: PlayCircle, label: 'Your Videos', link: '/your-videos' },
  { icon: Film, label: 'Your Movies', link: '/your-movies' },
  { icon: Award, label: 'Your Channel', link: '/your-channel' },
  { icon: Settings, label: 'Settings', link: '/settings' },
  { icon: Flag, label: 'Report History', link: '/report-history' },
  { icon: MessageSquare, label: 'Help', link: '/help' },
  { icon: Lightbulb, label: 'Feedback', link: '/feedback' },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const variants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      opacity: 0,
      x: '-100%',
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-y-0 left-0 z-40 w-64 md:w-72 lg:w-80 border-r border-white/10 bg-black/70 backdrop-blur-md shadow-lg p-4 flex flex-col"
          variants={variants}
          initial="closed"
          animate="open"
          exit="closed"
          style={{ borderImageSource: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)' }},
          // @ts-ignore
          borderImageSlice: 1
        >
          <div className="flex items-center justify-between mb-6 px-2">
            <div className="flex items-center gap-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full_color_icon_%282017%29.svg/2560px-YouTube_full_color_icon_%282017%29.svg.png" alt="YouTube Logo" className="h-8 w-auto" />
              <h2 className="text-2xl font-bold text-white">YouTube</h2>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
            {sidebarItems.map((item, index) => (
              <motion.div
                key={index}
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                custom={index}
                className="mb-1"
              >
                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-start gap-3 text-lg text-gray-300 hover:bg-white/10 hover:text-white py-3 transition-colors duration-200"
                >
                  <a href={item.link}>
                    <item.icon className="h-6 w-6" />
                    <span className="truncate">{item.label}</span>
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="mt-auto pt-4 border-t border-white/10">
            <Button
              variant="ghost"
              onClick={toggleSidebar}
              className="w-full justify-start gap-3 text-lg text-gray-300 hover:bg-white/10 hover:text-white py-3 transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isExpanded ? "M11 17l-5-5m0 0l5-5m-5 5h12" : "M13 5l7 7-7 7M5 5l7 7-7 7"} />
              </svg>
              <span className="truncate">{isExpanded ? 'Collapse' : 'Expand'}</span>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
