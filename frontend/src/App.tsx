import BarChart from "components/barChart";
import DataTable from "components/dataTable";
import DonutChart from "components/donutChart";
import Footer from "components/footer";
import NavBar from "components/navBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Sales Dashboard</h1>
        <div className="row px-3">
              <div className = "col-sm-6">
                <h5 className = "text-center text-secudary">% Sucess</h5>
                <BarChart />
              </div>
              <div className = "col-sm-6">
                <h5 className = "text-center text-secudary">% Sucess</h5>
                <DonutChart />
              </div>
        </div>
        <div className = "py-3 ">
          <h2 className = "text-primary"> All Sales</h2>
        </div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
