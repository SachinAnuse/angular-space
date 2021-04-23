export class Course {
  public id: string = ''
  public name: string = ''
  public description: string = ''
  public duration: string = ''
  public syllabus: File
  public fees: string = ''
  public material: File
  public keyword: string = ''

  constructor(id: string,name: string,description: string,duration: string,syllabus: File,fees: string,material: File,keyword: string){
      this.id = id;
      this.name = name;
      this.description = description;
      this.duration = duration;
      this.syllabus = syllabus;
      this.fees = fees;
      this.material = material;
      this.keyword = keyword;
  }
}
