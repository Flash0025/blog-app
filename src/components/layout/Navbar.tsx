import { Bell, BookOpen, Search, Settings, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Navbar() {
  return (
    <nav className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-4">
            <BookOpen className="h-8 w-8" />
            <h1 className="text-xl font-bold">Premium Blog</h1>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/"><Button variant="ghost">Home</Button></Link>
            <Link to="/articles"><Button variant="ghost">Articles</Button></Link>
            <Link to="/categories"><Button variant="ghost">Categories</Button></Link>
            <Link to="/about"><Button variant="ghost">About</Button></Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" />
              <AvatarFallback><User /></AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </nav>
  );
}