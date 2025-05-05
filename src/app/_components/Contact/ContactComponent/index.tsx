import ContactDescription from "./ContactDescription";
import ContactForm from "./ContactForm";

function ContactComponent() {
  return (
    <div className="py-4 lg:w-4/6 lg:flex gap-x-8 space-y-4 lg:space-y-0 items-center justify-center">
      <ContactForm />
      <ContactDescription />
    </div>
  );
}
export default ContactComponent;
