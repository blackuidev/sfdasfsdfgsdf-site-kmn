import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { YouTube } from 'lucide-react';

// Placeholder for video data
interface Video {
  id: number;
  title: string;
  thumbnailUrl: string;
  channel: string;
  views: string;
}

const sampleVideos: Video[] = [
  { id: 1, title: 'The Future of AI in Gaming', thumbnailUrl: 'https://images.unsplash.com/photo-1593720213414-28a52f55f487?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', channel: 'Tech Insights', views: '1.2M' },
  { id: 2, title: 'Epic Travel Vlog: Japan', thumbnailUrl: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', channel: 'Wanderlust', views: '5.8M' },
  { id: 3, title: 'DIY Home Renovation Project', thumbnailUrl: 'https://images.unsplash.com/photo-1600585154347-97c607095017?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', channel: 'DIY Masters', views: '850K' },
  { id: 4, title: 'Learn Python in 10 Hours', thumbnailUrl: 'https://images.unsplash.com/photo-1580898618175-e8249477365c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', channel: 'Code Academy', views: '2.1M' },
  { id: 5, title: 'Amazing Cooking Recipes', thumbnailUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', channel: 'Foodie Fun', views: '3.5M' },
  { id: 6, title: 'Space Exploration: Mars Mission', thumbnailUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', channel: 'Cosmos Discoveries', views: '980K' },
];

const HomePage: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const heroText = "Discover Your Next Favorite Video";
  const words = heroText.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-4 md:p-8 lg:p-12">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 mb-16">
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">
          {isClient && (
            <AnimatePresence>
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  variants={childVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </AnimatePresence>
          )}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 text-center mb-10 max-w-3xl">Dive into a world of endless entertainment, knowledge, and creativity. Your journey starts here.</p>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <Button variant="outline" className="text-lg px-8 py-4 border-2 border-primary hover:bg-primary hover:text-black transition-colors duration-300">
            Explore Now <YouTube className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </section>

      <Separator className="my-16 bg-gray-700" />

      {/* Video Grid Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-center text-primary">Featured Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sampleVideos.map((video) => (
            <motion.div
              key={video.id}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer"
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <AspectRatio ratio={16 / 9} className="bg-muted">
                    <img
                      src={video.thumbnailUrl}
                      alt={video.title}
                      className="rounded-t-lg object-cover"
                    />
                  </AspectRatio>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold truncate mb-1">{video.title}</h3>
                    <p className="text-sm text-gray-400 mb-2">{video.channel}</p>
                    <p className="text-xs text-gray-500">{video.views} views</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <Separator className="my-16 bg-gray-700" />

      {/* Trending Videos Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-center text-secondary">Trending Now</h2>
        <ScrollArea className="h-[400px] w-full rounded-md border-white/10 bg-white/5 backdrop-blur-sm p-4">
          <div className="flex flex-col gap-4 pr-4">
            {sampleVideos.slice(0, 5).map((video) => (
              <motion.div
                key={video.id}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/10 transition-colors duration-300"
                whileHover={{ scale: 1.01 }}
              >
                <img src={video.thumbnailUrl} alt={video.title} className="w-24 h-16 object-cover rounded-md" />
                <div className="flex-1">
                  <h3 className="text-md font-semibold truncate">{video.title}</h3>
                  <p className="text-sm text-gray-400">{video.channel}</p>
                  <p className="text-xs text-gray-500 mt-1">{video.views} views</p>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </section>

      {/* Recommended Section (Optional Placeholder) */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-center text-accent">Recommended For You</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
           {sampleVideos.slice(3, 5).map((video) => (
            <motion.div
              key={video.id + 100} 
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer"
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <AspectRatio ratio={16 / 9} className="bg-muted">
                    <img
                      src={video.thumbnailUrl}
                      alt={video.title}
                      className="rounded-t-lg object-cover"
                    />
                  </AspectRatio>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold truncate mb-1">{video.title}</h3>
                    <p className="text-sm text-gray-400 mb-2">{video.channel}</p>
                    <p className="text-xs text-gray-500">{video.views} views</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
