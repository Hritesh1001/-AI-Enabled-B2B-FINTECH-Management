package com.highradius;

import java.io.IOException;
import java.lang.System.Logger;
import java.util.Date;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.text.DateFormat;
import java.text.ParseException;



@WebServlet("/AddServlet")
public class AddServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
   
    public AddServlet() {
        super();
       
    }

    public static  Date  parseDate(String fecha ) {

    	 System.out.println(fecha);
        String fechaString = new SimpleDateFormat("yyyy-MM-dd").format(fecha) ;
        DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
        Date fechaFormateada = null;
        try {
            fechaFormateada = df.parse(fechaString);
        } catch (ParseException ex) {
           ex.printStackTrace();
        }
        System.out.println(fechaFormateada);
        return fechaFormateada;
    	  
    	
    }
    
    
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con= DBconnection.createConnect();

			String business_code=request.getParameter("business_code");
			int cust_number=Integer.parseInt(request.getParameter("cust_number"));	
			String invoice_currency=request.getParameter("invoice_currency");
			String document_type=request.getParameter("document_type");
			String doc_id=request.getParameter("doc_id");
			String cust_payment_terms=request.getParameter("cust_payment_terms");
			double total_open_amount= Double.parseDouble(request.getParameter("total_open_amount"));
		    int posting_id=Integer.parseInt(request.getParameter("posting_id"));
		    int invoice_id=Integer.parseInt(request.getParameter("invoice_id"));
		    String buisness_year=request.getParameter("buisness_year");
		    String document_create_date=request.getParameter("document_create_date");
			String posting_date=(request.getParameter("posting_date"));
			String baseline_create_date=request.getParameter("baseline_create_date");
			String due_in_date=request.getParameter("due_in_date");
		    String clear_date=request.getParameter("clear_date");

			String query = "INSERT INTO winter_internship (business_code,cust_number,clear_date, buisness_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency,document_type,posting_id,total_open_amount,baseline_create_date, cust_payment_terms, invoice_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
			PreparedStatement st = con.prepareStatement(query);
			
			//setting in the database
			st.setString(1,business_code );
			st.setInt(2,cust_number );
			st.setString(3,clear_date);
			st.setString(4, buisness_year );
			st.setString(5, doc_id);
			st.setString(6, posting_date);
			st.setString(7,document_create_date);
			st.setString(8,due_in_date);
			st.setString(9,invoice_currency);
			st.setString(10,document_type);
			st.setInt(11, posting_id);
			st.setDouble(12,total_open_amount);
			st.setString(13,baseline_create_date);
			st.setString(14, cust_payment_terms);
			st.setInt(15, invoice_id);
			System.out.println(clear_date);
			st.executeUpdate();
			st.close();
			con.close();
			}
			catch(Exception e)
			{
				e.printStackTrace();
			}
		
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		doGet(request, response);
	}
}