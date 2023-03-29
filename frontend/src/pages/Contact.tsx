import './home.css'

export default function Contact() {
  return (
    <div className="container">
        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Contact Us:</h4>
          <form className="needs-validation">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label>First name</label>
                <input type="text" className="form-control" id="firstName" placeholder="" value="" required />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label>Last name</label>
                <input type="text" className="form-control" id="lastName" placeholder="" value="" required />
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label>Email</label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com" />
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="mb-3">
              <label >Message:</label>
              <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
            </div>

            <button className="btn btn-primary btn-lg btn-block" type="submit">Submit</button>
          </form>
          <hr />
        </div>

        <footer className="container">
          <p>&copy; Shine & Clean 2023</p>
          <br />
          <br />
        </footer>
    </div>
  )
}

