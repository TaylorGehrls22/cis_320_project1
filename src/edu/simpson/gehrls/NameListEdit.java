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
        String firstName = request.getParameter("firstName");
        String lastName = request.getParameter("lastName");
        String email = request.getParameter("email");
        String phone = request.getParameter("phone");
        String birthday = request.getParameter("birthday");

        // Just print the data out to confirm we got it.
        out.println("firstName='"+firstName+"'"+"lastName='"+lastName+"'"+"email='"+email+"'"+"phone='"+phone+"'"
            +"birthday='"+birthday+"'");

        Person person = new Person();
        person.setFirst(firstName);
        person.setLast(lastName);
        person.setEmail(email);
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
        String firstName = request.getParameter("firstName");
        String lastName = request.getParameter("lastName");
        String email = request.getParameter("email");
        String phone = request.getParameter("phone");
        String birthday = request.getParameter("birthday");

        // Just print the data out to confirm we got it.
        out.println("'"+"firstName='"+firstName+"'"+"lastName='"+lastName+"'"+"email='"+email+"'"+"phone='"+phone+"'"
                +"birthday='"+birthday+"'");

        Person person = new Person();
        person.setFirst("firstName");
        person.setLast("lastName");
        person.setEmail("email");
        person.setPhone("phone");
        person.setBirthday("birthday");
        PersonDAO.addPerson(person);
    }
}
