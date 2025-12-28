'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';
import { getId } from '@/lib/utils/helper';

import { AuthorImage, Link, ListItem, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Hi, my name is Ayush Verma, an MCA student at{' '}
            <Link
              href="https://bhu.ac.in/"
              target="_blank"
              className="text-accent"
            >
              Banaras Hindu University
            </Link>
            .<br /> I’m an aspiring Cyber Security professional with a strong interest in both offensive and defensive security.
            I enjoy working on penetration testing, vulnerability assessment, threat detection, and incident response while
            sharpening my skills through labs and practical challenges.
          </p>

          <p>
            These days, my main focus is solving labs, practicing on Hack The Box, exploring bug bounty, and preparing myself
            for roles in SOC operations, threat hunting, and penetration testing.
          </p>


          {list && (
            <>
              <p>{list.title}</p>
              <ul className="grid w-2/3 grid-cols-2 gap-1 text-sm">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <AuthorImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
