export class Student {
  public firstName: string = ''
  public lastName: string = ''
  public email: string = ''
  public phoneNo: string = ''
  public role: string = ''

  constructor(firstName:string,lastName:string,email:string,phoneNo:string,role:string){
      this.firstName = firstName
      this.lastName = lastName
      this.phoneNo = phoneNo
      this.email = email
      this.role = role
  }
}
