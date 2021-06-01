import mysql.connector


db_host = "localhost"
db_user = "appuser"
db_passwd = "Demoentry#333"
database = "college"

db_connection = mysql.connector.connect( host=db_host, user=db_user, passwd=db_passwd, database=database)