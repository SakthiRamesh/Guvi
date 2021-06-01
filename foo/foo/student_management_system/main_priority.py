from flask import Flask, render_template, request
from DBCommon import db_connection

app = Flask(__name__)


@app.route("/")
def homepage():
    return render_template("homepage.html")


@app.route("/student-portal")
def student_portal():
    return render_template("student_portal.html")


@app.route("/response", methods=["POST"])
def response():
    student_name = request.form.get("sname")
    roll_number = request.form.get("roll")
    standard = request.form.get("std")
    tamil = request.form.get("tamil")
    english = request.form.get("english")
    maths = request.form.get("maths")
    science = request.form.get("science")
    social = request.form.get("social")
    db_cursor = db_connection.cursor()
    db_cursor.execute(
        "CREATE TABLE IF NOT EXISTS student_management(Student_name varchar(255), Roll_number int PRIMARY KEY, Standard int, Tamil Float, English Float, Maths Float, Science Float, Social Float )")
    sql_query = "INSERT INTO student_management VALUES(%s, %s, %s, %s, %s, %s, %s, %s)"
    values = (student_name, roll_number, standard, tamil, english, maths, science, social)
    db_cursor.execute(sql_query, values)
    db_connection.commit()

    total_of_subjects, average_of_subjects = sum_and_average(tamil, english, maths, science, social)
    return render_template("student_info_table.html", total_of_marks=total_of_subjects,
                           average_of_marks=average_of_subjects, sname=student_name, roll_num=roll_number, std=standard,
                           tamil=tamil, english=english, maths=maths, science=science, social=social)


def sum_and_average(tamil, english, maths, science, social):
    sum_of_subjects = int(tamil) + int(english) + int(maths) + int(science) + int(social)
    average = sum_of_subjects / 5
    return sum_of_subjects, average


@app.route('/view-student-detail', methods=["GET"])
def view_detail():
    db_cursor = db_connection.cursor()
    sql_for_stud_names = ("SELECT student_name, roll_number FROM student_management")
    db_cursor.execute(sql_for_stud_names)
    student_names = db_cursor.fetchall()
    return render_template("stud_names_in_db.html", students=student_names)


@app.route('/student_marks/<int:student_roll>', methods=["GET"])
def view_stud_marks(student_roll):
    db_cursor = db_connection.cursor()
    sql_for_stud_marks = f"SELECT tamil, english, maths, science, social FROM student_management WHERE roll_number = {student_roll}"
    db_cursor.execute(sql_for_stud_marks)
    student_marks = db_cursor.fetchall()
    print(student_marks)
    total_of_marks, average_of_marks = sum_and_average(student_marks[0][0], student_marks[0][1], student_marks[0][2],
                                                       student_marks[0][3], student_marks[0][4])
    if (student_marks[0][0] < 35) or (student_marks[0][1] < 35) or (student_marks[0][2] < 35) or (student_marks[0][3] < 35) or (student_marks[0][4] < 35):
        student_result = "fail"
    else:
        student_result = "pass"

    return render_template("student_marks_output.html", student_mark=student_marks[0], total_of_marks=total_of_marks,
                           average_of_marks=average_of_marks, student_result = student_result)






if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)