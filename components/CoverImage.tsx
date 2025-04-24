import React from 'react';
import Image from 'next/image';

const CoverImage: React.FC = () => {
  return (
    <div className="full-width">
      <div className="relative w-full h-[600px]">
        <Image
          src="/assets/cover.png"
          alt="Cover"
          fill
          className="object-cover"
          priority
          unoptimized
        />
      </div>
    </div>
  );
};

export default CoverImage; 