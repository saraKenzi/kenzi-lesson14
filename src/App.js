import './App.css';
import AllBooks from './pages/AllBooks';
import { useSelector } from 'react-redux';
import EditBook from './component/EditBook';

function App() {
let selectBookToEdit=useSelector(st=>st.selectBookToEdit);
  return (<>
    <AllBooks />
    {selectBookToEdit&& <EditBook/>}
  </>
  );
}

export default App;
