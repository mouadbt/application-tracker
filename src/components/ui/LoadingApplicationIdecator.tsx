export default function LoadingApplicationIdecator() {
  return (
    <div
      className="absolute h-full w-full bg-background flex justify-center items-center gap-4 flex-col"
      data-section="load"
      id="loader"
    >
      <div className="relative block w-32.5 h-1 rounded-[30px] bg-primary/20 overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:rounded-[30px] before:bg-primary before:animate-[moving_1s_ease-in-out_infinite]"></div>
      <small className="text-primary/50">Loading application data...</small>
    </div>
  );
}
