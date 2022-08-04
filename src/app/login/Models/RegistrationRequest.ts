export class RegistrationRequest{
  username:string;
  password:string;
  verifypassword:string;

  constructor(username: string, password: string, verifypassword: string) {
    this.username = username;
    this.password = password;
    this.verifypassword = verifypassword;
  }
}
