'use client';
import { certificatesSection } from '@/lib/content/certificates';
import { PROJECTS_INITIALLY } from '@/lib/utils/config';

import { Button, CertificateCard, Wrapper } from '@/components';

import { getSectionAnimation, projectVariants } from '@/styles/animations';

import { motion } from 'framer-motion';
import { useState } from 'react';


const Certificates = () => {
  const { certificates, title } = certificatesSection;
  const [showMore, setShowMore] = useState(false);
  const topCertificates = certificates.slice(0, PROJECTS_INITIALLY);

  const visibleCertificates = showMore ? certificates : topCertificates;

  return (
    <Wrapper animate={false} {...getSectionAnimation}>
      <motion.h2 className="heading-secondary text-center !mb-12">
        {title}
      </motion.h2>
<div className="grid gap-6 grid-cols-auto-250 xs:grid-cols-auto-300 place-items-center">
  {visibleCertificates.map((certificate, i) => {
    if (i < PROJECTS_INITIALLY) {
      return (
        <CertificateCard
          {...certificate}
          key={certificate.id}
          variants={projectVariants}
          initial="hidden"
          whileInView="show"
          custom={i}
          viewport={{ once: true }}
        />
      );
    }

    return (
      <CertificateCard
        {...certificate}
        key={certificate.id}
        variants={projectVariants}
        initial="hidden"
        animate="show"
        custom={i - PROJECTS_INITIALLY}
      />
    );
  })}
</div>

      {certificates.length > PROJECTS_INITIALLY && (
        <Button
          size="lg"
          className="!mt-20"
          center
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? 'show less' : 'show more'}
        </Button>
      )}
    </Wrapper>
  );
};

export default Certificates;