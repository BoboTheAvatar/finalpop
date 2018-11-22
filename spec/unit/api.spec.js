//require("babel-register");
require("@babel/register");
const express= require('express');

//const AllIdParcelsApi=require('../../server/controllers/AllIdParcelsHandler/allidparcelsmodule');

const AllParcelsApi = require('../../server/controllers/AllParcelsHandler/allparcelsmodule');
const IdParcelsApi = require('../../server/controllers/IdParcelsHandler/idparcelsmodule');
const AllIdParcelsApi = require('../../server/controllers/AllIdParcelsHandler/allidparcelsmodule');
const CancelIdParcelsApi = require('../../server/controllers/CancelIdParcelsHandler/cancelidparcelsmodule');
const AddIdParcelsApi = require('../../server/controllers/AddIdParcelsHandler/addidparcelsmodule');
const LocationIdParcelsApi = require('../../server/controllers/LocationIdParcelsHandler/locationidparcelsmodule');
const DeliveredIdParcelsApi = require('../../server/controllers/DeliveredIdParcelsHandler/deliveredidparcelsmodule');

const a=new AllIdParcelsApi.allidparcelsclass();
const b=new AddIdParcelsApi.addidparcelsclass();
const c=new AllParcelsApi.allparcelsclass();
const d=new CancelIdParcelsApi.cancelidparcelsclass();
const e=new DeliveredIdParcelsApi.deliveredidparcelsclass();
const f=new IdParcelsApi.idparcelsclass();
const g=new LocationIdParcelsApi.locationidparcelsclass();

const api=new AllIdParcelsApi.allidparcelsclass();


describe('HTTP Server Test', function() {


  describe('All id parcels', function() {
    it('should be:', function() {
      
       expect(a.tosendflag).toBeDefined();
       expect(a.getallidparcels()).toThrow();
       expect(a.getallidparcels()).toContain("Done");
    });
  });
  describe('Add id parcels', function() {
    it('should be:', function() {
      
       expect(b.tosendflag).toBeDefined();
       expect(b.addidparcels()).toThrow();
       expect(b.addidparcels()).toContain("Done");
    });
  });
  describe('All parcels', function() {
    it('should be:', function() {
      
       expect(c.tosendflag).toBeDefined();
       expect(c.getallparcels()).toThrow();
       expect(c.getallparcels()).toContain("Done");
    });
  });
  describe('Cancel id parcels', function() {
    it('should be:', function() {
      
       expect(d.tosendflag).toBeDefined();
       expect(d.cancelidparcels()).toThrow();
       expect(d.cancelidparcels()).toContain("Done");
    });
  });
  describe('Delivered id parcels', function() {
    it('should be:', function() {
      
       expect(e.tosendflag).toBeDefined();
       expect(e.deliveredidparcels()).toThrow();
       expect(e.deliveredidparcels()).toContain("Done");
    });
  });
  describe('Id parcels', function() {
    it('should be:', function() {
      
       expect(f.tosendflag).toBeDefined();
       expect(f.getidparcels()).toThrow();
       expect(f.getidparcels()).toContain("Done");
    });
   });
    describe('Location Id parcels', function() {
    it('should be:', function() {
      
       expect(f.tosendflag).toBeDefined();
       expect(f.locationidparcels()).toThrow();
       expect(f.locationidparcels()).toContain("Done");
    });
  });


});