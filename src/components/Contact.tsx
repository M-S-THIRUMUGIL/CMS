
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";



const Contact = () => {
          const SCHOOL_WHATSAPP = "919578134221"; // no +

          const [formData, setFormData] = useState({
          parentName: "",
          childName: "",
          email: "",
          phone: "",
          grade: "",
          message: "",
        });

        const handleChange = (
          e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        };

        const handleSendMessage = () => {
          const whatsappMessage = `
        New Enquiry - Crescent Matriculation School

        Parent Name: ${formData.parentName}
        Child Name: ${formData.childName}
        Grade Interested: ${formData.grade}

        Phone: ${formData.phone}
        Email: ${formData.email}

        Message:
        ${formData.message}
          `;

          window.open(
            `https://wa.me/${SCHOOL_WHATSAPP}?text=${encodeURIComponent(
              whatsappMessage
            )}`,
            "_blank"
          );
        };


  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to give your child the best education? Contact us today to learn more 
            about our programs or schedule a school tour.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Address</div>
                    <div className="text-muted-foreground">112A, Team Garden, E.C.Road,<br/>
                      Ammapattinam, Manamelkudi(TK), <br/>
                      Pudukkottai(DT), 614 617.</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Phone</div>
                    <div className="text-muted-foreground">School: +91 63858 58326 <br/> Principal: +91 88701 01315, +91 95787 17353</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <div className="text-muted-foreground">crescentmatricuationschoolamp@gmail.com, crescentmatricschool@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">School Hours</div>
                    <div className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 3:30 PM<br />
                      Office Hours: 9:30 AM - 4:30 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {/* Contact Form */}
          <Card className="bg-white border-0">
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Parent Name
                  </label>
                  <Input
                    name="parentName"
                    placeholder="Your full name"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Child's Name
                  </label>
                  <Input
                    name="childName"
                    placeholder="Child's name"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Phone
                  </label>
                  <Input
                    name="phone"
                    placeholder="(555) 123-4567"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Grade Level of Interest
                </label>
                <Input
                  name="grade"
                  placeholder="e.g., Kindergarten, Grade 3"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea
                  name="message"
                  placeholder="Tell us about your child and any questions you have..."
                  className="min-h-[100px]"
                  onChange={handleChange}
                />
              </div>

              <Button
                className="w-full bg-primary hover:bg-primary/90"
                onClick={handleSendMessage}
              >
                Send Message
              </Button>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default Contact;
