import AboutMainSection from "./_components/AboutMainSection";
import SpacerDefault from "@/_components/spacers/SpacerDefault";
import PageTitle from "../_components/titles/PageTitle";



const CrumbsData = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'About Us', href: '/about'},
]

export default function page() {
    
    return (
        <>
        <div className="bg-gray-50">
            <PageTitle
                crumbs={CrumbsData} 
                title='About Us' />
            <SpacerDefault />
            <AboutMainSection />
        </div>  
        </>
    )
}
