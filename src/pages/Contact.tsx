import ConnectWithMe from "@/components/contact/ConnectWithMe";
import ContactComponent from "@/components/contact/ContactComponent";
import HeadingComponent from "@/components/heading/heading-component";
import BlurFade from "@/components/ui/blurfade";

function Contact() {
  return (
    <div className="py-8 md:py-16 px-4 md:px-8 lg:px-16" id="contact">
      <BlurFade duration={1} amount={0.5}>
        <HeadingComponent>Contact 🤙 </HeadingComponent>
      </BlurFade>
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center w-full h-auto gap-6">
        <ConnectWithMe />
        <ContactComponent />
      </div>
    </div>
  );
}

export default Contact;
