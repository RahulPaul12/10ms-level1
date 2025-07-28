export interface productData {
    data:{
        title : string;
        description: string
    }
}
export interface section {
  type: string;
  name: string;
  description: string;
  bg_color : string;
  order_idx: number;
  values: [];
}
export interface instructorValue {
      description: string;
      has_instructor_page: boolean;
      image: string;
      name: string;
      short_description: string;
      slug: string
}
export interface courseFeatureValue {
      icon: string;
      id: string;
      subtitle: string;
      title: string;
}

export interface learnByCourseValue {
      color: string;
      icon: string;
      id: string;
      text: string;
}
export interface ExclusiveCourseValue {
      file_type: string;
      file_url: string;
      id: string;
      title: string;
      checklist: [],
}
