import {Action, Selector, State, StateContext, StateToken} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {SetUser, SignIn, SignOut, SignUp} from "../actions/auth.actions";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {UserInterface} from "../../../shared-elements/_interfaces/user.interface";

export interface AuthStateModel {
  user: UserInterface;
}

const AUTH_STATE_TOKEN = new StateToken<AuthStateModel>('auth')

@State<AuthStateModel>({
  name: AUTH_STATE_TOKEN,
  defaults: {
    user: null
  }
})

@Injectable()
export class AuthState {
  constructor(private afAuth: AngularFireAuth) {
  }

  @Selector()
  static getUser(state: AuthStateModel): UserInterface {
    return state.user;
  }

  @Action(SignIn)
  async signIn(ctx: StateContext<AuthStateModel>, payload: SignIn): Promise<void> {
    const result: any = await this.afAuth.signInWithEmailAndPassword(payload.email, payload.password).catch(e => console.log(e));
    const state = ctx.getState();
    console.log(result);
    if (result.user) {

      localStorage.setItem('user', JSON.stringify(result.user));
      ctx.setState({
        ...state,
        user: result.user
      })
    }
  }

  @Action(SignOut)
  async signOut(ctx: StateContext<AuthStateModel>): Promise<void> {
    const result = await this.afAuth.signOut().catch(e => console.log(e));
    const state = ctx.getState();
    console.log(result);

    localStorage.setItem('user', null);

    ctx.setState({
      ...state,
      user: null
    })
  }

  @Action(SignUp)
  async signUp(ctx: StateContext<AuthStateModel>, payload: SignUp): Promise<void> {
    const result: any = await this.afAuth.createUserWithEmailAndPassword(payload.email, payload.password).catch(e => console.log(e));
    const state = ctx.getState();
    console.log(result);

    if (result.user) {

      localStorage.setItem('user', JSON.stringify(result.user));

      ctx.setState({
        ...state,
        user: result.user
      })
    }
  }

  @Action(SetUser)
  setUser(ctx: StateContext<AuthStateModel>, payload: SetUser): void {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      user: payload.user
    })
  }
}
