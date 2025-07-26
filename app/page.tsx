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

export default async function Home() {
  const res = await fetch(
    'https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course',
    { cache: 'no-store' } // Ensures fresh data (like SSR)
  );
  const productData = await res.json()
  const instructorData = productData.data.sections.find((section:section)=>section.type === "instructors")
  return (
      <section className="container">
          <div className="mb-7 pt-2 ">
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
  );
}

// export const metadata = {
//   title: 'About',
// }




// import type { Metadata } from 'next';

// // Define your data type
// interface PageData {
//   title: string;
//   description: string;
//   content: string;
//   keywords?: string[];
// }

// // Async function to fetch data
// async function getPageData(): Promise<PageData> {
//   const res = await fetch('https://your-api-endpoint.com/page-data', {
//     // Add cache options as needed
//     next: { revalidate: 3600 } // Revalidate every hour
//   });
  
//   if (!res.ok) {
//     throw new Error('Failed to fetch page data');
//   }
  
//   return res.json();
// }

// // Generate metadata dynamically
// export async function generateMetadata(): Promise<Metadata> {
//   try {
//     const data = await getPageData();
    
//     return {
//       title: data.title,
//       description: data.description,
//       keywords: data.keywords?.join(', '),
//       openGraph: {
//         title: data.title,
//         description: data.description,
//         type: 'website',
//       },
//       twitter: {
//         card: 'summary_large_image',
//         title: data.title,
//         description: data.description,
//       },
//     };
//   } catch (error) {
//     // Fallback metadata if API fails
//     return {
//       title: 'Default Title',
//       description: 'Default description',
//     };
//   }
// }

// // Your page component
// export default async function Home() {
//   const data = await getPageData();
  
//   return (
//     <div>
//       <h1 className="text-red-500 text-4xl font-sans">
//         {data.title}
//       </h1>
//       <p className="mt-4 text-gray-700">
//         {data.content}
//       </p>
//     </div>
//   );
// }