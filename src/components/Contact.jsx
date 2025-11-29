function Contact() {
  const handleSubmit = e => {
    e.preventDefault();
    
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    console.log("Form Submitted:", { name, email, message });
    alert("Thank you! Your message has been submitted.");

    form.reset();
  };

  return (
    <section className="container py-5" id="contact">
      <h2 className="fw-bold mb-4 text-primary">Contact Me</h2>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                required
                placeholder="Your Name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                required
                placeholder="Your Email"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                name="message"
                required
                rows="5"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
