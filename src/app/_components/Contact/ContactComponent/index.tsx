import ContactDescription from "./ContactDescription";
import ContactForm from "./ContactForm";

function ContactComponent() {
  return (
    <div className="lg:w-4/6 lg:flex items-center gap-x-8 space-y-4 lg:space-y-0">
      <ContactForm />
      <ContactDescription />
    </div>
  );
}
export default ContactComponent;
