'use client';

const LightGrayCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-light-gray rounded-[0.75rem] p-5 h-full">
      {children}
    </div>
  );
};

export default LightGrayCard;
