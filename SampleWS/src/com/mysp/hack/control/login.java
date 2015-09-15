package com.mysp.hack.control;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@SuppressWarnings("serial")
public class login extends HttpServlet{
	public void doPost(HttpServletRequest request, HttpServletResponse response){
		try{
			String username = request.getParameter("username");
			String password = request.getParameter("password");
			String status = ResultData.validateUser(username , password);
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
