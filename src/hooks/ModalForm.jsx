const ModalForm = ({ title, dataTarget }) => {
  return (
    <div
      className="modal fade modal_listing_detail"
      id={dataTarget}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header d-flex align-items-center justify-content-between">
            <h5 className="modal-title" id="exampleModalLabel">
              {title}
            </h5>
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form action="#!" method="post">
              <input type="hidden" name="_token" />
              <input
                type="hidden"
                name="listing_name"
                value="Saybrook Point Resort & Marina"
              />
              <input
                type="hidden"
                name="listing_slug"
                value="saybrook-point-resort-marina"
              />
              <input type="hidden" name="agent_name" value="Peter Smith" />
              <input
                type="hidden"
                name="agent_email"
                value="customer@gmail.com"
              />
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  type="text"
                  name="phone"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="msg">Message</label>
                <textarea
                  id="msg"
                  name="message"
                  className="form-control"
                  cols="30"
                  rows="10"
                  required
                ></textarea>
              </div>
              <div className="form-group mt-3">
                <button type="submit" className="btn btn-success">
                  {title}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
