import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { motion } from 'framer-motion';

const videoData = [
  { id: '1', title: 'Video 1', thumbnail: 'https://images.unsplash.com/photo-1682685797584-c3967351b144?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: '2', title: 'Video 2', thumbnail: 'https://images.unsplash.com/photo-1703543904460-906d18521394?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: '3', title: 'Video 3', thumbnail: 'https://images.unsplash.com/photo-1703634254732-2d8214884086?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: '4', title: 'Video 4', thumbnail: 'https://images.unsplash.com/photo-1703440892713-5c02ab098994?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: '5', title: 'Video 5', thumbnail: 'https://images.unsplash.com/photo-1703511244449-9ad11f895910?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: '6', title: 'Video 6', thumbnail: 'https://images.unsplash.com/photo-1703482336752-c033995dd6e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: '7', title: 'Video 7', thumbnail: 'https://images.unsplash.com/photo-1703531411923-ef3c297e7b2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: '8', title: 'Video 8', thumbnail: 'https://images.unsplash.com/photo-1703414564535-919152838181?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const HomePage: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
    >
      {loading
        ? Array.from({ length: 8 }).map((_, index) => (
            <motion.div key={index} variants={item}>
              <Card>
                <CardContent className="p-4">
                  <Skeleton className="h-40 w-full" />
                  <Skeleton className="h-4 w-3/4 mt-2" />
                </CardContent>
              </Card>
            </motion.div>
          ))
        : videoData.map((video) => (
            <motion.div key={video.id} variants={item} whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}>
              <Card className="overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110"
                />
                <CardContent className="p-4">
                  <h3 className="text-sm font-semibold line-clamp-1">{video.title}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
    </motion.div>
  );
};

export default HomePage;
