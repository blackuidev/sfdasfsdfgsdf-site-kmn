import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Youtube } from 'lucide-react';

interface Comment {
  id: number;
  user: string;
  avatar: string;
  text: string;
  likes: number;
  timestamp: string;
}

interface VideoDetail {
  title: string;
  channel: string;
  channelAvatar: string;
  views: string;
  likes: string;
  description: string;
}

const initialVideoDetails: VideoDetail = {
  title: 'The Ultimate Guide to Modern UI Design with Tailwind CSS',
  channel: 'Web Dev Mastery',
  channelAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww',
  views: '1.5M views',
  likes: '50K Likes',
  description: 'Learn how to build stunning, responsive user interfaces with Tailwind CSS. This comprehensive guide covers everything from basic concepts to advanced techniques, including utility-first principles, custom configurations, and modern design patterns. Perfect for front-end developers looking to elevate their skills.'
};

const initialComments: Comment[] = [
  {
    id: 1,
    user: 'Alice Smith',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fHww',
    text: 'Incredible tutorial! Really helped me understand Tailwind CSS better.',
    likes: 120,
    timestamp: '2 hours ago'
  },
  {
    id: 2,
    user: 'Bob Johnson',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a132907c241?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww',
    text: 'Great explanations and practical examples. Thanks!',
    likes: 85,
    timestamp: '5 hours ago'
  },
  {
    id: 3,
    user: 'Charlie Brown',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
    text: 'I wish I had found this sooner. So much cleaner code now.' ,
    likes: 200,
    timestamp: '1 day ago'
  }
];

const relatedVideos = [
  { id: 1, title: 'Advanced CSS Animations', thumbnailUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZSUyMHdpdGh 
 fGNvZGV8ZW58MHx8MHx8fDA%3D', channel: 'CodeCraft' },
  { id: 2, title: 'React Performance Optimization', thumbnailUrl: 'https://images.unsplash.com/photo-1488554378837-04f384a93aef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZGV8ZW58MHx8MHx8fDA%3D', channel: 'React Masters' },
  { id: 3, title: 'Building APIs with Node.js', thumbnailUrl: 'https://images.unsplash.com/photo-1597734155184-391001d8592a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvZGV8ZW58MHx8MHx8fDA%3D', channel: 'Backend Gurus' },
  { id: 4, title: 'JavaScript ES6+ Features', thumbnailUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910dfc1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZGV8ZW58MHx8MHx8fDA%3D', channel: 'JS Ninja' },
];

const VideoPlayerPage: React.FC = () => {
  const [videoDetails] = useState<VideoDetail>(initialVideoDetails);
  const [comments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentObj: Comment = {
        id: comments.length + 1,
        user: 'CurrentUser',
        avatar: 'https://images.unsplash.com/photo-1599837299172-d34f40467279?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
        text: newComment,
        likes: 0,
        timestamp: 'Just now'
      };
      // In a real app, you would send this to a backend.
      // For now, we add it to the state.
      setComments([newCommentObj, ...comments]);
      setNewComment('');
    }
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-4 md:p-8 lg:p-12"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Video Player and Details */}
        <div className="lg:w-3/4 flex flex-col gap-6">
          <Card className="bg-transparent border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">{videoDetails.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                {/* Placeholder for Video Player */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <Youtube className="h-20 w-20 text-white/70 animate-pulse" />
                  <span className="ml-4 text-xl font-semibold text-white/70">Video Player Placeholder</span>
                </div>
                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZSUyMHdpdGggY29kZXxlbnwwfHwwfHx8MA%3D%3D" alt="Video Thumbnail" className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={videoDetails.channelAvatar} />
                    <AvatarFallback>WD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold hover:text-primary transition-colors duration-300 cursor-pointer">{videoDetails.channel}</p>
                    <p className="text-sm text-muted-foreground">{videoDetails.views}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button variant="ghost" className="flex items-center gap-1 hover:bg-primary/20">
                    <span className="text-lg">👍</span> {videoDetails.likes}
                  </Button>
                  <Button variant="ghost" className="hover:bg-primary/20">
                    <span>Share</span>
                  </Button>
                  <Button variant="ghost" className="hover:bg-primary/20">
                    <span>More</span>
                  </Button>
                </div>
              </div>
              <Separator className="my-4 bg-gray-700" />
              <p className="text-muted-foreground leading-relaxed">{videoDetails.description}</p>
            </CardContent>
          </Card>

          {/* Comments Section */}
          <Card className="bg-transparent border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Comments ({comments.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-6">
                <Avatar>
                  <AvatarImage src="https://images.unsplash.com/photo-1599837299172-d34f40467279?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" />
                  <AvatarFallback>UC</AvatarFallback>
                </Avatar>
                <Input
                  type="text"
                  placeholder="Add a comment..."
                  value={newComment}
                  onChange={handleCommentChange}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}
                  className="flex-1 bg-gray-800 border-gray-700 focus-visible:ring-primary"
                />
                <Button onClick={handleAddComment} disabled={!newComment.trim()} className="hover:bg-primary/90">
                  Comment
                </Button>
              </div>
              <ScrollArea className="h-[400px] pr-4">
                {comments.map(comment => (
                  <motion.div
                    key={comment.id}
                    className="flex items-start gap-4 mb-6 p-4 rounded-lg hover:bg-gray-800/50 transition-colors duration-300"
                    whileHover={{ scale: 1.01 }}
                  >
                    <Avatar>
                      <AvatarImage src={comment.avatar} />
                      <AvatarFallback>{comment.user.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold hover:text-primary transition-colors duration-300 cursor-pointer">{comment.user}</p>
                        <p className="text-xs text-muted-foreground">• {comment.timestamp}</p>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2 leading-relaxed">{comment.text}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <Button variant="ghost" className="p-0 h-auto hover:text-white">
                          <span className="text-lg mr-1">👍</span> {comment.likes}
                        </Button>
                        <Button variant="ghost" className="p-0 h-auto hover:text-white">Reply</Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        {/* Related Videos Sidebar */}
        <div className="lg:w-1/4">
          <Card className="bg-transparent border-gray-700 sticky top-8">
            <CardHeader>
              <CardTitle className="text-lg font-bold">Up Next</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                {relatedVideos.map(video => (
                  <motion.div
                    key={video.id}
                    className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-800/50 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <img src={video.thumbnailUrl} alt={video.title} className="w-24 h-16 object-cover rounded-md flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm font-medium line-clamp-2 leading-snug hover:text-primary transition-colors duration-300">{video.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{video.channel}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoPlayerPage;
