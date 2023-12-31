
import './app.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Login from './page/authpage/login';
import Homepage from './page/homepage/homepage'
import Aboutpage from './page/aboutpage/aboutpage';
import Featurepage from './page/featurepage/featurepage';
import Pricepage from './page/pricepage/pricepage';;
import Contactpage from './page/contactpage/contactpage';
import Layout from './component/layout/layout'
import CreateQuestion from './page/createQustion/createQuestion';
import CqDownload from './page/createQustion/download/cq';
function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/feature" element={<Featurepage />} />
          <Route path="/price" element={<Pricepage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/login" element={<Login />} />

          {/* createquestionpage */}
          <Route path="/create_question" element={<CreateQuestion />} />
          <Route path="/cqdownload" element={<CqDownload />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
