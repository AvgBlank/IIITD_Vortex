export default function Home() {
  const textBlocks = [
    { text: "Secure & Low-Cost Banking", bg: "bg-[#b07652]", rotate: "rotate-3" },
    { text: "Microloans & Insurance", bg: "bg-[#f5e6d6]", rotate: "-rotate-2", textColor: "text-black" },
    { text: "Empowering Local Businesses", bg: "bg-[#7f3c28]", rotate: "rotate-1" },
    { text: " & Individuals", bg: "bg-[#d6ad56]", rotate: "-rotate-3", textColor: "text-black" },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4">
      <div className="flex flex-col items-center space-y-3">
        {textBlocks.map(({ text, bg, rotate, textColor = "text-white" }, index) => (
          <div
            key={index}
            className={`px-6 py-3 font-bold text-5xl ${bg} ${textColor} rounded-lg ${rotate}`}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}
