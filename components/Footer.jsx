import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from 'next/dist/client/link';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="max-w-[1240] mx-auto flex flex-col px-4">
        <div className="sm:flex text-center justify-between items-center">
          <h1 className="text-fuchsia-400 text-3xl font-extrabold">
            USP Store
          </h1>
          <div className="flex justify-between w-full sm:max-w-[280px] my-4 icon">
            <Link href="https://wa.me/+6281392552459">
              <WhatsAppIcon
                sx={{ fontSize: 60 }}
                className=" opacity-50 cursor-pointer hover:scale-150 transition ease-in-out duration-600"
              />
            </Link>
            <Link href="https://www.instagram.com/uwais_screenprinting/">
              <InstagramIcon
                sx={{ fontSize: 60 }}
                className=" opacity-50 cursor-pointer hover:scale-150 transition ease-in-out duration-600"
              />
            </Link>
            <Link href="https://web.facebook.com/UwaisScreenPrinting/">
              <FacebookIcon
                sx={{ fontSize: 60 }}
                className=" opacity-50 cursor-pointer hover:scale-150 transition ease-in-out duration-600"
              />
            </Link>
            <Link href="https://www.youtube.com/channel/UCMSBFkjsGBSEFI4AF7pcDsg/videos">
              <YouTubeIcon
                sx={{ fontSize: 60 }}
                className=" opacity-50 cursor-pointer  hover:scale-150 transition ease-in-out duration-600"
              />
            </Link>
          </div>
        </div>
        <div className="flex justify-between">
          <ul className="lg:flex lg:space-x-4">
            <li>Tentang Kami</li>
            <li>Kerjasama</li>
            <li>Lowongan Kerja</li>
            <li>Berita Terkini</li>
            <li>Iklan</li>
          </ul>
          <ul className="lg:flex text-right lg:space-x-4">
            <li>Home</li>
            <li>Services</li>
            <li>Testimonial</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
