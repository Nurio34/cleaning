function UserImage({ name }: { name: string }) {
  const image = name.slice(0, 2);

  const colors = [
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
    "rgba(100, 255, 218, 1)",
    "rgba(255, 99, 71, 1)",
    "rgba(60, 179, 113, 1)",
    "rgba(0, 0, 0, 1)",
    "rgba(255, 255, 255, 1)",
    "rgba(30, 144, 255, 1)",
    "rgba(255, 105, 180, 1)",
    "rgba(0, 128, 128, 1)",
    "rgba(218, 165, 32, 1)",
  ];

  const color1 = colors[Math.floor(Math.random() * colors.length)];
  const color2 = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div
      className="min-w-8 aspect-square  rounded-full overflow-hidden font-semibold capitalize
        flex justify-center items-center text-white
      "
      style={{
        fontVariant: "small-caps",
        backgroundImage: `linear-gradient(90deg,${color1},${color2})`,
      }}
    >
      {image}
    </div>
  );
}
export default UserImage;
