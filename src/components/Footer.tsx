
import { GraduationCap, Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Crescent Matriculation School</h3>
                <p className="text-sm text-white/70">Excellence in Education</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Nurturing young minds from Kindergarten to Grade 10 with comprehensive 
              education that builds character, creativity, and academic excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a></li>
              <li><a href="#programs" className="text-white/80 hover:text-white transition-colors">Programs</a></li>
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#admissions" className="text-white/80 hover:text-white transition-colors">Admissions</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Programs</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-white/80">Kindergarten</li>
              <li className="text-white/80">Primary School (1-5)</li>
              <li className="text-white/80">Middle School (6-8)</li>
              <li className="text-white/80">Secondary School (9-10)</li>
              <li className="text-white/80">Extra-curricular Activities</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-sm text-white/80">
              <p>112A, Team Garden, Ammapattinam,</p>
              <p>Manamelkudi, Pudukkottai, 614 617.</p>
              <p>Phone: +91 63858 58326</p>
              <p>Email: crescentmatricuationschoolamp@gmail.com</p>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/70 text-sm">
            © {currentYear} Crescent Matriculation School. All rights reserved. | 
            <span className="ml-1">Empowering minds, shaping futures.</span>
          </p> <br/>
          <p className="text-white/70 text-sm" >Develper contact : @the_cyberer</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
