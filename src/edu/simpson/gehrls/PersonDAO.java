package edu.simpson.gehrls;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * Created by taylor.gehrls on 1/26/2017.
 */
public class PersonDAO {
    final static Logger log = Logger.getLogger(PersonDAO.class.getName());

    public static void addPerson(Person person) {
        log.log(Level.FINE, "Add person");

        // Declare our variables
        Connection conn = null;
        PreparedStatement stmt = null;

        // Databases are unreliable. Use some exception handling
        try {
            // Get our database connection
            conn = DBHelper.getConnection();

            // This is a string that is our SQL query.
            String sql = "insert into person (first, last, email, phone, birthday) values (?, ?, ?, ?, ?)";

            // Create an object with all the info about our SQL statement to run.
            stmt = conn.prepareStatement(sql);
            stmt.setString(1, person.getFirst());
            stmt.setString(2, person.getLast());
            stmt.setString(3, person.getEmail());
            stmt.setString(4, person.getPhone());
            stmt.setString(5, person.getBirthday());

            // Execute the SQL and get the results
            stmt.executeUpdate();
        }
        catch (SQLException se) {
            log.log(Level.SEVERE, "SQL Error", se );
        }
        catch (Exception e) {
            log.log(Level.SEVERE, "Error", e );
        }
        finally {
            // Ok, close our result set, statement, and connection
            try { stmt.close(); } catch (Exception e) { log.log(Level.SEVERE, "Error", e ); }
            try { conn.close(); } catch (Exception e) { log.log(Level.SEVERE, "Error", e ); }
        }
    }

    public static void editPerson(Person person) {
        log.log(Level.FINE, "Add person");

        // Declare our variables
        Connection conn = null;
        PreparedStatement stmt = null;

        // Databases are unreliable. Use some exception handling
        try {
            // Get our database connection
            conn = DBHelper.getConnection();

            // This is a string that is our SQL query.
            String sql = "update person set first=?, last=?, email=?, phone=?, birthday=? where id=?";

            // Create an object with all the info about our SQL statement to run.
            stmt = conn.prepareStatement(sql);
            stmt.setString(1, person.getFirst());
            stmt.setString(2, person.getLast());
            stmt.setString(3, person.getEmail());
            stmt.setString(4, person.getPhone());
            stmt.setString(5, person.getBirthday());
            stmt.setString(6, Integer.toString(person.getId()));

            // Execute the SQL and get the results
            stmt.executeUpdate();
        }
        catch (SQLException se) {
            log.log(Level.SEVERE, "SQL Error", se );
        }
        catch (Exception e) {
            log.log(Level.SEVERE, "Error", e );
        }
        finally {
            // Ok, close our result set, statement, and connection
            try { stmt.close(); } catch (Exception e) { log.log(Level.SEVERE, "Error", e ); }
            try { conn.close(); } catch (Exception e) { log.log(Level.SEVERE, "Error", e ); }
        }
    }

    public static void deletePerson(String id) {
        log.log(Level.FINE, "Add person");

        // Declare our variables
        Connection conn = null;
        PreparedStatement stmt = null;

        // Databases are unreliable. Use some exception handling
        try {
            // Get our database connection
            conn = DBHelper.getConnection();

            // This is a string that is our SQL query.
            String sql = "delete FROM person WHERE id=?";

            // Create an object with all the info about our SQL statement to run.
            stmt = conn.prepareStatement(sql);
            stmt.setString(1, id);

            // Execute the SQL and get the results
            stmt.executeUpdate();
        }
        catch (SQLException se) {
            log.log(Level.SEVERE, "SQL Error", se );
        }
        catch (Exception e) {
            log.log(Level.SEVERE, "Error", e );
        }
        finally {
            // Ok, close our result set, statement, and connection
            try { stmt.close(); } catch (Exception e) { log.log(Level.SEVERE, "Error", e ); }
            try { conn.close(); } catch (Exception e) { log.log(Level.SEVERE, "Error", e ); }
        }
    }

    public static List<Person> getPeople() {
        log.log(Level.FINE, "Get people");

        // Create an empty linked list to put the people we get from the database into.
        List<Person> list = new LinkedList<Person>();

        // Declare our variables
        Connection conn = null;
        PreparedStatement stmt = null;
        ResultSet rs = null;

        // Databases are unreliable. Use some exception handling
        try {
            // Get our database connection
            conn = DBHelper.getConnection();

            // This is a string that is our SQL query.
            String sql = "select id, first, last, email, phone, birthday from person";

            // Create an object with all the info about our SQL statement to run.
            stmt = conn.prepareStatement(sql);

            // Execute the SQL and get the results
            rs = stmt.executeQuery();

            // Loop through each record
            while(rs.next()) {

                Person person = new Person();

                // Get the data from the result set, and copy it to the Person object
                person.setId(rs.getInt("id"));
                person.setFirst(rs.getString("first"));
                person.setLast(rs.getString("last"));
                person.setEmail(rs.getString("email"));
                person.setPhone(rs.getString("phone"));
                person.setBirthday(rs.getString("birthday"));


                // Add this person to the list so we can return it.
                list.add(person);

            }
        } catch (SQLException se) {
            log.log(Level.SEVERE, "SQL Error", se );
        } catch (Exception e) {
            log.log(Level.SEVERE, "Error", e );
        } finally {
            // Ok, close our result set, statement, and connection
            try { rs.close(); } catch (Exception e) { log.log(Level.SEVERE, "Error", e ); }
            try { stmt.close(); } catch (Exception e) { log.log(Level.SEVERE, "Error", e ); }
            try { conn.close(); } catch (Exception e) { log.log(Level.SEVERE, "Error", e ); }
        }
        // Done! Return the results
        return list;
    }
}
