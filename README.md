Get All Task 
getAllTask: [Task]
Get List Of Project
getAllProject: [Project]
  # account holder
  createAccount(accountHolderInput:AccountHolderInput): String
   # delete account
  deleteAccount(id: ID): String
   # find account holder by email
  findByEmail(email: String): AccountHolder
   # login 
  login(email:String,password:String):AccountHolder
  # task
  createTask(taskInput: TaskInput): String
   # create task
  deleteTask(id: ID): String
  # project
  createProject(projectInput: ProjectInput): String
  # delete project
  deleteProject(id: ID): String