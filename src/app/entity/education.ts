export class Education {
  public graduation: string = ''
  public graduationUniversity: string = ''
  public graduationPercentage: string = ''
  public graduationPassingYear: string = ''

  public postGraduation: string = ''
  public postGraduationUniversity: string = ''
  public postGraduationPercentage: string = ''
  public postGraduationPassingYear: string = ''

  constructor (
    graduation: string,
    graduationUniversity: string,
    graduationPercentage: string,
    graduationPassingYear: string,
    postGraduation: string,
    postGraduationUniversity: string,
    postGraduationPercentage: string,
    postGraduationPassingYear: string
  ) {
    this.graduation = graduation
    this.graduationUniversity = graduationUniversity
    this.graduationPercentage = graduationPercentage
    this.graduationPassingYear = graduationPassingYear
    this.postGraduation = postGraduation
    this.postGraduationUniversity = postGraduationUniversity
    this.postGraduationPercentage = postGraduationPercentage
    this.postGraduationPassingYear = postGraduationPassingYear
  }
}
