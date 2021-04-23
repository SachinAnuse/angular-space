export class Experience {
  public totalExperience:string=""
  public companyName:string = ""
  public technology:string = ""
  public domain:string = ""

  constructor(totalExperience:string,companyName:string,technology:string,domain:string){
      this.totalExperience = totalExperience;
      this.companyName = companyName;
      this.technology = technology;
      this.domain = domain
  }
}
