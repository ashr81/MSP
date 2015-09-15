package com.mysp.hack.control;


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;

import org.codehaus.jettison.json.JSONArray;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;

public class ResultData {
	private static Connection con = ConnectDB.getConnection();
	
	public static String getAllData(String store , String city , String state , String address1 , String address2 , String latitude , String longitude){
		ResultSet rs = null;
		try{
			Statement st = con.createStatement();
			String searchQuery = "";
			String where = "";
			if(store != null) searchQuery += "store = '"+store+"'";
			if(city != null) searchQuery += "and city = '"+city+"'";
			if(state != null) searchQuery += "and state = '"+state+"'";
			if(address1 != null) searchQuery += " and address1 = '"+address1+"'";
			if(address2 != null) searchQuery += " and address2 = '"+address2+"'";
			if(latitude != null) searchQuery += " and latitude = '"+latitude+"'";
			if(longitude != null) searchQuery += " and longitude = '"+longitude+"'";
			if(searchQuery != "") where = "where";
			rs = st.executeQuery("select * from store "+where + " " +searchQuery);
		}catch(SQLException e){ System.out.println(e.getMessage());}
		catch(Exception e){System.out.println(e.getMessage());}
		return getJson(rs);
	}
	
/*//////////////// GET JSON DATA FROM RESULTSET ///////////*/
	
	public static String getJson(ResultSet rs){
		JSONObject json = null;
		JSONArray arr = new JSONArray();
		try{
			if(!rs.next()){ return getJsonError("Record Not Found"); };
			ResultSetMetaData rsmd = rs.getMetaData(); 
			int columnCount = rsmd.getColumnCount();
			do{
				json = new JSONObject();
				json.put("result","true");
				for(int i=1;i<=columnCount;i++){
					json.put(rsmd.getColumnName(i),rs.getString(i));
				}
				arr.put(json);
			}while(rs.next());
			json = new JSONObject();
			json.put("data",arr);
		}
		catch(JSONException e){ return getJsonError(e.getMessage()); }
		catch(Exception e){ return getJsonError(e.getMessage()); }
		return json.toString();
	}
	public static String getJsonError(String error){
		JSONObject json = new JSONObject();
		JSONArray arr = new JSONArray();
		try{
			json.put("result","false");
			json.put("output",error);
			arr.put(json);
			json = new JSONObject();
			json.put("data",arr);
		}
		catch(JSONException e){ return e.getMessage(); }
		catch(Exception e){ return e.getMessage();}
		return json.toString();
	}
	public static String getJsonOutput(String msg){
		JSONObject json = new JSONObject();
		JSONArray arr = new JSONArray();
		try{
			json.put("result","true");
			json.put("output",msg);
			arr.put(json);
			json = new JSONObject();
			json.put("data",arr);
		}
		catch(JSONException e){ return e.getMessage(); }
		catch(Exception e){ return e.getMessage();}
		return json.toString();
	}
	public static String Registration(String company , String owner , String email , String website , String address , String password , String password2 , String latitude , String longitude , String area){
		PreparedStatement ps = null;
		try{
			ps = con.prepareStatement("insert into CUSTOM_STORE_DATA(COMPANY , OWNER , EMAIL , WEBSITE , ADDRESS , PASSWORD , latitude , longitude , AREA) VALUES (?,?,?,?,?,?,?,?,?)");
			ps.setString(1, company);
			ps.setString(2, owner);
			ps.setString(3, email);
			ps.setString(4, website);
			ps.setString(5, address);
			ps.setString(6, password);
			ps.setString(7, latitude);
			ps.setString(8, longitude);
			ps.setString(9, area);
			ps.executeUpdate();
			
		}catch(SQLException e){ System.out.println(e.getMessage());}
		catch(Exception e){System.out.println(e.getMessage());}
		return "success";
	}
	public static String getData(){
		ResultSet rs = null;
		try{
			Statement st = con.createStatement();
			rs = st.executeQuery("select store , product , description , address , latitude , longitude , area , link from CUSTOM_OFFER_DATA");
		}catch(SQLException e){ System.out.println(e.getMessage());}
		catch(Exception e){System.out.println(e.getMessage());}
		return getJson(rs);
	}
	public static String getStoreData(String store){
		ResultSet rs = null;
		try{
			Statement st = con.createStatement();
			rs = st.executeQuery("select store , product , description  , address , latitude , longitude , area , link from CUSTOM_OFFER_DATA where area = '"+store+"'");
		}catch(SQLException e){ System.out.println(e.getMessage());}
		catch(Exception e){System.out.println(e.getMessage());}
		return getJson(rs);
	}
	public static String getAreas(){
		ResultSet rs = null;
		Statement st = null;
		try{
			st = con.createStatement();
			rs = st.executeQuery("select distinct area from CUSTOM_STORE_DATA");
		}catch(Exception e){
			System.out.println(e);
		}
		return getJson(rs);
	}
	public static String validateUser(String username , String password){
		ResultSet rs = null;
		String status = "";
		Statement st = null;
		try{
			st = con.createStatement();
			rs = st.executeQuery("Select owner from CUSTOM_STORE_DATA where OWNER = '"+username+"' and password = '"+password+"'");
			if(rs.next()) status = "success";
			else status = "failure";
		}catch(SQLException e){
			System.out.println(e);
		}catch(Exception e){
			System.out.println(e);
		}finally{
			try{
				if(rs != null) rs.close();
				if(st != null) st.close();
			}catch(Exception e){
				System.out.println(e);
			}
		}
		return status;
	}
	public static String addOffer(String store , String product , String description , String username , String link){
		String status = "";
		Statement st = null;
		ResultSet rs = null;
		PreparedStatement ps = null;
		
		try{
			st = con.createStatement();
			rs = st.executeQuery("select latitude , longitude , address , area from CUSTOM_STORE_DATA where owner = '"+username+"'");
			if(rs.next()){
				ps = con.prepareStatement("insert into CUSTOM_OFFER_DATA (STORE , PRODUCT , DESCRIPTION , ADDRESS , AREA , LATITUDE , LONGITUDE , OWNER , LINK) VALUES (?,?,?,?,?,?,?,?,?)");
				ps.setString(1, store);
				ps.setString(2, product);
				ps.setString(3, description);
				ps.setString(4, rs.getString(3));
				ps.setString(5, rs.getString(4));
				ps.setString(6, rs.getString(1));
				ps.setString(7, rs.getString(2));
				ps.setString(8, username);
				ps.setString(9, link);
				ps.executeUpdate();
				status = "success";
			}
		}catch(Exception e){
			System.out.println(e);
		}finally{
			try{
				if(rs != null) rs.close();
				if(st != null) st.close();
				if(ps != null) ps.close();
			}catch(Exception e){
				System.out.println(e);
			}
		}
		return status;
	}
	
}

