export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img
          src={`${process.env.PUBLIC_URL}/img/about-me.png`}
          alt="About Me"
        />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo alias modi labore, libero, fugiat nobis molestias itaque hic repellat est officia, doloremque laudantium quis recusandae! Dicta aliquam accusantium delectus ipsam?</p>
          <p className="hero--section-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo alias modi labore, libero, fugiat nobis molestias itaque hic repellat est officia, doloremque laudantium quis recusandae! Dicta aliquam accusantium delectus ipsam?</p>
        </div>
      </div>
    </section>
  );
}
