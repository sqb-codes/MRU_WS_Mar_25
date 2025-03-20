import './App.css'
import { Header } from './components/header'
import { User } from './components/user'

const USER_DATA = [
  {
    user_id: 101,
    user_name: "Virat Kohli",
    user_role: "Batsman",
    user_pic: "https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg"
  },
  {
    user_id: 102,
    user_name: "Rohit Sharma",
    user_role: "Batsman and Captain",
    user_pic: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202503/rohit-sharma-100807369-16x9.jpg?VersionId=g79WBPyAgib6qq0xU9TMsUl7F.FHAVgP&size=690:388"
  },
  {
    user_id: 103,
    user_name: "MS Dhoni",
    user_role: "Batsman & WK",
    user_pic: "https://images.moneycontrol.com/static-mcnews/2019/01/ms-dhoni-2005-770x435.jpg?impolicy=website&width=770&height=431"
  },
  {
    user_id: 104,
    user_name: "Yuvraj Singh",
    user_role: "Batsman All-rounder",
    user_pic: "https://images.moneycontrol.com/static-mcnews/2019/01/ms-dhoni-2005-770x435.jpg?impolicy=website&width=770&height=431"
  },
  {
    user_id: 105,
    user_name: "Sachin Tendulkar",
    user_role: "Batsman",
    user_pic: "https://images.moneycontrol.com/static-mcnews/2019/01/ms-dhoni-2005-770x435.jpg?impolicy=website&width=770&height=431"
  },
]

function App() {
  return (
    <div>
      {/* Components Rendering */}
      <Header/>
      <User
        user_data = {USER_DATA}
      />
    </div>
  )
}

export default App
