import {Assistance} from './assistance.model';

describe("Test for assistance",()=>{

  describe("Test for when the teacher published the assistance.",()=>{
    it("Should show attendance",()=>{
      let assistance = new Assistance ("Quimica - you attended 12 classes out of a total of 25");
    expect(assistance.getClass()).toContain("Quimica");
  });
});
  describe("Test for when the teacher has not yet published the assistance.",()=>{
    it("Should show a error message: Error, your teacher has not yet published your assistance",()=>{
      let assistance = new Assistance ("");
      expect(assistance.getClass()).toEqual("");
    });
  });
});
