#!/bin/bash



mysql -u root --password='password' << EOF
USE partyholic

insert into users values(1,"Himakireeti", "Konda",1,"Male","Cool Dude","hk@gmail.com","1234");
insert into users values(2,"Sanjana", "Aluri",2,"Female","Classy and sassy","sanj@gmail.com","1234");
insert into users values(3,"Medha", "Naik",3,"Female","unwanted","medha@gmail.com","1234");
insert into users values(4,"Santosh", "Maturi",4,"Male","waste of time","santosh@gmail.com","1234");

insert into addresses values(1,"309 sw 16th ave apt 219","Gainesville","Florida","USA",-82.3291,29.63597);
insert into addresses values(2,"350 Elan Village Ln","SanJose","California","USA",-82.3290,29.63590);
insert into addresses values(3,"4000 SW 37th apt 1211","Gainesville","Florida","USA",-82.3299,29.63589);
insert into addresses values(4,"4000 SW 37th apt 1012","Gainesville","Florida","USA",-82.3290,29.63593);

insert into parties values(1, "Classic Party", 1,1,"2006-01-02T15:04:05.999999-07:00","2006-01-02T15:04:05.999999-07:00","","","127045.jpg",100,-82.3291,29.63597);
insert into parties values(2, "Daaru Party", 2,2,"2006-01-02T15:04:05.999999-07:00","2006-01-02T15:04:05.999999-07:00","","","Image5.jpg",100,-82.3290,29.63590);
insert into parties values(3, "Chillar party", 3,3,"2006-01-02T15:04:05.999999-07:00","2006-01-02T15:04:05.999999-07:00","","","Image6.jpg",100,-82.3299,29.63589);
insert into parties values(4, "Gay party", 4,4,"2006-01-02T15:04:05.999999-07:00","2006-01-02T15:04:05.999999-07:00","","","Image4.jpg",100,-82.3290,29.63593);
EOF