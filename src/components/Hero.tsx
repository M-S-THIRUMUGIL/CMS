
import { Button } from "@/components/ui/button";
import { ChevronRight, BookOpen, Users, Award } from "lucide-react";
import { Link, Navigate, useNavigate } from "react-router-dom";


const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                <Award className="w-4 h-4 mr-2" />
                Excellence in Education Since 1993
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Nurturing Young
                <span className="text-primary"> Minds </span>
                for a Bright Future
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                From Kindergarten to Grade 10, we provide comprehensive education that 
                develops academic excellence, character, and creativity in every student.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to='/#programs'>
                <Button size="lg" className="bg-primary hover:bg-primary/90 group">
                  Explore Programs
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Schedule Visit
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-2">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">300+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg mx-auto mb-2">
                  <BookOpen className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-foreground">30+</div>
                <div className="text-sm text-muted-foreground">Teachers</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mx-auto mb-2">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-foreground">25+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 animate-float">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-primary/10 rounded-lg p-4 text-center">
                    <BookOpen className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-sm font-medium">Academic Excellence</div>
                  </div>
                  <div className="bg-secondary/10 rounded-lg p-4 text-center">
                    <Users className="w-8 h-8 text-secondary mx-auto mb-2" />
                    <div className="text-sm font-medium">Small Classes</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Kindergarten to Grade 10</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-sm">Modern Learning Facilities</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Experienced Faculty</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
