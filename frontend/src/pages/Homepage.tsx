import './home.css'

export default function Homepage() {
  return (
    <div>
    
    <main role="main">

      <div className="jumbotron">
        <div className="container">
          <h1 className="display-6">What we Do!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et animi laudantium repudiandae voluptas ipsam? Pariatur nostrum nobis, recusandae corporis iure sunt. Libero aliquid placeat commodi dicta vel illo rerum explicabo. Numquam asperiores, minus culpa aliquid illum praesentium veritatis architecto accusantium dolor, suscipit voluptates, error cum explicabo optio sequi quo! Accusamus.</p>
          <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Customers!</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non fugit, ex animi commodi cum quo dolores ipsa, totam aperiam aliquid atque, deserunt qui nisi magni! </p>
            <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
          </div>
          <div className="col-md-4">
            <h2>Workers!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae minima distinctio ea similique nam. Vitae totam saepe obcaecati ab, nisi, hic magni reprehenderit architecto, corporis aliquid ad eaque praesentium voluptatum! </p>
            <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
          </div>
          <div className="col-md-4">
            <h2>Our Job!</h2>
            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
          </div>
        </div>
        <hr />
      </div> 
    </main>

    <footer className="container">
      <p>&copy; Shine & Clean 2023</p>
      <br />
      <br />
    </footer>
    </div>
  )
}
