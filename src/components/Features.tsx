
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  Monitor, 
  Trophy, 
  Heart, 
  Clock, 
  Shield,
  BookOpen,
  Palette,
  Music
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Maximum 20 students per class ensuring personalized attention for every child."
    },
    {
      icon: Monitor,
      title: "Modern Technology",
      description: "Smart classrooms with interactive whiteboards and digital learning tools."
    },
    {
      icon: Trophy,
      title: "Excellence Awards",
      description: "Recognition programs that celebrate academic achievements and character development."
    },
    {
      icon: Heart,
      title: "Caring Environment",
      description: "Nurturing atmosphere where every student feels valued, safe, and supported."
    },
    {
      icon: Shield,
      title: "Safe Campus",
      description: "Secure environment with CCTV monitoring and security personnel."
    },
    {
      icon: BookOpen,
      title: "Rich Curriculum",
      description: "In addition to the Tamil Nadu State Board syllabus, our school offers enhanced learning programs in General Knowledge, Computer Science, and Spoken English, curated by reputed publishers to ensure quality education."
    },
    {
      icon: Palette,
      title: "Arts & Creativity",
      description: "Dedicated art, craft, and design classes to nurture creative expression."
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Choose  Crescent Matriculation School?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide more than just education - we create an environment where children 
            thrive academically, socially, and emotionally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300 border-0">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
