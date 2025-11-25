import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const VideoPlayerPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate video loading
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const videoTitleVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const pageVariants = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
    exit: { opacity: 0, y: 100, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="container mx-auto p-8"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="bg-gray-900 text-white shadow-lg">
              <div className="aspect-w-16 aspect-h-9 bg-gray-800 flex items-center justify-center">
                {/* Placeholder for Video Player */}
                <span className="text-gray-500">Video Player Placeholder</span>
              </div>
              <motion.div
                className="p-4"
                variants={videoTitleVariants}
                initial="initial"
                animate="animate"
              >
                <h1 className="text-2xl font-bold mb-2">Awesome Video Title</h1>
                <p className="text-gray-400">Published on: October 26, 2023</p>
                <p className="mt-4">This is a description of the video. It provides context and information about the content. Enjoy watching!</p>
                <div className="mt-4">
                  <Button variant="outline">Like</Button>
                  <Button variant="outline" className="ml-2">Share</Button>
                </div>
              </motion.div>
            </Card>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Related Videos</h2>
            <ul>
              {Array.from({ length: 5 }).map((_, index) => (
                <li key={index} className="mb-2">
                  <Card className="bg-gray-900 text-white shadow-md hover:scale-105 transition-all duration-300">
                    <div className="flex items-center gap-4 p-3">
                      <div className="w-24 h-16 bg-gray-800"></div>
                      <div>
                        <h3 className="text-sm font-semibold">Related Video {index + 1}</h3>
                        <p className="text-xs text-gray-400">Channel Name</p>
                      </div>
                    </div>
                  </Card>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default VideoPlayerPage;
