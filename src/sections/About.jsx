import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';
import { toast } from 'sonner';
import { useMediaQuery } from 'react-responsive';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const isSmall = useMediaQuery({ maxWidth: 440 });

  const handleCopy = () => {
    navigator.clipboard.writeText('david.tran.devweb@gmail.com');
    setHasCopied(true);
    toast.success('Email copied to clipboard');
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className={`my-20 c-space ${isSmall && 'mt-0'}`} id="about">
      <div className="grid h-full grid-cols-1 gap-5 xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid1_avatar.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Hi, I’m David TRAN</p>
              <p className="grid-subtext">
                Over the past 3.5 years, I’ve worked extensively with
                technologies like React and Next.js, contributing to the
                implementation of innovative features and optimizing the
                performance of complex web applications.
              </p>

              <p className="grid-subtext">
                This journey has allowed me to gain solid expertise in FrontEnd
                development while solving various technical challenges. Today,
                I’m ready to take on new challenges in a dynamic company, where
                I can continue to grow and apply my skills to ambitious
                projects. 🚀
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I work with React and Next.js to create fast, scalable web
                applications, using TypeScript for type safety and Tailwind CSS
                for efficient styling. I design interfaces in Figma, ensuring
                seamless collaboration.
              </p>
              <p className="grid-subtext">
                For testing, I rely on Cypress for end-to-end tests and Jest for
                unit testing.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 40,
                    lng: -100,
                    text: 'Rjieka, Croatia',
                    color: 'white',
                    size: 15,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I’m very flexible with time zone communications & locations
              </p>
              <p className="grid-subtext">
                I&apos;m based in Paris, France and open to remote work
                worldwide.
              </p>
              <Button
                name="Contact Me"
                isBeam
                containerClass="w-full mt-10"
                as="a"
                href="#contact"
              />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code.
                Programming isn&apos;t just my profession—it&apos;s my passion.
                I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="text-center grid-subtext">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'}
                  alt="copy"
                />
                <p className="font-medium text-white md:text-xl text-gray_gradient">
                  david.tran.devweb@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
