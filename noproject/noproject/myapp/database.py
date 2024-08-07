# In Django, a cursor object is used to interact with the database directly using SQL queries. 
# It is part of Django's lower-level database API, 
# which allows you to execute raw SQL queries if needed, bypassing the higher-level ORM (Object-Relational Mapping) abstraction.

#cases when to use raw queries...
#1.performance  2.Complex queries   3.Legacy Databases(OLD DB's)


import mysql.connector

dataBase = mysql.connector.connect(
    host = 'localhost',
    user = 'vishnu',
    passoword = 'root',
)

cursorObject = dataBase.cursor()

cursorObject.execute("")            #To Run Sql Cmds

