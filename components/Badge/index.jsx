import Image from "next/image";

const Badge = ({ containerStyles }) => {
  return (
    <div className={`relative ${containerStyles}`}>
      <Image 
        src="/assets/badge.svg"
        alt="Badge"
        fill
        className="object-contain"
      />
    </div>
  );
};

export default Badge
    