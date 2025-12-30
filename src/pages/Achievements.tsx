
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, 
  Award, 
  Star, 
  Medal,
  Calendar,
  Users,
  Target,
  BookOpen
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Achievements = () => {
  const academicAchievements = [
    {
      id: 1,
      title: "State Science Competition Winner",
      description: "Our Grade 9 students won first place in the State Science Fair with their innovative renewable energy project.",
      date: "2024-03-15",
      category: "Academic",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      participants: "Team of 5 students"
    },
    {
      id: 2,
      title: "Mathematics Olympiad Gold Medal",
      description: "Student achieved gold medal in the National Mathematics Olympiad, representing our school at the international level.",
      date: "2024-02-20",
      category: "Academic",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      participants: "Individual Achievement"
    },
    {
      id: 3,
      title: "Best School Performance Award",
      description: "Recognized by the Department of Education for outstanding overall academic performance and student development.",
      date: "2024-01-10",
      category: "Institution",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      participants: "Entire School"
    }
  ];

  const sportsAchievements = [
    {
      id: 4,
      title: "Inter-School Football Championship",
      description: "Our football team won the district championship, showcasing exceptional teamwork and athletic excellence.",
      date: "2024-03-01",
      category: "Sports",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      participants: "Football Team (15 players)"
    },
    {
      id: 5,
      title: "Swimming Championship",
      description: "Multiple students qualified for state-level swimming competitions, bringing home several medals.",
      date: "2024-02-15",
      category: "Sports",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      participants: "Swimming Team (8 students)"
    }
  ];

  const culturalAchievements = [
    {
      id: 6,
      title: "Annual Cultural Festival",
      description: "Our students showcased exceptional talent in music, dance, and drama, winning multiple awards at the regional cultural festival.",
      date: "2024-01-25",
      category: "Cultural",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
      participants: "Cultural Club (25 students)"
    },
    {
      id: 7,
      title: "Art Exhibition Success",
      description: "Student artwork was selected for display at the city art gallery, showcasing creativity and artistic skills.",
      date: "2024-02-05",
      category: "Cultural",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
      participants: "Art Students (12 participants)"
    }
  ];

  const stats = [
    { icon: Trophy, value: "50+", label: "Awards Won" },
    { icon: Medal, value: "15", label: "Gold Medals" },
    { icon: Star, value: "98%", label: "Success Rate" },
    { icon: Users, value: "200+", label: "Achievers" }
  ];

  const allAchievements = [...academicAchievements, ...sportsAchievements, ...culturalAchievements];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Achievements</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Celebrating excellence in academics, sports, and cultural activities. 
              Our students continue to make us proud with their outstanding achievements.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Academic Achievements */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <BookOpen className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Academic Excellence</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {academicAchievements.map((achievement) => (
                <Card key={achievement.id} className="hover:shadow-lg transition-shadow duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-4 left-4">{achievement.category}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{achievement.title}</h3>
                    <p className="text-muted-foreground mb-4">{achievement.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(achievement.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mr-2" />
                        {achievement.participants}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sports Achievements */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <Trophy className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Sports Championships</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {sportsAchievements.map((achievement) => (
                <Card key={achievement.id} className="hover:shadow-lg transition-shadow duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-4 left-4">{achievement.category}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{achievement.title}</h3>
                    <p className="text-muted-foreground mb-4">{achievement.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(achievement.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mr-2" />
                        {achievement.participants}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Cultural Achievements */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <Star className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Cultural Excellence</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {culturalAchievements.map((achievement) => (
                <Card key={achievement.id} className="hover:shadow-lg transition-shadow duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-4 left-4">{achievement.category}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{achievement.title}</h3>
                    <p className="text-muted-foreground mb-4">{achievement.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(achievement.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mr-2" />
                        {achievement.participants}
                      </div>
                    </div>
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

export default Achievements;
