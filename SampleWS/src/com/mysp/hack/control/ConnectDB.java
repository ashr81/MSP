package com.mysp.hack.control;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectDB {
	private static Connection con;
	private static String url = "jdbc:mysql://192.168.1.86/student";
	private static String driver = "com.mysql.jdbc.Driver";
	private static String username = "root";
	private static String password = "hanbit";
	
	public static Connection getConnection(){
		try{
		 Class.forName(driver);
		 con = DriverManager.getConnection(url,username,password);
		}catch(SQLException e){ System.out.println(e.getMessage());}
		catch(Exception e){ System.out.println(e.getMessage());}
		return con;
	}
}
