'use client';

// interface Props {
//   onClick:MouseEvent
// }

const SaveButton = () => {
  return (
    <div
      className="
        relative
        md:my-6
        h-full
    "
    >
      <button
        className="
          h-[2.875rem]
          w-[5.6875rem]
          rounded-[8px]
          bg-purple
          text-white
          absolute

          right-[2.5rem]
          hover:bg-purple-hover
          hover:cursor-pointer
        "
      >
        Save
      </button>
    </div>
  );
};

export default SaveButton;
