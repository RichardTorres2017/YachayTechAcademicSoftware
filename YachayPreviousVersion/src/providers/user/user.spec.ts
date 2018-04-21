import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserProvider } from './user';

describe('Service: UserProvider', () => {
    let service: UserProvider;
    let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        { provide: UserProvider, useClass: UserProvider },
      ],
    });
    service = TestBed.get(UserProvider);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([UserProvider], (service: UserProvider) => {
    expect(service).toBeTruthy();
  }));

  it('should return grades', () => {
    // Arrange
    const mockResponse = {
      results: [
        {
          "id": 1,
          "name": null
        }
      ]
    };
    let dataError, dataResponse;
    // Act
    service.getAllUsers()
    .subscribe((response) => {
      dataResponse = response['results'];
    }, (error) => {
      dataError = error;
    });
    const req = httpMock.expectOne(`https://jsonplaceholder.typicode.com/users`);
    req.flush(mockResponse);
    // Assert
    expect(dataResponse.length).toEqual(1);
    expect(req.request.url).toEqual(`https://jsonplaceholder.typicode.com/users`);
    expect(req.request.method).toEqual('GET');
    expect(dataError).toBeUndefined();
  });
it('should return an error', () => {
  // Arrange
  let dataError, dataResponse: any[];
  // Act
  service.getAllUsers()
  .subscribe((response) => {
    dataResponse = response['results'];
  }, (error) => {
    dataError = error;
  });
  httpMock.expectOne('https://jsonplaceholder.typicode.com/users')
  .error(new ErrorEvent('error'));
  // Assert
  expect(dataResponse).toBeUndefined();
  expect(dataError).toBeDefined();
});
});