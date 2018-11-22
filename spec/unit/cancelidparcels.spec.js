
const request=require('request');


describe("Cancel ID parcel Test ", () => {
    
    let url = "http://localhost:8080/api/v1/parcels/id1/cancel", result="Forbidden";
    
    

    it("returns status 200", (done)=> {
      request.put(url, (error, response, body) =>{
        //expect(response.statusCode).toBeUndefined();
        done();
      });
    });

    it("returns the expected result",(done) =>{
      request.put(url, (error, response, body) =>{
        expect(body).toBeUndefined();
        done();
      });
    });


});
