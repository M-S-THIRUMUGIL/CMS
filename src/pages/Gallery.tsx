
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Images, 
  Video, 
  Calendar,
  MapPin,
  Play,
  Download
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Gallery = () => {
  const imageGallery = [
    {
      id: 1,
      title: "Science Laboratory",
      category: "Facilities",
      date: "2024-01-15",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Computer Lab Session",
      category: "Technology",
      date: "2024-01-20",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Student Learning",
      category: "Classroom",
      date: "2024-02-05",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Modern Technology",
      category: "Innovation",
      date: "2024-02-10",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Digital Learning",
      category: "Technology",
      date: "2024-02-15",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Programming Class",
      category: "Computer Science",
      date: "2024-02-20",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const videoGallery = [
    {
      id: 1,
      title: "School Tour 2024",
      category: "Campus Life",
      duration: "5:30",
      thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Science Fair Highlights",
      category: "Events",
      duration: "3:45",
      thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Annual Sports Day",
      category: "Sports",
      duration: "7:20",
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Graduation Ceremony",
      category: "Events",
      duration: "12:15",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const categories = ["All", "Facilities", "Technology", "Events", "Sports", "Classroom"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              School <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our vibrant school life through photos and videos showcasing 
              our facilities, events, and student achievements.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Photo Gallery */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <Images className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Photo Gallery</h2>
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Photo Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {imageGallery.map((item) => (
                <Card key={item.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button size="sm" variant="secondary">
                        <Download className="w-4 h-4 mr-2" />
                        View Full Size
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{item.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(item.date).toLocaleDateString()}
                      </div>
                    </div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Video Gallery */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <Video className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Video Gallery</h2>
            </div>

            {/* Video Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {videoGallery.map((item) => (
                <Card key={item.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Button size="lg" className="rounded-full w-16 h-16 p-0">
                        <Play className="w-6 h-6" />
                      </Button>
                    </div>
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {item.duration}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{item.category}</Badge>
                    </div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
