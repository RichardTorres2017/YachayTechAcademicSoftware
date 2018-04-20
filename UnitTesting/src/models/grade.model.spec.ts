import {Grade} from './grade.model';
import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

    describe("Test for grade.getGrades()", ()=>{
        let service: Grade;
        let httpMock: HttpTestingController;
        beforeEach(() => {
            TestBed.configureTestingModule({
              imports: [
                HttpClientTestingModule,
              ],
              providers: [
                { provide: Grade, useClass: Grade },
              ],
            });
            service = TestBed.get(Grade);
            httpMock = TestBed.get(HttpTestingController);
          });
        
          it('should be created', () => {
            expect(service).toBeTruthy();
          });
            it('should return grades', () => {
            // Arrange
            const mockResponse = {
              results: [
                {
                  "id": 1,
                  "name": "Leanne Graham"
                }
              ]
            };
            let dataError, dataResponse;
            // Act
            service.getGrades().subscribe((response) => {
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
    })
   

  