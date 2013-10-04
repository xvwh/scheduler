addMenu('Logoff','Logoff')
  addMenuItem('Logoff','logoff1','Logoff your session','SCHEDPoolPage.jsp?pagename=logoff','')
  addMenuItem('Logoff','logoff2','Logoff and logon as a new user','SCHEDPoolPage.jsp?pagename=logon','')
addMenu('Active Job Stream','Active Job Stream')
  addMenuItem('Active Job Stream','act1','Manage scheduled jobs','SCHEDPoolPage.jsp?pagename=schedlistall','')
  addMenuItem('Active Job Stream','act2','Display outstanding job alerts','SCHEDPoolPage.jsp?pagename=alertlistall','')
  addMenuItem('Active Job Stream','act3','Manage job dependencies','SCHEDPoolPage.jsp?pagename=deplistall','')
  addMenuItem('Active Job Stream','act4','------------------------------','','')
  addMenuItem('Active Job Stream','act5','Show who is logged into the servers','SCHEDPoolPage.jsp?pagename=schedshowsessions','')
  addMenuItem('Active Job Stream','act6','Show status of the schedulers','SCHEDPoolPage.jsp?pagename=schedserverstatus','')
addMenu('Job Definition','Job Definition')
  addMenuItem('Job Definition','job1','Manage existing jobs','SCHEDPoolPage.jsp?pagename=joblistall','')
  addMenuItem('Job Definition','job2','Create a new job','SCHEDPoolPage.jsp?pagename=jobadd','')
  addMenuItem('Job Definition','job3','-------------------------','','')
  addMenuItem('Job Definition','job4','Manage existing calendars','SCHEDPoolPage.jsp?pagename=callistall','')
  addMenuItem('Job Definition','job5','Create a new calendar','SCHEDPoolPage.jsp?pagename=caladd','')
addMenu('User Management','User Management')
  addMenuItem('User Management','user1','List All Users','SCHEDPoolPage.jsp?pagename=userlistall','')
  addMenuItem('User Management','user2','Add a new user','SCHEDPoolPage.jsp?pagename=useradd','')
  addMenuItem('User Management','user3','Change a users password','SCHEDPoolPage.jsp?pagename=usernewpswd','')
  addMenuItem('User Management','user4','Delete a user','SCHEDPoolPage.jsp?pagename=userdel','')
addMenu('Servlet Toolkit','Servlet Toolkit')
  addMenuItem('Servlet Toolkit','tool1','Show the session pool state','SCHEDPoolPage.jsp?pagename=showConnectionPool','')
  addMenuItem('Servlet Toolkit','tool2','Show the user pool state','SCHEDPoolPage.jsp?pagename=showUserPool','')
