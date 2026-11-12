import React from 'react';

import { footer } from '../data';

const Footer = () => {
  const {
    brand,
    copyrightText,
    address,
    phone,
    phoneHref,
    altPhone,
    altPhoneHref,
    email,
    emailHref,
    altEmail,
    altEmailHref,
  } = footer;

  return (
    <footer id="contact" className="bg-neutral-500 px-[20px] py-12 md:py-16 scroll-mt-24">
      <div
        className="container mx-auto flex flex-col gap-10 lg:flex-row lg:justify-between lg:items-start"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div>
          <a
            href="#home"
            className="font-primary text-white text-2xl font-extrabold tracking-tight"
          >
            {brand.split(' ')[0]}{' '}
            <span className="text-primary-200">{brand.split(' ').slice(1).join(' ')}</span>
          </a>
          <p className="text-neutral-300 text-sm mt-4 max-w-[280px]">
            Serious fitness in a fun, friendly, and safe space.
          </p>
        </div>

        <div>
          <h2 className="text-white font-primary font-bold text-lg mb-4">Contact</h2>
          <p className="text-neutral-300 text-sm mb-3 max-w-[280px]">{address}</p>
          <p className="mb-1">
            <a className="text-white text-sm font-semibold hover:text-primary-200" href={phoneHref}>
              {phone}
            </a>
          </p>
          <p className="text-neutral-300 text-xs mb-1">Alternative phone</p>
          <p className="mb-3">
            <a className="text-white text-sm font-semibold hover:text-primary-200" href={altPhoneHref}>
              {altPhone}
            </a>
          </p>
          <p className="mb-1">
            <a className="text-primary-200 text-sm hover:text-white" href={emailHref}>
              {email}
            </a>
          </p>
          <p className="text-neutral-300 text-xs mb-1">Alternative email</p>
          <p>
            <a className="text-primary-200 text-sm hover:text-white" href={altEmailHref}>
              {altEmail}
            </a>
          </p>
        </div>
      </div>
      <div className="container mx-auto mt-10 pt-6 border-t border-white/10">
        <p className="text-neutral-300 text-sm">{copyrightText}</p>
      </div>
    </footer>
  );
};

export default Footer;
