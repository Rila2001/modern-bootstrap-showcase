import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)]">
              <img
                src={aboutImage}
                alt="About us - Professional team collaboration"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              About
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {" "}
                Our Story
              </span>
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              We are a team of passionate professionals dedicated to creating exceptional digital experiences. With years of expertise in web development, design, and digital marketing, we help businesses achieve their goals.
            </p>
            <p className="text-muted-foreground text-lg mb-6">
              Our mission is to deliver innovative solutions that not only meet but exceed our clients' expectations. We believe in building long-term partnerships and creating value through cutting-edge technology and creative design.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">100+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">50+</h3>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
