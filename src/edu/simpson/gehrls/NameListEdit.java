package edu.simpson.gehrls;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Created by taylor.gehrls on 2/14/2017.
 */
@WebServlet(name = "NameListEdit")
public class NameListEdit extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // You can output in any format, text/JSON, text/HTML, etc. We'll keep it simple
        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();

        // Print that this is a post
        out.println("Post");

        // Grab the data we got via a parameter
        String id = request.getParameter("id");
        String first = request.getParameter("first");
        String last = request.getParameter("last");
        String phone = request.getParameter("phone");
        String birthday = request.getParameter("birthday");

        // Just print the data out to confirm we got it.
        out.println("first='"+first+"'"+"last='"+last+"'"+"phone='"+phone+"'"
            +"birthday='"+birthday+"'");

        Person person = new Person();
        person.setFirst(first);
        person.setLast(last);
        person.setPhone(phone);
        person.setBirthday(birthday);
        PersonDAO.addPerson(person);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // You can output in any format, text/JSON, text/HTML, etc. We'll keep it simple
        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();

        // Print that this is a get, not a post
        out.println("Get");

        // Grab the data we got via a parameter
        String first = request.getParameter("first");
        String last = request.getParameter("last");
        String phone = request.getParameter("phone");
        String birthday = request.getParameter("birthday");

        // Just print the data out to confirm we got it.
        out.println("'"+"first='"+first+"'"+"last='"+last+"'"+"phone='"+phone+"'"
                +"birthday='"+birthday+"'");

        Person person = new Person();
        person.setFirst("first");
        person.setLast("last");
        person.setPhone("phone");
        person.setBirthday("birthday");
        PersonDAO.addPerson(person);
    }
}
