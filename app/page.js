import Image from "next/image";
import Hero from "./components/Hero";
import Title from "./components/Title";
import RenderItem from "./components/RenderItem";
import ProjectOverview from "./ProjectOverview";

const items = [
  {
    sl: 1,
    title: `Aim Assist with Pytorch`,
    description: `Enemy object detection with Yolov3. Program runs concurrently with game window to detect and display enemies during live runtime. Auto fires at detected enemies.`,
    image: "https://picsum.photos/500",
    alt: "Hero Image",
    link: "/about",
    buttonText: 'About Pytorch'
  },
  {
    sl: 2,
    title: `Machine Learning Sandbox`,
    description: `App to use different models to predict future matchups or back test with historical data of international soccer matches. Includes informative data visualization of outputs.`,
    image: "https://picsum.photos/500",
    alt: "Hero Image",
    link: "/about",
    buttonText: 'About Sandbox'
  }
]

export default function Home() {
  return (
    <div className="mb-5">
      <Hero />
      <Title text="Let's work together" />
      <RenderItem>
        <p className='inline-block text-lg font-medium text-sky-700'>
          I&apos;m a
          <span className='text-sky-900 font-bold'> developer, </span>
          <span className='text-sky-900 font-bold'>designer </span> and
          <span className='text-sky-900 font-bold'> linguist </span>
          <span>who has been building for the web in some capacity since 2001. I specialise in accessibility, performance and usability without sacrificing creativity.</span>
        </p>
      </RenderItem>
      <div className="grid grid-cols-1 gap-5 space-y-10 divide-y divide-sky-800">
        {items?.map(item => (
          <ProjectOverview key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
