import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Menu, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Trending', href: '/trending' },
    { name: 'Subscriptions', href: '/subscriptions' },
    { name: 'Library', href: '/library' },
  ];

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const mobileItemVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <motion.header
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="sticky top-0 z-50 w-full backdrop-blur-xl bg-gradient-to-br from-gray-900/80 to-black/80 border-b border-white/20 py-4 px-6 md:px-12 flex items-center justify-between transition-all duration-300"
    >
      <div className="flex items-center gap-8">
        <motion.div variants={itemVariants} className="flex items-center gap-2 cursor-pointer">
          <img src="/logo-placeholder.svg" alt="Logo" className="h-8 w-auto" />
          <span className="text-2xl font-bold text-white hidden md:inline-block">VidStream</span>
        </motion.div>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              variants={itemVariants}
              whileHover={{ scale: 1.05, color: '#ffffff' }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {item.name}
            </motion.a>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <motion.div variants={itemVariants} className="relative hidden md:flex items-center">
          <Input
            type="text"
            placeholder="Search videos..."
            className="w-64 bg-white/10 border-white/20 placeholder:text-muted-foreground focus:ring-primary focus:border-primary"
          />
          <Button
            size="icon"
            variant="ghost"
            className="absolute right-2 hover:bg-white/20 transition-colors duration-200"
          >
            <Search className="h-5 w-5 text-white" />
          </Button>
        </motion.div>

        <motion.div variants={itemVariants} className="md:hidden">
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:bg-white/20"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback className="bg-primary/20 text-primary">CN</AvatarFallback>
          </Avatar>
        </motion.div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-br from-gray-900/90 to-black/90 border-b border-white/20 p-6 flex flex-col gap-4"
          variants={{
            hidden: { height: 0, opacity: 0 },
            visible: { height: 'auto', opacity: 1, transition: { duration: 0.5 } },
          }}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <div className="relative flex items-center">
            <Input
              type="text"
              placeholder="Search videos..."
              className="flex-1 bg-white/10 border-white/20 placeholder:text-muted-foreground focus:ring-primary focus:border-primary"
            />
            <Button
              size="icon"
              variant="ghost"
              className="absolute right-2 hover:bg-white/20"
            >
              <Search className="h-5 w-5 text-white" />
            </Button>
          </div>
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              variants={mobileItemVariants}
              className="text-white text-lg py-2"
            >
              {item.name}
            </motion.a>
          ))}
          <Button className="w-full justify-start pl-4" variant="outline">
            <User className="mr-2 h-4 w-4" /> Login / Sign Up
          </Button>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
