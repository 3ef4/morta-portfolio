import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { ProjectGallery } from "./ProjectGallery";

const projects = [
  {
    id: 1,
    title: "نظام إدارة الامتحانات واللجان الامتحانية",
    titleEn: "Examination and Exam Committees Management System",
    description:
      "نظام متكامل لإدارة الامتحانات واللجان الامتحانية في الجامعات العراقية، يسهّل عملية تنظيم القاعات والمراقبين وتوزيع الطلاب.",
    tags: ["Python", "HTML/CSS", "ERP Systems"],
    coverImage: "/projects/exam-system/exam-system-1.png",
    images: [
      "/projects/exam-system/exam-system-1.png",
      "/projects/exam-system/exam-system-2.png",
      "/projects/exam-system/exam-system-3.png",
      "/projects/exam-system/exam-system-4.png",
      "/projects/exam-system/exam-system-5.png",
      "/projects/exam-system/exam-system-6.png",
      "/projects/exam-system/exam-system-7.png",
    ],
  },
  {
    id: 2,
    title: "جُزدان - تطبيق إدارة المحفظة الشخصية",
    titleEn: "Cüzdan - Personal Wallet & Budget Tracker",
    description:
      "تطبيق لإدارة الميزانية الشخصية، يساعد المستخدم على تتبع الواردات والمصروفات، إدارة الفواتير والديون والمدخرات، وتطبيق قاعدة 80/20 لتوزيع الميزانية بذكاء.",
    tags: ["Flutter", "Dart", "Mobile App"],
    coverImage: "/projects/cuzdan/cuzdan-1.jpg",
    images: [
      "/projects/cuzdan/cuzdan-0.jpg",
      "/projects/cuzdan/cuzdan-1.jpg",
      "/projects/cuzdan/cuzdan-2.jpg",
      "/projects/cuzdan/cuzdan-3.jpg",
      "/projects/cuzdan/cuzdan-4.jpg",
      "/projects/cuzdan/cuzdan-5.jpg",
      "/projects/cuzdan/cuzdan-6.jpg",
      "/projects/cuzdan/cuzdan-7.jpg",
      "/projects/cuzdan/cuzdan-8.jpg",
      "/projects/cuzdan/cuzdan-9.jpg",
    ],
  },
];

export const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here is a project I built. Click on it to view the full gallery.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover cursor-pointer"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.coverImage}
                  alt={project.titleEn}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white flex items-center gap-2 text-sm font-medium">
                    <ImageIcon size={18} /> عرض جميع الصور ({project.images.length})
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeProject && (
        <ProjectGallery
          images={activeProject.images}
          title={activeProject.title}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
};