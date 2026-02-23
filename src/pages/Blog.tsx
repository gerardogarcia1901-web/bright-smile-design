import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Clock, ArrowRight } from "lucide-react";
import blog1 from "@/assets/blog-1.webp";
import blog2 from "@/assets/blog-2.webp";
import blog3 from "@/assets/blog-3.webp";
import heroImage from "@/assets/hero-dental.webp";

const posts = [
  {
    title: "5 hábitos para una sonrisa saludable",
    excerpt:
      "Descubre las prácticas diarias que los odontólogos recomiendan para mantener tu salud bucal en óptimas condiciones durante toda la vida.",
    date: "15 Feb 2026",
    readTime: "4 min",
    image: blog1,
    category: "Salud Bucal",
  },
  {
    title: "La importancia del hilo dental",
    excerpt:
      "Muchos pacientes subestiman el poder del hilo dental. Te explicamos por qué es indispensable y cómo usarlo correctamente.",
    date: "10 Feb 2026",
    readTime: "3 min",
    image: blog2,
    category: "Higiene",
  },
  {
    title: "Tecnología 3D en odontología moderna",
    excerpt:
      "Escáneres intraorales, impresiones 3D y radiografías digitales: cómo la tecnología está transformando los tratamientos dentales.",
    date: "5 Feb 2026",
    readTime: "5 min",
    image: blog3,
    category: "Tecnología",
  },
];

const Blog = () => {
  const introAnim = useScrollAnimation();

  return (
    <main>
      <Navbar />
      <PageHero
        title="Blog"
        subtitle="Consejos, novedades y artículos sobre salud dental."
        image={heroImage}
        imageAlt="Blog de salud dental"
      />

      <section className="py-24 bg-gray-light">
        <div className="container mx-auto px-6 lg:px-12">
          <div
            ref={introAnim.ref}
            className={`text-center mb-16 transition-all duration-700 ${
              introAnim.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Artículos Recientes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <BlogCard key={post.title} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

const BlogCard = ({
  post,
  index,
}: {
  post: (typeof posts)[0];
  index: number;
}) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <article
      ref={ref}
      className={`group rounded-xl overflow-hidden bg-background shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-2 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute top-4 left-4 px-3 py-1 rounded-md bg-primary-bright text-primary-foreground font-body text-xs font-semibold">
          {post.category}
        </span>
      </div>
      <div className="p-8">
        <div className="flex items-center gap-4 text-muted-foreground mb-3">
          <span className="font-body text-xs">{post.date}</span>
          <span className="flex items-center gap-1 font-body text-xs">
            <Clock size={12} /> {post.readTime}
          </span>
        </div>
        <h3 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-primary-bright transition-colors">
          {post.title}
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
          {post.excerpt}
        </p>
        <span className="inline-flex items-center gap-1 font-body text-sm font-medium text-primary-bright">
          Leer más <ArrowRight size={14} />
        </span>
      </div>
    </article>
  );
};

export default Blog;
