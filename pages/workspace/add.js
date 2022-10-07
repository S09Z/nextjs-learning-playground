const workspaceAdd = () => {
  return (
    <div className="App container">
      <h1>Workspace information</h1>
      <div className="information">
        <form action="">
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Workspace :
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter Workspace"
            />
          </div>
          <button className="btn btn-success">Add Workspace</button>
        </form>
      </div>
    </div>
  );
};

export default workspaceAdd;
