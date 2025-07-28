import { courseFeatureValue, section } from "@/types/types";

type CourseLaidComponentProps = {
  courseLaidData: section; 
};
export default function CourseLaidOut ({ courseLaidData }: CourseLaidComponentProps){
    return (
        //   {/* <!--===================================
        //         HOW COURSE LAID OUT PART START  
        //    =====================================--> */}
          <section className="container">
              <div className="mb-16 flex flex-col gap-3">
                  <h2 className="text-xl md:text-2xl font-semibold">{courseLaidData.name}</h2>
                  <div className="p-6 rounded-md border bg-[#111827] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8"> 
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
        //   {/* <!--===================================
        //         HOW COURSE LAID OUT PART END  
        //    =====================================--> */}

        )
}
