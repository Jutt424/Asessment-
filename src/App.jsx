import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Home, Form, List } from './components';
import { Provider } from 'react-redux';
import store from './store/store';
function App() {


  return (
    <>
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/form" element={<Form />} />
              <Route path="/list" element={<List />} />
            </Routes>
          </div>
        </Router>
      </Provider>
    </>
  )
}

export default App
