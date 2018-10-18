import { TestBed, inject } from '@angular/core/testing';

import { LoginService } from './login.service';
import { User } from '../../shared/User';

describe('LoginService', () => {
  let loginService: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService]
    });
    loginService = TestBed.get(LoginService);
  });

  it('should be created', inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));

  it('should get a user when calling login given username and password', () => {
    const user: User = loginService.login("eddie@email.com","pwd");
    expect(user.firstname).toEqual('Eddie');
  });

  it('should get a user when calling login get current user', () => {
    const user: User = loginService.getCurrentUser();
    expect(user.firstname).toEqual('Eddie');
  });

});
