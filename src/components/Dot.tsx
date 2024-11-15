type Props = {
  color?: string;
};
function Dot({ color = "bg-secondary" }: Props) {
  return <div className={`w-[10px] h-[10px] rounded-full ${color}`} />;
}

export default Dot;
