import Footer from "./component/Footer"
import Navbar from "./component/Navbar"
import Card from "./component/Card"

function App() {
  return (
    <>
      <Navbar/>
      <div className="cards">
      <Card title="card 1" description="thisi is first card"/>
      <Card title="card 2" description="thisi is second card"/>
      <Card title="card 3" description="thisi is third card"/>
      <Card title="card 4" description="thisi is fourth card"/>
      <Card title="card 5" description="thisi is fifth card"/>
      <Card title="card 6" description="thisi is sixth card"/>

      </div>
     
      <Footer/>
    </>
  )
}

export default App
