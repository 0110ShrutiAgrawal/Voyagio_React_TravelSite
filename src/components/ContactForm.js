import "./ContactFormStyles.css";
function ContactForm() {
  return (
    <div className="form-container">
      <h1>We will be happy to assist you !</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Query" />
        <textarea placeholder="Message" rows="4"></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}
export default ContactForm;
