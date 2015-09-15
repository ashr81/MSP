package com.mysp.hack.control;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class register extends HttpServlet{
	public void doPost(HttpServletRequest request, HttpServletResponse response){
		try{
			String company = request.getParameter("company");
			String owner = request.getParameter("owner");
			String email = request.getParameter("email");
			String website = request.getParameter("website");
			String address = request.getParameter("address");
			String password = request.getParameter("password");
			String password2 = request.getParameter("password2");
			String lat = request.getParameter("lat");
			String lng = request.getParameter("lng");
			String area = request.getParameter("area");
			String status = ResultData.Registration(company, owner, email, website, address, password, password2, lat, lng, area);
			response.sendRedirect("/SampleWS/login.jsp");
			
		}catch(Exception e){
			System.out.println(e);
		}
	}
}
