package edu.simpson.gehrls;

/**
 * Created by taylor.gehrls on 1/26/2017.
 */
public class Person {
    private int id;
    private String first;
    private String last;
    private String phone;
    private String birthday;

    public int getId() {return id; }
    public void setId(int id) { this.id = id; }

    public String getFirst() {return first; }
    public void setFirst(String first) {this.first = first; }

    public String getLast() {return last; }
    public void setLast(String last) {this.last = last; }

    public String getPhone() {return phone; }
    public void setPhone(String phone) {this.phone = phone; }

    public String getBirthday() {return birthday; }
    public void setBirthday(String birthday) {this.birthday = birthday; }
}