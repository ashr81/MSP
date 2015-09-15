package com.mysp.hack.control;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@SuppressWarnings("serial")
public class offer extends HttpServlet{
	public void doPost(HttpServletRequest request, HttpServletResponse response){
		try{
			String store = request.getParameter("store");
			String product = request.getParameter("product");
			String description = request.getParameter("description");
			String link = request.getParameter("link");
			String username = request.getParameter("username");
			String status = ResultData.addOffer(store , product , description , username, link);
			if(status.equalsIgnoreCase("success")){
				request.getSession().setAttribute("username", username);
				RequestDispatcher rd = request.getRequestDispatcher("home.jsp");
	            rd.include(request, response);
			}else{
				response.sendRedirect("login.jsp");
			}
		}catch(Exception e){
			System.out.println(e);
		}
	}
}
