import ContactComponent from "@/components/contact/ContactComponent";
import HeadingComponent from "@/components/heading/heading-component";
import BlurFade from "@/components/ui/blurfade";

function Contact() {
  return (
    <div className="py-8 md:py-16 px-4 md:px-8 lg:px-16">
      <BlurFade duration={1} amount={0.5}>
        <HeadingComponent>Contact 🤙 </HeadingComponent>
      </BlurFade>
      <div className="flex justify-center items-center w-auto h-auto">
        <ContactComponent />
      </div>
    </div>
  );
}

export default Contact;
