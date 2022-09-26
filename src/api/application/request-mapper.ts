export class RequestMapper {
  static toMember(request: any): Member {
    return new Member(request.name)
  }
}