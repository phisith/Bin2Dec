interface PropName {
  title: string;
  isSum?: boolean;
  onClickAction: Function;
  disabled?: boolean;
}
export default function Button({
  title,
  isSum,
  onClickAction,
  disabled,
}: PropName) {
  return (
    <button
      className={`w-full border rounded-xl text-white ${
        isSum
          ? "border-orange-500 bg-orange-500 hover:border-orange-400 hover:bg-orange-400 active:border-orange-500/70 active:bg-orange-500/70"
          : "border-white/10 bg-white/10 hover:border-white/20 hover:bg-white/20 active:border-gray-100/10 active:bg-gray-100/10"
      } disabled:border-orange-900/20 disabled:bg-orange-900/20 disabled:cursor-not-allowed py-8 px-10 font-bold text-4xl`}
      onClick={(e) => onClickAction(e)}
      disabled={disabled}
    >
      {title}
    </button>
  );
}
