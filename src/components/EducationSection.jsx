import { GraduationCap } from "lucide-react";

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Education</span>
        </h2>

        <div className="gradient-border p-8 card-hover max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-primary/10">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-lg">
                Bachelor of Engineering in Medical Instrumentation
                Techniques Engineering
              </h4>
              <p className="text-muted-foreground mt-1">
                Al-Farahidi University — Medical Technical College
              </p>
              <p className="text-primary mt-1 font-medium">2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};