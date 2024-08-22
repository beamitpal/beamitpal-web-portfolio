import HeroCard from "@/components/hero/HeroCard";
import ProfilePic from '@/assets/profile.webp';

function Home() {
  return (
    <HeroCard
      name="Amit"
      role="Full Stack Web Developer"
      image={ProfilePic}
      about="I&apos;m Amit, a full stack web developer from New Delhi. I specialize in building responsive, user-friendly websites using technologies like React, Vite, and Tailwind CSS. My focus is on creating seamless, functional solutions for both frontend and backend. Let&apos;s connect if you&apos;re interested in collaborating or discussing tech!"
    />
  );
}

export default Home;
