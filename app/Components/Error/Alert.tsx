'use client';

interface Props {
  value: string;
}
const Alert: React.FC<Props> = ({ value }) => {
  return <div className="px-5 py-2 text-white bg-red rounded-md">{value}</div>;
};

export default Alert;
