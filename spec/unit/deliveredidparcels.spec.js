
const request=require('request');


describe("Change status of a ID parcel Test ", () => {
    
    let url = "http://localhost:8080/api/v1/parcels/id1/delivered", result="Updated!";
    
    

    it("returns status 200", (done)=> {
      request.put(url, (error, response, body) =>{
        expect(response.statusCode).toEqual(200);
        done();
      });
    });

    it("returns the expected result",(done) =>{
      request.put(url, (error, response, body) =>{
        expect(body).toEqual(JSON.stringify(result));
        done();
      });
    });


});
