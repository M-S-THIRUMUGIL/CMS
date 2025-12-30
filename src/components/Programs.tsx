
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Baby, 
  BookOpen, 
  Calculator, 
  Globe, 
  Microscope, 
  Palette,
  ChevronRight
} from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: Baby,
      title: "Kindergarten",
      grade: "KG",
      description: "Foundation learning through play-based activities, developing social skills and creativity.",
      features: ["Play-based Learning", "Social Development", "Basic Skills", "Creative Arts"],
      color: "bg-pink-100 text-pink-700"
    },
    {
      icon: BookOpen,
      title: "Primary School",
      grade: "Grades 1-5",
      description: "Building strong fundamentals in reading, writing, and mathematics with interactive learning.",
      features: ["Core Subjects", "Reading Skills", "Mathematics", "Science Basics"],
      color: "bg-blue-100 text-blue-700"
    },
    {
      icon: Calculator,
      title: "Middle School",
      grade: "Grades 6-8",
      description: "Advanced learning with specialized subjects and preparation for higher education.",
      features: ["Advanced Math", "Science Labs", "Language Arts", "Social Studies"],
      color: "bg-green-100 text-green-700"
    },
    {
      icon: Microscope,
      title: "Secondary School",
      grade: "Grades 9-10",
      description: "Comprehensive education preparing students for higher studies and career choices.",
      features: ["Board Preparation", "Career Guidance", "Advanced Sciences", "Life Skills"],
      color: "bg-purple-100 text-purple-700"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary">Our Programs</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Comprehensive Education Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From early childhood to secondary education, we provide a structured learning path 
            that nurtures every aspect of your child's development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 rounded-2xl ${program.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <program.icon className="w-8 h-8" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold">{program.title}</CardTitle>
                <CardDescription className="text-sm font-medium text-primary">
                  {program.grade}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {program.description}
                </p>
                <div className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
