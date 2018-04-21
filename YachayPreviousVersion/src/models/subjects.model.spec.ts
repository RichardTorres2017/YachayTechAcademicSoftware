import {Subjects} from './subjects.model';

describe("Test for subject",()=>{

 
    describe("Test for has internet",()=>{
        it("Should show correct function since it has internet",()=>{
          let subjects = new Subjects ("1311712416","ene-may2018");
        expect(subjects.getSubjects()).toEqual("1311712416 ene-may2018");
      });
    });
      describe("Test for not connected",()=>{
        it("Should show an error that it does not have internet",()=>{
          let subjects = new Subjects ("","");
          expect(subjects.getSubjects()).toEqual(" ");
        });
      });
    });
    