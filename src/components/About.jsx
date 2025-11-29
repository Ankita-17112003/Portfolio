function About() {
  return (
    <section className="container py-5" id="about">
      <h2 className="fw-bold mb-4 text-primary">About Me</h2>

      <div className="row align-items-center">
   
        <div className="col-md-5 mb-4 mb-md-0" style={{paddingTop:"50px"}}>
          <img
            src="assets/female profile.jfif" style={{height:"300px"}}
            alt="Ankita Batwal"
            className="img-fluid rounded shadow"
          />
        </div>

      
        <div className="col-md-7 mt-4">
          <p>
            Hello! I am <strong>Ankita Batwal</strong>, a passionate Full Stack MERN
            Developer with a strong focus on building interactive and responsive
            web applications. I have hands-on experience in <strong>React.js</strong>,
            <strong>Node.js</strong>, <strong>MongoDB</strong>, and other web technologies.
          </p>
          <p>
            I enjoy turning ideas into reality using clean and efficient code. My
            strengths lie in problem-solving, creating user-friendly interfaces, and
            delivering projects that meet client requirements. I am constantly
            learning and updating myself with the latest trends in web development.
          </p>
          <p>
            Apart from coding, I love exploring new technologies, contributing to
            open-source projects, and improving my knowledge in the full stack
            ecosystem. I aim to create professional applications that are both
            functional and aesthetically pleasing.
          </p>
          <button className="text-light bg-primary px-3 rounded" style={{border:"none", padding:"4px" }}>Resume</button>
        </div>
      </div>
    </section>
  );
}

export default About;
