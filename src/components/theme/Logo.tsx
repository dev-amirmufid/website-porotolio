export const Logo = (props: { className?: string }) => {
  return (
    <div
      className={`text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center text-2xl ${props.className}`}
    >
      <span className="text-white mr-1">amirmufid</span>
      <span className="rounded bg-white text-black flex items-center justify-center p-2">
        .site
      </span>
    </div>
  );
};
