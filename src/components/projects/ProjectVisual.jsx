import DashboardPreview from './visuals/DashboardPreview.jsx'
import ShopPreview from './visuals/ShopPreview.jsx'
import StayPreview from './visuals/StayPreview.jsx'

const previews = {
  shop: ShopPreview,
  dash: DashboardPreview,
  stay: StayPreview,
}

export default function ProjectVisual({ kind }) {
  const Preview = previews[kind] ?? ShopPreview
  return <Preview />
}
