
import { Users, BookOpen, Award, GraduationCap } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: "300+",
      label: "Happy Students",
      color: "text-primary"
    },
    {
      icon: BookOpen,
      number: "30+",
      label: "Expert Teachers",
      color: "text-secondary"
    },
    {
      icon: Award,
      number: "100%",
      label: "Success Rate",
      color: "text-accent"
    },
    {
      icon: GraduationCap,
      number: "10+",
      label: "Years Experienced Teachers",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-foreground">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
