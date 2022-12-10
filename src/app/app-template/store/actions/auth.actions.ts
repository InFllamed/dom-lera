export class SignIn {
  static readonly type = '[Auth] SignIn';

  constructor(public email: string, public password: string) {
  }

}

export class SignOut {
  static readonly type = '[Auth] SignOut';

}

export class SignUp {
  static readonly type = '[Auth] SignUp';

  constructor(public email: string, public password: string) {
  }
}

export class SetUser {
  static readonly type = '[Auth] SetUser';

  constructor(public user) {
  }
}
