# 初始化数据

本系统使用mysql数据库

- 在mysql中创建数据库 web-flash
    ```sql
    CREATE DATABASE IF NOT EXISTS web-flash DEFAULT charset utf8 COLLATE utf8_general_ci;
    ```
- 启动项目的时候会自动创建数据库并初始化系统数据

--我直接在执行的时候，报下面的错误，后来把web-flash改成web_flash就可以了
```sql
mysql> CREATE DATABASE IF NOT EXISTS web-flash DEFAULT charset utf8 COLLATE utf8_general_ci;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version
 for the right syntax to use near '-flash DEFAULT charset utf8 COLLATE utf8_general_ci' at line 1
mysql> CREATE DATABASE IF NOT EXISTS web_flash DEFAULT charset utf8 COLLATE utf8_general_ci;
Query OK, 1 row affected (0.13 sec)
```


