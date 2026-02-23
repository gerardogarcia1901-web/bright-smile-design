interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
}

const PageHero = ({ title, subtitle, image, imageAlt }: PageHeroProps) => {
  return (
    <section className="relative min-h-[50vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, hsla(210, 15%, 12%, 0.75), hsla(82, 40%, 18%, 0.6))",
          }}
        />
      </div>
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-20">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground leading-tight opacity-0 animate-fade-up">
            {title}
          </h1>
          {subtitle && (
            <p
              className="mt-4 font-body text-lg text-primary-foreground/85 leading-relaxed opacity-0 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
