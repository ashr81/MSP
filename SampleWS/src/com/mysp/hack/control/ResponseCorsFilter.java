package com.mysp.hack.control;

import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.ResponseBuilder;
 
import com.sun.jersey.spi.container.ContainerRequest;
import com.sun.jersey.spi.container.ContainerResponse;
import com.sun.jersey.spi.container.ContainerResponseFilter;
 
public class ResponseCorsFilter implements ContainerResponseFilter {
 
    @Override
    public ContainerResponse filter(ContainerRequest req, ContainerResponse contResp) {
 
        ResponseBuilder resp = Response.fromResponse(contResp.getResponse());
        resp.header("Access-Control-Allow-Origin", "*")
        .header("Access-Control-Allow-Headers", "origin, content-type, accept, authorization")
        .header("Access-Control-Allow-Credentials", "true")
        .header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD")
        .header("Access-Control-Max-Age", "1209600");
 
        String reqHead = req.getHeaderValue("Access-Control-Request-Headers");
 
        if(null != reqHead && !reqHead.equals("")){
            resp.header("Access-Control-Allow-Headers", reqHead);
        }
 
        contResp.setResponse(resp.build());
            return contResp;
    }
 
}