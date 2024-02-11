export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Mart</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Front End</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          A passionate Front End Developer crafting engaging, user-centric digital experiences. Specializing in bringing creative concepts to life with intuitive, responsive web interfaces using cutting-edge technologies.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/person1.png" alt="Hero Section" />
      </div>
    </section>
  );
}
