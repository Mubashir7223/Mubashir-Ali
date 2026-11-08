export default function StayPreview() {
  return (
    <div className="project-preview bg-[#111011] text-[#eee8e8]">
      <div className="absolute left-[7%] right-[7%] top-[7%] z-[3] flex items-center justify-between"><b className="font-sans text-lg font-semibold">Elsewhere<span className="align-top text-[8px]">®</span></b><span className="hidden font-mono text-[8px] tracking-[.04em] md:block">STAYS &nbsp;&nbsp; JOURNAL &nbsp;&nbsp; ABOUT</span><span className="bg-accent px-3 py-3 text-[9px] tracking-[.04em] text-ink md:px-4">Find a stay ↗</span></div>
      <div className="absolute left-[8%] top-[24%] z-[2] flex flex-col items-start md:left-[10%]"><small className="font-mono text-[9px] tracking-[.08em] text-accent">YOUR OWN LITTLE SOMEWHERE</small><strong className="my-[15px] font-sans text-[47px] font-medium leading-[.91] tracking-[-.06em] md:text-[clamp(39px,5vw,65px)]">Room to<br /><i className="not-italic text-[#ffc14b]">reconnect.</i></strong><span className="text-[10px] text-[#aaa2a3]">Places for a slower kind of getaway.</span></div>
      <div className="absolute right-[9%] top-[25%] size-[88px] rounded-full bg-[#a7630c] md:right-[17%] md:size-[120px]" /><div className="stay-hill stay-hill-back" /><div className="stay-hill stay-hill-front" /><div className="absolute bottom-[18%] right-[19%] z-[1] text-[72px] text-[#d9c09d] drop-shadow-[9px_6px_#201713] md:right-[24%] md:text-[90px]">▰</div>
    </div>
  )
}
