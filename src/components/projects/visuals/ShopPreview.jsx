export default function ShopPreview() {
  return (
    <div className="project-preview bg-[radial-gradient(ellipse_at_72%_50%,#51330d_0%,#1b1711_48%,#0c0b0a_100%)] text-[#eee8e8]">
      <div className="absolute left-[6%] right-[6%] top-[6%] flex items-center justify-between text-[9px] tracking-[.04em]"><b className="font-sans text-[17px] font-semibold tracking-[.08em]">FORME</b><span className="hidden text-[#918a8a] md:block">Objects for everyday</span><i className="not-italic">bag&nbsp; (0)</i></div>
      <div className="absolute left-[8%] top-[26%] z-[2] flex flex-col items-start md:left-[11%] md:top-[24%]"><small className="font-mono text-[9px] tracking-[.08em] text-accent">THE NEW COLLECTION</small><strong className="my-[17px] font-sans text-[49px] font-medium leading-[.98] tracking-[-.06em] md:text-[clamp(41px,6vw,76px)]">Made for<br /><em className="not-italic text-accent">slow living.</em></strong><span className="text-[11px] text-[#b0a8a9]">Thoughtful pieces, made to stay.</span><span className="mt-[21px] bg-accent px-4 py-3 text-[9px] tracking-[.04em] text-ink">Explore collection ↗</span></div>
      <div className="vase vase-one right-[13%] w-[25%] opacity-70 md:right-[22%] md:w-[18%]" /><div className="vase vase-two right-[35%] w-[18%] opacity-70 md:right-[39%] md:w-[13%]" /><div className="absolute right-[6%] top-[28%] -rotate-12 text-[73px] text-[#c17a14] md:right-[14%] md:text-[100px]">✳</div>
    </div>
  )
}
