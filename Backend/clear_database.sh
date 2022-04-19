#!/bin/bash
mysql -u root --password='password' << EOF
USE partyholic

drop table users;
drop table parties;
drop table cancelled_parties;
drop table addresses;

EOF