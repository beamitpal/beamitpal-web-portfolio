import ContactComponent from "@/components/contact/ContactComponent";
import HeadingComponent from "@/components/heading/heading-component";

function Contact() {
  return (
    <>
      <div className="py-8 md:py-16 px-4 md:px-8 lg:px-16">
        <HeadingComponent>Contact 🤙 </HeadingComponent>
        <div className="flex justify-center items-center w-auto h-auto">
          <ContactComponent />
        </div>
      </div>
    </>
  );
}

export default Contact;
