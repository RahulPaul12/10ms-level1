import CourseLaidOut from "@/components/CourseLaidOut";
import ExclusiveFeatureComponent from "@/components/ExclusiveFeatureComponent";
import InstructorComponent from "@/components/InstructorComponent";
import TitleDescriptionComponent from "@/components/TitleDescriptionComponent";
import TrailerComponent from "@/components/TrailerComponent";
import WhatYouLearnComponent from "@/components/WhatYouLearnComponent";
import { courseFeatureValue, ExclusiveCourseValue, instructorValue, learnByCourseValue, section } from "@/types/types";
export default async function Home() {
  const res = await fetch('https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-TENMS-SOURCE-PLATFORM': 'web'
    },
    cache: 'no-store'}
  );
  const productData = await res.json()
  const instructorData = productData.data.sections.find((section:section)=>section.type === "instructors")
  const courseLaidData = productData.data.sections.find((section:section)=>section.type === "features")
  const learnByCourse = productData.data.sections.find((section:section)=>section.type === "pointers")
  const exclusiveFeature = productData.data.sections.find((section:section)=>section.type === "feature_explanations")
  
  return (
    <>
      {/* <!--===================================
                  DESCRIPTION PART START  
       =====================================--> */}
      <section className="min-h-[300px] md:min-h-[300px] bg-[url('https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg')] bg-center bg-cover bg-no-repeat">
          <div className="container">
              <div className="relative flex flex-col md:flex-row gap-4 md:gap-12 pb-6 md:py-10">
                <TitleDescriptionComponent productData={productData}/>
                <TrailerComponent/>
              </div>
          </div>
      </section>
      {/* <!--===================================
                  DESCRIPTION PART END  
       =====================================--> */}

      <main className="container flex flex-col gap-4 md:flex-row md:gap-12">
        <section className="order-2 flex-1 md:order-1 md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
          <InstructorComponent instructorData={instructorData }/>
          <CourseLaidOut courseLaidData = {courseLaidData}/>
          <WhatYouLearnComponent learnByCourse = {learnByCourse}/>
          <ExclusiveFeatureComponent exclusiveFeature={exclusiveFeature}/>






       </section>
      </main>
    </>            
  );
}
