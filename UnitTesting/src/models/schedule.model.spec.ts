import {Schedule} from './schedule.model';

describe("Test for schedule",()=>{

  describe("Test for has internet",()=>{
    it("Should show correct function since it has internet",()=>{
      let schedule = new Schedule ("Quimica 8 AM");
    expect(schedule.getClass()).toContain("Quimica");
  });
});
  describe("Test for not connected",()=>{
    it("Should show an error that it does not have internet",()=>{
      let schedule = new Schedule("");
      expect(schedule.getClass()).toEqual("");
    });
  });
});
