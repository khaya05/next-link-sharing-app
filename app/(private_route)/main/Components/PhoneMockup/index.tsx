'use client';

const PhoneMockup = () => {
  return (
    <div
      className="
        bg-white
        h-full
        w-full
        rounded-[12px]
        grid
        place-items-center
    "
    >
      <div
        className="
          bg-[url('/images/illustration-phone-mockup.svg')]
          no-repeat
          grid
          place-items-center
          w-[19.1875rem] 
          h-[39.4375rem]
        "
      >
        <div className="w-[17.8125rem] h-[38.1875rem]"></div>
      </div>
    </div>
  );
};

export default PhoneMockup;
