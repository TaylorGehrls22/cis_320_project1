package edu.simpson.gehrls;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by taylor.gehrls on 2/14/2017.
 */
@WebServlet(name = "NameListEdit")
public class NameListEdit extends HttpServlet {

    private Pattern nameValidationPattern;
    private Pattern emailValidationPattern;
    private Pattern phoneValidationPattern;
    private Pattern birthdayValidationPattern;

    public NameListEdit() {
        // --- Compile and set up all the regular expression patterns here ---
        nameValidationPattern = Pattern.compile("^\\S[a-zA-Z\\u00C0-\\u017F\\-'\\s]{0,30}$");
        emailValidationPattern = Pattern.compile("^[a-zA-Z0-9\\.\\-\\_\\@]{0,30}$");
        phoneValidationPattern = Pattern.compile("^\\d{3}-\\d{3}-\\d{4}$");
        birthdayValidationPattern = Pattern.compile("^(19|20)\\d\\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$");
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // You can output in any format, text/JSON, text/HTML, etc. We'll keep it simple
        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();

        // Print that this is a post
        out.println("Post");

        // Grab the data we got via a parameter
        String id = request.getParameter("id");
        String firstName = request.getParameter("firstName");
        String lastName = request.getParameter("lastName");
        String email = request.getParameter("email");
        String phone = request.getParameter("phone");
        String birthday = request.getParameter("birthday");

        // Just print the data out to confirm we got it.
        out.println("firstName='"+firstName+"'"+"lastName='"+lastName+"'"+"email='"+email+"'"+"phone='"+phone+"'"
            +"birthday='"+birthday+"'");

        Matcher firstM = nameValidationPattern.matcher(firstName);
        Matcher lastM = nameValidationPattern.matcher(lastName);
        Matcher emailM = emailValidationPattern.matcher(email);
        Matcher phoneM = phoneValidationPattern.matcher(phone);
        Matcher birthdayM = birthdayValidationPattern.matcher(birthday);

        if (firstM.find() && lastM.find() && emailM.find() && phoneM.find() && birthdayM.find()) {
            out.println("Passed validation");
            Person person = new Person();
            person.setFirst(firstName);
            person.setLast(lastName);
            person.setEmail(email);
            person.setPhone(phone);
            person.setBirthday(birthday);

            out.println(person);

            if (id.equals(""))
            {
                PersonDAO.addPerson(person);
            }
            else
            {
                person.setId(Integer.parseInt(id));
                PersonDAO.editPerson(person);
            }

        } else {
            out.println("Did not pass validation");
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // You can output in any format, text/JSON, text/HTML, etc. We'll keep it simple
/*        response.setContentType("text/plain");
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
        PersonDAO.addPerson(person);*/
    }
}
