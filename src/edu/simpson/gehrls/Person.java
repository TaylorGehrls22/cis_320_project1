package edu.simpson.gehrls;

/**
 * Created by taylor.gehrls on 1/26/2017.
 */
public class Person {
    private int id;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String birthday;

    public int getId() {return id; }
    public void setId(int id) { this.id = id; }

    public String getFirst() {return firstName; }
    public void setFirst(String firstName) {this.firstName = firstName; }

    public String getLast() {return lastName; }
    public void setLast(String lastName) {this.lastName = lastName; }

    public String getEmail() {return email; }
    public void setEmail(String email) {this.email = email; }

    public String getPhone() {return phone; }
    public void setPhone(String phone) {this.phone = phone; }

    public String getBirthday() {return birthday; }
    public void setBirthday(String birthday) {this.birthday = birthday; }
}
