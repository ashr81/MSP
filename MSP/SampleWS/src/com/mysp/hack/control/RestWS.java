package com.mysp.hack.control;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;


@Path("/test")
public class RestWS {
	//http://192.168.1.12:8080/ws_test/rest/test/getAllData
	
	@GET @Path("/getAllData")
	@Produces({"application/xml", "application/json"})
    public String getAllData(@QueryParam("store") String store,
    						@QueryParam("city") String city,
    						@QueryParam("state") String state,
    						@QueryParam("Address1") String address1,
    						@QueryParam("Address2") String address2,
    						@QueryParam("latitude") String latitude,
    						@QueryParam("longitude") String longitude) {
							
		return ResultData.getAllData(store , city , state , address1 , address2 , latitude , longitude);
    }
	@GET @Path("/getStoreData")
	@Produces(MediaType.TEXT_PLAIN)
    public String getStoreData(@QueryParam("area") String store) {
		return ResultData.getStoreData(store);
    }
	@GET @Path("NewRegistration")
	@Produces({"application/xml", "application/json"})
	public String NewUserRegistrationp(@QueryParam("username") String username,
										@QueryParam("password") String password){
		return "";
	}
	@GET @Path("/getData")
	@Produces(MediaType.TEXT_PLAIN)
	public String getData(){
	
		return ResultData.getData();
	}
	@GET @Path("/getAreas")
	@Produces(MediaType.TEXT_PLAIN)
	public String getAreas(){
		return ResultData.getAreas();
	}
}
