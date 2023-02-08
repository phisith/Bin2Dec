interface PropName {
  title: string;
}
export default function Button({ title }: PropName) {
  return (
    <button className="border rounded-xl text-white border-white/10 bg-white/10 hover:border-white/20 hover:bg-white/20 active:border-gray-100/5 active:bg-gray-100/5 py-8 px-10 font-bold text-4xl">
      {title}
    </button>
  );
}
