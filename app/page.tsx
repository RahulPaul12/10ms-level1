type section = {
  type: string;
  name: string;
  Order_idx : number;
}
type instructor = {
  type: string;
  name: string;
  description: string;
  bg_color : string;
  order_idx: number;
 
}
type instructorValue = {
      description: string;
      has_instructor_page: boolean;
      image: string;
      name: string;
      short_description: string;
      slug: string
}
type courseFeatureValue = {
      icon: string;
      id: string;
      subtitle: string;
      title: string;
}

type learnByCourseValue = {
      color: string;
      icon: string;
      id: string;
      text: string;
}
type ExclusiveCourseValue = {
      file_type: string;
      file_url: string;
      id: string;
      title: string;
      checklist: [],
}


export default async function Home() {
  const res = await fetch(
    'https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course',
    { cache: 'no-store' } // Ensures fresh data (like SSR)
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
                  <div className="flex flex-1 flex-col justify-center order-1 md:order-1 md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
                       <h1 className="text-white mb-2 text-[21px] font-semibold md:text-4xl">{productData.data.title}</h1>
                       <div className="text-base text-[#8f8e93] font-normal leading-6" dangerouslySetInnerHTML={{ __html: productData.data.description }} />
                  </div>
              </div>
          </div>
      </section>
      {/* <!--===================================
                  DESCRIPTION PART END  
       =====================================--> */}

      {/* <!--===================================
            COURSE INSTRUCTOR PART START  
       =====================================--> */}
      <section className="container">
          <div className="mb-7 pt-2">
              <div className="pt-4 pb-2">
                  <h2 className="mb-4 text-xl md:text-2xl font-semibold">{instructorData.name}</h2>
              </div>
                {
                  instructorData.values.map((instructor:instructorValue) => ( 
                    <div key={instructorData.order_idx} className="md:p-5 md:border border-[#dbe1eb] md:rounded-md flex items-center gap-4"> 
                      <div className="w-[73px] h-[73px] rounded-full overflow-hidden">
                       <img className="w-full h-full" src={instructor.image} alt="" />
                      </div>
                      <div>
                          <h3 className="text-lg">
                              <a className="flex items-center hover:text-green" href="/skills/instructors/munzereen-shahid/">{instructor.name}</a>
                          </h3>
                          <div className="text-sm">
                            <p dangerouslySetInnerHTML={{ __html: instructor.description }} />
                          </div>
                      </div>
                       </div>
                ))}
          </div>        
      </section>
      {/* <!--===================================
            COURSE INSTRUCTOR PART END  
       =====================================--> */}

      {/* <!--===================================
            HOW COURSE LAID OUT PART START  
       =====================================--> */}
      <section className="container">
          <div className="mb-7">
              <div className="pt-4 pb-2">
                  <h2 className="mb-4 text-xl md:text-2xl font-semibold">{courseLaidData.name}</h2>
              </div>
              <div className="mb-16 p-6 rounded-md border bg-[#111827] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8"> 
                {
                  courseLaidData.values.map((data:courseFeatureValue) => ( 
                      <div key={data.id} className="text-white flex items-start gap-4">
                        <img src={data.icon}/>
                        <div>
                            <h3 className="text-lg">
                              <a className="flex items-center hover:text-green" href="/skills/instructors/munzereen-shahid/">{data.title}</a>
                            </h3>
                            <div className="text-sm">
                              <p>{data.subtitle}</p>
                            </div>
                        </div>

                      </div>
                ))}
              </div>
          </div>
      </section>
      {/* <!--===================================
            HOW COURSE LAID OUT PART END  
       =====================================--> */}

      {/* <!--===================================
               WHAT YOU LEARN PART START  
       =====================================--> */}
      <section className="container">
          <div className="mb-7">
              <div className="pt-4 pb-2">
                  <h2 className="mb-4 text-xl md:text-2xl font-semibold">{learnByCourse.name}</h2>
              </div>
              <div className="mb-16 p-6 rounded-md border border-[#dbe1eb] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8"> 
                {
                  learnByCourse.values.map((data:learnByCourseValue) => ( 
                      <div key={data.id}>

                        <ul className="grid grid-cols-2 gap-2 md:gap-4">
                          <li className="flex items-start gap-2 mb-2">
                          <svg className="mr-1 mt-[2px] text-[#6294F8]"  stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true"  height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                          </path>
                          </svg>
                          <div className="flex-1">{data.text}</div>
                          
                          </li>
                        </ul>

                      </div>
                ))}
              </div>
          </div>
      </section>
      {/* <!--===================================
                WHAT YOU LEARN PART END 
       =====================================--> */}

      {/* <!--===================================
            EXCLUSIVE FEATURE PART START  
       =====================================--> */}
      <section className="container">
          <div className="mb-7">
              <div className="pt-4 pb-2">
                  <h2 className="mb-4 text-xl md:text-2xl font-semibold">{exclusiveFeature.name}</h2>
              </div>
              <div className="mb-16 px-5 rounded-md border border-[#dbe1eb]"> 
                {
                  exclusiveFeature.values.map((data:ExclusiveCourseValue) => ( 
                      <div key={data.id} className="grid grid-cols-1 divide-y py-5 border-b last:border-none border-[#dbe1eb] ">
                         <div className="flex flex-col items-start justify-between gap-3 md:flex-row">
                              <div className="flex flex-col gap-2">
                                   <h2 className="text-[14px] font-[500px] leading-[30px] text-[#111827] md:text-[16px]">{data.title}</h2>
                                   <ul className="flex flex-col gap-2">
                                      {
                                        data.checklist.map((list)=>(
                                          <li key={list} className="text-[14px] font-[400px] leading-[24px] text-[#4B5563] md:text-[16px] flex gap-5 items-start">
                                                <svg className="mr-1 mt-[2px] text-[#6294F8]"  stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true"  height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                                </path>
                                                </svg>
                                                <p>{list}</p>
                                          </li>
                                        )) 
                                      }
                                   </ul>     
                              </div>
                              <div className="mb-4 max-w-[350px] ">
                                   <img className="w-[250px] h-auto" src={data.file_url} alt="" />
                              </div>
                         </div>
                      </div>
                ))}
              </div>
          </div>
      </section>
      {/* <!--===================================
            EXCLUSIVE FEATURE PART END 
       =====================================--> */}

    </>            
  );
}
