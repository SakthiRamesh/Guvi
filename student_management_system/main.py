from DBCommon import db_connection


def check_if_present(roll_number):
    db_cursor = db_connection.cursor()
    sql_query = f"SELECT * FROM student_management WHERE roll_number = {roll_number}"
    db_cursor.execute(sql_query)
    myresult = db_cursor.fetchall()
    if (myresult == []):
        return False
    else:
        return True


def read_values():

    file = open('input.txt', 'r')
    read_contents = file.readlines()
    file.close()

    for content in read_contents:
        content.replace('\n', "")
        print(content)
        student_name = content.split(",")[0]
        roll_no = content.split(",")[1]
        standard = 10
        tamil = content.split(",")[2]
        english = content.split(",")[3]
        maths = content.split(",")[4]
        science = content.split(",")[5]
        social = content.split(",")[6]

        if not check_if_present(roll_no):
            db_cursor = db_connection.cursor()
            sql_query = "INSERT INTO student_management VALUES(%s, %s, %s, %s, %s, %s, %s, %s)"
            values = (student_name, int(roll_no), int(standard), float(tamil), float(english), float(maths), float(science),
                      float(social))
            db_cursor.execute(sql_query, values)
            db_connection.commit()


read_values()

