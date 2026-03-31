import TopSection from '../sections/TopSection'
import TopDefaultSection from '../sections/TopDefaultSection'
import TopNavSection from '../sections/TopNavSection'
import HeaderDefaultResponsive from './HeaderDefaultResponsive'

export default function HeaderDefault() {
  return (
    <>
    <TopSection />
    <TopDefaultSection />
    <TopNavSection />

    <HeaderDefaultResponsive />
    </>
  )
}
